import { Component, OnInit, AfterViewInit } from '@angular/core';
import { range } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-estech',
  templateUrl: './estech.component.html',
  styleUrls: ['./estech.component.css']
})
export class EstechComponent implements OnInit {

  constructor() { }
  slideIndex =  {'power':0, 'water': 0, 'orchid':0, 'grow':0, 'ht':0, 'park':0, 'save':0, 'aircon':0, 'agv':0, 'ps7':0, 'co2':0};
  powerplantNum = [];
  waterNum = [];
  orchidNum = [];
  growNum = [];
  htNum = [];
  parkNum = [];
  saveNum = [];
  airconNum = [];
  agvNum = [];
  ps7Num = [];
  co2Num = [];
  ngOnInit(): void {
    this.powerplantNum = Array(7).fill(undefined).map((x,i) => i);
    this.waterNum = Array(3).fill(undefined).map((x,i) => i);
    this.orchidNum = Array(3).fill(undefined).map((x,i) => i);
    this.growNum = Array(2).fill(undefined).map((x,i) => i);
    this.htNum = Array(3).fill(undefined).map((x,i) => i);
    this.parkNum = Array(4).fill(undefined).map((x,i) => i);
    this.saveNum = Array(4).fill(undefined).map((x,i) => i);
    this.airconNum = Array(4).fill(undefined).map((x,i) => i);
    this.agvNum = Array(2).fill(undefined).map((x,i) => i);
    this.ps7Num = Array(2).fill(undefined).map((x,i) => i);
    this.co2Num = Array(2).fill(undefined).map((x,i) => i);

    $(window).on('scroll', ()=>{ 
      this.checkScrollPos();
    });
    //Check the scroll position once when the page loads
    this.checkScrollPos();
  }

  ngAfterViewInit() {
    Object.keys(this.slideIndex).forEach(key => {
      this.showSlides(0, key);
    });
  }

  plusSlides(n:number, id:string) {
    this.showSlides(this.slideIndex[id]+=n, id);
  }
  
  currentSlide(n:number, id:string) {
    this.showSlides(this.slideIndex[id]=n, id);
  }
  
  showSlides(n:number, id:string) {
    let i;
    let slides = document.getElementsByClassName(`mySlides fade ${id}`) as HTMLCollectionOf<HTMLElement>;
    // console.log(slides);
    let dots = document.getElementsByClassName(`dot ${id}`);
    if (n >= slides.length) {this.slideIndex[id] = 0}    
    if (n < 0) {this.slideIndex[id] = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex[id]].style.display = "block";  
    dots[this.slideIndex[id]].className += " active";
  }

  showBackToTop(){
    $('#back-to-top').addClass('show-btt');
  }

  hideBackToTop(){
    $('#back-to-top').removeClass('show-btt');
  }

  checkScrollPos(){
    if ($(window).scrollTop() >= 700) { //if scroll position is lower than 700px from the top of the screen
      this.showBackToTop();
    } else {
      this.hideBackToTop();
    }
  }

}
