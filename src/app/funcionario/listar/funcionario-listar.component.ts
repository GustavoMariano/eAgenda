import { Component, Inject, OnInit } from '@angular/core';
import { cargoType } from 'src/app/shared/enums/cargoEnum';
import { IFuncionarioService } from 'src/app/shared/interfaces/IFuncionarioService';
import { Funcionario } from 'src/app/shared/model/Funcionario';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html'
})

export class FuncionarioListarComponent implements OnInit {

  titulo: string = "Lista Funcionários";
  listaFuncionarios: Funcionario[] = [];
  constructor(@Inject('IFuncionarioServiceToken') private servico: IFuncionarioService) { }

  ngOnInit(): void {
    this.obterFuncionarios();
  }

  obterFuncionarios() {
    this.listaFuncionarios = this.servico.obterFuncionarios();
    //this.listaFuncionarios.push(new Funcionario(1, 'Gustavo', '12345678910', new Date(1999, 11, 4), 2))
    //this.listaFuncionarios.push(new Funcionario(2, 'Andrey', '12345678910', new Date(1999, 11, 4), 1))
    //this.listaFuncionarios.push(new Funcionario(3, 'Joao', '12345678910', new Date(1999, 11, 4), 2))
    //this.listaFuncionarios.push(new Funcionario(4, 'Rech', '12345678910', new Date(1999, 11, 4), 0))
  }

  converterCargo(tipo: number): string {
    return cargoType[tipo];
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString();
  }
}