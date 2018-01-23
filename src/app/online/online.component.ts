import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { OnlineService } from '../_services/online/online.service';
import { SearchOptionsService } from '../_services/searchOptions.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

    onlineUsers: any = [];
    userFilter: string;
    filterOptions: SelectItem[];
    selectedFilter: any;
    currentEvent: any = {};

    constructor(private onlineService: OnlineService, private searchOptions: SearchOptionsService) {
        this.onlineUsers.config = {};
    }

    ngOnInit() {
        this.filterOptions = this.searchOptions.SearchOptions;
        this.selectedFilter = this.filterOptions[0].value.code;
    }

    private setupComponent() {
        this.onlineUsers = this.onlineService.UsersOnline;
        this.onlineUsers.config = {};
        this.onlineUsers.config.sortFirst = true;
        this.onlineUsers.config.sortLast = true;
        this.onlineUsers.config.sortUsername = true;
        this.onlineUsers.config.sortEmail = true;
        this.onlineUsers.config.sortDate = true;
        this.onlineUsers.loading = false;
        this.onlineUsers.config.rowsPerPage = [5, 10, 15, 20];
        this.onlineUsers.config.paginator = this.onlineUsers.total > 20;
    }

    performFilter() {
        let event = this.currentEvent;
        event.filterBy = this.selectedFilter || this.selectedFilter.code;
        event.filter = this.userFilter;
        this.lazyLoad(event);
    }
    
    lazyLoad(event) {
        event.filterBy = this.selectedFilter || this.selectedFilter.code;
        event.filter = this.userFilter || null;
        this.currentEvent = event;
        this.onlineService.getUsersOnline(event).subscribe(data =>
            this.setupComponent()
        );
    }
}
