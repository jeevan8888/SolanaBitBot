import { InfoIcon } from 'lucide-react'
import React from 'react'

const InfoCard = () => {
    return (
        <div className='bg-black w-[495px] p-5 rounded-[8px] border border-[#515151]'>
            <div className='flex items-center gap-2'>
                <InfoIcon size={24} color="white" alt="image"/>
                <span className='text-white text-2xl font-bold'>Take Profits</span>
            </div>
            <p className='text-base font-medium mt-5  text-white'>Take profit is a term used ot refer to TP/SL, which stands for Take Profit and Stop Loss, enables you to establish predefined thresholds for realizing profits or limiting losses on your open positions.</p>

        </div>
    )
}

export default InfoCard