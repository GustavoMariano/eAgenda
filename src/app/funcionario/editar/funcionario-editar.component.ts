import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/shared/model/Funcionario';

@Component({
  selector: 'app-funcionario-editar',
  templateUrl: './funcionario-editar.component.html'
})
export class FuncionarioEditarComponent implements OnInit {
  titulo: string = 'Editar Funcionário';
  cadastroForm: FormGroup;
  funcionario: Funcionario;
  id: any;
  
  constructor(private _Activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activateroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.obterFuncionario();

    this.cadastroForm = new FormGroup({
      nome: new FormControl(this.funcionario.nome),
      cpf: new FormControl(this.funcionario.cpf),
      dataAdmissao: new FormControl(this.funcionario.dataAdmissao.toISOString().substring(0, 10)),
      cargo: new FormControl(this.funcionario.cargo)
    });
  }

  editarFuncionario(){

  }

  obterFuncionario(){
    this.funcionario = new Funcionario(1, 'Gustavo', '1234567910', new Date('1999/4/11'), 2);
  }
}
