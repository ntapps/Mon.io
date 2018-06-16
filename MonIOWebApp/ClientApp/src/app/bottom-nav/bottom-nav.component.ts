import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  private index;

  buttonObjectList: ButtonObject[] = [
    { text: "Home", index: 0, icon: "home", routeName: "home" },
    { text: "Budget", index: 1, icon: "list", routeName: "budget" },
    { text: "Expense", index: 2, icon: "list", routeName: "expenses" },
    { text: "Savings", index: 3, icon: "archive", routeName: "savings" },
    { text: "Reports", index: 4, icon: "toc", routeName: "reports" }
  ]

  constructor(private _router: Router) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        var navEnd : NavigationEnd = val;
        var routeUrl = navEnd.url;
        routeUrl = routeUrl.replace('/', '');
        if(routeUrl == '') {
          this.index = 0;
        }
        for(let buttonObj of this.buttonObjectList) {
          if(buttonObj.routeName == routeUrl) {
            this.index = buttonObj.index;
          }
        }
      }
    });
  }

  ngOnInit() {

  }

  SelectThisIndex(buttonIndex) {
    this.index = buttonIndex;
    this._router.navigate([this.buttonObjectList[buttonIndex].routeName]);
  }

  onHomeClick() {
    this.index = 0;

  }

  onBudgetClick() {
    this.index = 1;
    this._router.navigate(['budget']);
  }
}

export class ButtonObject {
  text: string;
  index: number;
  icon: string;
  routeName: string;
}
