import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'iprofile-page',
  templateUrl: 'iprofile.html'
})
export class IProfilePage {

  following = false;
  user = {
    name: 'JayteKz',
    profileImage: 'assets/img/jay.jpg',
    coverImage: 'assets/img/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  }

  posts = [
    {
      text: 'Dinner with J',
      date: 'November 5, 2016',
      timestamp: '11h ago'
    },
    {
      text: 'Jam out Session at the Studio!.',
      date: 'October 23, 2016',
      timestamp: '30d ago'
    },
    {
      date: 'June 28, 2016',
      likes: 46,
      text: 'Improv with Me!',
      comments: 66,
      timestamp: '4mo ago'
    },
  ];
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello IProfilePage Page');
  }

}