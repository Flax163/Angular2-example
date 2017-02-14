import { BookDto } from "../dto/book.dto";

export class BookService {
    public loadBooks():Promise<BookDto[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve([
                new BookDto(1, "book1", "description1"),
                new BookDto(2, "book2", "description2"),
                new BookDto(2, "book3", "description3"),
                new BookDto(2, "book4", "description4")
            ]), 2000);
        });
    }
}