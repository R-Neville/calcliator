import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  results: number[] = [0];
  tokens: string[] = [];

  reset(): void {
    this.results = [0];
    this.tokens = [];
  }
}
