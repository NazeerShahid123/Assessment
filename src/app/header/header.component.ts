import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Assessment App';
  isSelected = true;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  setSelected(selected: boolean) {
    this.isSelected = true;
  }
}
