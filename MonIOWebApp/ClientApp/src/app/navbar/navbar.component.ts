import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/authentication.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  private isLoggedIn: boolean;
  constructor(
    private breakpointObserver: BreakpointObserver, 
    private _router:Router,
    private auth:AuthenticationService
  ) {
    
  }


  ngOnInit(){
    this.auth.isAuthenticated.subscribe(loggedIn =>
      this.isLoggedIn = loggedIn
    );
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
