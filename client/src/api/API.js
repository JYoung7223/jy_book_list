import axios from "axios";

const googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q=";

const API = {
  async findBooks(search) {
    console.log(`Searching For Book:${search}`);
    return await axios.get(`${googleBooksAPI}${search}`);
    // console.log(`Finding Book:${search}`);
    // let res;
    // try {
    //   res = await fetch(`${googleBooksAPI}${search}`);
    // } catch (err) {
    //   console.log(err)
    // }
    // const json = await res.json();
    // console.log(`Books found: ${JSON.stringify(json)}`);
    // return json;
  },
  async getMyBooks() {
    console.log(`Getting My Books:`);
    return await axios.get(`/api/books/`);
    // const res = await fetch("/api/books/", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" }
    // });

    // const json = await res.json();

    // return json;
  },
  async addBook(data){
    console.log(`AddingBook:${data}`);
    return await axios.post(`/api/books/`, data);
  },
  async deleteBook(id) {
    console.log(`Deleting Book From My List:${id}`);
    return await axios.delete(`/api/books/${id}`);
    // const res = await fetch(`/api/books/${id}`, {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" }
    // });

    // const json = await res.json();

    // return json;
  }
};

export { API };
