import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")
  return (
      <>
      <div className= "w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <h1 className="text-gray-800 flex flex-wrap font-serif p-5 text-4xl  justify-center top-10">Background Color Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={() => setColor("white")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{backgroundColor: "white"}}
            >White</button>
            <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{backgroundColor: "lavender"}}
            >lavender</button>
            <button
            onClick={() => setColor("aqua")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{backgroundColor: "aqua"}}
            >Aqua</button>
            <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "olive"}}
            >Olive</button>
            <button
            onClick={() => setColor("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "black"}}
            >Black</button>
            <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{backgroundColor: "pink"}}
            >Pink</button>
            <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full text-black shadow-lg"
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "orange"}}
            >Orange</button>
            <button
            onClick={() => setColor("turquoise")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor: "turquoise"}}
            >Turquoise</button>
          </div>
        </div>
      </div>
      </>
  )
}

export default App
