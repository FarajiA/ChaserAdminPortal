import { Component, ViewChild, OnInit } from '@angular/core';
import {MenuModule, MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";

import { AuthService } from '../_services/auth/auth.service'; 

declare var jQuery: any;

@Component({
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

    menuItems: MenuItem[];
    miniMenuItems: MenuItem[];
    @ViewChild('bigMenu') bigMenu: Menu;
    @ViewChild('smallMenu') smallMenu: Menu;

    constructor(private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {

        this.route.data.subscribe(user => {
            let admin = user.user;
            if (admin != null) {
                let role = admin.roles.includes('Admin');
                if (!role)
                    this.router.navigate(['/login']);                    
            }
            else
                this.router.navigate(['/login']);
        });  

      let handleSelected = (event) => {
          let allMenus = jQuery(event.originalEvent.target).closest('ul');
          let allLinks = allMenus.find('.menu-selected');

          allLinks.removeClass("menu-selected");
          let selected = jQuery(event.originalEvent.target).closest('a');
          selected.addClass('menu-selected');
      };

      this.menuItems = [
          { label: 'Dashboard', icon: 'fa-bar-chart', styleClass: 'menu-selected', routerLink: ['/dashboard', 'main'], command: (event) => handleSelected(event) },
          { label: 'Users', icon: 'fa-users', routerLink: ['/dashboard', 'users'], command: (event) => handleSelected(event) },
          { label: 'Online', icon: 'fa-plug', routerLink: ['/dashboard', 'online'], command: (event) => handleSelected(event) },
          { label: 'Chasers', icon: 'fa-diamond', routerLink: ['/dashboard', 'chasers'], command: (event) => handleSelected(event) },
          { label: 'Broadcasts', icon: 'fa-wifi', routerLink: ['/dashboard', 'broadcasts'], command: (event) => handleSelected(event) },
          { label: 'My Profile', icon: 'fa-user-circle' },
          { label: 'Settings', icon: 'fa-sliders' },
      ];

      this.miniMenuItems = [];
      this.menuItems.forEach((item: MenuItem) => {
          let miniItem = { icon: item.icon, routerLink: item.routerLink }
          this.miniMenuItems.push(miniItem);
      });



  }

}
