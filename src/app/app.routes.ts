export const routes: Routes = [];
import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component'; // readey for use
import { DaBubbleComponent } from './components/projects/da-bubble/da-bubble.component'; 
import { ElPolloLocoComponent } from './components/projects/el-pollo-loco/el-pollo-loco.component';
import { JoinComponent } from './components/projects/join/join.component';
import { PokedexComponent } from './components/projects/pokedex/pokedex.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { AgbComponent } from './components/agb/agb.component';
import { HomeComponent } from './components/home/home.component';


export const APP_ROUTES: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
// { path: 'projects', component: ProjectsComponent },
// { path: 'projects/da-bubble', component: DaBubbleComponent },
// { path: 'projects/el-pollo-loco', component: ElPolloLocoComponent },
// { path: 'projects/join', component: JoinComponent },
// { path: 'projects/pokedex', component: PokedexComponent },
{ path: 'impressum', component: ImpressumComponent },
{ path: 'agb', component: AgbComponent },
{ path: '**', redirectTo: '' },
];
