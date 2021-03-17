import React from 'react';
import '../style/List/List.css'

const List =(props)=>{
    return(
        <div className='list-main'>
            <div className='list-wrapper'>
               <img src={props.imgsrc}/>
              <h2>{props.Name}</h2>
              <h3>{props.Id}</h3>
              <h3>{props.Phone}</h3>
              <h3>{props.Age}</h3>
            </div>
        </div>
    )
}

export default List