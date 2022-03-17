import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_PATH} from "../environments/environment";
import {Filme} from "./filmes/Filme";

@Injectable({
  providedIn: 'root'
})
export class LocadoraService {

  constructor(private  httpclient: HttpClient) { }

  obterTodosFilmes(){
    return this.httpclient.get<Filme[]>(`${API_PATH}`).toPromise();
  }

  obterFilmePorNome(nome: String): Promise<Filme>{
    return fetch(`${API_PATH}t=${nome}`)
      .then(res=>res.json())
      .catch(err=>{
        throw new Error(err.message);
      });
  }
}
