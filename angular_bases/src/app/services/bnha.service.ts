import {effect, Injectable, signal} from '@angular/core';
import {Character} from '../pages/components/interfaces/character.interface';

const loadFromLocalStorage= ():Character[] => {
  const character =localStorage.getItem('character');
  return character ?  JSON.parse(character):[];
}

@Injectable({providedIn: 'root'})

export class BnhaService {
  characters = signal<Character[]>(loadFromLocalStorage());

  //efectos sirveb para una accion secundaria
  savetoLocalStorage= effect(()=>{
    localStorage.setItem('Personajes', JSON.stringify(this.characters()));
  })

  addCharacter(character:Character) {
    this.characters.update(list =>[...list,character]);
  }
}
