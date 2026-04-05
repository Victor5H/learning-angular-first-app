import { Component, Signal, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
 
  homeName: Signal<string> = signal("Harshit")
  keyupHandler(event: KeyboardEvent){
    console.log(`User pressed ${event.key} key`)
  }
}
