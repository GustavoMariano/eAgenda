import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cargoType } from 'src/app/shared/enums/cargoEnum';
import { IFuncionarioService } from 'src/app/shared/interfaces/IFuncionarioService';
import { Funcionario } from 'src/app/shared/model/Funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-funcionario-editar',
  templateUrl: './funcionario-editar.component.html'
})
export class FuncionarioEditarComponent implements OnInit {
  titulo: string = 'Editar Funcionário';
  cadastroForm: FormGroup;
  funcionario: Funcionario;
  id: any;

  tipos = cargoType;
  cargos: any[];
  
  constructor(private _Activatedroute: ActivatedRoute, 
    @Inject('IFuncionarioServiceToken') private servico: IFuncionarioService) { }

  ngOnInit(): void {

    this.cargos = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.obterFuncionario();

    this.cadastroForm = new FormGroup({
      nome: new FormControl(this.funcionario.nome),
      cpf: new FormControl(this.funcionario.cpf),
      dataAdmissao: new FormControl(this.funcionario.dataAdmissao),
      cargo: new FormControl(this.funcionario.cargo)
    })
  }

  editarFuncionario() {
    this.funcionario = Object.assign({}, this.funcionario, this.cadastroForm.value);
    this.servico.atualizarFuncionario(this.funcionario);
  }

  obterFuncionario() {
    this.funcionario = this.servico.obterFuncionario(this.id);
  }
}
