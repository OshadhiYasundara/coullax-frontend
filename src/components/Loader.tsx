import React from 'react'

export default function Loader() {
  return (
   <div className="flex items-center justify-center py-20 ">
               <div className="relative flex items-center justify-center w-16 h-16">
                
                 <div className="absolute w-16 h-16 border-4 border-t-custom-green border-custom-text rounded-full animate-spin"></div>
            
                
                 <span className="absolute text-xs font-semibold text-custom-text animate-pulse">
                   Loading
                 </span>
               </div>
             </div>
  )
}
