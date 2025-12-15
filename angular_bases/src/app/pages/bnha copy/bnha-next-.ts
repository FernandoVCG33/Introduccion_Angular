import {Component, computed, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
interface Characters {
  id: number;
  name: string;
  poder: number;
}

@Component({
  selector:'bnha-next',
  templateUrl: './bnha-next-.html'
})
export class BnhaNextComponent {
  name = signal(' ');
  poder = signal(0);
  characters = signal<Characters[]>([
    {id: 1, name: "Deku", poder: 1500},
    {id: 2, name: "Uraraka", poder: 1000}
  ]);

  addCharacter() {
      if(!this.name() || !this.poder() || this.poder()<=0 ) {
        return;
      }
      const newC:Characters={
        id: this.characters().length + 1,
        name : this.name(),
        poder : this.poder(),
      }
      this.characters.update((list) =>[...list, newC]);
    this.resetFiles()
  }
  resetFiles(){
    this.name.set('');
    this.poder.set(0);
  }
}

