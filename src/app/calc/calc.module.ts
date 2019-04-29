import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorUiComponent } from './calculator-ui/calculator-ui.component';

@NgModule({
	declarations: [CalculatorUiComponent],
	imports: [
		CommonModule
	],
	exports: [
		CalculatorUiComponent,
		CalcModule
	]
})
export class CalcModule { }
