import { IViewer } from '../../models/iviewer.interface';


export abstract class Viewer implements IViewer {
    public visits: number;
  
    constructor(visits: number = 0) {
      this.visits = visits;
    }
  
    public visit(): void {
      this.visits++;
    }
  
    public getVisits(): number {
      return this.visits;
    }
  
    public abstract cost(basePrice: number): number;
  }
  
