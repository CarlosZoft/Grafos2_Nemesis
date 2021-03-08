import { Component, HostListener, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grafos2-nemesis';
  maze = [[{ text: '', type: '', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0}}]];
  position = { row: 7, col: 0 };
  valueTotal = 0;
  djikstraValue = {distance: 1, path: ['']};
  lastMonster = 'Hercules';

  constructor(private graphService: GraphService) {}

  ngOnInit() {
    this.restartMaze();
    this.djikstraValue = this.graphService.getMinTreeValue();
  }

  restartMaze() {
    this.position = { row: 7, col: 0 };
    this.valueTotal = 0;
    this.lastMonster = 'Hercules';
    this.maze = this.graphService.getMaze();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let newPosition = { ...this.position };

    event.preventDefault();

    if (event.key == 'ArrowRight' && newPosition.row < this.maze[newPosition.col].length - 1) {
      newPosition.row++;
    } else if(event.key == 'ArrowLeft' && newPosition.row > 0) {
      newPosition.row--;
    } else if(event.key == 'ArrowUp' && newPosition.col > 0) {
      newPosition.col--;
    } else if(event.key == 'ArrowDown' && newPosition.col < this.maze.length - 1) {
      newPosition.col++;
    }

    if (this.maze[newPosition.col][newPosition.row].type != 'wall') {
      let monsterOrEmpty = this.maze[newPosition.col][newPosition.row];

      if (monsterOrEmpty.type == 'monster') {
        this.valueTotal += this.readValueOfMonster(newPosition);
        this.lastMonster = monsterOrEmpty.text;
      } else {
        this.valueTotal += monsterOrEmpty.value.Vazio;
      }

      if (monsterOrEmpty.text == 'Euterpe') {
        if (this.valueTotal == this.djikstraValue.distance) {
          const path = this.djikstraValue.path.join(', ');
          this.showSuccess(path);
        } else {
          this.showCompleteMazeError();
        }
      } else if (this.valueTotal > this.djikstraValue.distance) {
        this.showError();
      }

      this.maze[this.position.col][this.position.row] = { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} };
      this.maze[newPosition.col][newPosition.row] = { text: 'Hercules', type: 'hero', color: '#ABDFDE', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} };
      this.position = newPosition;
    }
  }

  showSuccess(path: string) {
    Swal.fire({
      title: 'Você conseguiu!!',
      text: 'Você completou o labirinto com o menor valor. O caminho que você percorreu foi: ' + path,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Começar de novo!',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
        this.restartMaze();
      } else {
        
      }
    });
  }

  showError() {
    Swal.fire({
      title: 'Não foi dessa vez =/',
      text: 'Você ultrapassou a distância minima do labirinto.',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Começar de novo!',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
        this.restartMaze();
      }
    });
  }

  showCompleteMazeError() {
    Swal.fire({
      title: 'O Nemesis pegou a Euterpe',
      text: 'Você alcançou a Euterpe, mas não a tempo.',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Começar de novo!',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
        this.restartMaze();
      }
    });
  }

  readValueOfMonster(position: { col: number, row: number }) {
    let monsterOrEmpty = this.maze[position.col][position.row];

    switch(this.lastMonster) {
      case 'Hercules':
        return monsterOrEmpty.value.Hercules;
      case 'Minotauro':
        return monsterOrEmpty.value.Minotauro;
      case 'Medusa':
        return monsterOrEmpty.value.Medusa;
      case 'Paris':
        return monsterOrEmpty.value.Paris;
      case 'Polifermo':
        return monsterOrEmpty.value.Polifermo;
      case 'Zeus':
        return monsterOrEmpty.value.Zeus;
      case 'Poseidon':
        return monsterOrEmpty.value.Poseidon;
      case 'Elvira':
        return monsterOrEmpty.value.Elvira;
      default:
        return 0;
    }
  }
}
