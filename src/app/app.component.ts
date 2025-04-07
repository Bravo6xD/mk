import { Component } from '@angular/core';
import { IViewer } from './models/iviewer.interface';
import { ViewerFormComponent } from './viewer-form/viewer-form.component';
import { CommonModule } from '@angular/common';
import { ViewerService } from './services/viewer.service';
import { IonContent, IonHeader, IonCard, IonToolbar, IonCardHeader, IonTitle, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonTitle, IonCardHeader, IonToolbar, IonCard, IonHeader, IonContent, CommonModule, ViewerFormComponent],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  viewer: IViewer | null = null;
  finalPrice: number | null = null;

  constructor(private viewerService: ViewerService) {}

  onViewerData(data: { type: string; visits: number; price: number }) {
    this.viewer = this.viewerService.createViewer(data.type, data.visits);
    this.viewer.visit();
    this.finalPrice = this.viewer.cost(data.price);
  }
}
