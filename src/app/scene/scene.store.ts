import {ComponentStore} from "@ngrx/component-store";
import {Injectable} from "@angular/core";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";

export interface HitZone {
  x: string,
  y: string,
  goTo: number,
}

export interface Scene {
  id: number,
  image: string,
  ratioAspect: number,
  sceneWidth?: number
  hitZones: HitZone[]
}

export interface SceneState {
  viewStep: number,
  viewPosition: number
  currentSceneId: number
  scenes: Scene[]
}


@Injectable()
export class SceneStore extends ComponentStore<SceneState> {


  readonly currentSceneId$ = this.select(state => state.currentSceneId)
  readonly scenes$ = this.select(state => state.scenes)
  readonly viewPosition$ = this.select(state => state.viewPosition)
  readonly currentScene$: Observable<Scene> = this.select(
    this.currentSceneId$,
    this.scenes$,
    (id, scenes) => scenes.find(scene => scene.id === id)!
  ).pipe(map((scene) => ({
    ...scene,
    sceneWidth: window.innerHeight * scene!.ratioAspect
  })))

  readonly goTo = this.updater((state, id: number) => ({
    ...state,
    currentSceneId: id
  }))

  readonly viewMoreLeft = this.updater((state) => {
    if (state.viewPosition + state.viewStep < 0) {
      return {
        ...state,
        viewPosition: state.viewPosition + state.viewStep
      }
    } else {
      return {
        ...state,
        viewPosition: 0
      }
    }
  })

  readonly viewMoreRight = this.updater((state, sceneWidth: number) => {
    if (Math.abs(state.viewPosition - state.viewStep) + window.innerWidth < sceneWidth) {
      return {
        ...state,
        viewPosition: state.viewPosition - state.viewStep
      }
    } else {
      return {
        ...state,
        viewPosition: window.innerWidth - sceneWidth
      }
    }
  })

  readonly resetViewPosition = this.effect<Scene>(currentScene$ =>
    currentScene$.pipe(
      tap(currentScene => {
        this.patchState({
          viewPosition: window.innerWidth / 2 - window.innerHeight / 2 * currentScene.ratioAspect
        })
      })
    ))

  constructor() {
    super({
      viewStep: window.innerWidth / 3,
      viewPosition: 0,
      currentSceneId: 1,
      scenes: [
        {
          id: 1,
          image: 'scene-1.jpg',
          ratioAspect: 9987 / 1602,
          hitZones: [
            {x: '21%', y: '40%', goTo: 2}
          ]
        },
        {
          id: 2,
          image: 'scene-2.jpg',
          ratioAspect: 10114 / 1582,
          hitZones: [
            {x: '25%', y: '40%', goTo: 3}
          ]
        },
        {
          id: 3,
          image: 'scene-3.jpg',
          ratioAspect: 10377 / 1542,
          hitZones: [
            {x: '13%', y: '40%', goTo: 4}
          ]
        },
        {
          id: 4,
          image: 'scene-4.jpg',
          ratioAspect: 10404 / 1538,
          hitZones: [
            {x: '25%', y: '40%', goTo: 5}
          ]
        },
        {
          id: 5,
          image: 'scene-5.jpg',
          ratioAspect: 10986 / 1456,
          hitZones: [
            {x: '19%', y: '40%', goTo: 6}
          ]
        },
        {
          id: 6,
          image: 'scene-6.jpg',
          ratioAspect: 9787 / 1635,
          hitZones: [
            {x: '13%', y: '60%', goTo: 5},
            {x: '45.5%', y: '70%', goTo: 7},
            {x: '78%', y: '50%', goTo: 8},
          ]
        },
        {
          id: 7,
          image: 'scene-7.jpg',
          ratioAspect: 9994 / 1601,
          hitZones: [
            {x: '60%', y: '50%', goTo: 1},
          ]
        },
        {
          id: 8,
          image: 'scene-8.jpg',
          ratioAspect: 10434 / 1533,
          hitZones: [
            {x: '28%', y: '70%', goTo: 6},
            {x: '67%', y: '50%', goTo: 9},
            {x: '85.5%', y: '50%', goTo: 10},
          ]
        },
        {
          id: 9,
          image: 'scene-9.jpg',
          ratioAspect: 10013 / 1598,
          hitZones: [
            {x: '7%', y: '60%', goTo: 10},
            {x: '42%', y: '62%', goTo: 8},
          ]
        },
        {
          id: 10,
          image: 'scene-10.jpg',
          ratioAspect: 10249 / 1561,
          hitZones: [
            {x: '30%', y: '45%', goTo: 8},
            {x: '50%', y: '45%', goTo: 9},
          ]
        }
      ],
    })
    this.resetViewPosition(this.currentScene$)
  }
}
