import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private service: PokemonService) { }
  pokemoList: any;
  ngOnInit(): void {
    this.service.getTipoPokemonList().subscribe((data)=>{
      console.log(data);
      this.pokemoList = data;
    })
  }

}
