import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from './customPipe/custom-pipe.pipe';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentsService } from './Services/students.service';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    PipesComponent,
    CustomPipePipe,
    StudentListComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
