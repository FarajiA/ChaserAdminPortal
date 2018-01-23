import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { UserService } from '../_services/users/users.service';
import { SearchOptionsService } from '../_services/searchOptions.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: any = [];
    userFilter: string;
    filterOptions: SelectItem[];
    selectedFilter: any;
    currentEvent: any = {};

    constructor(private userService: UserService, private searchOptions: SearchOptionsService) {
      this.users.config = {};
    }

    ngOnInit() {
        this.filterOptions = this.searchOptions.SearchOptions;
        this.selectedFilter = this.filterOptions[0].value.code;
    }

    private setupComponent() {
        this.users = this.userService.Users;
        this.users.config = {};
        this.users.config.sortFirst = true;
        this.users.config.sortLast = true;
        this.users.config.sortUsername = true;
        this.users.config.sortEmail = true;
        this.users.config.sortDate = true;
        this.users.loading = false;
        this.users.config.rowsPerPage = [5, 10, 15, 20];
        this.users.config.paginator = this.users.total > 10;
    }

    performFilter() {
        let event = this.currentEvent;
        event.filterBy = this.selectedFilter || this.selectedFilter.code;
        event.filter = this.userFilter;
        this.lazyLoad(event);
    }

    lazyLoad(event) {
        event.filterBy = this.selectedFilter.code || this.selectedFilter;
        event.filter = this.userFilter || null;
        this.currentEvent = event;
        this.userService.getUsers(event).subscribe(data =>
            this.setupComponent()
        );
    }   

}
