import React from 'react'
import { CardProps } from '@/interfaces'
const Card: React.FC<CardProps> = ({ content, title }) => {
    return (
        <div>
            <div className='border rounded-lg shadow p-4 bg-white max-w-md '>

                <h2 className='text-xl font-semibold mb-2 text-blue-800'>{title}</h2>
                <p className='text-gray-700'>{content}</p>

            </div>
        </div>
    )
}

export default Card