import React, { useEffect, useState } from 'react'

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface NewProduct {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState<NewProduct>({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''
    });

    // Fetch all products
    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    // Create new product
    const createProduct = async (productData: NewProduct) => {
        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) throw new Error('Failed to create product');
            const newProduct = await response.json();
            
            // Add the new product to the list (FakeStore API returns id, we simulate full product)
            const fullNewProduct: Product = {
                ...productData,
                id: newProduct.id,
                rating: { rate: 0, count: 0 }
            };
            setProducts(prev => [...prev, fullNewProduct]);
            setShowAddForm(false);
            resetForm();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create product');
        } finally {
            setLoading(false);
        }
    };

    // Update product
    const updateProduct = async (id: number, productData: NewProduct) => {
        setLoading(true);
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) throw new Error('Failed to update product');
            
            // Update the product in the list
            setProducts(prev => prev.map(product => 
                product.id === id 
                    ? { ...product, ...productData }
                    : product
            ));
            setEditingProduct(null);
            resetForm();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update product');
        } finally {
            setLoading(false);
        }
    };

    // Delete product
    const deleteProduct = async (id: number) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;
        
        setLoading(true);
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Failed to delete product');
            
            setProducts(prev => prev.filter(product => product.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete product');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            price: 0,
            description: '',
            category: '',
            image: ''
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProduct) {
            updateProduct(editingProduct.id, formData);
        } else {
            createProduct(formData);
        }
    };

    const startEdit = (product: Product) => {
        setEditingProduct(product);
        setFormData({
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image
        });
        setShowAddForm(true);
    };

    const cancelEdit = () => {
        setEditingProduct(null);
        setShowAddForm(false);
        resetForm();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Products Management</h1>
                
                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                        {showAddForm ? 'Cancel' : 'Add New Product'}
                    </button>
                    <button
                        onClick={fetchProducts}
                        disabled={loading}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                    >
                        Refresh
                    </button>
                </div>

                {/* Add/Edit Form */}
                {showAddForm && (
                    <div className="bg-white p-6 rounded-xl shadow-lg border mb-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            {editingProduct ? 'Edit Product' : 'Add New Product'}
                        </h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={(e) => setFormData(prev => ({...prev, price: parseFloat(e.target.value)}))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <input
                                    type="text"
                                    value={formData.category}
                                    onChange={(e) => setFormData(prev => ({...prev, category: e.target.value}))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                                <input
                                    type="url"
                                    value={formData.image}
                                    onChange={(e) => setFormData(prev => ({...prev, image: e.target.value}))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows={3}
                                    required
                                />
                            </div>
                            <div className="md:col-span-2 flex gap-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                                >
                                    {editingProduct ? 'Update Product' : 'Create Product'}
                                </button>
                                <button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                {/* Loading Spinner */}
                {loading && (
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-sm">
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-40 object-contain bg-white p-2"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://via.placeholder.com/200x200?text=No+Image';
                                }}
                            />
                        </div>
                        <div className="p-3">
                            <div className="mb-2">
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium capitalize">
                                    {product.category}
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm" title={product.title}>
                                {product.title}
                            </h3>
                            <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-lg font-bold text-green-600">
                                    ${product.price.toFixed(2)}
                                </span>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 text-sm">★</span>
                                    <span className="text-xs text-gray-600 ml-1">
                                        {product.rating.rate} ({product.rating.count})
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => startEdit(product)}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md font-medium transition-colors text-xs"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteProduct(product.id)}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-1.5 px-3 rounded-md font-medium transition-colors text-xs"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {!loading && products.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">📦</div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                    <p className="text-gray-500">Add your first product to get started</p>
                </div>
            )}
        </div>
    );
};

export default Products;
