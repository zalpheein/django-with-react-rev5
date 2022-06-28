import React from "react";


function Post({post}) {
    const {id, caption, location, photo } = post;
    return <div>
                <img src={photo} alt= {caption} style={{ width: "80px"}} />
                {caption}, {location}
            </div>;

}


export default Post;

