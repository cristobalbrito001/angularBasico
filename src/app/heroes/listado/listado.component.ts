import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['ichigo','luffy','naruto','goku'];
  heroeseliminados: string[] = [];
  borrar(){
   const heroeborado = this.heroes.pop() || '';
    if(heroeborado)
      this.heroeseliminados.push(heroeborado);
    else
      console.log('no quedan mas heroes')
  }
}
