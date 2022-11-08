import React, { Component } from 'react'
import pic1 from '../banner1.png';
import pic2 from '../banner2.png';
import pic3 from '../banner3.png';

export default class Events extends Component {
    
  render() {
    const pictures=[
        pic1,
        pic2,
        pic3
    ];
    return (
      <div className='event'>

        <div className='container'>
            {
                pictures.map((src)=>{
                    return(
                        <span className='card' style={{width:"50rem",height:'30rem'}}>
                            <div className='card-body' >
                                <img className="d-block w-50 h-70" src={src} alt="sdf" width="350rem" />
                            </div>
                            <p className='card-text-right' >OSM Pre Event 2022</p>
                        </span>

                    );
                })
            }



        </div>

      </div>
    )
  }
}
