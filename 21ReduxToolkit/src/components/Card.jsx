import { useSelector } from "react-redux"
const Card = () => {
    const theme = useSelector((state) => state.theme.value);
    return(
        <div className={`px-12 py-6 w-[30%] flex flex-col justify-center  rounded-md gap-4 ${theme ? 'bg-gray-900':'bg-gray-100'}`}>
            <img src={'https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'} alt="Headphone"
            className="w-52 rounded-md text-center" 
            />
            <h1 className={`text-xl font-semibold ${theme ? 'text-white' : 'text-black'}`}>Headphone</h1>
            <h1 className={`text-xl font-semibold ${theme ? 'text-white' : 'text-black'}`}>999/-</h1>
            <p className={`font-semibold ${theme ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipisici elit. Archi similique recus </p>
            <button className="px-4 py-1.5 rounded-md bg-amber-500 cursor-pointer font-semibold">Order</button>
        </div>
    )
}
export default Card