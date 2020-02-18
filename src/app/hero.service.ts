import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
/*registers this serviceProvider in root and creates single, shared instance of HeroService
so that angular can inject this in HeroesComponent. Also optimizes app by removing service if not used.*/
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HEROES;
  }

}
