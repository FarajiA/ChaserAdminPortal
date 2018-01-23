import { Injectable } from '@angular/core';

@Injectable()
export class SearchOptionsService {
    private _options: any[] = [
        { label: 'Username', value: { id: 1, name: 'Username', code: 'username' } },
        { label: 'First Name', value: { id: 2, name: 'First', code: 'firstname' } },
        { label: 'Last Name', value: { id: 3, name: 'Last', code: 'lastname' } },
        { label: 'Email', value: { id: 4, name: 'email', code: 'email' } }
    ];
    constructor() { }

    get SearchOptions(): any {
        return this._options;
    } 

}
