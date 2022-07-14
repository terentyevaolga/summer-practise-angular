import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-panel',
  templateUrl: './sidebar-panel.component.html',
  styleUrls: ['./sidebar-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarPanelComponent implements OnInit {

  constructor(private route: Router) {

  }

  ngOnInit(): void {
  }

  openProfile() {
    this.route.navigate(['/profile'])
  }

}
