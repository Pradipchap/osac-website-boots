import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Create(props) {
  const [img, setimg] = useState(null);

  const storage = getStorage();

  var fileItem;
  var fileName;
  function getimg(e) {
    fileItem = e.target.files[0];

    fileName = fileItem.name;
  }
  const uploadfile = () => {
    const spaceRef = ref(storage, "images/" + fileName);
    console.log(fileItem);
    uploadBytes(spaceRef, fileItem).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then(async (url) => {
        setimg(url);

        try {
          var createpost = async () => {
            await addDoc(postCollectionRef, {
              urlimg: url,
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
        createpost();
        //  var geturl=()=>{
        //   return url;
        //  }
      });
    });
  };

  const postCollectionRef = collection(db, "blogpost");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  let navigate = useNavigate();

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

            // height: "40rem",
            // width: "40rem",
          }}
        >
          <div className="input-group">
            <label className="label">Blog Title</label>
            <input
              autoComplete="off"
              required="true"
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

            {/* <div
              className="pic"
              style={{
                height: "10rem",
                width: "10rem",
                backgroundColor: "red",
              }}
            >
              <img src={null} alt="ad" />
            </div> */}

            <input
            className="file-input"
              type="file"
              onChange={(event) => {
                getimg(event);
              }}
            />
          </div>

          <button
            className="btn"
            onClick={() => {
              // uploadfile.createpost();
              uploadfile();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
