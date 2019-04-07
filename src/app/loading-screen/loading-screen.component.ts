import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  spinner = { "color": 'primary', "mode": 'indeterminate' };
  constructor() { }

  ngOnInit() {
  }

}
