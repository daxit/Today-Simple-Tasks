import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'today', loadChildren: '../today/today.module#TodayPageModule' },
      { path: 'week', loadChildren: '../week/week.module#WeekPageModule' },
      { path: 'someday', loadChildren: '../someday/someday.module#SomedayPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/today',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
