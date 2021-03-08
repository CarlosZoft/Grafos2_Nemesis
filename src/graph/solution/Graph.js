let monster = [
	'Minotauro',
	'Medusa',
	'Paris',
	'Polifermo',
	'Zeus',
	'Poseidon',
	'Elvira',
]

let save = [
	'euterpe',
	'hercules'
]

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(node) {
		this.adjList.set(node, {})
    }

    addEdge(nodeFather, nodeSon) {
		let weight = Math.floor(Math.random()*20)+1;
		this.adjList.get(nodeFather)?.set(nodeSon, weight);
	}

	printGraph() {
        var adjKeys = this.adjList.keys()

        for (var i of adjKeys) {
            var adjValues = this.adjList.get(i)
            var conc = ""

            for (var j in adjValues) {
                conc += j + "[" + j + "]" + " / "
            }

            console.log("\n" + i  + " -> " + conc + "\n")
        }
    }
}


const shortestDistanceNode = (distances, visited) => {
	let shortest = null;

	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};

const dijkstra = (graph) => {
	let distances = {};
	distances['euterpe'] = "Infinity";
	distances = Object.assign(distances, graph['hercules']);

  let parents = { 'euterpe': null };
	for (let child in graph['hercules']) {
		parents[child] = 'hercules';
	}

	let visited = [];

	let node = shortestDistanceNode(distances, visited);

	while (node) {
		let distance = distances[node];
		let children = graph[node];
		for (let child in children) {
			if (String(child) !== String('hercules')) {
				let newdistance = distance + children[child];
				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
				}
			}
		}
		visited.push(node);
		node = shortestDistanceNode(distances, visited);
	}

	let shortestPath = ['euterpe'];
	let parent = parents['euterpe'];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	let results = {
		distance: distances['euterpe'],
		path: shortestPath,
	};

	return results;
};


function generateGraph() {
	let graph = new Graph();
	const size = Math.floor(Math.random()*20);
	for (let i = 0; i < size; i++) {
		graph.addVertex(monster[Math.floor(Math.random()*7)]);
	}
	graph.addVertex(save[0]);
	graph.addVertex(save[1]);
	return graph;
}

function generateEdges(graph) {
	for(let characterName in graph) {
		console.log(characterName)
		let links = Math.floor(Math.random()*4) + 1;
		for (let i = 0; i < links; i++) {
			graph.addEdge(characterName, monster[Math.floor(Math.random()*7)]);
			console.log(graph)
		}
	}
}

const graph = {
	hercules: { Minotauro: 5, Medusa: 2 },
	Minotauro: { hercules: 1, Paris: 4, Polifermo: 2 },
	Medusa: { Minotauro: 8, Polifemo: 7, hercules: 1 },
	Paris: { Polifermo: 6, euterpe: 3 },
	Polifemo: { euterpe: 1 },
	euterpe: {},
};

let newGraph = generateGraph()
generateEdges(graph);
// const shortestPath = dijkstra(graph);
// console.log(shortestPath)