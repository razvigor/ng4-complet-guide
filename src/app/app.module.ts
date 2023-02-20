import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';

import { heroChevronUp } from '@ng-icons/heroicons/outline';
import { heroChevronDown } from '@ng-icons/heroicons/outline';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItmComponent } from './recipes/recipe-list/recipe-itm/recipe-itm.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItmComponent,
    ShopingListComponent,
    ShopingEditComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ heroChevronUp, heroChevronDown }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
