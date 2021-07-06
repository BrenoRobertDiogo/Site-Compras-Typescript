import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { OfertaComponent } from "./oferta/oferta.component";
import { ComoUsarComponent } from "./oferta/como-usar/como-usar.component";
import { OndeFicaComponent } from "./oferta/onde-fica/onde-fica.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "Restaurantes",
    component: RestaurantesComponent,
  },
  {
    path: "Diversao",
    component: DiversaoComponent,
  },
  {
    path: "Oferta",
    component: OfertaComponent,
  },
  {
    path: "Oferta/:id",
    component: OfertaComponent,
    children: [
      {
        path: "",
        component: ComoUsarComponent,
      },
      {
        path: "como-usar",
        component: ComoUsarComponent,
      },
      {
        path: "onde-fica",
        component: OndeFicaComponent,
      },
    ],
  },
];
