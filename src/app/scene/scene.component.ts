import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  vm = {
    id: 1,
    image: 'scene-1.jpg'
  }

  pX = 0

  get left() {
    if (this.pX > 0) {
      return `calc(50% + ${this.pX}p)`
    } else if (this.pX < 0) {
      return `calc(50%- ${Math.abs(this.pX)}p)`
    }
    return '50%'
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
