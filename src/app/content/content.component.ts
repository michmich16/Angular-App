import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  dogImageUrl: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDogImage();
  }

  fetchDogImage(): void {
    this.http.get<any>('https://dog.ceo/api/breeds/image/random')
      .subscribe(response => {
        this.dogImageUrl = response.message;
      });
  }
}
