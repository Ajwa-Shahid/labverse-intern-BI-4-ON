import React, { useEffect, useState } from 'react'

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Photos: React.FC = () => {
    const [photo, setPhoto] = useState<Photo[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setPhoto(json));
    }, []);

    return (
        <div>
            {photo && photo.length > 0 && (
                <div className="mb-4 w-full">
                    <div className="text-sm text-gray-600 mb-2">Fetched Photos:</div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {photo.map((item: Photo) => (
                            <div key={item.id} className="p-2 bg-white rounded shadow text-left">
                                <div className="font-semibold text-orange-700">{item.title}</div>
                                <img src={item.url} alt="Image" height={100} width={100} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Photos