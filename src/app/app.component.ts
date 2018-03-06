import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeros: Array<number> = [];

  addNumber(n){
    this.numeros.push(n.value);
    n.value='';
  }

  reset(n){
    this.numeros = [];
    n.value='';
  }
}
