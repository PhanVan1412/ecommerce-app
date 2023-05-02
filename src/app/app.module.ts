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
import { CartComponent } from './components/cart/cart.component';
import { ExperienceComponent } from './components/home-page/experience/experience.component';
import { CommentsComponent } from './components/home-page/comments/comments.component';
import { NewArrivalComponent } from './components/home-page/new-arrival/new-arrival.component';
import { JoinMailComponent } from './components/home-page/join-mail/join-mail.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { PromoPageComponent } from './components/promo-page/promo-page.component';
import { FilterCategoryComponent } from './components/filter-category/filter-category.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'category', component: CategoryPageComponent},
  { path: 'promo', component: PromoPageComponent}
  
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
    ProductDetailsComponent,
    CartComponent,
    ExperienceComponent,
    CommentsComponent,
    NewArrivalComponent,
    JoinMailComponent,
    ProductsPageComponent,
    CategoryPageComponent,
    PromoPageComponent,
    FilterCategoryComponent,
    ProductItemComponent,
    AdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
