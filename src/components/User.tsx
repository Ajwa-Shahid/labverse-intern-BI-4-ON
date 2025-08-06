import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const User: React.FC = () => {
    const [users, setUser] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUser(json));
    }, []);
    return (
        <div>
            {Array.isArray(users) && users.length > 0 && (
                <div className="mb-4 w-full">
                    <div className="text-sm text-gray-600 mb-2">Fetched user:</div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {users.map((user: User) => (
                            <div key={user.id} className="p-2 bg-white rounded shadow text-left">
                                <div className="font-semibold text-orange-700">{user.name}</div>
                                <div className="font-semibold text-orange-700">{user.email}</div>
                                <div className="font-semibold text-orange-700">{user.username}</div>
                                <div className="font-semibold text-orange-700">{user.phone}</div>
                                <div className="font-semibold text-orange-700">{user.website}</div>
                                <div className="font-semibold text-orange-700">{user.company.name}</div>
                                <div className="font-semibold text-orange-700">{user.address.city}</div>
                                <div className="font-semibold text-orange-700">{user.address.geo.lat}</div>
                                <div className="font-semibold text-orange-700">{user.address.geo.lng}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default User