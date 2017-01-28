import { Injectable } from '@angular/core';
import {  Http, Response } from '@angular/http';
@Injectable()
export class GithubService {
  userName: string;
  clientId = '7a08706d2bb8534b1d73';
  clientSecret = 'aa5e50935040fbf7c151dc79f99eede64dbff113';
  constructor(private http: Http) {
    // console.log('Github Service Ready.');
    this.userName = '';
  }

  getUser() {
    return this.http.get('https://api.github.com/users/' + this.userName
    + '?client_id=' + this.clientId
    + '&client_secret=' + this.clientSecret)
                    .map((res: Response) => res.json());
                    // .do(data =>  {this.model = data;} )  // debug
  }
  updateUser(userName: string) {
      this.userName = userName;
  }


}
