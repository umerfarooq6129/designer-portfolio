import React from 'react';

const projects = [
    {
        image: 'images/project1.svg',
        title: 'Brand Journey Improvements',
        client: 'Organc',
        work: 'Branding'
    },
    {
        image: 'images/project2.svg',
        title: 'Brand Grouping',
        client: 'FR',
        work: 'Branding'
    },
    {
        image: 'images/project3.svg',
        title: 'NFT Glimps',
        client: 'Rumanda',
        work: 'NFT Design'
    },
    {
        image: 'images/project4.svg',
        title: 'Brand Suggestions',
        client: 'T3d',
        work: 'NFT logo'
    },
];

const Project = () => {
    return (
        <>
            <div className="px-4 md:px-[10%] py-20">
                <div className='w-full flex flex-col items-center justify-center gap-12'>
                    <h1 className='custom-heading text-4xl md:text-5xl text-white text-center relative'>My Projects Highlight
                        <div
                            className="absolute w-[450px] h-[300px] top-[10%] right-0 translate-x-[30%] translate-y-[-50%] bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('images/vector 8.png')" }}
                        ></div>
                    </h1>
                    <button className='custom-font flex gap-3 items-center text-white border-2 border-[#FF9142] px-6 md:px-8 py-3 rounded-[50px]'>
                        Explore More <img src="images/arrow.svg" width={20} alt="" />
                    </button>
                </div>

                <div className="projects grid grid-cols-1 md:grid-cols-2 w-full gap-10 pt-24">
                    {projects.map((project, index) => (
                        <div className="project w-full" key={index}>
                            <img src={project.image} width={'100%'} height={50} alt="" />
                            <div className="project-info pt-5 text-white">
                                <h3 className="project-title custom-heading text-white text-2xl pb-4">{project.title}</h3>
                                <p className="project-client text-bold">
                                    <span className='text-[#606060] pr-4'>Client: </span> {project.client}
                                </p>
                                <p className="project-work text-bold">
                                    <span className='text-[#606060] pr-4'>Work: </span> {project.work}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
