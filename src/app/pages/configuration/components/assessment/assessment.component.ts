import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssessmentConfiguration } from '../../models/assessment-configuration.model';
import { Store } from '@ngrx/store';
import { DataElementList } from '../../models/data-element.model';
import { Observable } from 'rxjs';
import { getAllDataElements } from 'src/app/store/selectors';
import { State } from 'src/app/store/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;

  assessmentForm;
  indicator = 'Enter indicator';
  dataElement;
  possibleMaximumValue = 'Enter the possible maximum value';
  formDataArray: any[] = [];

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.assessmentForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl('[Select Data Element]'),
      possibleMaxValue: new FormControl()
    });
  }

  onClickDone() {
    //   this.formDataArray.push({
    //     indicator: data.indicator,
    //     dataElementId: data.dataElement,
    //     possibleMaxValue: data.possibleMaxValue
    //   });
    console.log('DONE!');

    this.router.navigate(['/configuration/assessment']);
  }
}
