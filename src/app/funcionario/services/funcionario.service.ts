import { Injectable } from "@angular/core";
import { IFuncionarioService } from 'src/app/shared/interfaces/IFuncionarioService';
import { Funcionario } from "src/app/shared/model/Funcionario";

@Injectable({
    providedIn: "root"
})
export class FuncionarioService implements IFuncionarioService {

    constructor() {}

    public adicionarFuncionario(funcionario: Funcionario) {
        console.log(funcionario);
    }

    public obterFuncionario(funcionarioId: number): Funcionario {
        var funcionario = new Funcionario(1, 'Gustavo', '12345678910', new Date('2021/5/11'), 1);
        return funcionario;
    }

    public atualizarFuncionario(funcionario: Funcionario) {
        console.log(funcionario);
    }

    public obterFuncionarios(): Funcionario[] {

        var listaFuncionarios: Funcionario[] = [];

        listaFuncionarios.push(new Funcionario(1, 'Gustavo', '12345678910', new Date('2021/5/11'), 1));
        listaFuncionarios.push(new Funcionario(2, 'Rech', '12345678910', new Date('2021/5/11'), 2));
        listaFuncionarios.push(new Funcionario(3, 'Joao', '12345678910', new Date('2021/5/11'), 1));
        listaFuncionarios.push(new Funcionario(4, 'Andrey', '12345678910', new Date('2021/5/11'), 0));
        
        return listaFuncionarios;
    }
    
    excluirFuncionario(funcionarioId: number): void {
        throw new Error('Method not implemented.');
    }
}