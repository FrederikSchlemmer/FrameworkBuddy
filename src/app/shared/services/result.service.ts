import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

export interface FormResult {
  bewertungskriterien: ResultInfo[];
}

export interface ResultInfo {
  schluessel: string;
  praxisRelevanz: number;
  bewertungen: ResultFrameworkRating[];
}

export interface ResultFrameworkRating {
  framework: string;
  bewertung: number;
}

export interface CalculatedResult {
  angular: number,
  react: number,
  vue: number
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getFormResult() {
    return this.http.get<FormResult>('http://localhost:4200/assets/formResult.json');
  }

  calculateResult(formGroup: FormGroup, resultInfos: ResultInfo[]): CalculatedResult{
    var angularScore: number = 0;
    var reactScore: number = 0;
    var vueScore: number = 0;
    for(let resultInfo of resultInfos){
      let currentValue: number = formGroup.get(resultInfo.schluessel).value;
      let praxisRelevanz: number = resultInfo.praxisRelevanz;
      for(let bewertung of resultInfo.bewertungen){
      let framework: String = bewertung.framework;

      let questionScore: number = (praxisRelevanz * bewertung.bewertung);
      let score: number;
      if(questionScore > 0) {
        score = currentValue * questionScore;
      } else {
        score = questionScore;
      }
      
        switch(framework){
          case "Angular":
          angularScore += score;
          break;
          case "React":
          reactScore += score;
          break;
          case "Vue":
          vueScore += score;
          break;
        }
      }
    }
    return {
      angular: angularScore,
      react: reactScore,
      vue: vueScore
  }; 
  }

}

