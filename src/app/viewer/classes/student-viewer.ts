import { Viewer } from './viewer';

export class StudentViewer extends Viewer {
  cost(basePrice: number): number {
    if (this.visits > 0 && this.visits % 3 === 0) {
      return basePrice * 0.5;
    }
    return basePrice;
  }
}
