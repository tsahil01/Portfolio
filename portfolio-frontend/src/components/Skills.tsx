import React from 'react';

interface SkillsProps {
    data: { field: string; skill: string[] }[];
}

export function Skills({ data }: SkillsProps) {
    return (
        <div className="md:mt-30 mt-10">
            <h1 className="md:text-4xl text-3xl font-bold">I&apos;m comfortable with</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-6 mt-4 mb-3">
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
        <div className='flex flex-col bg-zinc-800 gap-4 py-4 px-3 w-full rounded-xl transform translate-y-2 hover:translate-y-0 duration-500 ease-in-out hover:shadow-xl'>
            <div className='font-bold text-zinc-400 md:text-xl text-xl'>{field}</div>
            <div className='grid grid-cols-3 gap-3 my-auto'>
                {technologies.map((tech, index)=>(
                    <div key={index} className='bg-zinc-900 p-3 md:text-md text-sm text-center font-semi    bold w-auto rounded-lg'>{tech}</div>
                ))}
            </div>
        </div>
    );
}

export default Skills;

