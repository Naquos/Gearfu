import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemsShellService {
  public readonly isReady = signal<boolean>(false);

  public setReady(): void {
    this.isReady.set(true);
  }

  public reset(): void {
    this.isReady.set(false);
  }
}
