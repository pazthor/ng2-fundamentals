import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent} from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id ]" class="well hoverwell thumbnail">
        <h2>Name: {{event?.name|uppercase}}</h2>
        <div>Date: {{event?.date | date: 'shortDate'}}</div>
        <div [ngStyle]= "getStartTimeStyle()"  [ngSwitch] = "event?.time" >
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'"> early Start</span>
            <span *ngSwitchCase= "'10:00 am'"> late Start</span>
            <span *ngSwitchDefault> Normal Start</span>
        </div>
        <div>Price: {{event?.price | currency:'USD':true}}</div>
        <div *ngIf="event?.location">
            <span> Location: {{event?.location?.address}}</span>
             <span class="pad-left" >{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.OnlineUrl" > 
            Online Url: {{event?.OnlineUrl}}
        </div>
    </div>
        

    `,
    styles: [`

        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 10px;}
        .well div { color: #bbb;}
    `
    
    ]
})

export class EventThumbnailComponent {
    @Input() event: IEvent
  getStartTimeClass(){
     if (this.event && this.event.time === '8:00 am' )
     // const isEarlyStart =  this.event && this.event.time === '8:00 am' 
        return ['green', 'bold']
      return ['']
  }
  getStartTimeStyle():any{
      if (this.event && this.event.time === '8:00 am' )
        return {'color':'#003600','font-weight':'bold'  }
    return {}
  }
}