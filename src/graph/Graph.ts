// let monster = [
// 	'Minotauro',
// 	'Medusa',
// 	'Paris',
// 	'Polifermo',
// 	'Zeus',
// 	'Poseidon',
// 	'Elvira',
// ]

// let save = [
// 	'euterpe',
// 	'hercules'
// ]

class Graph {
    adjList:Map<string, Map<string,number>>;
    constructor() {
        this.adjList = new Map();
    }

    addVertex(node: string) {
		this.adjList.set(node, new Map);
    }

    addEdge(nodeFather:string, nodeSon:string) {
		this.adjList.get(nodeFather)?.set(nodeSon, Math.floor(Math.random()*20)+1);
	}

	printGraph() {
        var adjKeys = this.adjList.keys()

        for (var i of adjKeys) {
            var adjValues = this.adjList.get(i)
            var conc = ""

            for (var j of adjValues) {
                conc += j.name + "[" + j.key + "]" + " / "
            }

            console.log("\n" + i.name + "[" + i.key + "]" + " -> " + conc + "\n")
        }
    }
}


const shortestDistanceNode = (distances:Array<Map<string,Map<string, number>>>, visited:Array<Map<string,Map<string, number>>>) => {
	let shortest:string = null;

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


// function generateGraph() {
// 	let graph = new Graph();
// 	const size = Math.floor(Math.random()*20)
// 	for (let i = 0; i < size; i++) {
// 		graph.addVertex(monster[Math.floor(Math.random()*7)])
// 	}
// }

const graph = {
	hercules: { Minotauro: 5, Medusa: 2 },
	Minotauro: { hercules: 1, Paris: 4, Polifermo: 2 },
	Medusa: { Minotauro: 8, Polifemo: 7, hercules: 1 },
	Paris: { Polifermo: 6, euterpe: 3 },
	Polifemo: { euterpe: 1 },
	euterpe: {},
};

// let newGraph = generateGraph()

const shortestPath = dijkstra(graph);
console.log(shortestPath)