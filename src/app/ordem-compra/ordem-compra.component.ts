import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = ''

  // Validos?
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  // Estado primitivos dos campos
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  // controlar botão confirmar compra
  public formEstado: string = 'disabled'

  constructor() { }

  ngOnInit() {
  }

  /**
   * atualizaEndereco
   */
  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.habilidaForm()
  }
  public atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    if (numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilidaForm()
  }
  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if (complemento.length > 0) {
      this.complementoValido = true
    } else {
      this.complementoValido = false

    }
    this.habilidaForm()
  }
  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false

    }
    this.habilidaForm()
  }

  /**
   * habilidaForm
   */
  public habilidaForm(): void {
    if (
      this.enderecoValido === true &&
      this.numeroValido === true &&
      this.formaPagamentoValido === true
    ) {
      this.formEstado = '';
      
      
    }else {
      this.formEstado = 'disabled';

    }
  }
}
