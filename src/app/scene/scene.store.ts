import {ComponentStore} from "@ngrx/component-store";

export interface HitZone {
  x: string
  y: string
  goTo: number
}

export interface Scene {
  id: number,
  image: string,
  hitZones: HitZone[]
}

export interface SceneState {
  currentSceneId: number
  scenes: Scene[]
}

export class SceneStore extends ComponentStore<SceneState> {
  constructor() {
    super({
      currentSceneId: 1,
      scenes: [
        {
          id: 1,
          image: 'scene-1.jpg',
          hitZones: [
            {x: '21%', y: '40%', goTo: 2}
          ]
        },
        {
          id: 2,
          image: 'scene-2.jpg',
          hitZones: [
            {x: '25%', y: '40%', goTo: 3}
          ]
        },
        {
          id: 3,
          image: 'scene-3.jpg',
          hitZones: [
            {x: '13%', y: '40%', goTo: 4}
          ]
        },
        {
          id: 4,
          image: 'scene-4.jpg',
          hitZones: [
            {x: '25%', y: '40%', goTo: 5}
          ]
        },
        {
          id: 5,
          image: 'scene-5.jpg',
          hitZones: [
            {x: '19%', y: '40%', goTo: 6}
          ]
        },
        {
          id: 6,
          image: 'scene-6.jpg',
          hitZones: [
            {x: '13%', y: '60%', goTo: 5},
            {x: '45.5%', y: '70%', goTo: 7},
            {x: '78%', y: '50%', goTo: 8},
          ]
        },
        {
          id: 7,
          image: 'scene-7.jpg',
          hitZones: [
            {x: '60%', y: '50%', goTo: 1},
          ]
        },
        {
          id: 8,
          image: 'scene-8.jpg',
          hitZones: [
            {x: '28%', y: '70%', goTo: 6},
            {x: '67%', y: '50%', goTo: 9},
            {x: '85.5%', y: '50%', goTo: 10},
          ]
        },
        {
          id: 9,
          image: 'scene-9.jpg',
          hitZones: [
            {x: '7%', y: '60%', goTo: 10},
            {x: '42%', y: '62%', goTo: 8},
          ]
        }
      ],
    })
  }
}
