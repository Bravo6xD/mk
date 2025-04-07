import { TestBed } from '@angular/core/testing';
import { ViewerService } from '../services/viewer.service';
import { RegularViewer } from '../viewer/classes/regular-viewer';
import { StudentViewer } from '../viewer/classes/student-viewer';

describe('ViewerService', () => {
  let service: ViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new ViewerService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a RegularViewer instance', () => {
    const viewer = service.createViewer('regular', 5);
    expect(viewer).toBeInstanceOf(RegularViewer);
    expect(viewer.visits).toBe(5);

  });

  it('should create a StudentViewer instance', () => {
    const viewer = service.createViewer('student', 3);
    expect(viewer).toBeInstanceOf(StudentViewer);
    expect(viewer.visits).toBe(3);
  });

  it('should correctly calculate RegularViewer cost with discount', () => {
    const viewerFromFactory = service.createViewer('regular', 200);
    expect(viewerFromFactory.cost(100)).toBe(80); 
  });
  
  
  it('should correctly calculate StudentViewer cost with 50% discount on every 3rd visit', () => {
    const viewer = service.createViewer('student', 3);
    const cost = viewer.cost(200);
    expect(cost).toBe(100); 
  });

  it('should throw error for unknown type', () => {
    expect(() => service.createViewer('vip', 0)).toThrowError('Unknown viewer type');
  });
});
