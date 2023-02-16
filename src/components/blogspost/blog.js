import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../config";
import { useNavigate } from "react-router-dom";

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
      setload(false);
      setpostLists(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
      console.log("fetching from database");
    };
    setTimeout(getPosts, 1000);

    console.log(1);
  }, []);

  return (
    <div className="allBlog ">
      <div className="allblogs">
        <div class="container single" id="b">
          <div class="mainheading">
            <h1 class="sitetitle">OSAC Blogs</h1>
            <p class="lead">Blogs made by OSAC members!</p>
          </div>

          <section class="featured-posts">
            <div class="section-title">
              <h2>
                <span>Featured</span>
              </h2>
            </div>
            {load === true ? (
              <Toploader />
            ) : (
              <div class="card-columns listfeaturedtag">
                {postLists.map((element) => {
                  return (
                    <div
                      class="card"
                      id={element.id}
                      onClick={() => {
                        props.set(element.id);
                        localStorage.setItem("blogid", element.id);
                        see();
                      }}
                    >
                      <div class="row">
                        <div class="col-md-5 wrapthumbnail">
                          <span href="/" style={{ pointerEvents: "none" }}>
                            <div class="thumbnail">
                              <img
                                src={element.urlimg}
                                alt="as"
                                style={{ width: "100%", height: "100%" }}
                              />
                            </div>
                          </span>
                        </div>
                        <div class="col-md-7">
                          <div class="card-block">
                            <h2 class="card-title" style={{ color: "black" }}>
                              {element.title}
                            </h2>
                            <h4 class="card-text">
                              {element.desc.slice(0, 70)}
                            </h4>
                            <div class="metafooter">
                              <div class="wrapfooter">
                                <span class="meta-footer-thumb">
                                  <a href="author.html">
                                    <img
                                      class="author-thumb"
                                      src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                                      alt="Sal"
                                    />
                                  </a>
                                </span>
                                <span class="author-meta">
                                  <span class="post-name">
                                    <a href="author.html">{element.name}</a>
                                  </span>
                                  <br />
                                  <span class="post-date">
                                    {element.timestamp.toDate().getDate() +
                                      " " +
                                      providedate(
                                        element.timestamp.toDate().getMonth()
                                      ) +
                                      " " +
                                      element.timestamp
                                        .toDate()
                                        .getFullYear()
                                        .toString()
                                        .slice(2)}
                                  </span>
                                  <span class="dot"></span>
                                  <span class="post-read">
                                    {Math.ceil(
                                      (element.desc.length * 0.0458) / 60
                                    )}{" "}
                                    min read
                                  </span>
                                </span>
                                <span class="post-read-more">
                                  <a href="post.html" title="Read Story">
                                    <svg
                                      class="svgIcon-use"
                                      width="25"
                                      height="25"
                                      viewbox="0 0 25 25"
                                    >
                                      <path
                                        d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                        fill-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
