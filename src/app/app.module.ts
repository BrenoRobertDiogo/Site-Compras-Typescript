import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HttpModule } from '@angular/http';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import { CarrinhoService } from 'carrinho.service';
import { CarrinhoVazioComponent } from './carrinho-vazio/carrinho-vazio.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    CarrinhoVazioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), // forRoot = Global, forChield = rotas internas
    HttpClientModule,
    // FormsModule
    ReactiveFormsModule
  ],
  providers: [
    CarrinhoService,
    { provide: LOCALE_ID, useValue: 'pt-Br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }