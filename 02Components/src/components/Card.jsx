const Card = () => {
    return(
        <div className="h-screen flex justify-center items-center">
            <div className="shadow-xl bg-gray-900 py-10 px-6 rounded-md w-80 flex flex-col gap-5">
                <img src={'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'} className="rounded-md"/>
                <p className="font-semibold text-white text-[18px]">Head phone</p>
                <p className="font-semibold text-white text-[18px]">Price : 999/-</p>
                <p className="font-semibold text-white text-[18px]">Lorem ipsum dolor sit amet consect adipis elit. Dolorum, atque!</p>
                <button className="px-5 py-2 bg-green-600 text-white text-[18px] font-semibold rounded-md cursor-pointer">Order</button>
            </div>
        </div>
    )
}
export default Card