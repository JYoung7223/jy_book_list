import React from "react";

function Search(props){    
    return (
        <div className="container border">
            <div className="col-12">
                <h3>Book Search</h3>
            </div>
            <div className="col-12">
                <input className="form-control" type="text" placeholder="Title and/or Author"/>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="button" onClick={props.findBooks}>Search <i className="fas fa-search"></i></button>
            </div>
        </div>
    );    
}

export {
    Search
};