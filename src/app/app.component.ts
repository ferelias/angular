import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Fernando Elias';
  age = 80;
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  person = {
    name: 'Fernando',
    age: '77',
    avatar: 'https://source.unsplash.com/random'
  }

  togleButton () {
    this.btnDisable = !this.btnDisable; //Con el signo ! niegas el valor y lo cambia de true a false y de false a true
    this.name = "CarmFer";
    this.person.name = "FerCarm";
  }

  aumentarEdad () {
    this.age += 1;
  }

  decrementAge () {
    this.age -= 1;
  }

  onScroll (event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  change (event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
