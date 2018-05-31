import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/authentication.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver, 
    private _router:Router,
    private auth:AuthenticationService
  ) {}

  isLoggedIn(){
    return this.auth.checkAuth();
  }

  onLoginClick(){
    this._router.navigate(['login']);
  }
  onLogOutClick(){
    this.auth.logOut();
  }
  onSignUpClick(){
    this._router.navigate(['home']);
  }
}
