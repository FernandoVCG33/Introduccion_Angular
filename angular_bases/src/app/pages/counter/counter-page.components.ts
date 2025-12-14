import {ChangeDetectionStrategy, Component, provideZoneChangeDetection, signal} from '@angular/core';
@Component({
  templateUrl:'./counter-page.components.html',
  styleUrl:`./counter-page.components.css`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponents {
  counter=10;
  counterSingal=signal(10);
  constructor() {
    setInterval(()=>{
      console.log(`ticks`);
      this.incrementarByOne(1);
    },1000)
  }

  incrementarByOne(value:number ){
    this.counter += value;
    this.counterSingal.update((current)=>current+value);
  }
  restarByOne(value:number ){
    this.counter -=value;
    this.counterSingal.update((current)=>current-value);
  }
  resetTen(value:number){
    this.counter =value;
    this.counterSingal.set(1);
  }
}

