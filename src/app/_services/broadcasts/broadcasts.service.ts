import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { environment } from '../../../environments/environment';
import { QueryBuilderService } from '../queryBuilder.service';

@Injectable()
export class BroadcastService {

    apiURL: string = environment.apiUrl + 'api/broadcast/';
    private _broadcasters: any[];
    constructor(private http: HttpClient, private queryService: QueryBuilderService) { }


    get Broadcasters(): any {
        return this._broadcasters;
    }

    set Broadcasters(value: any) {
        this._broadcasters = value;
    }

    getBroadcasters(query: any): Observable<any> {
        let queryString = this.queryService.buildQuery(query);
        return this.http.get(this.apiURL + query.first + '/' + query.rows + queryString)
            .map((res: Response) => res)
            .do(data => this.Broadcasters = data);
    }    
}
