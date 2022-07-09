// import { useAuth } from '@/hooks/auth'
import Button from '@/components/Elements/Button'
import React from 'react'

function Careers() {
    // const { user } = useAuth({ middleware: 'guest' })
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl  font-light">
                <div className="px-4 sm:px-6 lg:px-8 flex items-center flex-col">
                    <h1 className="text-3xl font-bold md:mt-8">
                        Join the Team
                    </h1>
                    <p className="text-center my-1 max-w-md">
                        <b className="font-bold text-lg">WebSite.com</b> is on a
                        mission to deliver affordable style to every home, and
                        we need a talented team on our side. Are you ready to
                        take the next step in your career?
                    </p>

                    <img
                        className="w-full my-10"
                        alt="image"
                        src="https://assets.rugimg.com/rugs_com/jobs/Tucson_office.jpg"
                    />
                    <hr className="w-full h-1 bg-palette-back my-6" />

                    <div className="mx-1 md:mx-16 lg:mx-24">
                        <h3 className="text-2xl font-bold text-center mt-8 mb-4 md:text-left">
                            Paid Social Media Specialist
                        </h3>
                        <p className="my-1">
                            The Paid Social Media Specialist role requires a
                            combination of analytical, creative and
                            communication skills. The candidate should have
                            experience and knowledge running paid Pinterest,
                            Facebook, and Instagram campaigns. The candidate
                            should have exceptional project management skills
                            and thrive working cross-functionally. You must be
                            able to effectively execute and analyze campaigns,
                            find efficient growth, and explore opportunities.
                            Work with the Creative team to obtain assets while
                            ensuring all content is accurate and follows brand
                            guidelines.
                        </p>
                        <b className="text-lg text-left w-full font-extrabold my-8">
                            Responsibilities:
                        </b>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>
                                Develop, execute, analyze, and manage a
                                portfolio of paid social media campaigns
                            </li>
                            <li>
                                Create Pinterest ad group campaigns to drive
                                conversions and user awareness
                            </li>
                            <li>
                                Refine key messages and strategies that engage
                                current and prospective customers
                            </li>
                            <li>
                                Create clear plans to achieve business goals
                            </li>
                            <li>
                                Continuously measure and optimize campaign
                                performance to achieve objectives
                            </li>
                            <li>
                                Report on every campaign with the ability to
                                analyze performance, identify areas for
                                improvement
                            </li>
                            <li>
                                Monitor daily campaign performance to maximize
                                effectiveness and efficiency
                            </li>
                        </ul>
                        <b className="text-lg text-left w-full font-extrabold my-8">
                            Requirements:
                        </b>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>
                                3+ years of paid social media advertising
                                experience, building high converting funnels,
                                and driving quantifiable results
                            </li>
                            <li>
                                Experience managing paid advertising budgets
                            </li>
                            <li>
                                Expert knowledge of social networking channels
                                including Facebook, Instagram, Pinterest,
                                Twitter, YouTube, Blogs and any other relevant
                                platforms
                            </li>
                            <li>Strong analytical background</li>
                            <li>
                                Experience with Google Analytics and Data Studio
                            </li>
                            <li>
                                Provides recommendations on campaigns, help to
                                develop paid media plans
                            </li>
                            <li>
                                Exhibits solid communication and written skills
                            </li>
                            <li>
                                Exceptional project management skills are
                                essential, along with attention to detail and
                                organizational skills
                            </li>
                        </ul>
                    </div>
                    <Button className="bg-green-500 my-5">Apply</Button>
                    <hr className="w-full h-1 bg-palette-back my-8" />
                </div>
            </div>
        </div>
    )
}

export default Careers
