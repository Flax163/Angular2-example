import { BookDto } from "../dto/book.dto";
import { Subject }    from 'rxjs/Subject';

export class BookService {

    public loadBooks():Promise<BookDto[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve([new BookDto(1, "book1", "description1"),
                new BookDto(2, "book2", "description2")]), 2000);
        });
    }
}