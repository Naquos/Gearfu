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
    const currentValue = +this.control().value || 0;
    const incrementAmount = event?.shiftKey ? increment * 10 : increment;
    const value = currentValue + incrementAmount;
    
    this.control().setValue(value);
  }
}
