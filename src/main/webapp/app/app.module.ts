import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Dxcapp1SharedModule } from 'app/shared/shared.module';
import { Dxcapp1CoreModule } from 'app/core/core.module';
import { Dxcapp1AppRoutingModule } from './app-routing.module';
import { Dxcapp1HomeModule } from './home/home.module';
import { Dxcapp1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Dxcapp1SharedModule,
    Dxcapp1CoreModule,
    Dxcapp1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Dxcapp1EntityModule,
    Dxcapp1AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Dxcapp1AppModule {}
