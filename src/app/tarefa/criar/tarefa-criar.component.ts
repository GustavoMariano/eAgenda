import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html'
})

export class tarefaCriarComponent implements OnInit {
  titulo: string = 'Cadastro de Tarefa';
  cadastroForm: FormGroup;
  tarefa: Tarefa;

  tipos = prioridadeType;
  prioridade: any[]

  constructor(@Inject('ITarefaServiceToken') private servico: ITarefaService) { }

  ngOnInit(): void {

    this.prioridade = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      prioridade: new FormControl(''),
      dataCriacao: new FormControl(''),
      percentual: new FormControl(''),
      dataConclusao: new FormControl('')
    })
  }

  adicionarTarefa() {
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
    this.servico.adicionarTarefa(this.tarefa)

    this.cadastroForm.reset();
  }

}
