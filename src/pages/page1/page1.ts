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
    var input = document.getElementById('editNome');
    var label = document.getElementById('labelMensagem');
    if(typeof(this.nome) !== "undefined") {
      if (this.nome.length > 0) {
        label.innerText = "Alô, " + this.nome + "!";
        this.nome = "";
      } 
    }
  } 
}
