import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LinkTags = {
    target: '_blank',
    rel: 'noreferrer nofollow',
}

export const UserCard = () => {
    return (
        <div className="w-full lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img
                    alt="..."
                    src="https://avatars2.githubusercontent.com/u/11819124?s=400&u=f473d5a8365842c8ae51c4c0eb69d44eca4b9524&v=4"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                />
                <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Rick Booth</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Head of Front-End Development at{' '}
                        <a href="https://9xb.com" {...LinkTags}>
                            9xb
                        </a>
                    </p>
                    <div className="mt-6">
                        <UserSocial
                            link="https://twitter.com/rixcydev"
                            bg="blue-400"
                            icon={faTwitter}
                        />
                        <UserSocial link="https://github.com/Rixcy" bg="gray-800" icon={faGithub} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export type UserSocialProps = {
    link: string
    bg: string
    icon: any
}

export const UserSocial = (props: UserSocialProps) => {
    const { link, bg, icon } = props
    return (
        <a href={link} {...LinkTags}>
            <button
                className={`bg-${bg} text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1`}
                type="button"
            >
                <FontAwesomeIcon icon={icon} />
            </button>
        </a>
    )
}
