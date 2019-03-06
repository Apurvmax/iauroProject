import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudentComponent } from './component/register-student/register-student.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatNativeDateModule,
  MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,
   MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
   MatRadioModule,MatListModule,MatTableModule} from  '@angular/material';
import { SatPopoverModule } from '@ncstate/sat-popover';
import {InlineeditComponent} from './component/inlineedit/inlineedit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentComponent,
    InlineeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SatPopoverModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatToolbarModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
