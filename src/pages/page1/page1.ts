import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { stringify } from '@angular/core/src/util';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  nome;
  constructor(public navCtrl: NavController) {
  }

  modificaValores() {
    console.log(this.nome);
    console.log(document.getElementById('editNome'));
    var nome = document.getElementById('editNome');
    console.log(nome.innerText);
  } 
}
