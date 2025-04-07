export interface IViewer {
    visits: number;
    visit(): void;
    cost(basePrice: number): number;
  }
  