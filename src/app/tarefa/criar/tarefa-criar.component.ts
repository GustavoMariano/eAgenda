import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { TarefaCreateViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaCreateViewModel';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
})

export class tarefaCriarComponent implements OnInit {
  titulo: string = 'Cadastro de Tarefa';
  cadastroForm: FormGroup;
  tarefa: TarefaCreateViewModel;

  tipos = prioridadeType;
  prioridade: any[]

  constructor(private router: Router, @Inject('IHttpTarefaServiceToken') private servico: IHttpTarefaService) {
    this.prioridade = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      prioridade: new FormControl('')
    })
  }

  ngOnInit(): void {

    /*this.prioridade = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      prioridade: new FormControl(''),
      dataCriacao: new FormControl(''),
      percentual: new FormControl(''),
      dataConclusao: new FormControl('')
    })*/
  }

  adicionarTarefa() {
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
    this.servico.adicionarTarefa(this.tarefa).subscribe(() => {this.router.navigate(['tarefa/listar']);});
  }

  cancelar() {
    this.router.navigate(['tarefa/listar']);
  }
}
