import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {

    this.carta1 = 'RD';
    this.carta2 = 'RD';
    this.carta3  = 'RD';

    this.mazzo = 'CC';
    this.briscola = 'RD';

    this.giocata1 = 'CC';
    this.giocata2 = 'CC';
  
}

  carta1 :string;
  carta2 :string
  carta3: string;

  mazzo: string;
  briscola: string;

  giocata1: string;
  giocata2: string;



  name = 'Angular ' + VERSION.major;
}
