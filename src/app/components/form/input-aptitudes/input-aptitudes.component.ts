import { Component, input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-aptitudes',
  imports: [ReactiveFormsModule],
  templateUrl: './input-aptitudes.component.html',
  styleUrl: './input-aptitudes.component.scss'
})
export class InputAptitudesComponent implements OnInit {
  public control = input.required<FormControl<number>>();
  public aptitudesRestantes = input.required<number>();
  private maxValue: number | null = null;

  public ngOnInit(): void {
    // Récupérer la valeur max une seule fois à l'init
    this.maxValue = this.getMaxValue();

    this.control().valueChanges.subscribe(value => {
      if (value === null || value === undefined) return;

      if (value < 0) {
        this.control().setValue(0, { emitEvent: false });
        return;
      }

      if (this.maxValue !== null && value > this.maxValue) {
        this.control().setValue(this.maxValue, { emitEvent: false });
        return;
      }
    });
  }

  private getMaxValue(): number | null {
    const validators = this.control().validator;
    if (!validators) return null;

    // Tester avec une grande valeur pour déclencher l'erreur max
    const testControl = new FormControl(999999);
    const errors = validators(testControl);
    
    if (errors && errors['max']) {
      return errors['max'].max;
    }
    
    return null;
  }

  protected incrementValue(increment: number, event?: MouseEvent): void {
    let incrementAmount = increment;
    if(event?.shiftKey) {
      incrementAmount = increment > 0 ? increment * Math.min(10, this.aptitudesRestantes()) : increment * 10;
    } else if(event?.ctrlKey) {
      incrementAmount = increment > 0 ? this.aptitudesRestantes() : - (this.control().value || 0);
    }

    if(incrementAmount > 0 && this.aptitudesRestantes() <= 0) {
      return;
    }
    const currentValue = +this.control().value || 0;
    const value = currentValue + incrementAmount;

    
    this.control().setValue(value);
  }
}
