import Image from "next/image";

function Aboutcomponent() {
    return (
        <main>
            {/* 1st heading div */}
            <div className="text-6xl font-bold text-green-800 flex items-center justify-center pt-8 underline underline-offset-8">
                <h1>About Me</h1>

            </div>
            {/* 2nd imag & contant container */}
            <div className="flex  flex-col md:flex-row py-8  gap-8 md:gap-0 items-center justify-evenly">
                <div className="md:pb-72 lg:pb-0 ">
                    <Image className="rounded-3xl sm:w-[600px] md:w-[280px] lg:w-[450px] " src={"/hkhan.jpg"} height={700} width={450} alt="picture" />
                </div>
                <div className="h-auto w-[460px] sm:w-[600px] md:w-[400px] lg:w-[460px]">
                    <h2 className="text-3xl font-semibold pb-2  text-left">UI/UX Designer & Web Developer</h2>
                    <p className="pb-10 text-left">Passionate about cutting-edge technologies, currently pursuing a Certified Cloud Applied Generative AI Engineering course to specialize in AI and cloud computing. Additionally, dedicated to mastering Typescript for enhanced programming capabilities. Eager to leverage these skills to drive innovation and make a meaningful impact in the tech industry.</p>
                    <div className="flex items-center justify-between  ">
                        <div>
                            <ul className="flex flex-col gap-6 text-md font-semibold text-left">
                                <li><span className="font-bold text-xl">Name: <br /></span> Hasnain Abass</li>
                                <li><span className="font-bold text-xl">Digree: <br /></span> Bs-Computer</li>
                                <li><span className="font-bold text-xl">phone: <br /></span> 0301-2511626</li>
                                <li><span className="font-bold text-xl">Adress: <br /></span>University Road Karachi</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-6 text-md font-semibold text-left">
                                <li><span className="font-bold text-xl">Birthday: <br /></span> 01 April 1999</li>
                                <li><span className="font-bold text-xl">Experience: <br /></span>2 Year</li>
                                <li><span className="font-bold text-xl">Email: <br /></span>hasnainabass243@gmail.com</li>
                                <li><span className="font-bold text-xl">freelance: <br /></span>Available</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-5 pt-5 pl-16 md:pl-0">
                        <button className="h-10 w-28 text-xl cursor-pointer hover:bg-green-500 hover:text-white text-green-500 border-2 border-green-500 rounded-3xl">Hire Me</button>
                        <button className="h-10 w-36 text-xl cursor-pointer hover:bg-green-500 hover:text-white text-green-500 border-2 border-green-500 rounded-3xl">Learn More</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Aboutcomponent;