import MazeInterface from './MazeInterface';

const shortestDistanceNode = (cost:any, visited:string[]):string => {
	let shortest:string = '';

	for (let node in cost) {
        if (shortest === '') {
            let currentIsShortest = shortest === '' || cost[node] < cost[shortest];
            if (currentIsShortest && !visited.includes(node)) {
                shortest = node;
            }
        }
	}
	return shortest;
};

const dijkstra = (graph:MazeInterface) => {
	let cost:any = Object.assign({'Euterpe': 'Infinity'}, graph['Hercules']);
	let parents = Object.assign({ 'Euterpe': null });

    for (let child in graph['Hercules']) {
        parents[child] = 'Hercules'
	}
	
	let visited:string[] = [];
	
	let node = shortestDistanceNode(cost, visited);

	while (node !== '') {
		let distance = cost[node];
		let children = graph[node];
		for (let child in children) {
			if (String(child) !== String('Hercules')) {
				let newdistance = distance + children[child];
				if (!cost[child] || cost[child] > newdistance) {
					cost[child] = newdistance;
					parents[child] = node;
				}
			}
		}
		visited.push(node);
		node = shortestDistanceNode(cost, visited);
	}
	
	let shortestPath = ['Euterpe'];
	let parent = parents['Euterpe'];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	let results = {
		distance: cost['Euterpe'],
		path: shortestPath,
	};

	return results;
};

export default dijkstra;