import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InfluencerProfileSetupPage } from '../ipsetup/ipsetup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('player') player;
  influencerProfileSetupPage = InfluencerProfileSetupPage;
  constructor(public navCtrl: NavController) { }

  // It's interesting to remove the src and put it back
  // when entering and leaving the page so there are no memory leaks.
  ionViewWillLeave() {
    // the .nativeElement property of the ViewChild is the reference to the tag <video>
    this.player.nativeElement.src = '';
    this.player.nativeElement.load();
  }

  ionViewWillEnter() {
    this.player.nativeElement.src = 'assets/video/appvideo.mp4';
    this.player.nativeElement.load();
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

  goToSignup() {
  }

  goToLogin() {
  }

}
