import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNewsComponent } from './main/main-news/main-news.component';
import { ItemNewsOnlyComponent } from './page-news/item-news-only/item-news-only.component';

const routes: Routes = [
  { path: '', component: MainNewsComponent },
  { path: 'item-news-only/:id', component: ItemNewsOnlyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
