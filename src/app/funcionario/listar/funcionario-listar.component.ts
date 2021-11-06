import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/shared/model/Funcionario';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html'
})
export class FuncionarioListarComponent implements OnInit {
  titulo: string = 'Lista de Funcionários';

  listaFuncionarios: Funcionario[] = [];
  constructor() { }

  ngOnInit(): void {
    this.obterFuncionarios();
  }

  obterFuncionarios() {
    this.listaFuncionarios.push(new Funcionario(1, 'Gustavo', '12345678910', new Date(1999, 11, 4), 2))
    this.listaFuncionarios.push(new Funcionario(2, 'Andrey', '12345678910', new Date(1999, 11, 4), 1))
    this.listaFuncionarios.push(new Funcionario(3, 'Joao', '12345678910', new Date(1999, 11, 4), 2))
    this.listaFuncionarios.push(new Funcionario(4, 'Rech', '12345678910', new Date(1999, 11, 4), 0))
  }

  converterCargo(tipo: number): string {
    if(tipo == 0)
      return "Supervisor";
    if(tipo == 1)
      return "Gerente";
    if(tipo == 2)
      return "Diretor";

     return "Indefinido";
  }
}
