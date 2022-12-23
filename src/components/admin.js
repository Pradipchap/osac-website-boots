import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection,addDoc } from "firebase/firestore";
import { db } from "./config";



export default function Admin() {
  const [postLists, setpostLists] = useState([]);
  const postCollectionRef = collection(db, "blogpost");
  const repostCollectionRef = collection(db, "repost");
  const publishpost = async (title,desc,id,name) => {
    await addDoc(repostCollectionRef, {

      title:title,
      desc:desc,
      id:id,
      name:name
     
      
      
    });
  
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setpostLists(data.docs.map((docs) => ({ ...docs.data(), id: docs.id, })));
    };

    getPosts();
  });
  

  

  return (
    <div className="admin">
      <div className="blogs-admin">
        {postLists.map((element) => {
          return (
            <div className="blogss">
             
              <h1>{element.title}</h1>
              <h1>{element.desc}</h1>
              <h1>{element.id}</h1>
              <h1>{element.author.name}</h1>
              <button onClick={()=>publishpost(element.title,element.desc,element.id,element.author.name)}><h1>Publish</h1></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
