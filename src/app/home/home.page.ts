// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';

// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   pokemon:any

   pokemonId:number=1;
  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private api: PokeapiService) {}

  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonDataID(id: number) {
    try {
      ;  // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(id).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon = response.name;
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.pokemon);
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
}