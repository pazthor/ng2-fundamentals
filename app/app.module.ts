import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule, ActivatedRouteSnapshot} from '@angular/router'
import {AuthService} from './user/auth.service'

import{
	EventsListComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventListResolver
}from './events/index'


 

import { EventsAppComponent } from  './events-app.component'
import { NavBarComponent } from  './nav/navbar.components'
import {ToastrService}  from './commons/toastr.service'
import {appRoutes}  from './routes'
import {Error404Component} from './errors/404.component'








@NgModule({
	imports: [BrowserModule, 
	RouterModule.forRoot(appRoutes)
	
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		],
		providers:[
			AuthService,
			EventService, 
			ToastrService, 
			EventRouteActivator,
			EventListResolver,
			{provide: 'canDeactivateCreateEvent', 
				useValue: checkDirtyState},
			],
			

	bootstrap: [EventsAppComponent]
})


export class AppModule{
}

function checkDirtyState(component: CreateEventComponent){
	if(component.isDirty)
		return window.confirm('You have not safe this event, do you really want to cancel?')
	return true
}