import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import { NewGroupComponent } from '../dialog/new-group/new-group.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

export interface PeriodicElement {
  name: string;
  position: number;
  student: number;
  startdate: string;
  enddate: string;
  status: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Frontend F1',
    student: 10,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 2,
    name: 'Backend B1',
    student: 5,
    startdate: '19-01-2023',
    enddate: '19-01-2023',
    status: 'deactive',
  },
  {
    position: 3,
    name: 'Robotics R1',
    student: 6,
    startdate: '19-01-2023',
    enddate: '19-01-2023',
    status: 'deactive',
  },
  {
    position: 4,
    name: 'Robotics R1',
    student: 9,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 5,
    name: 'Frontend F2',
    student: 10,
    startdate: '19-01-2023',
    enddate: '19-01-2023',
    status: 'deactive',
  },
  {
    position: 6,
    name: 'Backend B1',
    student: 12,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 7,
    name: 'UI/UX U1',
    student: 5,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 8,
    name: 'UI/UX U2',
    student: 6,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 9,
    name: 'Frontend F2',
    student: 8,
    startdate: '19-01-2023',
    enddate: '19-01-2023',
    status: 'deactive',
  },
];
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'student',
    'startdate',
    'enddate',
    'status',
    'actions',
  ];
  value = null;
  isEdit = false;
  items = ['Active', 'Deactive'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  readonly groupForm = new FormGroup({
    nameValue: new FormControl(''),
    studentValue: new FormControl(''),
    startValue: new FormControl(new TuiDay(2023, 0, 1)),
    endValue: new FormControl(new TuiDay(2023, 0, 1)),
    statusValue: new FormControl(),
  });

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  showDialog(dialogdata: any = null): void {
    this.dialogs
      .open(new PolymorpheusComponent(NewGroupComponent, this.injector), {
        data: dialogdata,
      })
      .subscribe({
        next: (x: any) => {
          console.log('data', x);
          if (dialogdata) {
            console.log('dialogdata', dialogdata);
            // let x = ELEMENT_DATA.find(elem=>elem.position === dialogdata.position);
            dialogdata.name = x.nameValue;
          } else {
            console.log('THIS IS CREATE');
          }
        },
        error: (err) => {},
        complete: () => {},
      });
  }
}
