import { Injectable } from '@angular/core';
import { IFuncionarioService } from 'src/app/shared/interfaces/IFuncionarioService';
import { Funcionario } from 'src/app/shared/model/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageFuncionarioService implements IFuncionarioService {

  private storage: Storage;
  private key: string = "listaFuncionarios";
  private listaFuncionarios: Funcionario[];

  constructor() {
    this.storage = window.localStorage;
    this.obterFuncionariosLocalStorage();
  }

  adicionarFuncionario(funcionario: Funcionario): void {

    funcionario.id = this.obterId();
    this.listaFuncionarios.push(funcionario);
    this.storage.setItem(this.key, JSON.stringify(this.listaFuncionarios));

  }
  obterFuncionario(funcionarioId: number): Funcionario {

    var funcionario: any;

    this.listaFuncionarios.some(function (el) {
      if (el.id == funcionarioId) {
        funcionario = el;
      }
    });

    return funcionario;
  }
  atualizarFuncionario(funcionario: Funcionario): void {

    this.listaFuncionarios.some(function (el) {
      if (el.id == funcionario.id) {
        el.cargo = funcionario.cargo;
        el.cpf = funcionario.cpf;
        el.dataAdmissao = funcionario.dataAdmissao;
        el.nome = funcionario.nome;
      }
    });

    this.storage.setItem(this.key, JSON.stringify(this.listaFuncionarios));

  }
  obterFuncionarios(): Funcionario[] {

    return this.listaFuncionarios;

  }
  excluirFuncionario(funcionarioId: number): void {
    throw new Error('Method not implemented.');
  }

  private obterId(): number {
    var funcionario = this.listaFuncionarios[this.listaFuncionarios.length - 1];

    if (funcionario === undefined)
      return 1;

    return funcionario.id + 1;
  }

  private obterFuncionariosLocalStorage() {
    var localStorageFuncionarios = this.storage.getItem(this.key)

    if (localStorageFuncionarios) {
      this.listaFuncionarios = JSON.parse(localStorageFuncionarios);
    }
    else {
      this.listaFuncionarios = [];
    }
  }
}
