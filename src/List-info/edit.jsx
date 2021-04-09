import React from 'react'

const Edit = (props)=>{
    console.log(props.Id)
   return(
       <div className='edit-outer' style={{
           position:'sticky',
           top:'500px'
       }} >
           <form>
               <input type='text'/>
           </form>
       </div>
   )
}

export default Edit