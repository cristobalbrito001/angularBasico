import { Component} from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  nombre :string ='iroman';
  edad  :number =39;
  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre():string {
    //return this.nombre + ' ' + this.edad.toString();
    return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre():void {
    if(this.nombre === 'goku'){
      this.nombre='ironman';
    }else{
      this.nombre = 'goku';
    }
  }
  cambiarEdad():void {
    this.edad=20;
  }
}
