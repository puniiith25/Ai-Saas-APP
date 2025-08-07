import React, { useState } from 'react'
import { Edit, Sparkle } from 'lucide-react'

const WriteArticle = () => {
    const articleLenght = [
        { length: 800, text: 'Short (500-800 Words)' },
        { length: 1200, text: 'Short (800-1200 Words)' },
        { length: 1600, text: 'Long (1200++ Words)' },
    ]

    const [selectedLenght, setSelectedLenght] = useState(articleLenght[0]);
    const [input, setinput] = useState('');
    const onSubmitHandler = async (e) => {
        e.preventDefault();

    }
    return (
        <div className='h-full  overflow-y-auto  p-6 flex items-start flex-wrap gap-4 text-slate-700'>
            {/* left col */}
            <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
                <div className='flex items-center gap-3'>
                    <Sparkle className='w-6 text-[#4A7AFF]' />
                    <h1 className='text-xl font-semibold'>Article Configuration</h1>
                </div>
                <p className='mt-6 text-sm font-medium'>Article topic</p>
                <input type="text" onChange={(e) => setinput(e.target.value)} value={input} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='The future of artificial intelligence is...' required />
                <p className='mt-4 text-sm font-medium'>Article lenght</p>
                <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
                    {articleLenght.map((item, index) => (
                        <span onClick={() => setSelectedLenght(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedLenght.text === item.text ? 'bg-blue-50 text-blue-700' : 'text-gray-500 border-gray-300'}`} key={index}>{item.text}</span>
                    ))}
                </div>
                <br />
                <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer ' ><Edit className='w-5' /> Generate article</button>


            </form>
            {/* Right col */}
            <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[600px]'>
                <div className='flex items-center gap-3'>
                    <Edit className='w-5 h-5 text-[#4A7AFF]' />
                    <h1 className='text-xl font-semibolds'>Generated Article</h1>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <div className='text-sm flex flex-col items-center gap-5
                    text-gray-400'>
                        <Edit className='w-5 h-5 ' />
                        <p>Enter a topic and click "Generate article" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteArticle