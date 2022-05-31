import React from "react";
import Blog from "./Blog";

const Lists = ({blogs}) => {
    return (
        <div className="row">
            {blogs.map(x => <Blog key={x.id} blog={x}/>)}
        </div>
    );
}

export default Lists;