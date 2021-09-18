import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


const API_URL_POKEMON = "http://localhost:3000/";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getTipoPokemonList() {
    return this.http.get(API_URL_POKEMON + 'getTyepOfPokemon' );
  }
}
