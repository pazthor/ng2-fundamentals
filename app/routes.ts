import {Routes} from '@angular/router'

import{
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent
}from './events/index'

import {}  from './events/event-details/event-details.component'
import {} from './events/create-event.component'
import {Error404Component} from './errors/404.component'
import {} from './events/event-details/event-route-activator.service'
import {  } from './events/event-list-resolver.service'
import {} from 'index'

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, 
        canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}  } ,
    {path: 'events/:id', component: EventDetailsComponent , canActivate:[EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren:'app/user/user.module#UserModule'}
]