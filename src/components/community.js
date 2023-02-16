import React, { useState } from "react";




import { useEffect } from "react";

export default function Community() {
  const [indexx, setindexx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (indexx === images.length - 1) setindexx(0);
      else setindexx(indexx + 1);
    }, 5000);
    return () => {
      clearInterval(id);
    };
  });

  const images = [
    {
title:'OSM in Web Apps',
      link: null,
      desc: "",
date:new Date()

    },
    {

      title:'OSM Mapathon',
      link: null,
      desc: "",
date:new Date()
    },
   
  ];

  return <div className="upcomingevents" style={{overflow:'auto',whiteSpace:'nowrap',marginTop:'5rem',marginBottom:'5rem'}}>
   {
    images.map((element)=>{
      return(
        <div class="container ml-1" style={{display:'inline-block',maxWidth:'45rem'}}>
        <section class="mx-auto my-5" style={{maxWidth:' 30rem'}}>
      
          <div class="card" style={{border:'none'}}>
            <div class="card-body d-flex flex-row">
             

              <div>
                <h5 class="card-title font-weight-bold mb-2 text-dark">{element.title}</h5>
                <p class="card-text"><i class="far fa-clock pe-2"></i>{element.date.toString()}</p>
              </div>
            </div>
            <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                alt="Card image cap" />
              <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div class="card-body">
              <p class="card-text collapse" id="collapseContent">
                Recently, we added several exotic new dishes to our restaurant menu. They come from
                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                our juicy meals from around the world.
              </p>
              <div class="d-flex justify-content-between">
                <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse" href="#collapseContent"
                  role="button" aria-expanded="false" aria-controls="collapseContent">Read more</a>
                <div>
                  <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                    data-mdb-placement="top" title="Share this post"></i>
                  <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip" data-mdb-placement="top"
                    title="I like it"></i>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
        // <div className="container ml-1" style={{height:'25rem',maxWidth:'45rem',backgroundColor:'red',marginTop:'2rem',marginRight:'2rem',display:'inline-block'}}></div>
      )
    })
   }



  </div>;
}
