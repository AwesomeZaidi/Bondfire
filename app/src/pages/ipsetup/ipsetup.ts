import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IWalkthroughPage } from '../iwalkthrough/iwalkthrough';

@Component({
  templateUrl: 'ipsetup.html'
})
export class InfluencerProfileSetupPage { 
  iWalkthroughPage = IWalkthroughPage;
}