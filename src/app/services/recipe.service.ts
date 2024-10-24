import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe.models';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private dbPath = '/recipes';

  constructor(private db: AngularFireDatabase) { }

  
}
