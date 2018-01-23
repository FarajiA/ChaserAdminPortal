import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { environment } from '../../../environments/environment';
import { QueryBuilderService } from '../queryBuilder.service';

@Injectable()
export class OnlineService {

    apiURL: string = environment.apiUrl + 'api/admin/';
    private _users: any[];
    constructor(private http: HttpClient, private queryService: QueryBuilderService) { }

    get UsersOnline(): any {
        return this._users;
    }

    set UsersOnline(value: any) {
        this._users = value;
    }

    getUsersOnline(query: any): Observable<any> {
        let queryString = this.queryService.buildQuery(query);
        return this.http.get(this.apiURL + 'online/' + query.first + '/' + query.rows + queryString)
            .map((res: Response) => res)
            .do(data => this.UsersOnline = data);
    }
   
}
