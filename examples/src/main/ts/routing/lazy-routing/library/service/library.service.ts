import { Injectable } from "@angular/core";
import { Book } from "../../../../coreLibraryModule/model/book";

@Injectable()
export class LibraryService {
    loadBooks():Promise<Book[]>{
        return Promise.resolve([
            {id: "1", name: "book1", description: "description1"},
            {id: "2", name: "book2", description: "description2"},
            {id: "3", name: "book3", description: "description3"},
            {id: "4", name: "book4", description: "description4"},
        ])
    }
}