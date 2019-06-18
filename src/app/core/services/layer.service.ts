import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Layer } from '../models/layer';

@Injectable()
export class LayerService {
// tslint:disable-next-line: max-line-length
  geoserverAPI: string = 'http://geoserver-dev.sgt2.com.br/geoserver/asset/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=asset%3APropriedades1&maxFeatures=50&outputFormat=application%2Fjson';

  constructor(private http: HttpClient) {
  }

  getAPI(): Observable<Layer> {
    return this.http.get<Layer>(this.geoserverAPI);
  }
}
