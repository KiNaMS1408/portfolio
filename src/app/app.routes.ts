// import { Routes } from '@angular/router';

export const routes: Routes = [];
import { Routes } from '@angular/router';
import { WhyMeComponent } from './components/why-me/why-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DaBubbleComponent } from './components/projects/da-bubble/da-bubble.component';
import { ElPolloLocoComponent } from './components/projects/el-pollo-loco/el-pollo-loco.component';
import { JoinComponent } from './components/projects/join/join.component';
import { PokedexComponent } from './components/projects/pokedex/pokedex.component';
import { ContactComponent } from './components/contact/contact.component';


export const APP_ROUTES: Routes = [
{ path: '', component: WhyMeComponent, pathMatch: 'full' },
{ path: 'projects', component: ProjectsComponent },
{ path: 'projects/da-bubble', component: DaBubbleComponent },
{ path: 'projects/el-pollo-loco', component: ElPolloLocoComponent },
{ path: 'projects/join', component: JoinComponent },
{ path: 'projects/pokedex', component: PokedexComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', redirectTo: '' }
];
