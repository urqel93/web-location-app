import {AgmCoreModule} from '@agm/core';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationMapModal} from '../modal/location.map.modal';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationMapModal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTKJQFrH9UxVFf0BdSwVuxRluwa05vuk8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LocationMapModal]
})
export class AppModule { }
