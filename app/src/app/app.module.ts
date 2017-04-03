import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfluencerProfileSetupPage } from '../pages/ipsetup/ipsetup';
import { FanProfileSetupPage } from '../pages/fpsetup/fpsetup';
import { IWalkthroughPage } from '../pages/iwalkthrough/iwalkthrough';
import { StartBondfirePage } from '../pages/startbondfire/startbondfire';
import { ConfirmBondfirePage } from '../pages/confirmbondfire/confirmbondfire';
import { AllsetPage } from '../pages/allset/allset'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IProfilePage } from '../pages/iprofile/iprofile';
// import {FollowPage} from '../pages/follow/follow';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfluencerProfileSetupPage,
    FanProfileSetupPage,
    IWalkthroughPage,
    StartBondfirePage,
    ConfirmBondfirePage,
    AllsetPage,
    IProfilePage
    // FollowPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FanProfileSetupPage,
    InfluencerProfileSetupPage,
    IWalkthroughPage,
    StartBondfirePage,
    ConfirmBondfirePage,
    AllsetPage,
    IProfilePage
    // FollowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
