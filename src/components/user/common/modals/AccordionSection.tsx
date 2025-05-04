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
                className="w-full flex justify-between items-center text-xl font-semibold bg-white rounded-2xl p-4 sm:p-3 focus:outline-none cursor-pointer min-h-[64px] touch-action-manipulation"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${title}`}
                style={{ zIndex: 10 }}
            >
                <span className="text-left break-words text-xl sm:text-lg">
                    {title}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                    style={{ width: '24px', height: '24px', minWidth: '24px', minHeight: '24px', flexShrink: 0 }}
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-[100rem]' : 'max-h-0 opacity-0'}`}
                id={`accordion-content-${title}`}
            >
                <div className="p-4 sm:p-3 overflow-y-auto max-h-[80vh] sm:max-h-[70vh]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AccordionSection