import { Component, OnInit } from '@angular/core';
import {Filme} from "../Filme";
import {LocadoraService} from "../../locadora.service";

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  constructor(private  locadoraService: LocadoraService) { }
  filmeTela : Filme;
  nome:String;
  aparece:boolean;
  pesquisa:boolean

  ratings: number;
  averageRating:number;
  isReadonly = true;

  ngOnInit(): void {
    this.pesquisa = true;
  }

  obterTodosFilmes(){
    this.locadoraService.obterTodosFilmes()
      .then(filme => console.log(filme))
      .catch(error => console.log(error))
  }

  obterFilmePorNome(nome: String){
    if(nome != undefined){
      this.locadoraService.obterFilmePorNome(nome)
        .then(filme => this.filmeTela = filme)
        .catch(error => console.log(error))
      this.aparece= true;
      this.pesquisa=false;

      this.ratings = Number(this.filmeTela.imdbRating);
      this.averageRating =  Number(this.filmeTela.imdbRating);

    }

  }

  limparPesquisa(){
    this.nome='';
    this.aparece= false;
    this.pesquisa=true;
  }
}
