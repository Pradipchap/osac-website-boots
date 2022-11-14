import React, { Component } from "react";
import ascol from "../group.jpeg";
export default class Main extends Component {
  render() {
    return (
      <div className="description">
        <div className="desc-img">
          <img src={ascol} className="group-photo" alt="group " />
        </div>

        <div className="desc-text">
          <p className="about-us">About Us</p>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            dolore minima rerum, tempora aperiam aut minus ipsum vero deserunt.
            Commodi quas voluptate eos libero unde odit nam quam! Deleniti sunt
            tempore esse amet alias ut molestias veniam repudiandae facilis quo
            commodi sapiente eos tenetur neque incidunt accusamus reiciendis,
            fuga ipsam itaque enim voluptates recusandae necessitatibus?
            Asperiores enim voluptatem veritatis deserunt consequatur dolores
            commodi quaerat, maiores recusandae nobis autem veniam eligendi
            optio vero esse dolorem consectetur praesentium. Mollitia neque
            facere dolores ad ea facilis modi vitae quidem laborum ullam
            eligendi voluptate illum, sunt excepturi, nihil libero architecto
            sequi totam. Ex odio possimus quae eaque fugiat nesciunt natus,
            minima adipisci doloribus nulla explicabo recusandae vero corrupti
            veritatis architecto, debitis inventore illum! Minima ut quidem
            vero, doloremque natus veniam atque quas unde voluptate!
          </p>
          <div className="button">
            <p className="btn-name">Join us</p>
          </div>
        </div>
      </div>
    );
  }
}
