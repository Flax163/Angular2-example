import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../model/book";

@Injectable()
export class BookService {
    load():Observable<Book[]>
    {
        return Observable.from([
            [{id: "1", name: "name", description: "description"},
                {id: "2", name: "name2", description: "description2"},
                {id: "3", name: "name3", description: "description3"}]
        ]);
    }
}
