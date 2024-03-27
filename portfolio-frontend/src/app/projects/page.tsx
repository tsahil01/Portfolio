"use client";

import { projectsAtom } from "@/atoms/projectsAtom";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { RecoilRoot, useRecoilValue } from "recoil";
import Image from 'next/image'

export default function ProjectsPage(){
    return <>
    <div className="flex flex-col md:my-20 my-16 overflow-hidden mb-4 pb-2">
        <ProjectsHeader/>

        <RecoilRoot>
            <Projects/>
        </RecoilRoot>
    </div>
    </>
}


function Projects(){
    const getProjects = useRecoilValue(projectsAtom);
    return <>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mt-20">
            {getProjects.map((project, key) => (
                <div className='flex flex-col bg-zinc-800 rounded-xl pb-4 justify-center overflow-hidden' key={key}>
                        <div className='w-full h-full overflow-hidden flex justify-center items-center'>
                            {project.projectImgUrl.length > 0 && (
                                <Image className='w-full max-h-full object-cover rounded-xl overflow-hidden' layout='responsive' width={100} height={50} src={project.projectImgUrl} alt="" />
                                )}
                        </div>
                        <div className='mt-7 font-bold md:text-2xl text-xl px-4 hover:text-blue-500'>
                            <a href={project.projectUrl} target="_blank">
                                {project.projectName}
                            </a>
                            </div>
                        <div className='mt-1 p-3 text-zinc-400'>{project.projectDescription}</div>
                </div>
            ))}

        </div>
    </>
}

  