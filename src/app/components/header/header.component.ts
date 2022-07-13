import { Component, ChangeDetectionStrategy } from '@angular/core';
import {DialogService} from "../../services/dialog.service";
import {SidebarPanelComponent} from "../sidebar-panel/sidebar-panel.component";
import {MenuComponent} from "../modals/menu/menu.component";

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
    this.dialog.openDialog(MenuComponent, {
      backdropClass: 'backdrop'
    })
  }

  openSidebarPanel() {
    this.dialog.openDialog(SidebarPanelComponent);
  }
}
