import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import {TuiDialogContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>,
    ) {}
    items = [
      'Active',
      'Deactive'
  ];
    close(): void {
        this.context.completeWith(false);
    }
    
    newGroupForm = new FormGroup({
      nameValue: new FormControl(''),
      studentValue: new FormControl(''),
      startValue: new FormControl(new TuiDay(2023, 0, 1)),
      endValue: new FormControl(new TuiDay(2023, 0, 1)),
      statusValue: new FormControl(),
    });



  }
