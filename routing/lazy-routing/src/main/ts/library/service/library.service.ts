import { Injectable } from "@angular/core";
import {Book} from "../model/book";

@Injectable()
export class LibraryService {
    loadBooks():Promise<Book[]>{
        return Promise.resolve([new Book(1, "book1"), new Book(2, "book2")])
    }
}