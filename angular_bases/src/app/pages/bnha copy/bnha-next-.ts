import {Component, inject ,computed, signal} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {CharactersLisComponent} from '../components/bnha/characters-lis/characters-lis';
//import {CharacterAddComponent} from '../components/bnha-character-add/bnha-character-add';
import {CharacterAddComponent} from '../components/bnha-character-add/bnha-character-add';
import {BnhaService} from '../../services/bnha.service';
interface Characters {
  id: number;
  name: string;
  poder: number;
}

@Component({
  selector: 'bnha-next',
  imports: [
    CharactersLisComponent,
    CharacterAddComponent,
  ],
  templateUrl: './bnha-next-.html'
})
export class BnhaNextComponent {
  public bnhaService= inject(BnhaService);
  //aqui va lo que esta en  bnha service

}

