import logo from './logo.svg'


function App() {
  return (
    <div className="App">
      <div className=" flex flex-col min-h-screen w-screen justify-center items-center" >
        <div>
          <h1 className="text-3xl text-gray-700" >React Tailwindcss Starter</h1>
          <div className="mt-8 max-w-screen-sm " >
            <img className="animate-spin" src={logo} alt="" srcset="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
