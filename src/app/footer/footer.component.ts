import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

public autor:any = {escuela:'Ingeniería de Sistemas', curso:'Lenguaje de Programación II'};
  constructor() { }

  ngOnInit() {
  }

}
