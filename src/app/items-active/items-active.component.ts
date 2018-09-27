import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-active',
  templateUrl: './items-active.component.html',
  styleUrls: ['./items-active.component.css']
})
export class ItemsActiveComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit() {
  }

}
