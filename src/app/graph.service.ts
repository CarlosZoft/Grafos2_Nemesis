import { Injectable } from '@angular/core';
import maze from './mazes';
import dijkstra from '../graph/dijkstra';
import graph from '../graph/graphs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  getMaze() {
    const cloneMaze = [...maze];
    return cloneMaze;
  }

  getMinTreeValue() {
    const dijk = dijkstra(graph);
    return dijk;
  }
}
