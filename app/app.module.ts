import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule, ActivatedRouteSnapshot} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'



import{
	EventsListComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventListResolver,
	CreateSessionComponent,
	SessionListComponent,
	DurationPipe
}from './events/index'


 

import { EventsAppComponent } from  './events-app.component'
import { NavBarComponent } from  './nav/navbar.components'
import {ToastrService}  from './commons/toastr.service'
import  {CollapsibleWellComponent}  from './commons/collapsible-well.component'
import {appRoutes}  from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'








@NgModule({
	imports: [BrowserModule, 
	RouterModule.forRoot(appRoutes),
	FormsModule,
	ReactiveFormsModule,
	
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		CreateSessionComponent,
		SessionListComponent,
		CollapsibleWellComponent,
		DurationPipe
	
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