import { Injectable } from '@angular/core';

@Injectable()
export class QueryBuilderService {
    constructor() { }

    buildQuery(query: any) {
        let queryString = "?sortorder=" + (query.sortOrder ? query.sortOrder : "") + "&";
        queryString += "active=" + (query.active ? query.active : "") + "&";
        if (query.sortField)
            queryString += "sortfield=" + query.sortField + "&";
        if (query.filterBy && query.filter)
            queryString += "filterby=" + query.filterBy + "&filter=" + query.filter;  

        return queryString;
    }

}
