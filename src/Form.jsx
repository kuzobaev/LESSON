import React, { useState } from 'react'

function Form() {

  const [inputValue,setInputValue] = useState('')

    const inputHandler = (event) =>  {
        setInputValue(event.target.value)
        console.log(event.target.value)
    }




  return (
    <form>
        <input onChange={inputHandler} value={inputValue} type="text" />
        <button>Add </button>
    </form>
  )
}

export default Form