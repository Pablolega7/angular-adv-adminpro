import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor(private sidebarservice:SidebarService) { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios=>{
      console.log(usuarios)
    });

  }

  getUsuarios(){

    return new Promise(resolve=>{
    
      fetch('https://reqres.in/api/users').
      then(resp=> resp.json()).
      then(body=>resolve(body.data));
    });
  };

};
