import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GitActionsService } from './git-actions.service';
import { SessionService } from './../services/session.service';
import { OptionsService } from './../options/options.service';


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
    private router: Router,
    private options: OptionsService) { }

  loadingData:boolean = false;
  host: string = window.location.hostname;
  clienteIdList:any = {
    "localhost": {
      client_id: '3a8e081b8960df638bca'
    },
    "tiagodesouzasantos.github.io": {
      client_id: 'cc5d6a52910648e97389'
    }
  }


  ngOnInit() {
    let _this = this;
    _this.loadingData = false;
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['code']){
        _this.loadingData = true;
        _this.gitAction.valideSession(params['code']).subscribe(validResult=>{
          if (validResult.error !='bad_verification_code'){
            _this.gitAction.getUserData(validResult.access_token).subscribe(userResult => {
              _this.session.set('token', validResult.access_token);
              _this.session.set('userData', JSON.stringify(userResult));
              _this.loadingData = false;
              _this.options.optionsChangeStatus(true);
              _this.router.navigate(['/repositories']);
            });
          }else{
            _this.loadingData = false;
          }
        });
      }
    });
  }
  
}
