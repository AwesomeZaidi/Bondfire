import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PopupMenuOnePage } from './popup-menu-one/popup-menu-one';

import { ConfirmBondfirePage } from '../confirmbondfire/confirmbondfire';

@Component({
  selector: 'startBondfire-page',
  templateUrl: 'startbondfire.html'
})
export class StartBondfirePage {

  confirmBondfirePage = ConfirmBondfirePage;

  drawerOptions: any;
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  ionViewDidLoad() {
  }
}
