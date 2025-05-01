

const Header = () => {
    return (
        <>

            <header
                className="flex md:flex-row flex-col justify-between items-center px-5 py-3 border-b-1 border-zinc-100"
            >

               <div className="flex justify-between items-center w-full md:w-auto">

               <h2 className="cal-sans text-4xl">
                    <span className="text-amber-400">blink</span>
                    <span className="text-green-500">it</span>
                </h2>

                <i className="bi bi-person-fill px-3 py-2 bg-zinc-100 rounded-full text-2xl flex md:hidden">
                    

                </i>

               </div>
                <div className="hidden md:block">
                    <h3 className="font-bold text-md">
                        Delivery in 8 minutes
                    </h3>
                    <p className="text-sm text-zinc-400">
                        Narela, Delhi - 110040
                    </p>
                </div>

                <div className="px-4 py-2 rounded-lg bg-zinc-100 flex items-center text-zinc-700 border border-zinc-200 w-full md:w-130 mt-3 md:mt-0">
                    <div className="bi bi-search text-zinc-400 mr-5 w-1/8"></div>
                    <input
                        type="text"
                        placeholder='Search "Chocolate"'
                        className="outline-0 w-7/8"
                    />
                </div>

                <div className="hidden md:flex gap-8 items-center">

                    <button
                        className="px-8 py-1 border-2 cursor-pointer border-zinc-200 rounded-lg text-lg text-zinc-600 hover:text-white hover:border-amber-400 hover:bg-amber-400 hover:scale-95 duration-150 ease-in-out"
                    >
                        Login
                    </button>

                    <button
                        className="px-8 py-1 border-2 cursor-pointer rounded-lg text-lg text-white border-amber-400 bg-amber-400 hover:scale-95 duration-150 ease-in-out hover:bg-amber-500"
                    >

                        <i className="bi bi-bag mr-2"></i>

                        My Cart
                    </button>

                </div>

            </header>

        </>
    )
}

export default Header