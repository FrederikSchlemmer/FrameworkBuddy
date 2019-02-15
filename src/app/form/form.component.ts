import { Component, OnInit } from '@angular/core';
import { FormService, FormContent } from '../shared/services/form.service'
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formContent: FormContent;
  contentLoaded: Promise<boolean>;

  constructor(private formService: FormService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.formService.resetForm();
    this.matIconRegistry.addSvgIcon(
      "survey",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/survey.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "error",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/cancel.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "like",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/like.svg")
    );
    this.getFormContent();
  }

  ngOnInit() { }

  getFormContent() {
    this.formService.getFormContent().subscribe(formContent => {
      setTimeout(() => {
        this.formContent = formContent;
        this.contentLoaded = Promise.resolve(true);
      },
        2000);
    })
  }

  isFormValid() {
    if(Object.keys(this.formService.mainForm.controls).length != 0){
      return this.formService.mainForm.valid;
    } else {
      return false;
    }
  }
}
