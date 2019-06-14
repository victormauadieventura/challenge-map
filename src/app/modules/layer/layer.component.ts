import { Component } from '@angular/core';
import { LayerService } from 'src/app/core/services/layer.service';
import { Layer } from 'src/app/core/models/layer';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss'],
  providers: [ LayerService ]
})
export class LayerComponent {
  layer: Layer;
  items: any[] = [];

  constructor(private layerService: LayerService) {
    this.showAPI();
  }

  showAPI() {
    this.layerService.getAPI()
      .subscribe((response: Layer) => {
        console.log(response);

        this.layer = response;

        console.log(this.layer.features);

        console.log(this.layer.features[0].properties.municipio);

        this.layer.features.forEach(item => {
          this.items.push(item);
        });
    });
  }



}
