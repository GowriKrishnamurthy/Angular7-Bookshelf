import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { ConvertCharToSpacePipe } from './shared/convert-char-to-space.pipe';
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { BookDetailGuard } from './books/book-detail.guard';
import { ErrorComponent } from './shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ConvertCharToSpacePipe,
    StarComponent,
    WelcomeComponent,
    BookDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'books', component: BookListComponent },
      { path: 'book/:id', 
        canActivate:[BookDetailGuard],
        component: BookDetailsComponent 
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'error', component: ErrorComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
