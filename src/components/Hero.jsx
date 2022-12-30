export const Hero = () => {
    return(
        <div className="w-full h-screen">

            {/* hero background */}
            <img
                className="w-full h-screen top-0 left-0 object-cover"
                src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
                alt='hero-img'
            />

            {/* layer */}
            <div className="bg-black/30 absolute top-0 lef-0 w-full h-screen"/>

            <div className="absolute top-0 w-full h-screen flex flex-col justify-center text-white">
                <div className="md:left-[10%] max-w-6xl absolute m-auto  p-4">
                    <p>All inclusive</p>
                    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
                        Private Beaches & GetAways
                    </h1>
                    <p className="max-w-xl drop-shadow-2xl py-2 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
                        est, id consequuntur sequi ipsum vitae sit non exercitationem.
                    </p>
                    <button className="bg-white text-black">Reverse Now</button>
                </div>
            </div>

        </div>
    )
}