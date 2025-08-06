import React, { useEffect, useState } from 'react'

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Todo: React.FC = () => {
    const [todo, setTodo] = useState<Todo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodo(json));
    }, []);
    return (
        <div>
            {todo && todo.length > 0 && (
                <div className="mb-4 w-full">
                    <div className="text-sm text-gray-600 mb-2">Fetched Todos:</div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {todo.map((item: Todo) => (
                            <div key={item.id} className="p-2 bg-white rounded shadow text-left">
                                <div className="font-semibold text-orange-700">{item.completed}</div>
                                <div className="text-xs text-gray-500">ID: {item.id} | Completed: {item.completed ? 'Yes' : 'No'}</div>
                                <div className="text-xs text-gray-500">ID: {item.title} | Completed: {item.completed ? 'Yes' : 'No'}</div>
                                <div className="text-xs text-gray-500">ID: {item.userId } | Completed: {item.completed ? 'Yes' : 'No'}</div>
                                <div className="text-xs text-gray-500">ID: {item.title} | Completed: {item.completed ? 'Yes' : 'No'}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Todo