import { Observable } from "rxjs/internal/Observable";
import { TarefaCreateViewModel } from "src/app/shared/viewModels/Tarefa/TarefaCreateViewModel";
import { TarefaDetailsViewModel } from "src/app/shared/viewModels/Tarefa/TarefaDetailsViewModel";
import { TarefaEditViewModel } from "src/app/shared/viewModels/Tarefa/TarefaEditViewModel";
import { TarefaListViewModel } from "src/app/shared/viewModels/Tarefa/TarefaListViewModel";

export interface IHttpTarefaService {

    adicionarTarefa(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel>

    obterTarefas(): Observable<TarefaListViewModel[]>

    obterTarefa(tarefaId: number): Observable<TarefaDetailsViewModel>

    atualizarTarefa(tarefa: TarefaEditViewModel): Observable<TarefaEditViewModel>

    excluirTarefa(tarefaId: number): Observable<number>
}