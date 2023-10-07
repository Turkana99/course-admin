import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

export interface PeriodicElement {
  name: string;
  position: number;
  student: number;
  startdate: string;
  enddate: string;
  status: string;
}

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss'],
})
export class NewGroupComponent implements OnInit {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<PeriodicElement>
  ) {
    if (this.context.data) {
      this.isEdit = true;
    }
  }
  isEdit = false;
  newGroupForm: FormGroup;
  group: PeriodicElement;
  items = ['Active', 'Deactive'];

  ngOnInit(): void {
    this.formInit();
  }

  close(): void {
    this.group = this.newGroupForm.value;
    this.context.completeWith(this.group);
  }

  formInit() {
    this.newGroupForm = new FormGroup({
      nameValue: new FormControl(''),
      studentValue: new FormControl(''),
      startValue: new FormControl(new TuiDay(2023, 0, 1)),
      testValue1: new FormControl(false),
      endValue: new FormControl(new TuiDay(2023, 0, 1)),
      statusValue: new FormControl(),
    });

    if (this.context.data) {
      this.newGroupForm = new FormGroup({
        nameValue: new FormControl(
          (this.context.data as PeriodicElement)['name']
        ),
        studentValue: new FormControl(
          (this.context.data as PeriodicElement)['student']
        ),
        startValue: new FormControl(
          (this.context.data as PeriodicElement)['startdate']
        ),
        testValue1: new FormControl(
          (this.context.data as PeriodicElement)['enddate'] === 'Continue'
        ),
        endValue: new FormControl(
          (this.context.data as PeriodicElement)['enddate'] === 'Continue'
            ? null
            : (this.context.data as PeriodicElement)['enddate']
        ),
        statusValue: new FormControl(
          (this.context.data as PeriodicElement)['status']
        ),
      });
    }
    if (this.newGroupForm.controls['testValue1'].value) {
      this.newGroupForm.controls['endValue'].disable();
    } else {
      this.newGroupForm.controls['endValue'].enable();
    }
    this.newGroupForm.controls['testValue1'].valueChanges.subscribe((x) => {
      x
        ? this.newGroupForm.controls['endValue'].disable()
        : this.newGroupForm.controls['endValue'].enable();
    });
  }
}
