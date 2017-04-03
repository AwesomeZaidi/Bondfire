import { Component } from '@angular/core';

import { StartBondfirePage } from '../startbondfire/startbondfire';

@Component({
  selector: 'iwalkthrough-page',
  templateUrl: 'iwalkthrough.html'
})
export class IWalkthroughPage {

  startBondfirePage = StartBondfirePage;

  slides = [
    {
      title: "Welcome to Bondfire!",
      description: "Let's walk you through our app so you know how to use it!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Intimit Experiences",
      description: "Deliver new ways of having intimit experiences with your fans",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "New Revenue",
      description: "Generate new channels of revenue that never existed before",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Analytics",
      description: "Become a premium member to gain analytics on your fan base",
      image: "assets/img/ica-slidebox-img-1.png",
    },
  ];
}
