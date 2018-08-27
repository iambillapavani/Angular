import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share-data',
  templateUrl: './share-data.component.html',
  styleUrls: ['./share-data.component.css']
})
export class ShareDataComponent implements OnInit {

  @Input() public parentData;


  constructor() { }

  ngOnInit() {
  }

}
