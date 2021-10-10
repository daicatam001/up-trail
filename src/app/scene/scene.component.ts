import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Scene, SceneStore} from "./scene.store";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  providers: [SceneStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneComponent implements OnInit {

  @ViewChild('sceneContainer') sceneContainer!: ElementRef

  vm$: Observable<Scene> = this.sceneStore.currentScene$
  vp$ = this.sceneStore.viewPosition$.pipe(map(vp => vp + 'px'))

  constructor(private sceneStore: SceneStore) {
  }

  ngOnInit(): void {
  }

  viewMoreLeft() {
    this.sceneStore.viewMoreLeft()
  }

  viewMoreRight(sceneWidth: number) {
    this.sceneStore.viewMoreRight(sceneWidth)
  }

  moveTo(id: number) {
    this.sceneStore.goTo(id)
  }

}
