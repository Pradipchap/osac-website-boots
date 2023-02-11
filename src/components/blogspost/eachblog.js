import React from 'react'
import { useState,useEffect } from 'react';
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../config';

export default function Eachblog(props) {
    const [first, setfirst] = useState({})
    const singledocref=doc(db,'repost',props.id);

      useEffect(() => {
        const get=async()=>{
            const docSnap =await getDoc(singledocref)
            if(docSnap.exists()) {
                console.log(docSnap.data());
                setfirst(docSnap.data());
            } else {
                console.log("Document does not exist")
            }
            
        

        }
        get();

        
      }, [])
      
      

    

  return (
    <div className='each'>
        <div className="bl">
            <p>{first.desc}</p>
        </div>
    </div>
  )
}
