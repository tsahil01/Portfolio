export function Navbar(){
    return <>
    <div className="p-2 rounded-xl bg-zinc-800 flex flex-row gap-4 drop-shadow-xl justify-center mx-auto">
        <div className="font-bold md:p-2 p-1 text-blue-400">@tsahil01</div>
        <button className="rounded-lg md:p-2 p-1 hover:bg-zinc-900">Home</button>
        <button className="rounded-lg md:p-2 p-1 hover:bg-zinc-900">About</button>
        <button className="rounded-lg md:p-2 p-1 hover:bg-zinc-900">Projects</button>
        <button className="rounded-lg md:p-2 p-1 hover:bg-zinc-900">Contact</button>
    </div>
    </>
}