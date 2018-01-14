import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LocationMapModal} from '../modal/location.map.modal';


export class SavedCoordinates {
  lat: number;
  lon: number;
  date: Date;

  constructor(lat: number, lon: number, date: Date) {
    this.lat = lat;
    this.lon = lon;
    this.date = date;

  };
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {

  coordinates: SavedCoordinates[] = new Array<SavedCoordinates>();

  constructor(public dialog: MatDialog) {

  }

  ngAfterViewInit() {
    this.check();
  }

  check() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.writeData(position);
      });
    }
  }

  writeData(position: any) {
    if (position) {
      this.coordinates = this.getLocalStorage();
      let coord = new SavedCoordinates(position.coords.latitude, position.coords.longitude, new Date());
      this.coordinates.push(coord);
      this.setLocalStorage(this.coordinates);
    }

  }

  setLocalStorage(postions: SavedCoordinates[]): void {
    localStorage.setItem('positions', JSON.stringify({positions: postions}));
  }

  getLocalStorage(): SavedCoordinates[] {
    let localStorageItem = JSON.parse(localStorage.getItem('positions'));
    return localStorageItem == null ? [] : localStorageItem.positions;
  }

  openModal(){
    let coord = this.coordinates[this.coordinates.length -1];
    let dialogRef = this.dialog.open(LocationMapModal, {
      width: '600px',
      data: {coordinates: coord}
    });
  }

}


