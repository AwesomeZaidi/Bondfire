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
      description: "Innovare is bridging the gap between the tech startup world and hungry students looking to expand their horizons in Chicago!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Opportunites and Resources",
      description: "Gain access to a calender of every opportunity in Chicago and a list of amazing resources for you to learn and grow",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Perks",
      description: "Get exclusive access to deals, special discounts to tons of events and conferences and lifetime access to Innovare events",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Score Points",
      description: "The more advantage you take of the opportunities and resources to learn, grow and contribute, the more points you can earn for your school and personal profile",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Community",
      description: "Become an Innovare member and be an active member of our community where you can find more help, teammates and oportunities to meet like minded individuals",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Who Should Join",
      description: "Any student in Chicago that wants to improve their professional or personal life.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Pricing",
      description: "Join Innovare today for a limited time offer of $10 one time fee! OR If you cannot afford this, fear not; Click Here to learn more about how you can join for free",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "More Coming!",
      description: "This is our first iteration and we're looking to quickly add lots more to our platform to help an ever broader category of students. Click here to stay updated",
      image: "assets/img/ica-slidebox-img-3.png",
    },
  ];
}
