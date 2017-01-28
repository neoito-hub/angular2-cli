import { Component } from '@angular/core';
import { Github } from './github';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Profile Search';
  public githubUser1: Github;
  constructor() {
    this.githubUser1 = new Github(false, null, '')
  }

}
