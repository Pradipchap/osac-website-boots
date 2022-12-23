import React from "react";
import { useState,useEffect } from "react";
import { addDoc, collection,  } from "firebase/firestore";
import { db } from "../config";
import { auth } from "../config";
import {  useNavigate } from "react-router-dom";


export default function Create(props) {
  const postCollectionRef = collection(db, "blogpost");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  let navigate=useNavigate();
  const createpost = async () => {
    await addDoc(postCollectionRef, {
      title,
      desc,
      
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/")
  };
  useEffect(() => {
    if(!props.isAuth){
      navigate("../login");
    }

  }, )
  

  return (
    <>
      <div className="blog">
        <div className="addblog"> addBlog</div>
        <div
          className="publishedBlogs"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="name">
            <input
              type="text"
              onChange={(event) => {
                settitle(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <textarea
              name="blog"
              id="b"
              cols="30"
              rows="10"
              onChange={(event) => {
                setdesc(event.target.value);
              }}
            ></textarea>
          </div>
          <button onClick={createpost}>Submit</button>
        </div>
      </div>
    </>
  );
}
