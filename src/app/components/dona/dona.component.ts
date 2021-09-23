import { Component, Input } from '@angular/core';
import { Label, MultiDataSet,Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title:string="Sin titulo";
  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
  @Input('data') data: MultiDataSet = [
    [350, 450, 100],
  ];

  public colors:Color[]=[
    {backgroundColor:["#6AADF7","#6EE0B5","#EDD76B"]}
  ];

}
