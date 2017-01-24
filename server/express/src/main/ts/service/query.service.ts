import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QueryService {
    constructor(private http:Http) {}

    getQuery():Promise<string>
    {
        return this.http.get('rest/getQuery')
            .toPromise()
            .then((response) => response.json())
    }
}