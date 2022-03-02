import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-siuc',
  templateUrl: './siuc.component.html',
  styleUrls: ['./siuc.component.css']
})
export class SiucComponent implements OnInit {

  constructor() { }
  slideIndex =  {'bhm':0, 'ncku': 0};
  

  ngOnInit(): void {
    $(window).on('scroll', ()=>{ 
      this.checkScrollPos();
    });
    //Check the scroll position once when the page loads
    this.checkScrollPos();
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
