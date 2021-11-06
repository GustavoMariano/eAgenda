import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html'
})
export class TarefaEditarComponent implements OnInit {
  titulo: string = 'Edita de Tarefa';
  cadastroForm: FormGroup;
  tarefa: Tarefa;
  id: any;

  constructor(private _Activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activateroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.obterTarefa();

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(this.tarefa.titulo),
      prioridade: new FormControl(this.tarefa.prioridade),
      dataCriacao: new FormControl(this.tarefa.dataCriacao.toISOString().substring(0, 10)),
      percentual: new FormControl(this.tarefa.percentual),
      dataConclusao: new FormControl(this.tarefa.dataConclusao.toISOString().substring(0, 10))
    })
  } 

  editarTarefa() {

  }

  obterTarefa(){
    this.tarefa = new Tarefa(1, 'Tarefa1', 0, new Date(1999, 11, 4), 50, new Date(2021, 11, 6));
  }
}
