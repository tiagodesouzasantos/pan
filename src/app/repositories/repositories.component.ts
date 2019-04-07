import { Component, OnInit } from '@angular/core';
import { GitActionsService } from './../logingit/git-actions.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  constructor(
    private gitactions:GitActionsService,
    private session:SessionService,
    private router:Router
    ) { }
  userData: any = false;
  loadingData: boolean = false;
  repos: any = [];

  ngOnInit() {
    try {
      let _this = this;
      this.loadingData = true; 
      this.userData = JSON.parse(this.session.get('userData'));
      this.gitactions.getUserRepo(this.userData.login).subscribe(userRepos=>{
        _this.repos = userRepos;
        _this.loadingData = false;
      });
    } catch (error) {
      if (!this.userData) this.router.navigate(['/'])
    }
  }

}
