export function Contact() {
    return (
        <div className="fixed right-4 md:right-10 bottom-20 mb-5 flex flex-col items-end z-[99999] bg-zinc-950 rounded-xl lg:w-[550px] w-96">
            <div className='flex flex-col md:p-4 p-2 w-full'>
                <div className='text-3xl font-bold text-center mb-5'>Contact</div>
                <div className='flex flex-col p-3 gap-2'>
                    <div className='text-md'>Enter your Email:</div>
                    <input type="text" placeholder='sahil@gmail.com' name="" id="" className='rounded-md bg-zinc-900 p-2 outline-none'/>
                </div>
                <div className='flex flex-col p-3 gap-2'>
                    <div className='text-md'>Enter your Query:</div>
                    <textarea name="" placeholder='You are awesome' rows={5} id="" className='rounded-md bg-zinc-900 p-2 outline-none'/>
                </div>
                <div className='flex flex-col p-3 gap-2'>
                    <button className='p-2 bg-white text-black rounded-xl font-bold hover:bg-zinc-300'>Send</button>
                </div>
            </div>
        </div>
    );
}
