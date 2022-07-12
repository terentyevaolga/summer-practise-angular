import { Component, ChangeDetectionStrategy } from '@angular/core';
import {DropDownMenuComponent} from "../modals/drop-down-menu/drop-down-menu.component";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private dialog: DialogService) {
  }

  focus() {
    this.dialog.openDialog(DropDownMenuComponent)
  }

  // focus(): void {
  //   this.dialog.openDialog(DropDownMenuComponent, {
  //     backdropClass: 'backdrop'
  //   })
  // }
}
