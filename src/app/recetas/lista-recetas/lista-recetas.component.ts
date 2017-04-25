import { Component, Output, EventEmitter } from '@angular/core';

import { Receta } from '../receta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent {

  recetas: Array<Receta> = [];

  @Output() recetaSeleccionada = new EventEmitter<Receta>();

  receta: Receta = new Receta('Receta 1', 'Una descripción de la receta', 'http://vignette2.wikia.nocookie.net/star-wars-astromechdroid/images/9/96/R2D2.png/revision/latest?cb=20150719220033', []);

  constructor() { }

  seleccionarReceta() {
    this.recetaSeleccionada.emit(this.receta);
  }

}
