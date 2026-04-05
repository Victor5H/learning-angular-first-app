import { Component, Input, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
export class Greeting {
  name: InputSignal<string> = input("John Doe")
}
