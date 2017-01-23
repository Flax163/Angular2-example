import { BookDto } from "../dto/book.dto";
import { Subject }    from 'rxjs/Subject';

export class BookService {

    private booksSource = new Subject<BookDto[]>();

    books = this.booksSource.asObservable();

    nextBooks(books:BookDto[]){
        this.booksSource.next(books);
    }

    public loadBooks():Promise<BookDto[]> {
        return Promise.resolve([new BookDto(1, "book1", "description1"),
            new BookDto(2, "book2", "description2")]);
    }
}