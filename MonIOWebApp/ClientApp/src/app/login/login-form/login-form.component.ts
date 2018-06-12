import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {AuthenticationService} from '../../shared-data/authentication.service';
declare const gapi: any;

@Component({
  selector: 'google-signin',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class GoogleSigninComponent implements AfterViewInit {
/*
  private clientId:string = '476220412516-62ibusj2uuv9b14ar63st36ghmt7kq6h.apps.googleusercontent.com';
  
  private scope = [
    'profile'
  ].join(' ');

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstChild);
    });
  }
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        that.authService.logIn();

      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(private element: ElementRef, private authService: AuthenticationService) {
    console.log('ElementRef: ', this.element);
  }
*/
  ngAfterViewInit() {
    //this.googleInit();
  }

}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
