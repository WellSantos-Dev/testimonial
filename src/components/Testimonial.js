import { useState } from 'react'
import 'boxicons'
import people from '../data'

export const Testimonial = () => {
  const [ index, setIndex ] = useState(0)
  const { name, text, image, cargo  } = people[index]
  
  const nextTestimonial = () => {
    setIndex((index) => {
        let newIndex = index + 1;
        return newIndex;
    })
  }


  return (
    <div className="flex flex-col max-w-xs p-12 rounded-3xl bg-white">
      <p className="pb-5">"{text}"</p>
      <div className="flex">
        <div className="w-20 h-20 rounded-full mr-3 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}/>
        <div className="flex justify-center flex-col">
          <h1 className="pb-1 text-1xl font-bold text-gray-900">{name}</h1>
          <p className="text-xs text-gray-500">{cargo}</p>
        </div>
      </div>
    <div className="flex items-center justify-center gap-5 pt-4">
      <box-icon name='chevron-right' className="p-4" onClick={nextTestimonial}></box-icon>
    </div>
    </div>
  )
}