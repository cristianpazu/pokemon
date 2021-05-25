import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemosResponse } from '../interfase/pokeresponse';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {
public url:string='https://pokeapi.co/api/v2/pokemon?limit=100';
  constructor(private http:HttpClient) { }

  
  getAllpokemon(){
    return this.http.get(`${this.url}`)
   }

  getApokemonname(name:string){
   return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
