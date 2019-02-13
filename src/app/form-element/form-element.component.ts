import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService, FormQuestion } from '../shared/services/form.service';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  @Input() firstStep: boolean;
  @Input() formQuestions: FormQuestion[];
  stepFormGroup: FormGroup;
  step = 0;

  constructor(private _formBuilder: FormBuilder,
    private formService: FormService) { }

  ngOnInit() {
    this.stepFormGroup = new FormGroup({});
    this.generateAndRegisterControls();
  }

  generateAndRegisterControls() {
    for (let formQuestion of this.formQuestions) {
      var control = new FormControl('', Validators.required);
      this.stepFormGroup.addControl(formQuestion.schluessel, control);
      this.formService.registerNewControl(control, formQuestion.schluessel);
    }
  }
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
