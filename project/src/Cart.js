import React from 'react'

const Cart = (props) => {

  const placeHandler=()=>{
    window.alert('Order Successfully Placed!')
    props.setFinalDetails([])
    
  }

  const total=()=>{
    const totl=props.finalDetails.reduce((tot,item)=>{
      if(item.size==='l'){
        return tot+(item.price*item.l)
      }else if(item.size==='md'){
        return  tot+(item.price*item.m)
      }else{
        return tot+(item.price*item.s)
      }
    },0)
    return totl
  }
 
 
  return (
    <>
    
      <h3 style={{textAlign:'center'}}>Cart</h3>
      {props.finalDetails.map(i=>(
            <ul className='second'>
              
                <li className='li'>  
                   
                    <h6 className='bold'>{i.name}</h6>
                    <h6>{i.size==='l'?'L':i.size==='md'?'M':'S'}</h6>  
                    <h6>{i.price} X {i.m?i.m:i.l?i.l:i.s}</h6>
                    <p>{i.m?i.m*i.price:i.l?i.l*i.price:i.s*i.price}</p>
                   
                </li>
              
            </ul>
              
        ))}
      <div className='total'>
        <b>Total:</b>
        <b > {total()}</b>
      </div>  
      <br />
      <div className='total'>
        <button className='btn btn-primary' onClick={placeHandler}>Place Order</button>
        <button  className='btn btn-danger' onClick={props.cancelHandler}>Cancel</button>
      </div>
     

    </>
  )
}

export default Cart