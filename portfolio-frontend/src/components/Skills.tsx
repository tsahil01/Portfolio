import React from 'react';

interface SkillsProps {
    data: { field: string; skill: string[] }[];
}

export function Skills({ data }: SkillsProps) {
    return (
        <div className="md:mt-30 mt-10">
            <h1 className="md:text-4xl text-3xl font-bold">I&apos;m <span className='text-blue-400'>comfortable</span> with: </h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-items-center gap-3 mt-4 mb-3">
                {data.map((skill, index) => (
                    <SkillsField key={index} field={skill.field} technologies={skill.skill} />
                ))}
            </div>
        </div>
    );
}

interface SkillsFieldProps {
    field: string;
    technologies: string[];
}

function SkillsField({ field, technologies }: SkillsFieldProps) {
    return (
        <div className='flex flex-col bg-zinc-800 border border-blue-950 gap-2 py-4 px-3 w-full rounded-xl transform translate-y-2 hover:translate-y-0 duration-500 ease-in-out hover:shadow-xl'>
            <div className='font-bold text-zinc-400 md:text-xl text-xl mb-4'>{field}</div>
            <div className='grid lg:grid-cols-3 md:grid-row-2 gap-2 my-auto'>
                {technologies.map((tech, index)=>(
                    <div key={index} className='border border-slate-600 p-3 md:text-sm text-xs font-semibold w-auto rounded-lg'>{tech}</div>
                ))}
            </div>
        </div>
    );
}

export default Skills;

