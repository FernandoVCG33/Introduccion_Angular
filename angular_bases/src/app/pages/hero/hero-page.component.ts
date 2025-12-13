import {Component, computed, signal} from '@angular/core';
import {describe} from 'vitest';

@Component({
  templateUrl: './hero-page.component.html',

})
export class HeroPageComponent{
  name=signal('Iron man');
  age=signal(45);
  heroDescription=computed(()=>{
    const description=  ` ${this.name()} ${this.age()} ` ;
    return description;
  })
  capitalizedName=computed(()=>this.name().toUpperCase());
 changeHero(){
    this.name.set('Spiderman');
 }
 changeAge(){
    this.age.set(22);
 }
  resetForm(){
    this.name.set('iron man');
    this.age.set(45)
  }

}
