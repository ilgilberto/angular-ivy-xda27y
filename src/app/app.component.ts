import { Component, OnInit, VERSION } from '@angular/core';
import { Example } from './example';
import { BriscolaService } from './services/BriscolaService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(public service : BriscolaService) {}

ngOnInit(): void {

    this.service.getTestResponse().subscribe(z => {this.example = z.body});
    
    this.carta1 = 'RD';
    this.carta2 = 'RD';
    this.carta3  = 'RD';

    this.mazzo = 'CC';
    this.briscola = 'RD';

    this.giocata1 = 'CC';
    this.giocata2 = 'CC';

    this.print = "Benvenuto nel fantastico mondo della briscola !";
  
}
  example = [];
  carta1 :string;
  carta2 :string
  carta3: string;

  mazzo: string;
  briscola: string;

  giocata1: string;
  giocata2: string;

  print: string;

  name = 'Angular ' + VERSION.major;
}
