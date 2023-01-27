import React from "react";
import { blog } from "./data";

const BlogPost = () => {
  return (
    <div id="blog" className="blog section-padding">
      <div className="container">
        <div className="row">
          {blog.map((curElem) => {
            // const [id, images, icon_1, name, icon_2, heading, desc] = curElem;
            return (
              <div className="col-md-6 col-lg-4" key={curElem.id}>
                <div className="blog-post">
                  <img src={curElem.images} alt={curElem.id} />
                  <div>
                    <i class={curElem.icon_1}></i>
                    <span> {curElem.name}</span>
                    <i class={curElem.icon_2}></i>
                    <span>2 AUG, 2018</span>
                    <h4>{curElem.heading}</h4>
                    <p>{curElem.desc}</p>
                    <button className="btn-blog btn-dark">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
