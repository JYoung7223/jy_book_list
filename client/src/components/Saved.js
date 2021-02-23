import React, { useEffect, useReducer } from "react";
import { API } from "../api/API";

function Saved(){ 
    const initBookState = [];
    function setBookState(currentBookState, change){
        switch(change.request){
            case "update-list":
                return {
                    myList: change.value.data
                };
        }
        return {...currentBookState};
    }
    const [bookState, updateBookState] = useReducer(setBookState, initBookState);

    useEffect(async()=>{
        // Get list of books from DB
        console.log("UseEffect");
        const bookList = await API.getMyBooks();
        console.log(`BookList:${JSON.stringify(bookList)}`);
        updateBookState(
            {
                request:"update-list", 
                value:bookList                
            }
        );
    },[]);

    const handleRemove = async (event)=>{
        event.preventDefault();
        console.log(event.target);
        await API.deleteBook(event.target.value);
        const bookList = await API.getMyBooks();
        updateBookState(
            {
                value:bookList, 
                request:"update-list"
            }
        );
        console.log(`Removed Book:${event.target.id}`);
    };

    return (
        <div className="container border">
            <div className="col-12">
                <h3>My Saved Books</h3>
            </div>
            <div className="books row my-3">
                {bookState.myList && bookState.myList.map((book, index)=>{
                    return(
                        <div className="book col-4 mb-4" key={index}>
                            <section className="card">
                                {book.image ? (<img src={book.image} className="card-img-top" alt={book.title}/>) : (<p></p>)}
                                <summary className="card-body">
                                    <h5 className="book-title card-title">{book.title}</h5>
                                    <p className="book-author card-text"> {book.authors}</p>
                                    <p className="book-description card-text"> {book.description}</p>
                                    <button className="btn btn-primary mx-3" value={book._id} type="button" onClick={handleRemove}>Remove From My List <i className="fas fa-minus"></i></button>
                                    {book.link ? (
                                        <a href={book.link} className="btn btn-secondary mx-3">Get More Info <i className="fas fa-info"></i></a>
                                    ) : ''}
                                </summary>
                            </section>
                        </div>
                    );
                })}
            </div>          
        </div>
    );    
}

export {
    Saved
};