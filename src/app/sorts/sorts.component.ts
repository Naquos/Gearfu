import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sorts',
  imports: [TranslateModule, MatIconModule, MatTooltipModule],
  templateUrl: './sorts.component.html',
  styleUrl: './sorts.component.scss'
})
export class SortsComponent {

  protected sortNeutres: number[] = [0,1,2,3,4,5,6,7,8,9,10,11];
  protected sortPassifs: number[] = [12,13,14,15,16,17];
  
  protected copyToClipboards() {
    navigator.clipboard.writeText("");
  }

}
