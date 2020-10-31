import React from "react";

function Sort(props) {
    return (
        <div className="row">
            <p className={props.sort === "name"? "sortThis center-align col offset-s3 s3": "center-align col offset-s3 s3"}>Name {props.sort === "name" && props.direction === "DESC"? "△":"▽"}</p>
            <p className={props.sort === "number"? "sortThis center-align col s3": "center-align col s3"}>Number {props.sort === "number" && props.direction === "DESC"? "△":"▽"}</p>
            <p className={props.sort === "email"? "sortThis center-align col s3": "center-align col s3"}>Email {props.sort === "email" && props.direction === "DESC"? "△":"▽"}</p>
        </div>
    )
}

export default Sort;