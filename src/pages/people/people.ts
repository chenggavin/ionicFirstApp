import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
	people: Observable<any>;

  	constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
		this.people= this.apiProvider.getFilms();
	}

}
