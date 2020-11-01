import React from "react";

function Sort(props) {
    return (
        <div className="row">
            <p className={props.sort === "fullname"? "sortThis center-align clickMe col offset-s3 s3": "center-align clickMe col offset-s3 s3"} name="fullname" onClick={props.handleSortChange}>Name {props.sort === "fullname" && props.direction === "DESC"? "△":"▽"}</p>
            <p className={props.sort === "phone"? "sortThis center-align clickMe col s3": "center-align clickMe col s3"} name="phone" onClick={props.handleSortChange}>Number {props.sort === "phone" && props.direction === "DESC"? "△":"▽"}</p>
            <p className={props.sort === "email"? "sortThis center-align clickMe col s3": "center-align clickMe col s3"} name="email" onClick={props.handleSortChange}>Email {props.sort === "email" && props.direction === "DESC"? "△":"▽"}</p>
        </div>
    )
}

export default Sort;