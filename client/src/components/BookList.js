import React, { useReducer } from "react";
import {Book} from "./Book";
import BookList from "../init/Books.json";

function Books(){
    const initBooks = BookList || [
        {
            image: "",
            imageAlt: "",
            title: "",
            description:"",
            link: "",
            linkText:""
        },
    ];

    function changeBooks(currentBooks, change){
        return {...currentBooks, change};
    }

    const [BooksData, setBooksData] = useReducer(changeBooks, initBooks);

    return (        
        <div className="Books row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {BooksData.map((Book)=>{
                return(
                    <Book key={Book.key} Book={Book}/>
                );
            })}
        </div>
    );
}

export {
    Books
};