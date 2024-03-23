import React from 'react';
import Image from 'next/image'

interface ProjectProps {
    projectName: string;
    projectImgUrl: string;
    projectDescription: string;
    projectUrl?: string;
}

interface ProjectsProps {
    projects: ProjectProps[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <div className="md:mt-30 mt-10">
            <h1 className="md:text-4xl text-3xl font-bold">Some cool Projects:</h1>
            <div className="mt-4 md:px-5 mb-3">
                {projects.map((project, key) => (
                    <a href={project.projectUrl} key={key} target='_blank'>
                        <div className='mt-5 lg:w-2/3 mx-auto transform translate-y-2 hover:translate-y-0 duration-500 ease-in-out hover:shadow-xl'>
                            <Project data={project} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

function Project({ data }: { data: ProjectProps }) {
    return (
        <div className='flex flex-col bg-zinc-800 rounded-xl pb-4 justify-center overflow-hidden'>
            <div className='w-full h-full overflow-hidden flex justify-center items-center'>
                {data.projectImgUrl.length > 0 && (
                    <Image className='w-full max-h-full object-cover rounded-xl overflow-hidden' layout='responsive' width={100} height={50} src={data.projectImgUrl} alt="" />
                )}
            </div>
            <div className='mt-7 font-bold mx-auto md:text-2xl text-xl'>{data.projectName}</div>
            <div className='mt-1 p-3 text-zinc-400'>{data.projectDescription}</div>
        </div>
    );
}
