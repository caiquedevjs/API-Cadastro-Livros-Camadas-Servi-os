import { AddBookService } from "../service/add_book.service.js";
import { ViewBookService } from "../service/view_books.service.js";
class LibraryController {
    CreateBookController(request, response) {
        const { body } = request;
        
        
        try {
            const addService = new AddBookService();
            addService.add(body);
            response.status(200).json({ message: "Livro adicionado com sucesso!" });
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }

    ViewBookCrontoller(request, response){
        const view_book_controller= new ViewBookService();
        const result =view_book_controller.viewAll();
       
        try{
            response.status(200).json(result);
        }
        catch (error){
            response.status(400).json({error: error.message});
        }
    }
}

export { LibraryController };
