import { Component } from '@angular/core';
import { create, all, MathJsStatic } from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  results: number[] = [0];
  tokens: string[] = [];
  math: MathJsStatic;

  constructor() {
    this.math = create(all, {});
  }

  get calcString() {
    return this.tokens.join("")
  }

  reset(): void {
    this.results = [0];
    this.tokens = [];
  }

  undo(): void {
    this.tokens.pop();
  }

  compute(): void {
    this.results.unshift(this.math.evaluate(this.calcString));
  }
}
