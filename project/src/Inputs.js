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
    const [finalDetails,setFinalDetails]=useState([])
    const [fixed,setFixed]=useState([])

    const remover=()=>{
        setName('')
        setDes('')
        setPrice('')
        setL('')
        setM('')
        setS('')
    }
    const cancelHandler=()=>{     
        setDetails(fixed)
        setFinalDetails([])
    }
    
   
    const addCart=(e,id)=>{
        e.preventDefault();
        const val=e.target.className.includes('l')?'l':e.target.className.includes('md')?'md':'xs'    
        
        if(val==='l'){
        
            const lar=details.map(i=>{
                if(id===i.id){
                    const updlar={
                        id:i.id,
                        name:i.name,
                        des:i.des,
                        l:+i.fl-i.l+1,
                        price:i.price,
                        size:'l'
                    }
                    return updlar
                }

            })
            const large=lar.filter(i=>i!==undefined)  
            const existingItemIndex = finalDetails.findIndex(item =>item.id === id && item.size===val);
            if (existingItemIndex !== -1) {
               
                setFinalDetails(prev => {
                    const updatedFinalDetails = [...prev];
                    updatedFinalDetails[existingItemIndex] = large[0];
                    return updatedFinalDetails;
                });
            } else {
             
                setFinalDetails(prev => [...prev, large[0]]);
            }
            const upd=details.map(item=>{
                if(item.id===id){
                    return item.l>0 ?{...item,l:+item.l-1}:{...item,l:0}
                }
                return item
            })        
            setDetails(upd)
        }else if(val==='md'){
           
            const med=details.map(i=>{
                if(id===i.id){
                    const updmed={
                        id:i.id,
                        name:i.name,
                        des:i.des,
                        m:+i.fm-i.m+1,
                        price:i.price,
                        size:'md'
                    }
                    return updmed
                }

            })
            const medium=med.filter(i=>i!==undefined)
           
            const existingItemIndex = finalDetails.findIndex(item => item.id === id && item.size===val);
            if (existingItemIndex !== -1) {
               
                setFinalDetails(prev => {
                    const updatedFinalDetails = [...prev];
                    updatedFinalDetails[existingItemIndex] = medium[0];
                    return updatedFinalDetails;
                });
            } else {
             
                setFinalDetails(prev => [...prev, medium[0]]);
            }
            

         
           
            const upd=details.map(item=>{
                if(item.id===id){
                    return item.m>0 ?{...item,m:+item.m-1}:{...item,m:0}
                }
                return item
            }) 
            setDetails(upd)
        }else{
            const smal=details.map(i=>{
                if(id===i.id){
                    const updsmal={
                        id:i.id,
                        name:i.name,
                        des:i.des,
                        s:+i.fs-i.s+1,
                        price:i.price,
                        size:'xs'
                    }
                    return updsmal
                }

            })
            const small=smal.filter(i=>i!==undefined)
           
            const existingItemIndex = finalDetails.findIndex(item => item.id === id && item.size===val);
            if (existingItemIndex !== -1) {
               
                setFinalDetails(prev => {
                    const updatedFinalDetails = [...prev];
                    updatedFinalDetails[existingItemIndex] = small[0];
                    return updatedFinalDetails;
                });
            } else {
             
                setFinalDetails(prev => [...prev, small[0]]);
            }
            
            
            const upd=details.map(item=>{

                if(item.id===id){
                    return item.s>0 ?{...item,s:+item.s-1}:{...item,s:0}
                }
                return item
            })
            setDetails(upd)
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
            fl:l,
            m:m,
            fm:m,
            s:s,
            fs:s
        }
        const itemdetails={
            id:fixed.length?fixed.length+1:1,
            name:name,
            des:des,
            price:price,
            l:l,
            m:m,
            s:s,
            fl:l,
            fm:m,
            fs:s
        }
        setFixed(prev=>[...prev,itemdetails])
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
        <Cart finalDetails={finalDetails} setFinalDetails={setFinalDetails} cancelHandler={cancelHandler} />
        
    </>
    
  )
}

export default Inputs