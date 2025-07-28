import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator-app',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator-app.html',
  styleUrls: ['./calculator-app.css'],
})
export class CalculatorApp {
  value: string = '';
  result = '';
  calculating(val: string) {
    if (val === 'c') {
      this.value = '';
      this.result = '';
      return;
    }
    this.value += val;
  }
  totalResult() {
    try {
      this.result = eval(this.value);
      console.log(this.result);
      this.value = this.result;
    } catch (e) {
      this.result = 'error';
    }
  }
}
