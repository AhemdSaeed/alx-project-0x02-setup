import React from 'react'
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';
const about = () => {
  return (
    <div>
      <Header/>
      <main className="p-6 space-y-4 text-center">
        <h1 className="text-2xl font-bold mb-4">This is the About Page</h1>

        <div className="flex justify-center gap-4 flex-wrap">
        <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
        <Button size="large" shape="rounded-full">Large Rounded-full</Button>
        </div>
      </main>
    </div>
  )
}

export default about