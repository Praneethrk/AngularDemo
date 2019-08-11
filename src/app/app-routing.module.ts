import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { LabComponent } from './lab/lab.component';
import { WhoursComponent } from './whours/whours.component';


const routes: Routes = [

  {
    path: '',
    component: FacultyComponent,
    pathMatch: 'full'
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },
  {
    path: 'whours',
    component: WhoursComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
