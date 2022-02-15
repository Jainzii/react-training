import React, {useEffect, useState} from 'react'

function SecondTaskFunctionExample() {
  const [text, setText] = useState("")
  const [text2, setText2] = useState("")
  const [count, setCount] = useState(-1)

  useEffect(function countRenders(){
    setCount(count + 1)
  }, [text,text2])

  return (
    <div>
      <div>
        <label>Text: </label>
        <input value={text} onChange={event => setText(event.target.value)}/>
      </div>

      <div>
        <label>Text2: </label>
        <input value={text2} onChange={event => setText2(event.target.value)}/>
      </div>

      <p>Textfelder wurden {count} mal gerendert</p>
    </div>
  )
}

export default SecondTaskFunctionExample