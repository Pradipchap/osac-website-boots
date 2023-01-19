import React from "react";
import ascol from "../group.jpeg";
import { useState } from "react";
export default function Main(){
  
    const [state, setstate] = useState('false');
const changevalueonScroll=()=>{


const scrollvalue=document.documentElement.scrollTop;

if (scrollvalue>618)
{

setstate('true');
}

else

setstate ('false');
}
window.addEventListener('scroll',changevalueonScroll);
    return (
      <div className="description">
        <div className="desc-img">
          <img src={ascol} className="group-photo" alt="group " />
        </div>

        <div className="desc-text">
          <p className="about-us" style={{color:'white'}}>About Us</p>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            dolore minima rerum, tempora aperiam aut minus ipsum vero deserunt.
            Commodi quas voluptate eos libero unde odit nam quam! Deleniti sunt
            tempore esse amet alias ut molestias veniam repudiandae facilis quo
            commodi sapiente eos tenetur neque incidunt accusamus reiciendis,
            fuga ipsam itaque enim voluptates recusandae necessitatibus?
            Asperiores enim voluptatem  architecto
            sequi totam. Ex odio possimus quae eaque fugiat nesciunt natus,
            minima adipisci doloribus nulla explicabo recusandae vero corrupti
            veritatis architecto, debitis inventore illum! Minima ut quidem
            vero, doloremque natus veniam atque quas unde voluptate!
          </p>
          <div className={`button ${state}`}>
            <p className="btn-name">Join us</p>
          </div>
        </div>
      </div>
    );
  }

