import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react';

const Community = () => {
    const [creations, setCreation] = useState([]);
    const { user } = useUser();
    const fetchCreation = async () => {
        setCreation(dummyPublishedCreationData);

    }
    useEffect(() => {
        if (user) {
            fetchCreation();

        }
    }, [user])
    return (
        <div className='flex-1 h-full flex flex-col gap-4 p-6 '>Creations
            <div className='bg-white h-full w-full rounded-xl overflow-y-scroll' >
                {creations.map((item, index) => (
                    <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3'>
                        <img src={item.content} className='w-full h-full object-cover rounded-lg' />
                        <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
                            <p className='text-sm hidden group-hover:block'>{item.prompt}</p>
                            <div className='flex gap-1 items-center'>
                                <p>{item.likes.length}</p>
                            </div>
                            <Heart className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${item.likes.includes(user.id) ? 'fill-red-500' : 'text-white'}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Community