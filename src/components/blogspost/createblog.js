import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

export default function Create(props) {
  const postCollectionRef = collection(db, "blogpost");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  let navigate = useNavigate();
  try {
    var createpost = async () => {
      await addDoc(postCollectionRef, {
        timestamp: serverTimestamp(),
        title,
        desc,
        approvedStatus: false,

        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      navigate("/");
    };
  } catch (err) {
    console.log("the error is" + err);
  }
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
            width: "40rem",
          }}
        >
          <div className="input-group">
            <label className="label">Name</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              cols="45"
              style={{ width: "25rem" }}
              type="email"
              onChange={(event) => {
                settitle(event.target.value);
              }}
            ></input>
            <div></div>
          </div>
          <div className="input-group">
            <label className="label">Content</label>
            <textarea
              autoComplete="off"
              name="Email"
              id="Email"
              rows="30"
              cols="45"
              height="4rem"
              style={{ width: "25rem", height: "25rem" }}
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
