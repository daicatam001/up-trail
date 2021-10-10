import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Scene, SceneState, SceneStore} from "./scene.store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  providers: [SceneStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneComponent implements OnInit {

  vm$: Observable<SceneState & { scene: Scene }> = this.sceneStore.vm$

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
