import React from 'react'


import { Component } from 'react'


export default class Create extends Component {
  

  
  render() {
    return (
      <>
      <div className="blog">
      <div className="addblog" > addBlog</div>
      <div className="publishedBlogs" style={{display:'flex',flexDirection:'column'}}>
        <div className="name"><input type="text" /></div>
        <div className="input">
          <textarea name="blog" id="b" cols="30" rows="10"></textarea>
        </div>
        <button>Submit</button>
  
      </div>
      </div>
  
      
      </>
    )
  }
}

