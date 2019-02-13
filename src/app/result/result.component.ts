import { Component, OnInit } from '@angular/core';
import { ResultService, FormResult, CalculatedResult } from '../shared/services/result.service';
import { FormService } from '../shared/services/form.service';
import { FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  contentLoaded: Promise<boolean>;
  formResult: FormResult;
  mainFormGroup: FormGroup;
  calculatedResult: CalculatedResult;

  constructor(private resultService: ResultService, private formService: FormService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "error",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/cancel.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "angular",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/angular.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "react",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/react.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "vue",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/vue.svg")
    );
  }

  ngOnInit() {
    this.getFormGroup();
    this.getFormResult();
  }

  getFormResult(){
    this.resultService.getFormResult().subscribe(formResult => {
      setTimeout(() => {
        this.formResult = formResult;
        this.calculateResult();
        console.log(this.calculatedResult)
        this.contentLoaded = Promise.resolve(true);
      },
        2000);
    })
  }

  calculateResult(){
    if(this.isFormValid()){
      this.calculatedResult = this.resultService.calculateResult(this.mainFormGroup, this.formResult.bewertungskriterien);
    }
  }

  isFormValid(){
    return this.mainFormGroup.touched && this.mainFormGroup.valid;
  }

  getFormGroup(){
    this.mainFormGroup = this.formService.getFormGroup();
  }
}
