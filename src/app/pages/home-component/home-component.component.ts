import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  nome: string = 'jooj'; 
  idade: number = 32; 
  togglar = false;

  sales(){
    this.togglar = !this.togglar
  }

}
