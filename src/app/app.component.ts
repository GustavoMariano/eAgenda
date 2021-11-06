import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eAgenda';
  funcionarioSelecionado: number = 1;
  tarefaSelecionada: number = 1;
}
