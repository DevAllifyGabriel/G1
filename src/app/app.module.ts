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
import { GridsMaisLidasComponent } from './components/grids/grids-most-read/grids-mais-lidas.component';
import { GridsLookHereComponent } from './components/grids/grids-look-here/grids-look-here.component';
import { GridsMayInterestComponent } from './components/grids/grids-may-interest/grids-may-interest.component';
import { GridsBlogG1Component } from './components/grids/grids-blog-g1/grids-blog-g1.component';
import { GridsFakeComponent } from './components/grids/grids-fake/grids-fake.component';
import { HowToMakeComponent } from './components/grids/how-to-make/how-to-make.component';
import { DonateComponent } from './components/grids/donate/donate.component';
import { GridsPodcastComponent } from './components/grids/grids-podcast/grids-podcast.component';
import { ItemsListNewsComponent } from './components/grids/items-list-news/items-list-news.component';
import { ItemNewsOnlyComponent } from './page-news/item-news-only/item-news-only.component';
import { DetailsNewsComponent } from './components/page-news/details-news/details-news.component';
import { DetailsNewsTitlesComponent } from './components/page-news/details-news-titles/details-news-titles.component';
import { DetailsNewsSubtitleComponent } from './components/page-news/details-news-subtitle/details-news-subtitle.component';
import { MenuClickComponent } from './components/menu-click/menu-click.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LogoG1Component,
    ProfilesComponent,
    IconComponent,
    MainNewsComponent,
    TitleSimpleComponent,
    GridsMaisLidasComponent,
    GridsLookHereComponent,
    GridsMayInterestComponent,
    GridsBlogG1Component,
    GridsFakeComponent,
    HowToMakeComponent,
    DonateComponent,
    GridsPodcastComponent,
    ItemsListNewsComponent,
    ItemNewsOnlyComponent,
    DetailsNewsComponent,
    DetailsNewsTitlesComponent,
    DetailsNewsSubtitleComponent,
    MenuClickComponent,
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
