const Footer = () => {
    return(
        <div className="bg-gray-900 flex justify-between items-center px-4 py-2">
            <div className="text-sm p-5 text-white w-1/2">
                <h1 className="text-2xl font-semibold my-4">Let's Talk</h1>
                <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus minima et maiores repudiandae, quibusdam error asperiores doloremque quos quia quasi doloribus obcaecati corporis? Libero recusandae eum exercitationem ea rem.</p>
                <button className="bg-green-500 cursor-pointer px-4 py-1.5 rounded-md my-4">Tell us about your project</button>
            </div>
            <div className="w-1/2 p-5 flex flex-col gap-5 text-white text-xl font-semibold">
                <ul className="flex gap-4">
                    <li className="text-blue-600 font-bold">Email </li>
                    <li>5566tahirul@gmail.com</li>
                </ul>
                <ul className="flex gap-4">
                    <li className="text-blue-600 font-bold">Phone </li>
                    <li>9647938735</li>
                </ul>
                <ul className="flex gap-4">
                    <li className="text-blue-600 font-bold">Address </li>
                    <li>Memari, Sultanpur, Purba Bardhaman</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer