import React, { useState } from 'react'

function Button({add , setadd}) {
 const [plus , setplus] = useState(true)
 
    return (
    <div>
         {/* Function To Change Button */}
         <button  className='btn btn-outline-dark'  onClick={()=> {
          setplus(!plus)
          if(plus){
            setadd(add+1)
          }else{
            setadd(add-1)
          }
         }} >{plus ? 'Add cart' : 'Remove Cart'}</button>


    </div>
  )
}


export default Button;