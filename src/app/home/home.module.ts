import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {EntryEditCardComponent} from '../entry-edit-card/entry-edit-card.component';
import {IfEntryComponent} from '../if-entry/if-entry.component';
import {EmotionComponent} from '../emotion/emotion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage, IfEntryComponent, EntryEditCardComponent, EmotionComponent]
})


export class HomePageModule{

}


