import React from "react";

function Search(props) {
    return (
        <div className="input-field">
            <input id="search" type="search" onChange={props.handleInputChange} />
            <i className="material-icons">X</i>
        </div>
    )
}

export default Search;