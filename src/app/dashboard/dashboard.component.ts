import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard/dashboard.service';
import { UserService } from '../_services/users/users.service';
import { BroadcastService } from '../_services/broadcasts/broadcasts.service';
import { User } from '../_models/user';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalUsers: number;
  newUsers: number;
  onlineUsers: number;
  broadcastUsers: number;
  users: any = [];
  broadcasters: any = [];

  constructor(private dashService: DashboardService,
      private userService: UserService, 
      private broadcastService: BroadcastService) {
        this.users.config = {};
        this.broadcasters.config = {};
        this.broadcasters.loading = true;
        this.users.loading = true;
      }

  ngOnInit() {
      this.dashService.getDashFigures().subscribe(data =>
          this.MapDash(data)            
      );

      let query = {
          first: 0,
          rows: 10
      }

      this.userService.getUsers(query).subscribe(data =>
          this.setupUsersComponent(data)
      );
      
      this.broadcastService.getBroadcasters(query).subscribe(data =>
          this.setupBroadcastComponent(data)
      );
  }

  private MapDash(data): void {
      this.totalUsers = data.users;
      this.onlineUsers = data.online;
      this.broadcastUsers = data.broadcasting;
      this.newUsers = data.newUsers;
  };

  private setupConfig = (data) => {
      data.config = {
          firstCol: "false",
          lastCol: "false",
          emailCol: "false",
          activeCol: "false",
          sortFirst: false,
          sortLast: false,
          sortUsername: false,
          sortEmail: false,
          sortDate: false
      };
      return data;
  }

  private setupUsersComponent(data): void {     
      this.users = this.setupConfig(this.users);
      this.users.index = data.index;
      this.users.total = data.total;
      this.users.results = data.results;
  }

  private setupBroadcastComponent(data): void {
      this.broadcasters = this.setupConfig(this.broadcasters);
      this.broadcasters.loading = false;
      this.broadcasters.index = data.index;
      this.broadcasters.total = data.total;
      this.broadcasters.results = data.results;
  }
}
