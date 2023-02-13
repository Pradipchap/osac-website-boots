import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../config";
import {  useNavigate } from "react-router-dom";
import banner3 from "../../banner3.png";
import Toploader from "../toploader";

export default function Blog(props) {
  const [load, setload] = useState(false);
  props.set("a");

  const navigate = useNavigate();

  const see = () => {
    navigate("/eachblog");
  };
  const providedate = (x) => {
    switch (x) {
      case 0:
        return "Jan";

      case 1:
        return "Feb";

      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";

      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";

      default:
        break;
    }
  };

  const [postLists, setpostLists] = useState([]);

  const repostCollectionRef = collection(db, "repost");

  useEffect(() => {
    setload(true);
    const getPosts = async () => {
      const data = await getDocs(
        query(repostCollectionRef, orderBy("timestamp"))
      );
      setload(false)
      setpostLists(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
      console.log("fetching from database");
    };
    setTimeout(getPosts ,1500);

    
    console.log(1);
  }, []);

  return (
    <div className="allBlog" >
      {load === true ? (
  <Toploader />
) : (
  <div className="allBlogs">
      {
          
          postLists.map((element) => {
            return (
              <div
                className="blogcard"
                key={element.id}
                onClick={() => {
                  props.set(element.id);
                  see();
                }}
              >
                <div className="cardbc">
                  <div className="imgdiv">
                   {element.urlimg!==null&& <img src={element.urlimg} class="img-fluid" alt="..." />}
                  </div>
                  <div className="exceptimg">
                    <h2>{element.title}</h2>
                    <p className="info">
                      {element.desc.slice(0, 150)} . . . . . . . . . . . . . . .
                      .
                    </p>
                    <div className="namedate">
                      <p className="name">{element.name}</p>
                      <p className="date">
                        {element.timestamp.toDate().getDate() +
                          " " +
                          providedate(element.timestamp.toDate().getMonth()) +
                          " " +
                          element.timestamp
                            .toDate()
                            .getFullYear()
                            .toString()
                            .slice(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
}
        
        
        
      </div>
)
}
      
    </div>
  );
}
