import LibraryRepository from "../repository/libery.repostiory.js";

class AddBookService {
    constructor() {
        this.libraryRepository = new LibraryRepository();
    }

    add(date) {
        this.libraryRepository.addBook(date);
        return true; // Livro adicionado com sucesso
    }
}



export { AddBookService};
