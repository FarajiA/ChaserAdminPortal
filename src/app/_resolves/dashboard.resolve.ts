import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { AuthService } from '../_services/auth/auth.service';
import { UserService } from '../_services/users/users.service';
import { User } from '../_models/user';

@Injectable()
export class DashboardResolver implements Resolve<User>{

    constructor(private authService: AuthService,
        private userService: UserService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<User> {
        return this.userService.userIdentity()
            .map(response => {
                var responseUser = response.result;
                if (responseUser) {
                    let user = new User();
                    user.id = responseUser.id;
                    user.firstName = responseUser.firstName;
                    user.lastName = responseUser.lastName;
                    user.username = responseUser.userName;
                    user.email = responseUser.email;
                    user.photo = responseUser.photo;
                    user.roles = responseUser.roles;

                    let adminRole = user.roles.includes('Admin');
                    if (adminRole) {
                        this.authService.user = user;
                        return user;
                    }
                    else
                        return null;
                }
                this.router.navigate(['/login']);
                return null;
            })
            .catch(error => {
                console.log(`User retrieval error: ${error}`);
                this.router.navigate(['/login']);
                return Observable.of(null);
            });
    }
    /*
    isAdmin = (element) => {
        return element.toLowerCase().includes('admin'); 
    }
    */
}