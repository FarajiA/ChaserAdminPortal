import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-userstable',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class DataTableComponent implements OnInit {
    
    @Input() collection: any;
    @Output() lazyEvent: EventEmitter<any> = new EventEmitter<any>();
    
    constructor() { }

    ngOnInit() {

    }

    loadUsers(event: LazyLoadEvent) {
        //this.collection.config.loading = true;
        this.lazyEvent.emit(event);
    }
    
}













