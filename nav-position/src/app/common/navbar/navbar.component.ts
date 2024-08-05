import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    nav:string;
    position:string;
    constructor(){
        this.position = "left"
        this.nav = " text-pink-400 ";
    }
    ngOnInit():void{
        if(this.position=="left"){
            this.nav = ` text-pink-400 h-screen `;
        }
    }

}
