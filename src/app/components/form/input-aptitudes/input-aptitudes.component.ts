import { ChangeDetectionStrategy, Component, computed, effect, input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-input-aptitudes',
  imports: [ReactiveFormsModule],
  templateUrl: './input-aptitudes.component.html',
  styleUrl: './input-aptitudes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAptitudesComponent implements OnInit {
  public control = input<FormControl<number>>();
  public fieldControl = input<FieldTree<number>>();
  public aptitudesRestantes = input.required<number>();

  protected readonly currentValueStr = computed(() => {
    const field = this.fieldControl();
    if (field) return String(field().value() ?? 0);
    return String(this.control()?.value ?? 0);
  });

  protected onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const parsed = parseInt(input.value, 10);
    const clamped = !isNaN(parsed)
      ? this.clampValue(parsed)
      : this.currentValue();
    input.value = String(clamped);
    this.setValue(clamped);
  }

  private maxValue: number | null = null;

  constructor() {
    effect(() => {
      const field = this.fieldControl();
      if (!field) return;
      this.maxValue = this.getMaxValue();
      this.enforceBounds(field().value());
    });
  }

  public ngOnInit(): void {
    this.maxValue = this.getMaxValue();

    const control = this.control();
    if (control) {
      control.valueChanges.subscribe(value => this.enforceBounds(value));
    }
  }

  private getMaxValue(): number | null {
    const field = this.fieldControl();
    if (field) {
      return field().max?.() ?? null;
    }

    const control = this.control();
    if (!control?.validator) return null;

    const testControl = new FormControl(999999);
    const errors = control.validator(testControl);

    if (errors && errors['max']) {
      return errors['max'].max as number;
    }

    return null;
  }

  protected incrementValue(increment: number, event?: MouseEvent): void {
    let incrementAmount = increment;
    const currentValue = this.currentValue();

    if (event?.shiftKey) {
      incrementAmount = increment > 0 ? increment * Math.min(10, this.aptitudesRestantes()) : increment * 10;
    } else if (event?.altKey) {
      incrementAmount = increment > 0 ? this.aptitudesRestantes() : -currentValue;
    }

    if (incrementAmount > 0 && this.aptitudesRestantes() <= 0) {
      return;
    }

    const value = currentValue + incrementAmount;
    this.setValue(value);
  }

  private enforceBounds(rawValue: number | null | undefined): void {
    if (rawValue === null || rawValue === undefined || Number.isNaN(rawValue)) {
      return;
    }

    if (rawValue < 0) {
      this.setValue(0);
      return;
    }

    if (this.maxValue !== null && rawValue > this.maxValue) {
      this.setValue(this.maxValue);
    }
  }

  private currentValue(): number {
    const field = this.fieldControl();
    if (field) {
      return field().value() ?? 0;
    }

    return this.control()?.value ?? 0;
  }

  private clampValue(value: number): number {
    const nonNegative = Math.max(value, 0);
    if (this.maxValue === null) {
      return nonNegative;
    }
    return Math.min(nonNegative, this.maxValue);
  }

  private setValue(value: number): void {
    const clamped = this.clampValue(value);
    const field = this.fieldControl();
    if (field) {
      field().value.set(clamped);
      return;
    }

    this.control()?.setValue(clamped);
  }
}
