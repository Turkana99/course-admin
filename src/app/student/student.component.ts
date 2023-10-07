import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TUI_DEFAULT_MATCHER, TuiBooleanHandler, TuiDay, tuiPure } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { NewStudentComponent } from '../dialog/new-student/new-student.component';

export interface PeriodicElement {
  position: number;
  name: string;
  surname: string;
  phone: string;
  birthdate: string;
  gender: string;
  email: string;
  course: string;
  group: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Turkana',
    surname: 'Mammadova',
    phone: '+994704045506',
    birthdate: '19-02-1999',
    gender: 'female',
    email: 'mmmmadova.turkana@gmail.com',
    course: 'Frontend',
    group: 'Frontend A1',
    status: 'active',
  },
  {
    position: 2,
    name: 'Imran',
    surname: 'Ahmadov',
    phone: '+994701111111',
    birthdate: '24-02-1997',
    gender: 'male',
    email: 'imrahmadov@gmail.com',
    course: 'Frontend',
    group: 'Frontend A1',
    status: 'active',
  },
  {
    position: 3,
    name: 'Nigar',
    surname: 'Asadova',
    phone: '+994772222222',
    birthdate: '21-02-1980',
    gender: 'female',
    email: 'ngarasadova@gmail.com',
    course: 'Backend',
    group: 'Backend A2',
    status: 'active',
  },
];
const ITEMS: readonly string[] = [
  'Frontend F1',
  'Frontend F2',
  'Backend B1',
  'Backend B2',
  'UI/UX U1',
  'UI/UX U2',
  'Robotics R1',
  'Robotics R2'
];
const ITEMS2: readonly string[] = [
  'Frontend',
  'Backend',
  'UI/UX design',
  'Robotics'
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})

export class StudentComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'surname',
    'phone',
    'email',
    'birthdate',
    'gender',
    'course',
    'group',
    'status',
    'actions',
  ];
  value = null;

  items = ['Active', 'Deactive'];
  gender = ['Female', 'Male'];


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  readonly studentForm = new FormGroup({
    nameValue: new FormControl(''),
    surnameValue: new FormControl(''),
    phoneValue: new FormControl(''),
    emailValue: new FormControl(''),
    birthValue: new FormControl(new TuiDay(2023, 0, 1)),
    genderValue: new FormControl(''),
    courseValue: new FormControl(''),
    groupValue: new FormControl(''),
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

  search: string | null = '';

  readonly control = new FormControl([ITEMS[0]]);
  readonly control2 = new FormControl([ITEMS2[0]]);

  @tuiPure
  filter(search: string | null): readonly string[] {
      return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
  filter2(search: string | null): readonly string[] {
    return ITEMS2.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
}

  tagValidator: TuiBooleanHandler<string> = tag => !tag.startsWith('Frontend F1');


  showDialog(): void {
    this.dialogs
      .open(new PolymorpheusComponent(NewStudentComponent, this.injector), {})
      .subscribe();
  }

}
