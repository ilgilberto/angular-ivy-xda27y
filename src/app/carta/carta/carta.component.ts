import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})


export class CartaComponent implements OnInit {
  @Input() id: string;
  

  constructor() { }

  ngOnInit() {
  }

}