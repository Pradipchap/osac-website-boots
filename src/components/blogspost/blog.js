import React  from 'react'
import { useState,useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config";

export default function Blog(props) {
    // const [addedBlogs, setaddedBlogs] = useState([        {id:'123',title:'f',desc:'df',name:'234'},
    // {id:'345',title:'f',desc:'df',name:'234'},
    // {id:'345',title:'f',desc:'df',name:'234'}])
    const [postLists, setpostLists] = useState([]);

    const repostCollectionRef = collection(db, "repost");
    // let addedBlogs=[

    //     {id:'123',title:'f',desc:'df',name:'234'},
    //     {id:'345',title:'f',desc:'df',name:'234'},
    //     {id:'345',title:'f',desc:'df',name:'234'}

    // ];
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(repostCollectionRef);
        setpostLists(data.docs.map((docs) => ({ ...docs.data(), id: docs.id, })));
      };
  
      getPosts();
    });
    
  return (
    <div className="allBlog">
    <div className="allBlogs">

      {/* {postLists.map((element) => {
        return (
          <div>
            <button onClick={null}>Publish</button>
            <h1>{element.title}</h1>
            <h1>{element.desc}</h1>
            <h1>{element.id}</h1>
          </div>
        );
      })} */}
{
    

    postLists.map((element)=>{
        return(
            <div className="blogcard">
                <h1 className='published-title'>{element.title}</h1>
                <h2>{element.desc}</h2>

                <h2>by{element.author}</h2>
                
            </div>
            
        )
    })
}
    </div>
  </div>
  )
}
