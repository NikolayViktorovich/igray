"use client"

import { useState } from 'react'

interface AccordionSectionProps {
    title: string
    children: React.ReactNode
}

const AccordionSection = ({ title, children }: AccordionSectionProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-2 border-gray-300 rounded-2xl mb-4 hover:shadow-xl transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-xl font-semibold bg-white rounded-2xl p-4 focus:outline-none"
                style={{ zIndex: 10 }}
            >
                <span className="text-left overflow-wrap break-words">
                    {title}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-500 transform transition-transform duration-300"
                    style={{ width: '24px', height: '24px' }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                        className={isOpen ? 'rotate-90' : 'rotate-0'}
                    />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AccordionSection