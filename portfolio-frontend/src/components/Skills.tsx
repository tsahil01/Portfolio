export function Skills({skills}:{skills: string[]}){
    return <>
    <div className="md:mt-30 mt-10">
        <h1 className="md:text-4xl text-2xl font-bold">Skills</h1>
        <div className="grid md:grid-cols-4 grid-cols-3 justify-items-center gap-6 mt-4">
            
            <div className="flex flex-row gap-2 p-3 bg-zinc-800 rounded-lg w-auto">
                <div className="my-auto text-bold text-2xl">N</div>
                <div className="my-auto">Next.js</div>
            </div>
            
        </div>
    </div>
    </>
}