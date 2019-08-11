import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HeaderComponent } from './header/header.component';
import { LabComponent } from './lab/lab.component';
import { WhoursComponent } from './whours/whours.component';
import { AppService } from './app.service';
import { DataFeederService } from './shared/datafeeder.service';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';



@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    HeaderComponent,
    LabComponent,
    WhoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2GoogleChartsModule,
    ReactiveFormsModule
  ],
  providers: [AppService,DataFeederService],
  bootstrap: [AppComponent]
})
export class AppModule { }
