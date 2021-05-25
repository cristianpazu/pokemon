import { Component, OnInit, Input} from '@angular/core';
import { Result } from 'src/app/interfase/pokeresponse';
import { PokeserviceService } from 'src/app/service/pokeservice.service';

@Component({
  selector: 'app-pokem',
  templateUrl: './pokem.component.html',
  styleUrls: ['./pokem.component.css']
})
export class PokemComponent implements OnInit {

  constructor(private getpoke:PokeserviceService) { }

  name:string
  urlImg:string
  //pokearray: string=''
  public pokearray: any[]=[];
  page= 1;
  totalPokemons:any;
  ngOnInit(): void {
    this.traerdatos()
  }
  traerdatos(){
    this.getpoke.getAllpokemon().subscribe((response:any)=>{
      this.totalPokemons = response.length;
      response.results.forEach(result=>{
        console.log(response);
        this.getpoke.getApokemonname(result.name).subscribe(
          (uniqresponse:any)=>{
          this.pokearray.push(uniqresponse);
          console.log(this.pokearray);
        });
      });
     
     //this.urlImg= data.sprites.front_default;
   
   
   });
 }

  /*traerdatos(){
     this.getpoke.getAllpokemon(this.name).subscribe((data:any)=>{
      this.pokearray = data;
      
      this.urlImg= data.sprites.front_default;
      console.log(this.pokearray)
    
    })
  }*/

}
