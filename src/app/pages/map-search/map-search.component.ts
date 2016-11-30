import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector:'map-page',
  templateUrl:'./map-search.component.html',
  styleUrls: ['./map-search.component.less']
})
export class MapSearchComponent{
  options: any;
  overlays: any[];
  @ViewChild('map') _mapContainer : ElementRef;
  private _map : any;

  constructor(){
  }

  ngOnInit() {
    this.options = {
      center: {lat: 48.866667, lng: 2.333333},
      zoom: 12,
      streetViewControl: false,
      mapTypeControl : false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this._map = new google.maps.Map(this._mapContainer.nativeElement,this.options);

    this.getUserLocation();
  }

  getUserLocation(){
    navigator.geolocation.getCurrentPosition(position=>{
      this._map.setCenter({lat:position.coords.latitude,lng:position.coords.longitude});
    })
  }
}
