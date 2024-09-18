import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const carouselImages = document.querySelectorAll('#image-carousel img');
    let currentIndex = 0;

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    function showNextImage() {
      if (carouselImages.length) {
        carouselImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].classList.add('active');
      }
    }

    // Initial call to ensure the first image is visible
    if (carouselImages.length) {
      carouselImages[currentIndex].classList.add('active');
      setInterval(showNextImage, 5000); // Change image every 5 seconds
    }
  }
}
