'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const TermsCondition = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='bg-black w-[495px] p-8 rounded-[8px] border border-[#515151]'>
            <span className='text-white text-2xl font-bold'>Accept Terms and Conditions</span>
            <div className='mt-5'>
                <span className='text-[#989898] text-base font-normal'>To proceed, please accept our</span>
                <Link href={''} className="text-[#17C654] underline ml-2 text-base font-semibold">Terms and Conditions</Link>
            </div>
            <div className="flex items-center mt-2 gap-2">
                <div
                    className={`w-6 h-6 rounded-full border-2 flex border-[#676767] items-center justify-center cursor-pointer transition-colors duration-300 ${isChecked ? '' : 'border-gray-400 bg-transparent'}`}
                    onClick={() => setIsChecked(!isChecked)}
                >
                    {isChecked && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=""
                            stroke="#17C654" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-check">
                            <path d="M20 6 9 17l-5-5" /></svg>
                    )}
                </div>
                <span className='text-[#989898] text-base font-normal'>I’ve read and accept the Terms and Conditions</span>
            </div>
            <button className={`mt-8 ml-80 rounded-[7px] px-6 py-3 text-white text-base font-bold ${isChecked ? 'bg-[#17C654]' : 'bg-[#00350F]'}`}>
                Accept
            </button>
        </div>
    )
}

export default TermsCondition
