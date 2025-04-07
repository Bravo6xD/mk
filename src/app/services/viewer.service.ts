import { Injectable } from '@angular/core';
import { IViewer } from '../models/iviewer.interface';
import { RegularViewer } from '../viewer/classes/regular-viewer';
import { StudentViewer } from '../viewer/classes/student-viewer';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  createViewer(type: string, visits: number): IViewer {
    if (type === 'regular') {
      return new RegularViewer(visits);
    } else if (type === 'student') {
      return new StudentViewer(visits);
    } else {
      throw new Error('Unknown viewer type');
    }
  }
}
