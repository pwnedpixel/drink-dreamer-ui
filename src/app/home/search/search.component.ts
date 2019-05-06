import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as ingredients from 'src/mock/ingredients.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  ingredients: String[] = ingredients.ingredients;
  currentSearchTerm = '';
  searchForm: FormGroup;

  getIngredients() {
    if (this.currentSearchTerm.trim() === '') {
      return [];
    } else {
      let filteredList = this.ingredients.filter(item => item.toLowerCase().indexOf(this.currentSearchTerm) !== -1);
      if (filteredList.length > 10) {
        filteredList = filteredList.slice(0, 10);
        filteredList.push('...');
        return filteredList;
      }
      return filteredList;
    }
  }

  selectIngredient(ingredient) {
    console.log('get ingredient: ' + ingredient);
  }

  constructor() {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchBar: new FormControl('')
    });

    this.searchForm.controls.searchBar.valueChanges.subscribe(newVal => {
      this.currentSearchTerm = newVal.toLowerCase();
    });
  }
}
