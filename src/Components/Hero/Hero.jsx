const Hero = () => {
    return (
        <>
            <div className="md:px-15 px-5 mb-5 md:mb-0">

                <img
                    src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                    className='w-full rounded-2xl'
                />

            </div>

            <div className="md:px-20 px-5 grid grid-cols-1 md:grid-cols-3 gap-5">

                <a href="#">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" className="w-full rounded" />
                </a>
                <a href="#">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" className="w-full rounded" />
                </a>
                <a href="#">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" className="w-full rounded" />
                </a>

            </div>

        </>
    )
}

export default Hero