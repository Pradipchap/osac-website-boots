import React from "react";
import { useState } from "react";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./config";
import { useEffect } from "react";

export default function Admin() {
  const [postLists, setpostLists] = useState([]);

  const postCollectionRef = collection(db, "blogpost");
  const repostCollectionRef = collection(db, "repost");
  // const docRef = doc(db, "blogpost", "yftq9RGp4jWNSyBZ1D6L");
  const publishpost = async (title, desc, id, name, timestamp, urlimg) => {
    await addDoc(repostCollectionRef, {
      title: title,
      desc: desc,
      id: id,
      name: name,
      timestamp: timestamp,
      urlimg: urlimg,
    });
  };

  const update = (id) => {
    const docRef = doc(db, "blogpost", id);
    updateDoc(docRef, { approvedStatus: true });
  };

  useEffect(() => {
    const getPosts = async () => {
      // let setpostLists=[];
      // let data = await getDocs(postCollectionRef);
      let data = await getDocs(query(postCollectionRef, orderBy("timestamp")));
      setpostLists(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));

      console.log(1);
      // console.log(2);
    };

    getPosts();
  }, []);

  return (
    <div className="admin">
      <div className="blogs-admin">
        {postLists.map((element) => {
          return (
            // <div className="blogss" key={element.id}>
            //   <h1>{element.title}</h1>
            //   <h1>{element.desc}</h1>
            //   <h1>{element.id}</h1>
            //   <h1>{element.author.name}</h1>
            //   <button

            //     onClick={() => {
            //       publishpost(
            //         element.title,
            //         element.desc,
            //         element.id,

            //         element.author.name,
            //         element.timestamp,
            //         element.urlimg,
            //       );
            //       update(element.id);

            //     }}
            //     disabled={element.approvedStatus === true ? true : false}

            //   >
            //     <h1>
            //       {element.approvedStatus === true ? "approved" : "publish"}
            //     </h1>
            //   </button>
            // </div>

            <div className="carda">
              {/* <div className="carda-img"> */}
              <img className="carda-img" src={element.urlimg} alt="" />

              {/* </div> */}
              <div className="carda-info">
                <p className="text-title">{element.title} </p>
                <p className="text-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum odio quis mollitia exercitationem quam eveniet
                  similique dolores odit molestiae delectus.
                  {element.desc.slice(0, 70)}
                </p>
              </div>
              <div className="carda-footer">
                <div className="text-title">{element.name}</div>
                <button
                className='text=title'
                  onClick={() => {
                    publishpost(
                      element.title,
                      element.desc,
                      element.id,

                      element.author.name,
                      element.timestamp,
                      element.urlimg
                    );
                    update(element.id);
                  }}
                  disabled={element.approvedStatus === true ? true : false}
                >
                  <h1>
                    {element.approvedStatus === true ? "approved" : "publish"}
                  </h1>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
