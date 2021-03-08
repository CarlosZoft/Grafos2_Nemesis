import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grafos2-nemesis';
  maze = [[{ text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Hercules', type: 'hero', color: '#ABDFDE', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 2
  [{ text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 3
  [{ text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Minotauro', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 11, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 9, Elvira: 13, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Paris', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 2, Poseidon: 6, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 4
  [{ text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 5
  [{ text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Poseidon', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 5, Minotauro: 9, Medusa: 0, Paris: 6, Polifermo: 20, Zeus: 8, Poseidon: 0, Elvira: 20, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 6
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Elvira', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 0, Minotauro: 13, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 14, Poseidon: 20, Elvira: 0, Euterpe: 3} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Polifermo', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 20, Poseidon: 6, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 7
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 8
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 9
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 10
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Zeus', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 4, Minotauro: 0, Medusa: 0, Paris: 2, Polifermo: 6, Zeus: 0, Poseidon: 8, Elvira: 14, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 11
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 12
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 13
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }],
  // 14
  [{ text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Euterpe', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 6, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 3, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Medusa', type: 'monster', color: '#FDBAFE', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 6} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} },
  { text: 'Parede', type: 'wall', color: '#000000', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} }]];
  position = { row: 7, col: 0 };
  valueTotal = 0;
  lastMonster = 'Hercules';

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

      this.maze[this.position.col][this.position.row] = { text: 'Vazio', type: 'empty', color: '#FEABCD', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} };
      this.maze[newPosition.col][newPosition.row] = { text: 'Hercules', type: 'hero', color: '#ABDFDE', value: {Vazio: 0, Hercules: 0, Minotauro: 0, Medusa: 0, Paris: 0, Polifermo: 0, Zeus: 0, Poseidon: 0, Elvira: 0, Euterpe: 0} };
      this.position = newPosition;
    }
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
