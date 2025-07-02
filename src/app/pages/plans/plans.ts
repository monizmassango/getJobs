import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-plans',
  imports: [
    Navbar,
    Footer
  ],
  templateUrl: './plans.html',
  styleUrl: './plans.scss'
})
export class Plans {

}
