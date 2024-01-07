import {useState,useCallback} from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%*-_+=[]{}~`"

      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%*-_+=[]{}~`"

      for(let i=1;i<=Array.length;i++){
          let char=Math.floor(Math.random()*str.length+1)
          pass=str.charAt(char)
      }

      setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const handleChange = (e) => setLength(e.target.value)

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
       <div className="w-full max-w-md 
         shadow-md rounded-lg px-8 py-10 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center text-xl">Password Generator</h1>  
          <div className="flex shadow rounded-lg overflow-hidden mb-4 justify-center align-middle">        
            <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 my-1 rounded-lg"
            placeholder="password"
            />
            <button
            className="outline-none bg-blue-700 text-white py-0.5"
            >copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
             <div className="flex items-center gap-x-1">
                <input
                type="range"
                min={6}
                max={100}
                className="cursor-pointer"

                value={length}
                onChange={handleChange}
                />
                <label>Length: {length}</label>
             </div>
             <div className="flex item-center gap-x-1">
                <input type="text" />
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
