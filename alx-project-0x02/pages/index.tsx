import Header from '@/components/layout/Header'
import React from 'react'

const Home = () => {
  return (
    <div>
      
        <title>ALX Project</title>
    <Header/>
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to ALX Project Setup!
        </h1>
      </main>


    </div>
  )
}

export default Home