import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AllsetPage } from '../allset/allset'

@Component({
  selector: 'confirmBondfire-page',
  templateUrl: 'confirmbondfire.html'
})
export class ConfirmBondfirePage {

  allsetPage = AllsetPage;
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
