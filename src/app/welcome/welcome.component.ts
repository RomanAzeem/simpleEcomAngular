import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/tile';
import { StoreInfoService } from '../store-info.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  tiles:Tile[];
  constructor(private storeInfo: StoreInfoService) { }

  ngOnInit(): void {
    this.tiles = this.storeInfo.tiles
  }

}
