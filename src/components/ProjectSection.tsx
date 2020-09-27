import React from 'react'

export const ProjectSection = () => {
    return (
        <div className="container mx-auto px-4 lg:pt-24 pb-12">
            <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold text-white">Projects</h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                        Below are a few of the projects I'm actively working on.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <h6 className="text-xl mt-5 font-semibold text-white">nextjs-starter</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                        I've built a nextjs-starter which can be used to quickstart projects with
                        TypeScript, StoryBook, TailwindCSS configuration and more.
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <h5 className="text-xl mt-5 font-semibold text-white">components</h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        The components package (@rixcy/components) is a collection of
                        React/TypeScript components built using TailwindCSS. Built with best
                        practices in mind.
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                    <h5 className="text-xl mt-5 font-semibold text-white">rickbooth.me</h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        I'm currently working on a rebuild for the rickbooth.me website, moving away
                        from GatsbyJS to a NextJS project using TypeScript and TailwindCSS.
                    </p>
                </div>
            </div>
        </div>
    )
}
