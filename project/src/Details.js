import React from 'react'

const Details = (props) => {
  return (
    <>  
        {props.details.map(i=>(
            <ul className='second'>
                <li className='li'>
                    <p>{i.id}</p>
                    <p>{i.name}</p>
                    <p>{i.des}</p>
                    <p>{i.price}</p>
                    <button onClick={(e)=>props.addCart(e,i.id)} className='btn l btn-sm btn-secondary'>Large({i.l})</button>
                    <button onClick={(e)=>props.addCart(e,i.id)} className='btn md btn-sm btn-secondary'>Medium({i.m})</button>
                    <button onClick={(e)=>props.addCart(e,i.id)} className='btn xs btn-sm btn-secondary'>Small({i.s})</button>
                </li>
            </ul>
        ))}
      
    </>
  )
}

export default Details
