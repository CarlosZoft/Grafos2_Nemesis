import mazes from './mazes';
import MazeInterface from './MazeInterface';

const shortestDistanceNode = (distances:any, visited:string[]):string => {
	let shortest:string = '';

	for (let node in distances) {
        if (shortest === '') {
            let currentIsShortest = shortest === '' || distances[node] < distances[shortest];
            if (currentIsShortest && !visited.includes(node)) {
                shortest = node;
            }
        }
	}
	return shortest;
};

const dijkstra = (graph:MazeInterface) => {
	let distances:any = Object.assign({'euterpe': 'Infinity'}, graph['hercules']);
	let parents = Object.assign({ 'euterpe': null });

    for (let child in graph['hercules']) {
        parents[child] = 'hercules'
	}
	
	let visited:string[] = [];
	
	let node = shortestDistanceNode(distances, visited);

	while (node !== '') {
		let distance = distances[node];
		let children = graph[node];
		// console.log(node);
		for (let child in children) {
			// console.log("AQUI")
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

export default dijkstra;