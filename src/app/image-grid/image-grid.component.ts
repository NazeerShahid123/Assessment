import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
}

@Component({
  selector: 'app-image-grid',
  imports: [NgOptimizedImage, CommonModule, HeaderComponent],
  standalone: true,
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit {
  photos: Photo[] = [];
  errorMessage: string | null = null;
  isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private http: HttpClient = Inject(HttpClient),
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((photos) => (this.photos = photos)),
        catchError((error) => {
          this.errorMessage = 'An error occurred while fetching photos.';
          console.error(error);
          this.isLoading$.next(false);
          return of([]);
        })
      )
      .subscribe(() => this.isLoading$.next(false));
  }

  onPhotoClick(photo: any) {
    this.router.navigate(['/photos', photo.id]);
  }
}
