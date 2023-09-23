import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  student: number;
  startdate: string;
  enddate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Frontend A',
    student: 10,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 2,
    name: 'Backend A',
    student: 5,
    startdate: '19-01-2023',
    enddate: '19-01-2023',
    status: 'deactive',
  },
  {
    position: 3,
    name: 'Robotics A',
    student: 6,
    startdate: '19-01-2023',
    enddate: '19-01-2023',
    status: 'deactive',
  },
  {
    position: 4,
    name: 'Robotics B',
    student: 9,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 5,
    name: 'Frontend B',
    student: 10,
    startdate: '19-01-2023',
    enddate: '19-01-2023',
    status: 'deactive',
  },
  {
    position: 6,
    name: 'Backend B',
    student: 12,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 7,
    name: 'UI/UX A',
    student: 5,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 8,
    name: 'UI/UX B',
    student: 6,
    startdate: '19-01-2023',
    enddate: 'Continue',
    status: 'active',
  },
  {
    position: 9,
    name: 'Frontend C',
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
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
