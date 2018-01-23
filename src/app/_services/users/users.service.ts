import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { QueryBuilderService } from '../queryBuilder.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
        
    apiURL: string = environment.apiUrl + 'api/accounts/';

    private _users: any[];
    constructor(private http: HttpClient, private queryService: QueryBuilderService) { } 

    userIdentity(): Observable<any> {
        return this.http.get(this.apiURL + 'user');
    };

    get Users(): any {
        return this._users;
    }

    set Users(value: any) {
        this._users = value;
    }

    getUsers(query: any): Observable<any> {
        let queryString = this.queryService.buildQuery(query);
        return this.http.get(this.apiURL + 'users/' + query.first + '/' + query.rows + queryString)
            .map((res: Response) => res)
            .do(data => this.Users = data);
    }   

    queryUsers(query: string, parameters): Observable<any> {
        return this.http.get(this.apiURL + 'users/')
            .map((res: Response) => res)
            .do(data => this.Users = data);
    }

}
