import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class DashboardService {
        
    apiURL: string = environment.apiUrl + 'api/admin/';
    constructor(private http: HttpClient) { }

    getDashFigures(): Observable<any> {
        return this.http.get(this.apiURL + 'dashboard').map((res: Response) =>
            res            
        );
    }
}
