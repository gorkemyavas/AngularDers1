import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./shared/model/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  posts:Post[] =[];


  constructor(private http : HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(postsFromBackend =>{

      this.posts =postsFromBackend;

    });

  }

}
