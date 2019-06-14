import { DataProperties } from './data-properties';
import { DataGeometry } from './data-geometry';

export interface DataLayer {
  type: string;
  id: number | string;
  properties: DataProperties;
  geometry: DataGeometry;
}
