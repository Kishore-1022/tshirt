import React from 'react'
import { useState } from 'react';
import Details from './Details';
import Cart from './Cart'

const Inputs = () => {
    const [name,setName]=useState('');
    const [des,setDes]=useState('');
    const [price,setPrice]=useState('');
    const [l,setL]=useState('');
    const [m,setM]=useState('');
    const [s,setS]=useState('');
    const [details,setDetails]=useState([]);
    console.log(details)
  
    const remover=()=>{
        setName('')
        setDes('')
        setPrice('')
        setL('')
        setM('')
        setS('')
    }
    const addCart=(e,id)=>{
        e.preventDefault();
        const val=e.target.className.includes('l')?'l':e.target.className.includes('md')?'md':'xs'    
        const upd=details.filter(i=>i.id===id)
        if (val==='l'){
            const item={
                id:id,
                name:name,
                des:des,
                price:price,
                l:+l-1,
                m:+m,
                s:+s
            }
            setDetails(prev=>[...prev,item])
        }else if(val==='md'){
            const item={
                id:id,
                name:name,
                des:des,
                price:price,
                l:+l,
                m:+m-1,
                s:+s
            }
            setDetails(prev=>[...prev,item])

        }else{
            const item={
                id:id,
                name:name,
                des:des,
                price:price,
                l:+l,
                m:+m,
                s:+s-1
            }
            setDetails(prev=>[...prev,item])

        }
       
        

    }
    const addHandler=(e)=>{
        e.preventDefault();
        const item={
            id:details.length?details.length+1:1,
            name:name,
            des:des,
            price:price,
            l:l,
            m:m,
            s:s
        }
        setDetails(prev=>[...prev,item])
        remover();
  }
  return (
    < >
        <div className='input form-group'> 
            <div >
                <label htmlFor="">Name</label>
                <input  className='form-control' type="text"  value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input className='form-control' type="text" value={des} onChange={e=>setDes(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input className='form-control' type="number" value={price} onChange={e=>setPrice(e.target.value)}/>

            </div>
            <div className='details form-group'>
                <div>
                   <h4>Quantity Available</h4>
                </div>
                <div className='change'>
                    <div >
                        <label htmlFor="">L</label>
                        <input  className='form-control' type="number" value={l} onChange={e=>setL(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">M</label>
                        <input className='form-control' type="number" value={m} onChange={e=>setM(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">S</label>
                        <input className='form-control' type="number" value={s} onChange={e=>setS(e.target.value)}/>
                    </div> 
                </div>       
            </div>
            <div>
                <button  onClick={addHandler} className='btn btn-primary btn-sm'>Add Product</button>
            </div>
            <div>
                <button className='btn btn-success btn-sm'>cart</button>
            </div>
        </div>
        <Details details={details} addCart={addCart}/>
        <Cart details={details}/>
        
    </>
    
  )
}

export default Inputs
