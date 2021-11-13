import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cargoType } from 'src/app/shared/enums/cargoEnum';
import { IFuncionarioService } from 'src/app/shared/interfaces/IFuncionarioService';
import { Funcionario } from 'src/app/shared/model/Funcionario';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html'
})

export class FuncionarioCriarComponent implements OnInit {
  titulo: string = "Cadastrar Funcionário";
  cadastroForm: FormGroup;
  funcionario: Funcionario;

  tipos = cargoType;
  cargos: any[]

  constructor(@Inject('IFuncionarioServiceToken') private servico: IFuncionarioService) { }

  ngOnInit(): void {

    this.cargos = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));

    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      dataAdmissao: new FormControl(''),
      cargo: new FormControl('')
    })
  }

  adicionarFuncionario() {

    this.funcionario = Object.assign({}, this.funcionario, this.cadastroForm.value);
    this.servico.adicionarFuncionario(this.funcionario)

    this.cadastroForm.reset();
  }

}
