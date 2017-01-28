import { Injectable } from '@angular/core';
import {  Http, Response } from '@angular/http';
@Injectable()
export class GithubService {
  userName: string;
  clientId = 'b4493a42a04b562644ba';
  clientSecret = 'c774f4bdbe2fd2b3701cec4b8ce73ffab49445c9';
  constructor(private http: Http) {
    // console.log('Github Service Ready.');
    this.userName = '';
  }

  getUser() {
    return this.http.get('http://api.github.com/users/' + this.userName
    + '?client_id=' + this.clientId
    + '&client_secret=' + this.clientSecret)
                    .map((res: Response) => res.json());
                    // .do(data =>  {this.model = data;} )  // debug
  }
  updateUser(userName: string) {
      this.userName = userName;
  }


}
