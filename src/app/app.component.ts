import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github Profile Search';
  githubUser: any;
  errorMessage: any;
  constructor(private githubService: GithubService) {
    this.githubUser = {};
  }
  ngOnInit() {

      if (this.githubUser) {
          this.githubUser.user = false;
          this.getUserInformation();
      }
  }
  searchUser() {
      if (this.githubUser.userName && this.githubUser.userName.length > 0) {
          this.githubService.updateUser(this.githubUser.userName);
          this.getUserInformation();
          // console.log(this.githubUser)
      } else {
          this.githubUser.user = false;
      }
  }

  getUserInformation() {
    this.githubService.getUser()
        .subscribe(
          data => this.githubUser.user = data,
          error =>  this.errorMessage = <any>error
        );
        console.log('Rabbit' + this.githubUser);
  }
}
