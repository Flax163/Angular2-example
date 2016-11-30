import {BookDto} from "../dto/book.dto";

export class BookService {
    public loadBooks():Promise<BookDto[]> {
        return Promise.resolve([new BookDto("book1", "description1")]);
    }
}