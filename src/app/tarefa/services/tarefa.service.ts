import { Injectable } from "@angular/core";
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from "src/app/shared/model/Tarefa";

@Injectable({
    providedIn: "root"
})
export class TarefaService implements ITarefaService {

    constructor() {}

    public adicionarTarefa(tarefa: Tarefa) {
        console.log(tarefa);
    }

    public obterTarefa(tarefaId: number): Tarefa {
        var tarefa = new Tarefa(1, 'Tarefa1', 0, new Date(1999, 11, 4), 50, new Date(2021, 11, 6));
        return tarefa;
    }

    public atualizarTarefa(tarefa: Tarefa) {
        console.log(tarefa);
    }

    public obterTarefas(): Tarefa[] {

        var listaTarefas: Tarefa[] = [];

        listaTarefas.push(new Tarefa(1, 'Tarefa1', 0, new Date(1999, 11, 4), 50, new Date(2021, 11, 6)))
        listaTarefas.push(new Tarefa(2, 'Tarefa2', 1, new Date(1999, 11, 4), 75, new Date(2021, 11, 6)))
        listaTarefas.push(new Tarefa(3, 'Tarefa3', 2, new Date(1999, 11, 4), 100, new Date(2021, 11, 6)))
        listaTarefas.push(new Tarefa(4, 'Tarefa4', 2, new Date(1999, 11, 4), 20, new Date(2021, 11, 6)))
        
        return listaTarefas;
    }
    
    excluirTarefa(tarefaId: number): void {
        throw new Error('Method not implemented.');
    }
}