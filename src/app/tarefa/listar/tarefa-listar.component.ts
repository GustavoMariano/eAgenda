import { Component, Inject, OnInit } from '@angular/core';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { TarefaListViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaListViewModel';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})

export class TarefaListarComponent implements OnInit {

  titulo: string = "Lista Funcionários";
  listaTarefas: TarefaListViewModel[] = [];
  constructor(@Inject('ITarefaServiceToken') private servico: IHttpTarefaService) { }

  ngOnInit(): void {
    this.obterTarefas();
  }

  obterTarefas() {

    this.servico.obterTarefas()
      .subscribe((tarefas: TarefaListViewModel[]) => {
        this.listaTarefas = tarefas;
      });

    //this.listaTarefas = this.servico.obterTarefas();
    //this.listaTarefas.push(new Tarefa(1, 'Tarefa1', 0, new Date(1999, 11, 4), 50, new Date(2021, 11, 6)))
    //this.listaTarefas.push(new Tarefa(2, 'Tarefa2', 1, new Date(1999, 11, 4), 75, new Date(2021, 11, 6)))
    //this.listaTarefas.push(new Tarefa(3, 'Tarefa3', 2, new Date(1999, 11, 4), 100, new Date(2021, 11, 6)))
    //this.listaTarefas.push(new Tarefa(4, 'Tarefa4', 2, new Date(1999, 11, 4), 20, new Date(2021, 11, 6)))
  }

  converterPrioridade(tipo: number): string {
    return prioridadeType[tipo];
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString();
  }
}