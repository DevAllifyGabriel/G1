import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoG1Component } from './components/logo-g1/logo-g1.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { IconComponent } from './components/icon/icon.component';
import { MainNewsComponent } from './main/main-news/main-news.component';
import { TitleSimpleComponent } from './components/title-simple/title-simple.component';
import { NewsService } from './service/news.service';
import { GridsLookHereComponent } from './components/grids/grids-look-here/grids-look-here.component';
import { ItemsListNewsComponent } from './components/grids/items-list-news/items-list-news.component';
import { ItemNewsOnlyComponent } from './page-news/item-news-only/item-news-only.component';
import { DetailsNewsComponent } from './components/page-news/details-news/details-news.component';
import { DetailsNewsTitlesComponent } from './components/page-news/details-news-titles/details-news-titles.component';
import { DetailsNewsSubtitleComponent } from './components/page-news/details-news-subtitle/details-news-subtitle.component';
import { MenuClickComponent } from './components/menu-click/menu-click.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';
import { Navbarg1Component } from './navbar/navbarg1/navbarg1.component';
@NgModule({
  declarations: [
    AppComponent,
    LogoG1Component,
    ProfilesComponent,
    IconComponent,
    MainNewsComponent,
    TitleSimpleComponent,
    GridsLookHereComponent,
    ItemsListNewsComponent,
    ItemNewsOnlyComponent,
    DetailsNewsComponent,
    DetailsNewsTitlesComponent,
    DetailsNewsSubtitleComponent,
    MenuClickComponent,
    Navbarg1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    FormsModule,
  ],
  providers: [NewsService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
