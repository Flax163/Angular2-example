import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class QueryService {
    constructor(private http:Http) {}

    getQuery():Promise<Response>
    {
        return this.http.get('rest/getQuery')
            .toPromise();
    }

    postQuery():Promise<Response>
    {
        return this.http.post('rest/postQuery', {arg1: "value1", arg2: "value2"})
            .toPromise();
    }

    putQuery():Promise<Response>
    {
        return this.http.put('rest/putQuery', {arg1: "value1", arg2: "value2"})
            .toPromise();
    }

    deleteQuery():Promise<Response>
    {
        return this.http.delete('rest/deleteQuery')
            .toPromise();
    }
}