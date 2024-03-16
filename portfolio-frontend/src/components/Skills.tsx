import React from 'react';

interface SkillsProps {
    data: { field: string; skill: string[] }[];
}

export function Skills({ data }: SkillsProps) {
    return (
        <div className="md:mt-30 mt-10">
            <h1 className="md:text-4xl text-3xl font-bold">Skills</h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-6 mt-4">
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
        <div className="flex flex-col gap-4 p-3 h-50 w-50 rounded-xl bg-zinc-800">
            <div className="text-bold text-zinc-400 md:text-xl text-lg">{field}</div>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
                {technologies.map((tech, index) => (
                    <div key={index} className="bg-zinc-900 p-3 rounded-lg my-auto mx-auto">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
