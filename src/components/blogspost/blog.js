import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config";

// import Eachblog from "./eachblog";


export default function Blog() {
  // const [blog, setblog] = useState({})
  // const passblog=({element})=>{
  //   setblog({element});


  // }

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
      setpostLists(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };

    getPosts();
  });
  
 

  return (
    <div className="allBlog">
    <div className="allBlogs">

      {postLists.map((element) => {
        return (
          <div className="blogcard" 
          // onClick={passblog({element})}
          key={element.id}
          
          >
            <h1 className="published-title">{element.title}</h1>
            <h2>{element.desc}</h2>

            <h2>by{element.author}</h2>
            <button>View</button>
          </div>
        );
      })}
    </div>
  </div>

  );
}
