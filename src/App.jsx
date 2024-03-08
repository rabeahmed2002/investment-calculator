import Header from "./components/Header"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

import React, { useState } from 'react'

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const handleChange = (inputIdentifier, newValue) => {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]:value
      };
  })
}

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Results input={userInput}/>
    </>
  )
}

export default App
