import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
	film:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
    	this.film = this.navParams.get('film');
 	}

 	shareFilm() {
 		let email = {
 			to: 'gavincheng01@gmail.com',
 			subject: 'I love this one: ' + this.film.title,
 			body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
 			isHtml: true
 		};
 		this.emailComposer.open(email);
 	}
}
