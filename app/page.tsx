import React from 'react'
import Hello from '../components/hello';

const Home = () => {
  console.log('Home page rendered!');
  return (
    <main>
      <div className="underline">Welcome to Next.js!</div>
      <Hello />
    </main>
  )
}

export default Home