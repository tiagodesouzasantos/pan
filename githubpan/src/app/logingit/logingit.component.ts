import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GitActionsService } from './git-actions.service';
import { SessionService } from './../services/session.service';

@Component({
  selector: 'logingit',
  templateUrl: './logingit.component.html',
  styleUrls: ['./logingit.component.scss']
})
export class LogingitComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute, 
    private gitAction: GitActionsService,
    private session: SessionService,
    private router: Router) { }

  ngOnInit() {
    let _this = this;
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['code']){
        _this.gitAction.valideSession(params['code']).subscribe(validResult=>{
          let token = _this.gitAction.getAccessToken(validResult);
          if (token !='bad_verification_code'){
            _this.session.set('token', token);
            _this.router.navigate(['/repositories'])
          }
          console.log(token);
          
          // _this.gitAction.getUserData(token).subscribe(userResult => {
          //   console.log('userResult', userResult);
          // });
        });
      } 
    });
  }
  
}
