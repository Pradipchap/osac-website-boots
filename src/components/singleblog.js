// {load === true ? (
//   <Toploader />
// ) : (
//   <div className="allBlogs">
//     {postLists.map((element) => {
//       return (
//         <div
//           className="carda"
//           onClick={() => {
//             props.set(element.id);
//             see();
//           }}
//         >
//           {/* <div className="carda-img"> */}
//           <img className="carda-img" src={element.urlimg} alt="" />

//           {/* </div> */}
//           <div className="carda-info">
//             <p className="text-title">{element.title} </p>
//             <p className="text-body">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Laborum odio quis mollitia exercitationem quam eveniet
//               similique dolores odit molestiae delectus.
//               {element.desc.slice(0, 70)}
//             </p>
//           </div>
//           <div className="carda-footer">
//             <div className="text-title">{element.name}</div>
//             <div
//               className="text-title"
//               style={{ fontSize: "14px", color: "grey" }}
//             >
//               {" "}
//               -
//               {element.timestamp.toDate().getDate() +
//                 " " +
//                 providedate(element.timestamp.toDate().getMonth()) +
//                 " " +
//                 element.timestamp
//                   .toDate()
//                   .getFullYear()
//                   .toString()
//                   .slice(2)}
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// )

// }
