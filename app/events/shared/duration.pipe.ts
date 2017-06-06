import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform{
    transform(value: number): string{
        switch(value){
            case 1: return  "Half Hour"
            case 2: return  "OneHour"
            case 3: return  "Half Date"
            case 4: return  "Full Date"
            default: return value.toString()
        }
    }
}