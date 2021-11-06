import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})
export class TarefaListarComponent implements OnInit {
  titulo: string = 'Lista de Tarefas';

  listaTarefas: Tarefa[] = [];
  constructor() { }

  ngOnInit(): void {
    this.obterTarefas();
  }

  obterTarefas() {
    this.listaTarefas.push(new Tarefa(1, 'Tarefa1', 0, new Date(1999, 11, 4), 50, new Date(2021, 11, 6)))
    this.listaTarefas.push(new Tarefa(2, 'Tarefa2', 1, new Date(1999, 11, 4), 75, new Date(2021, 11, 6)))
    this.listaTarefas.push(new Tarefa(3, 'Tarefa3', 2, new Date(1999, 11, 4), 100, new Date(2021, 11, 6)))
    this.listaTarefas.push(new Tarefa(4, 'Tarefa4', 2, new Date(1999, 11, 4), 20, new Date(2021, 11, 6)))
  }

  converterPrioridade(tipo: number): string {
    if(tipo == 0)
      return "Baixa";
    if(tipo == 1)
      return "Normal";
    if(tipo == 2)
      return "Alta";

     return "Indefinido";
  }
}
