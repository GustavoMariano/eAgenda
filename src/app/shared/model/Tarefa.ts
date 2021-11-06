import { NumberFormatStyle } from "@angular/common";

export class Tarefa {
    id: number;
    titulo: string;
    prioridade: number;
    dataCriacao: Date;
    percentual: number;
    dataConclusao: Date;

    constructor(titulo: string, prioridade: number, dataCriacao: Date, percentual: number, dataConclusao: Date) {
        this.titulo = titulo;
        this.prioridade = prioridade;
        this.dataCriacao = dataCriacao;
        this.percentual = percentual;
        this.dataConclusao = dataConclusao;
    }
}
