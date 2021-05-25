import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { DynamicFieldComponent } from './shared/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailedViewComponent,
    SummaryViewComponent,
    ProjectListComponent,
    DynamicFieldComponent,
    DynamicFormComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
