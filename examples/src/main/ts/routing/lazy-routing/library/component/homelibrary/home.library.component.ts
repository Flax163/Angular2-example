import { Component, OnInit } from "@angular/core";
import { Book } from "../../../../../coreLibraryModule/model/book";
import { LibraryService } from "../../service/library.service";
import { Router } from "@angular/router";

@Component({
    selector: "home-library",
    templateUrl: "home.library.component.html"
})
export class HomeLibraryComponent implements OnInit {
    private $books:Promise<Book>;

    constructor(private libraryService:LibraryService,
                private router:Router) {}

    ngOnInit(): void {
        this.$books = this.libraryService.loadBooks();
    }

    handlerClickItemBook(book: Book)
    {
        this.router.navigate(['library/book', book.id]);
    }
}