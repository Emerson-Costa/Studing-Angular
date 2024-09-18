import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  template: `
  <main>
    <header class="brand-name">
      <h1>Aprendendo Angular</h1>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studing-angular';
}
