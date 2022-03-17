import { Component } from '@angular/core';
import {LocadoraService} from "./locadora.service";
import {Filme} from "./filmes/Filme";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locadorafilmes';

  constructor(private  locadoraService: LocadoraService) {
  }

}



