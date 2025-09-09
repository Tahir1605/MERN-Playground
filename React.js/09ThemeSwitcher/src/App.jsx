import { useEffect, useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("isDark");
    if (saved !== null) {
      setIsDark(JSON.parse(saved));
    }
  }, [])

  const ThemeToggle = () => {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark))
  }, [isDark])

  return (
    <div className={` flex justify-center items-center flex-col gap-5 h-screen ${isDark ? 'bg-gray-700' : 'bg-gray-100'} `}>
      <div>
        <button className={`px-4 py-2 text-xl font-semibold rounded-md cursor-pointer ${isDark ? 'bg-gray-900 text-white' : 'bg-green-700 text-black'}`} onClick={ThemeToggle}>Theme {`${isDark ? 'Dark' : 'Light'}`} </button>
      </div>
      <div className={`flex justify-center items-center flex-col gap-3 w-[350px] px-10 py-5 rounded-md shadow-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} `}>
        <img src={`https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D`} className="rounded-md" alt="" />
        <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Wireless Headphone</h2>
        <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Price : 1000/-</h2>
        <p className={`text-[16px] font-semibold ${isDark ? 'text-white' : 'text-black'}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis totam.</p>
        <button className={`px-5 cursor-pointer py-2 rounded-md font-semibold ${isDark ? 'bg-green-500 text-white' : 'bg-amber-500 text-black'}`} >Add to Cart</button>
      </div>
    </div>
  )
}

export default App