export function Skills({skills}:{skills: string[]}){
    return <>
    <div className="md:mt-30 mt-10">
        <h1 className="md:text-4xl text-2xl font-bold">Skills</h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 justify-items-center gap-6 mt-4">
            <SkillsFeild feild="Frontend"/>
            <SkillsFeild feild="Backend"/>
            <SkillsFeild feild="Database"/>
        </div>
    </div>
    </>
}


function SkillsFeild({feild}:{feild: string}){
    return <>
    <div className="flex flex-col gap-4 p-3 h-50 w-50 rounded-xl bg-zinc-800">
        <div className="text-bold text-zinc-400 text-xl">{feild}</div>
        <div className="grid grid-cols-3 lg:gap-4 gap-2">
            <div className="bg-zinc-900 p-3 rounded-lg my-auto mx-auto">Demo</div>
            <div className="bg-zinc-900 p-3 rounded-lg my-auto mx-auto">Demo</div>
            <div className="bg-zinc-900 p-3 rounded-lg my-auto mx-auto">Demo</div>
            <div className="bg-zinc-900 p-3 rounded-lg my-auto mx-auto">Demo</div>
            <div className="bg-zinc-900 p-3 rounded-lg my-auto mx-auto">Demo</div>
        </div>
    </div>
    </>
}