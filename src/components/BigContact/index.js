import React from "react";

function BigContact(props) {
    return (
        <div className="mainCard collection col s12 m6">
            <img src={props.picture}
                alt={props.fullname + " profile picture"} className="circle center-align bigImage" />
            <h3 className="center-align">{props.fullname}</h3>
            <div className="row center-align">
                <h6>Phone: {props.phone}</h6>
                <button onClick={() => "location.href='tel:" + props.phone + "'"} className="button">Call</button>
            </div>
            <div className="row center-align">
                <h6>Email: {props.email} </h6>
                <button onClick={() => "location.href='mailto:" + props.email + "'"} className="button">Email</button>
            </div>
        </div>
    )
}

export default BigContact;