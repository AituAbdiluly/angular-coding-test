import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from '../data.service';

interface DataResponse {
  status: number;
  data: {
    answer: number;
  };
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  public result: number = 0;
  public expression = '';
  public errMessage = '';

  constructor(private dataService: DataService) {}

  public async calculate(): Promise<any> {
    if (/\(\d+\)|\d+[+]\d+/.test(this.expression)) { // If expression has '+' operator
      const [number1, number2] = this.expression.split('+');

      this.dataService
        .addNumbers(parseInt(number1), parseInt(number2))
        .subscribe((res: DataResponse) => {
          this.result = res.data.answer;
         
          this.errMessage = '';
          this.expression = '';
        });
    } else if (/\(\d+\)|\d+[-]\d+/.test(this.expression)) { // If expression has '-' operator
      const [number1, number2] = this.expression.split('-');

      this.dataService
        .subNumbers(parseInt(number1), parseInt(number2))
        .subscribe((res: DataResponse) => {
          this.result = res.data.answer;
        
          this.errMessage = '';
          this.expression = '';
        });
    } else { // If expression is not correct
      this.errMessage = 'Expression is incorrect!';
    }
  }

  public changeHandler(event: any) { // Set value from input to this.expression
    this.expression = event.target.value;
  }
}
