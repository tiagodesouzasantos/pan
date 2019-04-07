import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { OptionsService } from './options.service';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(
    private session: SessionService,
    private router: Router, 
    private options:OptionsService) { }
  
  show : boolean = false;
  userData : any = false;
 
  ngOnInit() {
    try {
      let _this = this;
      OptionsService.optionsShowEmitter.subscribe(show=>{
        _this.show = show;
      });
      this.userData = JSON.parse(this.session.get('userData'));
      if (this.userData){
        this.show = true;
      }
    } catch (error) {
      this.show = false;
    }
  }
  logout(){
    this.session.clear();
    this.options.optionsChangeStatus(false);
    this.router.navigate(['/']);
  }

}
