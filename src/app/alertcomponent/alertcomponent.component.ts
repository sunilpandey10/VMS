import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertServiceService } from '../alert-service.service'
@Component({
  selector: 'app-alertcomponent',
  templateUrl: './alertcomponent.component.html',
  styleUrls: ['./alertcomponent.component.css']
})
export class AlertcomponentComponent implements OnDestroy {
  private subscription: Subscription;
  message: any;
  constructor(private alertService: AlertServiceService) {
    this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
}

}
