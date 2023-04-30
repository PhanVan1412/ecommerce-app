import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/home-page/hero/hero.component';
import { ServicesComponent } from './components/home-page/service/services.component';
import { CategoryComponent } from './components/home-page/category/category.component';
import { HomeProductsComponent } from './components/home-page/home-products/home-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
]
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    CategoryComponent,
    HomeProductsComponent,
    FooterComponent,
    ProductDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
