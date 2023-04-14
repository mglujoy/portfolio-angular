import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'portfolio-angular';

  IsAuthenticated = false;
  private subsAuth$: Subscription;

  constructor(
    private securityService: SecurityService
  ) {
    this.IsAuthenticated = this.securityService.IsAuthorized;

    this.subsAuth$ = this.securityService.authChallenge$.subscribe(
      (isAuth)=> {
        this.IsAuthenticated = isAuth;
      });
  }
  ngOnDestroy(): void {
    if (this.subsAuth$) {
      this.subsAuth$.unsubscribe();
    }
  }
}


