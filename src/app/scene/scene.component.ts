import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SceneStore} from "./scene.store";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  providers: [SceneStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneComponent implements OnInit {

  @ViewChild('sceneContainer') sceneContainer!: ElementRef

  vm$ = this.sceneStore.currentScene$

  step = window.innerWidth / 3

  centerX = window.innerWidth / 2 - window.innerHeight / 2 * 5057 / 791
  positionX = this.centerX




  constructor(private sceneStore: SceneStore) {
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
    this.sceneStore.goTo(id)
  }

  get leftStyle() {
    return `${this.positionX}px`
  }

}
