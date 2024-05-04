import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [income, setIncome] = useState<number>(500000);
  const [expenditure, setExpenditure] = useState<number>(281000);
  return (
    <>
      <Header income={income} expenditure={expenditure} />
      <Main />
      <Footer />
    </>
  )
}

export default App
