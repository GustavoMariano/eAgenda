import { Component,Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html'
})
export class TarefaEditarComponent implements OnInit {
  titulo: string = 'Edita de Tarefa';
  cadastroForm: FormGroup;
  tarefa: Tarefa;
  id: any;

  tipos = prioridadeType;
  prioridade: any[];

  constructor(private _Activatedroute: ActivatedRoute, 
    @Inject('ITarefaServiceToken') private servico: ITarefaService) { }

  ngOnInit(): void {

    this.prioridade = Object.keys(this.tipos).filter(t => !isNaN(Number(t)));
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.obterTarefa();

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(this.tarefa.titulo),
      prioridade: new FormControl(this.tarefa.prioridade),
      dataCriacao: new FormControl(this.tarefa.dataCriacao),
      percentual: new FormControl(this.tarefa.percentual),
      dataConclusao: new FormControl(this.tarefa.dataConclusao)
    })
  } 

  editarTarefa() {
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
    this.servico.atualizarTarefa(this.tarefa);
  }

  obterTarefa(){
    this.tarefa = this.servico.obterTarefa(this.id);
  }
}
