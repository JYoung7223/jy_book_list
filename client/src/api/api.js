const googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q="
const API = {
  async findBooks(data) {
    let res;
    try {
      res = await fetch(`${googleBooksAPI}${data.search}`);
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json;
  },
  async getMyBooks() {
    const res = await fetch("/api/books/", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },
  async deleteBook(data) {
    const res = await fetch(`/api/books/${data.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  }
};
