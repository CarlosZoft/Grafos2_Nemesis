const mazes = [{
    Minotauro: { Poseidon: 9, hercules: 11 },
    Medusa: { euterpe: 6 },
    Paris: { Zeus: 2 },
    Polifermo: { Zeus: 6 },
    Zeus: { Poseidon: 8, Elvira: 14, hercules: 4 },
    Poseidon: { Elvira: 20, Polifermo: 20, Paris: 6 },
    Elvira: { Minotauro: 13, euterpe: 3 },
    euterpe: {},
    hercules: { Poseidon: 5 } // Com solução
  },
  {
    Minotauro: { Zeus: 11, euterpe: 18 },
    Medusa: { hercules: 19 },
    Paris: { Elvira: 6 },
    Polifermo: { Poseidon: 19 },
    Zeus: { Medusa: 11 },
    Poseidon: { Minotauro: 20 },
    Elvira: { Medusa: 11, euterpe: 9 },
    euterpe: {},
    hercules: { euterpe: 20 } // Com solução ao lado
  },
  {
    Minotauro: { Polifermo: 19 },
    Medusa: { Polifermo: 18, Poseidon: 8 },
    Paris: { hercules: 17 },
    Polifermo: { euterpe: 15 },
    Zeus: { hercules: 5 },
    Poseidon: { hercules: 20, Elvira: 20 },
    Elvira: { Zeus: 16 },
    euterpe: {},
    hercules: { Elvira: 13 } // Sem solução
  },
  {
    Minotauro: { Elvira: 11, Zeus: 16 },
    Medusa: { euterpe: 19, hercules: 19 },
    Paris: { Medusa: 6 },
    Polifermo: { euterpe: 11, hercules: 14 },
    Zeus: { Medusa: 16, Poseidon: 19, Elvira: 16 },
    Poseidon: { Elvira: 17, Minotauro: 1, Polifermo: 6 },
    Elvira: { Polifermo: 9 },
    euterpe: {},
    hercules: { Minotauro: 10, Zeus: 18 } // Com solução
  },
  {
    Minotauro: { Medusa: 16, Elvira: 10, Paris: 1 },
    Medusa: { Polifermo: 2, Zeus: 20, Poseidon: 3 },
    Paris: { Elvira: 10, euterpe: 14, hercules: 18 },
    Polifermo: { euterpe: 7, Zeus: 20 },
    Zeus: { Paris: 13, Minotauro: 6 },
    Poseidon: { hercules: 6, Zeus: 12 },
    Elvira: { Polifermo: 10, hercules: 14 },
    euterpe: {},
    hercules: { Zeus: 12 } // Com solução
  }
]  

export default mazes;