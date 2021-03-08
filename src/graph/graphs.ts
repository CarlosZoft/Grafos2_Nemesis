const graph = {
    Minotauro: { Poseidon: 9, Hercules: 11 },
    Medusa: { Euterpe: 6 },
    Paris: { Zeus: 2 },
    Polifermo: { Zeus: 6 },
    Zeus: { Poseidon: 8, Elvira: 14, Hercules: 4 },
    Poseidon: { Elvira: 20, Polifermo: 20, Paris: 6 },
    Elvira: { Minotauro: 13, Euterpe: 3 },
    Euterpe: {},
    Hercules: { Poseidon: 5 } // Com solução
  };

export default graph;
