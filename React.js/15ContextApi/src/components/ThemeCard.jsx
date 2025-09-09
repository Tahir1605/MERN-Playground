import { UseThemeContext } from "../context/ThemeContext"


const ThemeCard = () => {
    const {isDark} = UseThemeContext();
    return(
        <div className={`flex justify-center items-center flex-col gap-3 w-[350px] px-10 py-5 rounded-md shadow-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} `}>
            <img src={`https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D`} className="rounded-md" alt="" />
            <h2 className={`text-2xl font-semibold ${isDark ? 'text-white': 'text-black'}`}>Wireless Headphone</h2>
            <h2 className={`text-2xl font-semibold ${isDark ? 'text-white': 'text-black'}`}>Price : 1000/-</h2>
            <p className={`text-[16px] font-semibold ${isDark ? 'text-white': 'text-black'}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis totam.</p>
            <button className={`px-5 cursor-pointer py-2 rounded-md font-semibold ${isDark ? 'bg-green-500 text-white' : 'bg-amber-500 text-black'}`} >Add to Cart</button>
        </div>
    )
}

export default ThemeCard