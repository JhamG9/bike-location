import { Component, OnInit } from '@angular/core';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Polyline from 'ol/format/Polyline.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import { Circle as CircleStyle, Stroke, Style } from 'ol/style.js';
import { Group, Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import OSM from 'ol/source/OSM';
import { LineString } from 'ol/geom';
import { HttpClient } from '@angular/common/http';
import { transform } from 'ol/proj';
import { LocationFirestoreService } from 'src/app/firebase/location-firestore.service';
import { UserFirestoreService } from 'src/app/firebase/user-firestore.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {
  key = 'Get your own API key at https://www.maptiler.com/cloud/';
  attributions =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  map: Map;
  users: any[] = [];

  search = { userId: null, date: '' };

  constructor(
    private http: HttpClient,
    private locationFirestoreService: LocationFirestoreService,
    private userFirestoreService: UserFirestoreService
  ) {}

  ngOnInit(): void {
    this.map = new Map({
      target: 'ol-map',
      view: new View({
        center: [0, 0],
        zoom: 15,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });

    this.loadAllUsers();

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      document.write("mobile device");
    }else{
      // false for not mobile device
      document.write("not mobile device");
    }
  }

  loadAllUsers() {
    this.userFirestoreService.getAllUsers().subscribe((resp: any) => {
      this.users = resp;
    });
  }

  loadPoints() {
    this.locationFirestoreService.getAllLocations().subscribe((resp: any) => {
      let currPath: any = [];
      resp.forEach((location: any) => {
        const locate = [location.lng, location.lat];
        let ds = new Date(this.search.date);

        let finalDate =
          ds.getFullYear() + '-' + (ds.getMonth() + 1) + '-' + ds.getDate();
        if (
          this.search.userId === location.user_id &&
          finalDate === location.date
        ) {
          currPath.push(locate);
        }
      });

      if (currPath[0]) {
        this.map
          .getView()
          .setCenter(
            transform(
              [currPath[0][0], currPath[0][1]],
              'EPSG:4326',
              'EPSG:3857'
            )
          );
      }

      if (currPath.length === 0) {
        alert('No se encontraron ubicaciones');
      }

      let polyline2 = new Polyline({
        factor: 1e6,
      }).writeGeometry(new LineString(currPath));

      const route = new Polyline({
        factor: 1e6,
      }).readGeometry(polyline2, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857',
      });

      const routeFeature = new Feature({
        type: 'route',
        geometry: route,
      });

      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [routeFeature],
        }),
        style: new Style({
          stroke: new Stroke({
            color: 'green',
            width: 6,
          }),
        }),
      });

      vectorLayer.set('name', 'polyline');
      this.map.getLayers().forEach((layer) => {
        if (layer.get('name')) {
          this.map.removeLayer(layer);
        }
        this.map.render();
      });
      this.map.addLayer(vectorLayer);
    });
  }

  searchLocations() {
    this.loadPoints();
  }
}
