import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itri',
  templateUrl: './itri.component.html',
  styleUrls: ['./itri.component.css']
})
export class ItriComponent implements OnInit {

  constructor() { }
  slideIndex =  {'itri':0};
  itriNum = [];

  ngOnInit(): void {
    this.itriNum = Array(7).fill(undefined).map((x,i) => i);
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

}
