class LibraryRepository {
    static LiberyList = [];

    constructor() {
        if (!LibraryRepository.LiberyList) {
            LibraryRepository.LiberyList = [];
        }
    }

    addBook(book) {
        const isBookAlreadyAdded = LibraryRepository.LiberyList.some(b => b.name === book.name);

        if (isBookAlreadyAdded) {
            throw new Error("Livro já cadastrado!");
        }

        LibraryRepository.LiberyList.push(book);
    }

    getAllBooks() {
        return LibraryRepository.LiberyList;
    }
}

export default LibraryRepository;
