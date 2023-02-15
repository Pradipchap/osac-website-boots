import React from "react";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config";

export default function Eachblog(props) {
  const [first, setfirst] = useState({});
  const singledocref = doc(db, "repost", props.id==='a'?localStorage.getItem('blogid'):props.id);

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
        {
          first.desc!==undefined&& <div class="col-md-8 col-md-offset-2 col-xs-12">
          <div class="mainheading">
            <div class="row post-top-meta">
              <div class="col-md-2">
                <a href="author.html">
                  <img
                    class="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </a>
              </div>
              <div class="col-md-10">
                <p class="link-dark">{first.name}</p>
                <span class="author-description">
                  .
                </span>
                <span class="post-date">
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
                <span class="dot"></span>
                <span class="post-read">{Math.ceil((first.desc.length*0.0458)/60)} min read</span>
              </div>
            </div>

            <h1 class="posttitle">{first.title}</h1>
          </div>

          <img class="featured-image img-fluid" src={first.urlimg} alt="z" />

          <div class="article-post">
            <p>{first.desc}</p>
            <blockquote>
              Gen-z strategy long tail churn rate seed money channels user
              experience incubator startup partner network low hanging fruit
              direct mailing. Client backing success startup assets responsive
              web design burn rate A/B testing metrics first mover advantage
              conversion.
            </blockquote>
          </div>
        </div>
        }

       
      </div>
    </div>
  );
}
