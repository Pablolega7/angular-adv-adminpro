import { Component} from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
  public labels1:string[]=['Guacamole', 'Pan', 'Pollo'];
  public data1 = [
    [40, 50, 80],
  ];



};
