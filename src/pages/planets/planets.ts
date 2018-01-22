import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the PlanetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
	planets: Observable<any>;
	


 constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
	this.planets= this.apiProvider.getFilms();
}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetsPage');
  }

}
