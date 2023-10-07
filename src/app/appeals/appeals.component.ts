import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';


@Component({
  selector: 'app-appeals',
  templateUrl: './appeals.component.html',
  styleUrls: ['./appeals.component.scss']
})
export class AppealsComponent {
  activeItemIndex = 0;

  constructor(
      @Inject(TuiAlertService)
      private readonly alerts: TuiAlertService,
  ) {}

  onClick(item: string): void {
      this.alerts.open(item).subscribe();
  }
}
