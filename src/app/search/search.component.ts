import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';
import 'rxjs/add/operator/map';

import { Github } from '../github';
@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() githubUser: Github;
  @Output() userUpdated: EventEmitter<Github> = new EventEmitter<Github>();

  constructor(private _githubService: GithubService) {
      // Component'e input olarak geçilen parametre burada undefined, OnInit'te Object halinde.
  }

  ngOnInit() {

      if (this.githubUser) {
          this.githubUser.user = false;
          this.getUserInformation();
      }

  }

  // searchUser() {
  //     if (this.githubUser.userName && this.githubUser.userName.length > 0) {
  //         this._githubService.updateUser(this.githubUser.userName);
  //         this.getUserInformation();
  //     } else {
  //         this.githubUser.user = false;
  //     }
  // }
  getUserInformation() {
          this._githubService.getUser()
          .subscribe(user => {
              this.githubUser.user = user;
              this.userUpdated.emit(this.githubUser);
          },
              (err) => {
                  console.log('err:' + err);
                  this.githubUser.user = false;
              },
              () => console.log('Done')
          );
  }
}
