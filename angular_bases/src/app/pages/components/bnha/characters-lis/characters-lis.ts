import {Component, input} from '@angular/core';
import type {Character} from '../../interfaces/character.interface';
@Component({
  selector: 'bhna-characters-lis',
  templateUrl: './characters-lis.html',
})
export class CharactersLisComponent {
    characters=input.required<Character[]>();
    listName=input.required<String>();
}
