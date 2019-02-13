import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

export interface FormContent {
  themengebiete: FormTopic[];
}

export interface FormTopic {
  name: string;
  beschreibung: string;
  leitfragen: FormQuestion[];
}

export interface FormQuestion {
  frage: string;
  schluessel: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  mainForm: FormGroup = new FormGroup({});

  constructor(private http: HttpClient) { }

  getFormContent() {
    return this.http.get<FormContent>('http://localhost:4200/assets/formContent.json');
  }

  registerNewControl(formControl: FormControl, nameControl: string) {
    this.mainForm.addControl(nameControl, formControl)
  }

  getFormGroup(){
    return this.mainForm;
  }

  resetForm(){
    this.mainForm.reset();
  }
}
