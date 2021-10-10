import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @ViewChild('sceneContainer') sceneContainer!: ElementRef

  step = window.innerWidth/3

  vm = {
    id: 1,
    image: 'scene-1.jpg'
  }

  centerX = window.innerWidth / 2 - window.innerHeight / 2 * 5057 / 791
  positionX = this.centerX

  constructor() {
  }

  ngOnInit(): void {
  }

  moveLeft() {
    if (this.positionX + this.step < 0) {
      this.positionX += this.step
    } else {
      this.positionX = 0
    }
  }

  moveRight() {
    if (Math.abs(this.positionX - this.step) + window.innerWidth < this.sceneContainer.nativeElement.scrollWidth) {
      this.positionX -= this.step
    } else {
      this.positionX = window.innerWidth - this.sceneContainer.nativeElement.scrollWidth
    }
  }


  get leftStyle() {
    return `${this.positionX}px`
  }

}