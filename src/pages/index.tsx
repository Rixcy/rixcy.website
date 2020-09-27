import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import { Divider } from '../components/Divider'
import { Hero } from '../components/Hero'
import { IntroCard } from '../components/IntroCard'
import { ProjectSection } from '../components/ProjectSection'
import { UserSection } from '../components/UserSection'
import { SimpleFooter } from '@rixcy/components'

export default function Home() {
    return (
        <div>
            <Head>
                <title>rixcy.website</title>
            </Head>

            <main>
                <Hero />
                <section className="bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <IntroCard
                                cardProps={{ className: 'pt-9 lg:pt-12' }}
                                iconColour="gray-700"
                                iconProps={{ icon: faReact }}
                                title="Built using modern tools"
                                content="All of the Rixcy projects are built using best in class tools such as React, TypeScript, TailwindCSS and more."
                            />

                            <IntroCard
                                iconColour="gray-700"
                                iconProps={{ icon: faGithub }}
                                title="Open source"
                                content="The code in Rixcy projects is licensed under the MIT license which is a permissive free software license. Stored on Github and easily accessible."
                            />

                            <IntroCard
                                cardProps={{ className: 'pt-6' }}
                                iconColour="gray-700"
                                iconProps={{ icon: faRocket }}
                                title="Performant"
                                content="Rixcy projects are built with best practices in mind to make sure your projects can score high on lighthouse scores and other performance metrics."
                            />
                        </div>
                    </div>

                    <UserSection />
                </section>

                <section className="pb-20 relative block bg-gray-900">
                    <Divider colour="gray-900" />
                    <ProjectSection />
                    <SimpleFooter />
                </section>
            </main>
        </div>
    )
}
