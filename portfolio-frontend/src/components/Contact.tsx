export function Contact() {
    return (
        <div className="fixed right-4 md:right-10 bottom-5 mb-5 flex flex-col items-end z-[99999] bg-zinc-950 rounded-2xl lg:w-[550px] w-full/2 border border-blue-700">
                <div className="bg-zinc-800 w-full p-2 py-5 rounded-t-2xl h-full">
                    <div className="text-xl text-center font-bold">Got a query? Just drop it below! 👇</div>
                </div>
            <div className='flex flex-col md:p-4 p-2 w-full'>
                <div className='flex flex-col p-3 gap-2'>
                    <div className='text-sm'>Enter your Email:</div>
                    <input type="text" placeholder='sahil@gmail.com' name="" id="" className='rounded-md bg-zinc-900 p-2 outline-none'/>
                </div>
                <div className='flex flex-col p-3 gap-2'>
                    <div className='text-sm'>Enter your Query:</div>
                    <textarea name="" placeholder='You are awesome' rows={5} id="" className='rounded-md bg-zinc-900 p-2 outline-none'/>
                </div>
                <div className='flex flex-col p-3 gap-2'>
                    <button className='p-2 bg-white text-black rounded-xl font-bold hover:bg-zinc-300'>Send</button>
                </div>
            </div>
        </div>
    );
}
