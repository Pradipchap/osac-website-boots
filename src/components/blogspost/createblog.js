import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

export default function Create(props) {
  const postCollectionRef = collection(db, "blogpost");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  let navigate = useNavigate();
  const createpost = async () => {
    await addDoc(postCollectionRef, {
      title,
      desc,
      approvedStatus: false,

      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!props.isAuth) {
      navigate("../login");
    }
  });

  return (
    <>
      <div className="blog">

        <div
          className="publishedBlogs"
          style={{
            display: "flex",
            flexDirection: "column",


            height: "40rem",
            width:'40rem'
          }}
        >
          <div class="input-group">
            <label class="label">Name</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              cols='45'
              
            style={{width:'25rem',}}
              type="email"
              onChange={(event) => {
                settitle(event.target.value);
              }}
            ></input>
            <div></div>
          </div>
          <div class="input-group">
            <label class="label">Content</label>
            <textarea
              autocomplete="off"
              name="Email"
              id="Email"
              rows="30"
              cols='45'
              height="4rem"
              style={{width:'25rem',height:'25rem'}}
              className="input"
              type="email"
              onChange={(event) => {
                setdesc(event.target.value);
              }}
            />
            <div></div>
          </div>

          <button className="btn" onClick={createpost}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
