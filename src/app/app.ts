import { Component, OnInit, signal } from '@angular/core';
import { NavBar } from './shared/nav-bar/nav-bar';
import { initFlowbite } from 'flowbite';
import { Footer } from "./shared/footer/footer";
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [NavBar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  ngOnInit(): void {
      initFlowbite();
  }
}
