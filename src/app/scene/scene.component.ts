import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @ViewChild('sceneContainer') sceneContainer!: ElementRef

  step = 500

  vm = {
    id: 1,
    image: 'scene-1.jpg'
  }

  pX = 0


  constructor() {
  }

  ngOnInit(): void {
  }

  moveLeft() {
    this.pX += this.step
  }

  moveRight() {
    this.pX -= this.step
  }

  get left() {
    const pos = window.innerWidth / 2 - window.innerHeight / 2 * 5057 / 791
    return `${pos + this.pX}px`
  }


}
