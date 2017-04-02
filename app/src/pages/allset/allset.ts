import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'allset-page',
  templateUrl: 'allset.html'
})
export class AllsetPage {
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
