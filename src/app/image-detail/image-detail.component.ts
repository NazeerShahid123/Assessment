import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-image-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './image-detail.component.html',
  styleUrl: './image-detail.component.scss'
})
export class ImageDetailComponent {
  selectedPhoto: any;
  photoId: any ;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.paramMap.get('id');
    if (this.photoId) {
      this.http.get<any>(`https://jsonplaceholder.typicode.com/photos/${this.photoId}`)
        .subscribe(photo => {this.selectedPhoto = photo;
          console.log(this.selectedPhoto,'data')
        });
    }
  }
}
