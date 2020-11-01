import React from "react";

function ListContact(props) {
    return (
        <li className={props.active? "collection-item avatar active clickMe" : "collection-item avatar clickMe"} name={props.id} onClick={props.handleSelection}>
            <img name={props.id} src={props.picture} alt={props.fullname + " profile picture"} className="circle" />
            <span name={props.id} className="title">{props.fullname}</span>
            <p name={props.id}>{props.phone} <br />{props.email}</p>
        </li>
    )
}

export default ListContact;