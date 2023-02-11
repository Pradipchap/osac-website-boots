import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../config";
import { useNavigate } from "react-router-dom";



export default function Blog(props) {
  props.set('a')


  const navigate=useNavigate();

const see=()=>{

  navigate('/eachblog')

}

  const [postLists, setpostLists] = useState([]);

  const repostCollectionRef = collection(db, "repost");
 

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(
        query(repostCollectionRef, orderBy("timestamp"))
      );
      setpostLists(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
      console.log("fetching from database");
    };

    getPosts();
    console.log(1);
  }, []);

  // const hello = [
  //   {
  //     id: 2001,
  //     title: "Mackathon on OSM with , Map your community ",
  //     desc: "Using Google Groups to manage  using a free service using a free service using a free service.",
  //     author: "  pradip chapagain",
  //   },
  //   {
  //     id: 2002,
  //     title: "Blog",
  //     desc: "Using Google have a Google account. f working with a generalist tool will usually outweigh the pros of using a free service.",
  //     author: "  pradip chapagain",
  //   },
  // ];

  return (
    <div className="allBlog">
      <div className="allBlogs">
        {postLists.map((element) => {
          return (
            // <div className="blogcard" key={element.id}>
            //   <div className="imgg">
            //     <img src={banner2} alt="" className="blogImg" />
            //   </div>
            //   <div className="rightel">
            //     <h1 className="published-title">{element.title}</h1>
            //     <h2 className="descc">{element.desc}</h2>
            //     <div className="author">
            //       <h2>- by {element.name}</h2>

            //     </div>
            //   </div>
            // </div>
            <div className="blogcard" key={element.id}>
              {/* <Blogcar /> */}
              <div className="cardbc">
                <div className="img"></div>
                <span>{props.name}</span>
                <p className="info">
                  {element.desc}

                </p>

                <button onClick={()=>{
                  props.set(element.id);
                  see()


                  

                }}>see more</button>
                <h2>{element.name}</h2>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
