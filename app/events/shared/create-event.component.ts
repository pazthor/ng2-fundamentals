import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    template:`
        <h1> </h1>
        <hr>
        <div  class="col-md-6" >
            <h3>Create Event Form Will Here</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary"> save</button>
            <button type="submit" class="btn btn-default" (click)="cancel()"> cancel</button>
        </div> 
    `

})
export class CreateEventComponent{
    isDirty: Boolean = true
    constructor(private router: Router){
    }

    cancel(){
        this.router.navigate(['/events'])

    }
}
