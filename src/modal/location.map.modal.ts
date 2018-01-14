import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SavedCoordinates} from '../app/app.component';


@Component({
  selector: 'location-map-modal',
  templateUrl: 'location.map.html',
  styleUrls: ['location.map.scss']
})
export class LocationMapModal {

  coordinates: SavedCoordinates;
  szerokosc: number;
  dlugosc: number;

  constructor(
    public dialogRef: MatDialogRef<LocationMapModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.coordinates = data.coordinates;
    this.szerokosc = this.coordinates.lat;
    this.dlugosc = this.coordinates.lon;
  }

  close(): void {
    this.dialogRef.close();
  }

}