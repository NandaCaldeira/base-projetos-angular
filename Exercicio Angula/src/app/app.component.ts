import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador';
  count: number = 0;

  aumentarNumero(event: any): void {
    this.count += 1
  
  }
  diminuirNumero(event: any): void {
    this.count -= 1
  }
}


