import React, { useRef, useReducer } from "react";
import { API } from "../api/API";

function Search(){ 
    const bookRef = useRef();
    const initBookState = [];
    function setBookState(currentBookState, change){
        switch(change.request){
            case "update-search":
                return {
                    ...currentBookState, 
                    searchList: change.value
                };
            case "add-book":
                const bookList = currentBookState.myList || [];                
                return {
                        ...currentBookState,
                    myList: [...bookList, change.value]
                };
        }
        return {...currentBookState};
    }
    const [bookState, updateBookState] = useReducer(setBookState, initBookState);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        // perfomr book search
        if(bookRef.current.value){
            let bookList = await API.findBooks(bookRef.current.value);
            // store results in state
            updateBookState(
                {
                    request: "update-search", 
                    value: bookList.data.items
                }
            );
            // console.log(`Updated Context:${bookState}`);
        }
    };

    const handleAdd = async (event)=>{
        event.preventDefault();
        const bookId = event.target.value;
        // find and add book
        if(bookRef.current.value){
            const bookToAdd = bookState.searchList.find(book => book.id === bookId);
            let bookSaved = await API.addBook({
                id: bookToAdd.id,
                title: bookToAdd.volumeInfo.title,
                authors: bookToAdd.volumeInfo.authors,
                description: bookToAdd.volumeInfo.description,
                image: bookToAdd.volumeInfo.imageLinks.thumbnail || "",
                link: bookToAdd.volumeInfo.infoLink
            });
            // store results in state
            updateBookState(
                {
                    request: "add-book", 
                    value: bookToAdd
                }
            );
            console.log(`Book Saved:${bookSaved}`);
        }
        window.location = "/saved";
    };

    return (
        <div className="container border">
            <div className="col-12">
                <h3>Book Search</h3>
            </div>
            <form className="form=group mt-2" onSubmit={handleSubmit}>
                <div className="col-12">
                    <input className="form-control" type="text" ref={bookRef} placeholder="Title and/or Author"/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Search <i className="fas fa-search"></i></button>
                </div>
            </form>
            <div className="books row my-3">
                {bookState.searchList && bookState.searchList.map((book, index)=>{
                    return(
                        <div className="book col-4 mb-4" key={index}>
                            <section className="card">
                                {book.volumeInfo.imageLinks ? (<img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt={book.volumeInfo.title}/>) : (<p></p>)}
                                <summary className="card-body">
                                    <h5 className="book-title card-title">{book.volumeInfo.title}</h5>
                                    <p className="book-description card-text">BY: {book.volumeInfo.authors}</p>
                                    <p className="book-description card-text"> {book.volumeInfo.description}</p>
                                    <button className="btn btn-primary mx-3" value={book.id} type="button" onClick={handleAdd}>Add To My List <i className="fas fa-plus"></i></button>
                                    {book.volumeInfo.infoLink &&
                                        <a href={book.volumeInfo.infoLink} className="btn btn-secondary mx-3">Get More Info <i className="fas fa-info"></i></a>
                                    }
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
    Search
};