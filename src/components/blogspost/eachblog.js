import React from "react";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config";

export default function Eachblog(props) {
  const [first, setfirst] = useState({});
  const singledocref = doc(
    db,
    "repost",
    props.id === "a" ? localStorage.getItem("blogid") : props.id
  );

  useEffect(() => {
    const get = async () => {
      const docSnap = await getDoc(singledocref);
      if (docSnap.exists()) {
        console.log("document exists");

        setfirst(docSnap.data());
      } else {
        console.log("Document does not exist");
        console.log(props.id);
      }
    };
    get();
  }, []);
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

  return (
    <div className="each">
      <div className="bl">
        {/* <p>{first.title}</p>
        <img src={first.urlimg} className="img-fluid" alt="..."/>
        <p>{first.desc}</p>
        {first.timestamp !== undefined && (
          <div className="namedate">
            <p className="name">{first.name}</p>
            <p className="date">
              {first.timestamp.toDate().getDate() +
                " " +
                providedate(first.timestamp.toDate().getMonth()) +
                " " +
                first.timestamp.toDate().getFullYear().toString().slice(2)}
            </p>
          </div>
        )} */}
        {first.desc !== undefined && (
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <div className="mainheading">
              <div className="row post-top-meta">
                <div className="col-md-2">
                  <a href="author.html">
                    <img
                      className="author-thumb"
                      src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                      alt="Sal"
                    />
                  </a>
                </div>
                <div className="col-md-10">
                  <p className="link-dark">{first.name}</p>
                  <span className="author-description">.</span>
                  <span className="post-date">
                    {first.timestamp !== undefined &&
                      first.timestamp.toDate().getDate() +
                        " " +
                        providedate(first.timestamp.toDate().getMonth()) +
                        " " +
                        first.timestamp
                          .toDate()
                          .getFullYear()
                          .toString()
                          .slice(2)}
                  </span>
                  <span className="dot"></span>
                  <span className="post-read">
                    {Math.ceil((first.desc.length * 0.0458) / 60)} min read
                  </span>
                </div>
              </div>

              <h1 className="posttitle">{first.title}</h1>
            </div>

            <img className="featured-image img-fluid" src={first.urlimg} alt="z" />

            <div className="article-post">
              <pre
                className="blogd"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2em",
                }}
              >
                {first.desc}
              </pre>
              <blockquote style={{ wordWrap: "break-word" }}>
                If you want to write a blog about different programs conducted
                by Open Source Ascol Circle Please Sign in with your account .
              </blockquote>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
