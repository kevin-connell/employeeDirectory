import React from "react";

function ListContact(props) {
    return (
        <li className={props.active? "collection-item avatar active" : "collection-item avatar"}>
            <img src={props.picture} alt={props.fullname + " profile picture"} className="circle" />
            <span className="title">{props.fullname}</span>
            <p>{props.phone} <br />{props.email}</p>
        </li>
    )
}

export default ListContact;