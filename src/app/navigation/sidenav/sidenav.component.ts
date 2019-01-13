import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  authSubscription: Subscription;
  isAuth = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
  }
}
