import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @ViewChild('sceneContainer') sceneContainer!: ElementRef

  step = window.innerWidth / 3

  vm = {
    id: 1,
    image: 'scene-1.jpg',
    hitZones: [
      {x: '21%', y: '40%', goTo: 2}
    ]
  }

  centerX = window.innerWidth / 2 - window.innerHeight / 2 * 5057 / 791
  positionX = this.centerX

  constructor() {
  }

  ngOnInit(): void {
  }

  viewLeft() {
    if (this.positionX + this.step < 0) {
      this.positionX += this.step
    } else {
      this.positionX = 0
    }
  }

  viewRight() {
    if (Math.abs(this.positionX - this.step) + window.innerWidth < this.sceneContainer.nativeElement.scrollWidth) {
      this.positionX -= this.step
    } else {
      this.positionX = window.innerWidth - this.sceneContainer.nativeElement.scrollWidth
    }
  }

  moveTo(id: number) {
    this.vm = {
      id: 1,
      image: 'scene-2.jpg',
      hitZones: [
        {x: '21%', y: '40%', goTo: 2}
      ]
    }
  }

  get leftStyle() {
    return `${this.positionX}px`
  }

}
