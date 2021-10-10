# Up trail game with Angular + Component Store

Project was created to build simple game with experience like google street view but much simpler

![Screen Shot][screen-shot]

## Demo

Project was deployed to Firebase

Check out live demo here -> https://up-trail.web.app/

## Tech stack

- [Angular 12][angular]
- [Component Store][component-store]



## Chanllenges

 - All the images are super heavy, if it is loaded directly, users will see it in fragment not all at one and it's really bad user experience. 
So the trick is I loaded it underline and convert them to base 64 string and use it as image's source.
User always see the full picture showing on screen
 - The 2nd challenge is about controlling view point, the images must be fit the screen and the view point is always in the images boundary.
 

## Improvements
 - Hit zones: Only show up when hovering the paths is much better
 - Loading image on changing scene: It's not really friendly for users
 - Animation on control view point: It's not really smooth
 - Icon style: it would definitely be better if I spent more time on it

## Time tracking

![time][time]

I also spent around one hour for brainstorming before and in between coding. Overall, the project is challenging but super fun to work with.  

![files][files]

I spent a lot of time on `scene.component.ts` because the way I did was I placed all the logic that I  wasn't sure in `scene.component.ts`
before moving all of this to `scene.store.ts` when it worked as I expected

## Local developement

 - Clone project
 - run `npm install` to install dependencies
 - run `npm start` to start the project

[screen-shot]:docs/screenshot.png
[angular]:https://angular.io/
[component-store]:https://ngrx.io/guide/component-store
[time]:docs/time-spent.png
[files]:docs/files.png
