import React from "react";

function Book(props){
    return (
        <div className="col mb-4">
            <section className="card">
                <img src={props.Book.image} className="card-img-top" alt={props.Book.imageAlt}/>
                <summary className="card-body">
                    <h5 className="Book-title card-title">{props.Book.title}</h5>
                    <p className="Book-description card-text"> {props.Book.description}</p>
                    {props.Book.deployLink &&
                        <a href={props.Book.deployLink} className="btn btn-primary">{props.Book.deployLinkText}</a>
                    }
                    <a href={props.Book.repoLink} className="btn btn-secondar">{props.Book.repoLinkText}</a>
                </summary>
            </section>
        </div>
    );
}

export {
    Book
};