import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';

import { FormsModule } from '@angular/forms';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { TodosfooterComponent } from './todosfooter/todosfooter.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemsActiveComponent } from './items-active/items-active.component';
import { ItemsCompletedComponent } from './items-completed/items-completed.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    TodoslistComponent,
    TodosfooterComponent,
    ItemsActiveComponent,
    ItemsCompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
