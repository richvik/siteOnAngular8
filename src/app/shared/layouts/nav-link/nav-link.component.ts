import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
    @Input() linkUrl: string;
    @Input() classNameCustom: string;
    @Input() currentName: string;

  constructor() { }

  ngOnInit() {
    // console.log(this.linkUrl);
    // console.log(this.classNameCustom);
  }

}
