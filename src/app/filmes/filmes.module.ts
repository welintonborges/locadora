import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes/filmes.component';
import {FormsModule} from "@angular/forms";
import {RatingModule} from "ngx-bootstrap/rating";


@NgModule({
  declarations: [
    FilmesComponent
  ],
  exports: [
    FilmesComponent
  ],
    imports: [
        CommonModule,
        FilmesRoutingModule,
        FormsModule,
        RatingModule
    ]
})
export class FilmesModule { }
