import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { BroadcastService } from '../_services/broadcasts/broadcasts.service';
import { SearchOptionsService } from '../_services/searchOptions.service';

@Component({
  templateUrl: './broadcasts.component.html',
  styleUrls: ['./broadcasts.component.css']
})
export class BroadcastsComponent implements OnInit {

    broadcasters: any = [];
    userFilter: string;
    filterOptions: SelectItem[];
    selectedFilter: any;
    currentEvent: any = {};

    constructor(private broadcastService: BroadcastService, private searchOptions: SearchOptionsService) {
        this.broadcasters.config = {};
    }

    ngOnInit() {
        this.filterOptions = this.searchOptions.SearchOptions;
        this.selectedFilter = this.filterOptions[0].value.code;
    }

    private setupComponent() {
        this.broadcasters = this.broadcastService.Broadcasters;
        this.broadcasters.config = {};
        this.broadcasters.config.sortFirst = true;
        this.broadcasters.config.sortLast = true;
        this.broadcasters.config.sortUsername = true;
        this.broadcasters.config.sortEmail = true;
        this.broadcasters.config.sortDate = true;
        this.broadcasters.loading = false;
        this.broadcasters.config.rowsPerPage = [5, 10, 15, 20];
        this.broadcasters.config.paginator = this.broadcasters.total > 10;
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
            this.broadcastService.getBroadcasters(event).subscribe(data =>
                this.setupComponent()
            );
    }

}
