import React, { createContext, useReducer, useContext } from "react";

const BookContext = createContext({
    myList: [],
    searchList: [],
});

const { Provider } = BookContext;

function bookReducer(bookState, bookAction) {
    switch(bookAction.request){
        case "update-search":
            return [...bookState, 
                {
                    searchList: bookAction.value 
                }
            ];
        default: return bookState;
    }
}

function BookProvider({ value=[], ...props }){
    const [bookState, updateBookState] = useReducer(bookReducer, []);
    return <Provider value={[bookState, updateBookState]} {...props} />;
}

function useBookContext() {return useContext(BookContext);}

export {BookProvider, useBookContext};