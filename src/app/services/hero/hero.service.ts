import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessagesService } from '../../services/messages/messages.service';

import { Hero } from '../../models/hero';
import { HEROES } from '../../mocks/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  public getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
