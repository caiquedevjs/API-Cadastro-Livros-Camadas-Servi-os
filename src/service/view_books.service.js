import  LibraryRepository  from "../repository/libery.repostiory.js";



class ViewBookService {
    constructor() {
        this.libraryRepository = new LibraryRepository();
    }

    viewAll() {
        return this.libraryRepository.getAllBooks();
    }
}

export { ViewBookService};