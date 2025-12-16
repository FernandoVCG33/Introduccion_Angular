import {Component, input, output, signal} from '@angular/core';
import type {Character} from '../interfaces/character.interface';

@Component({
  selector: 'bnha-bnha-character-add',
  templateUrl: './bnha-character-add.html',
})

export class CharacterAddComponent {
    name=signal('Bakugo');
    newCharacter=output<Character>();
    poder=signal(1450);
  addCharacter() {
    if(!this.name() || !this.poder() || this.poder()<=0 ) {
      return;
    }
    const newC:Character={
      //id: this.characters().length + 1,
      id : Math.floor(Math.random() * 1000),
      name : this.name(),
      poder : this.poder(),
    }
    //this.characters.update((list) =>[...list, newC]);
    this.newCharacter.emit(newC);
    this.resetFiles()
  }
  resetFiles(){
    this.name.set('');
    this.poder.set(0);
  }
}
