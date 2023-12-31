import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


export default function Home() {

  const [words, setWords] = useState("");

  return (
    <div>
        <Nav isUserLoggedIn={true} />
        <div className="content">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>
        </div>
        <input type="text" value={words} onChange={(e) => {
          console.log(words);
          setWords(e.target.value)}}/>
        <Footer />
    </div>
  )
}
