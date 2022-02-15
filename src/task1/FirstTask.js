import React, {useState} from 'react'

function FirstTask() {
  const [name, setName] = useState("Peter")
  const [age, setAge] = useState(20)
  const [address, setAddress] = useState("Hamburgstraße 123a, 22123 Hamburg")

  return (
    <>
      <h2>Aufgabe 1</h2>
      {/* insert created Component/s here */}
    </>
  )
}

export default FirstTask
