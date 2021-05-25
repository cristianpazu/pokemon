import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokeserviceService } from 'src/app/service/pokeservice.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public texto: string='';
  public pooke:any[]=[]
  constructor(private activatedRouter: ActivatedRoute,
    private pokemoService:PokeserviceService
    ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      this.texto = params.texto;
      this.pokemoService.getApokemonname(params.texto).subscribe(pokemo=>{
        this.pooke.push(pokemo);
        console.log(this.pooke);
        
      })
    })
  }

}
