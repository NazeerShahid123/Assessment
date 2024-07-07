import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import Router for navigation state

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule], // Add Router to imports
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Assessment App';
  isSelected = true;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.isSelected = true; // Ensure selection for empty path
    }
    else
    {
      this.isSelected = false
    }
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  setSelected(selected: boolean) {
    this.isSelected = true;
  }
}
