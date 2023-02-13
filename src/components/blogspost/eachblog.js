import React from "react";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config";
import banner3 from '../../banner3.png'
export default function Eachblog(props) {
  const [first, setfirst] = useState({});
  const singledocref = doc(db, "repost", props.id);

  useEffect(() => {
    const get = async () => {
      const docSnap = await getDoc(singledocref);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setfirst(docSnap.data());
      } else {
        console.log("Document does not exist");
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
        <p>{first.urlimg}</p>
        <img src={first.urlimg} class="img-fluid" alt="..."/>
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
        )}
      </div>
    </div>
  );
}
