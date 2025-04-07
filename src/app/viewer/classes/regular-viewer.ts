import { Viewer } from './viewer';

export class RegularViewer extends Viewer {
  cost(basePrice: number): number {
    const discount = Math.min(Math.floor(this.visits / 10), 20);
    return basePrice * (1 - discount / 100);
  }
}
