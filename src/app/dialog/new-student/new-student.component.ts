import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TUI_DEFAULT_MATCHER, TuiBooleanHandler, TuiDay, tuiPure } from '@taiga-ui/cdk';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

const ITEMS: readonly string[] = [
  'Frontend F1',
  'Frontend F2',
  'Backend B1',
  'Backend B2',
  'UI/UX U1',
  'UI/UX U2',
  'Robotics R1',
  'Robotics R2',
];
const ITEMS2: readonly string[] = [
  'Frontend',
  'Backend',
  'UI/UX design',
  'Robotics',
];

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss'],
})
export class NewStudentComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<boolean>
  ) {}
  items = ['Active', 'Deactive'];
  gender = ['Female', 'Male'];
  close(): void {
    this.context.completeWith(false);
  }

  newStudentForm = new FormGroup({
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
}
