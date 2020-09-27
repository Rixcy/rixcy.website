import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import React from 'react'
import classNames from 'classnames'

export type IntroCardProps = {
    /** props to pass directly through to the parent div */
    cardProps?: React.HTMLAttributes<HTMLDivElement>
    iconColour?: string
    iconProps?: FontAwesomeIconProps
    title: string
    content: React.ReactNode
}

export const IntroCard: React.FC<IntroCardProps> = (props) => {
    const { cardProps, iconColour, iconProps, title, content } = props
    const cardClasses = classNames(cardProps?.className, 'w-full md:w-4/12 px-4 text-center')
    return (
        <div {...cardProps} className={cardClasses}>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                    {iconProps && (
                        <div
                            className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${iconColour}`}
                        >
                            <FontAwesomeIcon {...iconProps} />
                        </div>
                    )}
                    <h6 className="text-xl font-semibold">{title}</h6>
                    <p className="mt-2 mb-4 text-gray-600">{content}</p>
                </div>
            </div>
        </div>
    )
}

IntroCard.defaultProps = {
    iconColour: 'blue-400',
}
