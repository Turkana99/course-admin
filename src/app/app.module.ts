import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiScrollbarModule,
  TuiDataListModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { GroupsComponent } from './groups/groups.component';
import { AppealsComponent } from './appeals/appeals.component';
import { MaterialModule } from './material.module';
import { MatTableModule } from '@angular/material/table';
import { V1Component } from './v1/v1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { NewGroupComponent } from './dialog/new-group/new-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    CourseComponent,
    StudentComponent,
    TeacherComponent,
    GroupsComponent,
    AppealsComponent,
    V1Component,
    NewGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiButtonModule,
    TuiRootModule,
    TuiDialogModule,
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
  ],
  bootstrap: [AppComponent],
  exports: [NewGroupComponent],
})
export class AppModule {}
