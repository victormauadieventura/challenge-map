import { Component, OnInit } from '@angular/core';
import { LayerService } from 'src/app/core/services/layer.service';
import { Layer } from 'src/app/core/models/layer';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [LayerService]
})
export class MapComponent implements OnInit {
  layer: Layer;
  map: any;
  features: any;
  polygon: any;
  marker: any;
  bounds: any;

  constructor(private layerService: LayerService) {
    this.showAPI();
  }

  ngOnInit() {

    this.showMarkes();

    const tileLayer01 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, '
        + 'and the GIS User Community'
    });

    const tileLayer02 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer03 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer04 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer05 = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by '
        + '<a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by '
        + '<a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
    });

    const tileLayer06 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, '
        + '<a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> ('
        + '<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    const tileLayer07 = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
      attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> '
        + '| Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer08 = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
      attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; '
        + 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer09 = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
      attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; '
        + 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer10 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">'
        + 'CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer11 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">'
        + 'CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const tileLayer12 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">'
        + 'CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    this.map = L.map('map', {
      center: [-25.7265722, -51.624396578258],
      zoom: 10,
      layers: [tileLayer01, this.marker]
    });

    const baseMaps = {
      'World Imagery': tileLayer01,
      'Open Street Map': tileLayer02,
      'Open Street Map DE': tileLayer03,
      'Open Street Map France': tileLayer04,
      'Open Street Map Humanitarian': tileLayer05,
      'Open Street Map SRTM': tileLayer06,
      'GIScience Research Group - Roads': tileLayer07,
      'Open Street Map Hydda': tileLayer08,
      'Open Street Map Hydda Base': tileLayer09,
      'Stamen Design - Toner': tileLayer10,
      'Stamen Design - Toner Lite': tileLayer11,
      'Stamen Design - Terrain': tileLayer12
    };

    const overlayMaps = {
      Markers: this.marker
    };

    L.control.layers(baseMaps, overlayMaps).addTo(this.map);

    this.polygon = L.polygon([
      [-25.4, -51.1],
      [-25.7, -51.1],
      [-25.7, -51.5],
      [-25.4, -51.5],
    ]).addTo(this.map);

    this.polygon.bindPopup('I am a polygon.');
  }

  showAPI() {
    this.layerService.getAPI()
      .subscribe((response: Layer) => {
        this.layer = response;

        this.features = L.geoJSON<any>(this.layer.features, {
          onEachFeature: this.onEachFeature
        }).addTo(this.map);
      });
  }

  onEachFeature(feature, layer) {
    const properties = [];

    Object.keys(feature.properties).map(key => {
      if (!(feature.properties[key] === '-' || feature.properties[key] === '')) {
        properties.push([key, feature.properties[key]].join(': '));
      }
    });

    layer.bindPopup(properties.join('<br>'));
  }

  showMarkes() {
    const pin01 = L.marker([-25.4, -51.5]).bindPopup('Pin 01');
    const pin02 = L.marker([-25.4, -51.1]).bindPopup('Pin 02');
    const pin03 = L.marker([-25.7, -51.5]).bindPopup('Pin 03');
    const pin04 = L.marker([-25.7, -51.1]).bindPopup('Pin 04');

    this.marker = L.layerGroup([pin01, pin02, pin03, pin04]);
  }

}
