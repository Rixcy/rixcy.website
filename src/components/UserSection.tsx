import React from 'react'
import { UserCard } from './UserCard'

export const UserSection = () => (
    <section className="pt-20 pb-48 mx-auto flex w-full lg:w-1/3">
        <div className="relative flex flex-col break-words mb-6 shadow-lg rounded-lg bg-white p-5 lg:p-10">
            <div className="flex flex-wrap justify-center text-center mb-12">
                <h2 className="text-4xl font-semibold">Who's behind Rixcy?</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-700">
                    Rixcy is a project/set of tools created by Rick Booth mainly for personal use,
                    but with the potential for other user's to be able to use and adapt from.
                </p>
            </div>
            <div className="flex justify-center">
                <UserCard />
            </div>
        </div>
    </section>
)
