import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import './App.css'
import Products from './components/Products'
import User from './components/User'
import Photos from './components/Photos'
import Todo from './components/Todo'

function App() {
  const [activeTab, setActiveTab] = useState('products')

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'products':
        return <Products />
      case 'users':
        return <User />
      case 'photos':
        return <Photos />
      case 'todos':
        return <Todo />
      default:
        return <Products />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img src={reactLogo} className="h-8 w-8" alt="React logo" />
                <span className="ml-2 text-xl font-semibold text-gray-900">React Store</span>
              </div>
              <div className="ml-6 flex space-x-8">
                {[
                  { id: 'products', name: 'Products', icon: '🛍️' },
                  { id: 'users', name: 'Users', icon: '👥' },
                  { id: 'photos', name: 'Photos', icon: '📸' },
                  { id: 'todos', name: 'Todos', icon: '✅' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderActiveComponent()}
      </main>
    </div>
  )
}

export default App
