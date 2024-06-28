import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  dogImageUrls: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDogImages();
  }

  // fetch hunde billede fra https://dog.ceo/api/breeds/image/random/

  fetchDogImages(): void {
    this.http.get<any>('https://dog.ceo/api/breeds/image/random/6')
      .subscribe(response => {
        this.dogImageUrls = response.message;
      });
  }
}
