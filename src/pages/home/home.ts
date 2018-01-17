import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	myArray = ['this', 'is','my','first', 'ngFor'];


constructor(public navCtrl: NavController) {

}
	// calculate() {
	// 	this.result = parseInt(this.a) + parseInt(this.b);
	// }

}
