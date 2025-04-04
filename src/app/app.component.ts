import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListAtmComponent } from './pages/list-atm/list-atm.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { HeaderComponent } from './shared/layout/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, ListAtmComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ATM System';
}
