import { Component } from '@angular/core';
import { NameBuildComponent } from "../../form/name-build/name-build.component";
import { ImportBuildComponent } from "../../form/import-build/import-build.component";
import { BuildsListComponent } from "../builds-list/builds-list.component";

@Component({
  selector: 'app-my-builds',
  imports: [NameBuildComponent, ImportBuildComponent, BuildsListComponent],
  templateUrl: './my-builds.component.html',
  styleUrl: './my-builds.component.scss',
})
export class MyBuildsComponent {

}
