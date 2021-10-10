import {AfterViewInit, ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Scene, SceneState, SceneStore} from "./scene.store";
import {fromEvent, Observable, of, Subject} from "rxjs";
import {delay, exhaustMap, takeUntil, withLatestFrom} from "rxjs/operators";


enum KEY_CODE {
  ARROW_RIGHT = 39,
  ARROW_LEFT = 37
}

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  providers: [SceneStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneComponent implements AfterViewInit, OnDestroy {

  vm$: Observable<SceneState & { scene: Scene }> = this.sceneStore.vm$
  timer: any;
  destroy$ = new Subject()


  constructor(private sceneStore: SceneStore) {
  }


  ngAfterViewInit(): void {
    fromEvent(document, 'keydown').pipe(
      exhaustMap(event => of(event).pipe(delay(300))),
      withLatestFrom(this.vm$),
      takeUntil(this.destroy$)
    )
      .subscribe(([event, vm]) => {
        if ((event as KeyboardEvent).keyCode == KEY_CODE.ARROW_LEFT) {
          this.viewMoreLeft()
        }
        if ((event as KeyboardEvent).keyCode == KEY_CODE.ARROW_RIGHT) {
          this.viewMoreRight(vm.scene.sceneWidth!)
        }
      })
  }

  public onUnHold() {
    clearInterval(this.timer);
  }

  public onHoldViewMoreLeft() {
    this.timer = setInterval(() => {
      this.viewMoreLeft()
    }, 300);
  }

  public onHoldViewMoreRight(sceneWidth: number) {
    this.timer = setInterval(() => {
      this.viewMoreRight(sceneWidth)
    }, 300);
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

  ngOnDestroy(): void {
    this.destroy$.next()
  }

}
