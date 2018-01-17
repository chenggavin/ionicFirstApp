import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	a = "5";
	b = "10";
	result = 0;


constructor(public navCtrl: NavController) {

}
	calculate() {
		this.result = parseInt(this.a) + parseInt(this.b);
	}

}
