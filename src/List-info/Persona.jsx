import React from 'react';
import { connect } from 'react-redux';


const Persona =()=>{
    return(
        <>
        <div className='persona_outer'>
            <div className='persona_inner'>
                <div className='persona_img'>

                </div>
                <div className='persona_content'>
                    
                </div>
            </div>
        </div>
        </>
    )
}
const mapstate = (state)=>{
    console.log(state.Ereducer)
    return{
        data:state.Ereducer
    }
}
export default connect(mapstate,null)(Persona)