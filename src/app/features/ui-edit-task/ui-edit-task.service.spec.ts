/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UiEditTaskService } from './ui-edit-task.service';

describe('Service: UiEditTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiEditTaskService]
    });
  });

  it('should ...', inject([UiEditTaskService], (service: UiEditTaskService) => {
    expect(service).toBeTruthy();
  }));
});
