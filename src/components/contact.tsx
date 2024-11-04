
function Contactcomponent(){
    return(
        <main className="text-center pt-5">
            <h1 className="text-7xl font-bold text-green-500 underline underline-offset-auto">Contact</h1>
            <p className="text-xl pt-5 font-bold">Feel free to reach out to me at anytime.</p>
            <form>
                <div className="flex gap-4 items-center justify-center pt-4">
                    <input className="h-10 w-56 border-2 hover:border-green-500  rounded-3xl pl-4" type="text" placeholder="Your Name" />
                    <input className="h-10 w-56 border-2  hover:border-green-500 rounded-3xl pl-4" type="text"  placeholder="Your E-mail"/>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center pt-4 pb-8">
                   <input className="h-10 w-[470px] border-2  hover:border-green-500 rounded-3xl pl-4" type="text" placeholder="Subject"/>
                    <textarea className="h-40 w-[470px] border-2  hover:border-green-500 rounded-3xl pl-4 pt-2" name="text" id="#" placeholder="Message"></textarea>
                    <button className="h-10 w-40 border-2 hover:border-green-500  rounded-3xl text-xl font-semibold cursor-pointer hover:bg-green-500 hover:text-white " >Send Message</button>
                </div>
            </form>
        </main>
    )
}

export default Contactcomponent;