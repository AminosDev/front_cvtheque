import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { CvFormComponent } from './cv-form/cv-form.component';

import { PlanificationComponent } from './planification/planification.component';
import { ProgrammerEntretienComponent } from './programmer-entretien/programmer-entretien.component';
import { AdminCreateUserComponent } from './admin-create-user/admin-create-user.component';
import { ConfigApplicationComponent } from './config-application/config-application.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    CvFormComponent,
    PlanificationComponent,
    ProgrammerEntretienComponent,
    AdminCreateUserComponent,
    ConfigApplicationComponent
   
  ],
  imports: [
    NgSelectModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
