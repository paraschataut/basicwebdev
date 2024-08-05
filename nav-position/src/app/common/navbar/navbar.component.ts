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
  nav_content:string;
	position_left:string;
	position_right:string;
	position_bottom:string;
	position_top:string;
	// nav= nav+position_left;
	if(postion="left"){
	}
  constructor(){
    this.nav = ` fixed bg-gray-600 grid place-items-center `;
    this.position_left=` left-0 h-screen `;
	  this.position_right=` right-0 h-screen `;
	  this.position_bottom=`  w-dvw bottom-0 `;
	  this.position_top=` w-dvw top-0 `;
    this.nav = this.nav+this.position_left;
    this.nav_content = `  gap-6 bg-pink-300 rounded-xl `;
    // this.nav_content = ` bg-pink-300 `;


  }

}
