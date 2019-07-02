import {Pipe, PipeTransform } from '@angular/core';


@Pipe({name:"Summary"})
export class SummaryPipe implements PipeTransform{
    transform(value:string){
        if(!value)
            return null;
        return value.substr(0,200).replace(/<\/?[^>]+>/gi, '')+'....';
        
    }
}

@Pipe({name:"DeleteTages"})
export class DeletePipe implements PipeTransform{
    transform(value:string){
        if(!value)
            return null;
        return value.replace(/<\/?[^>]+>/gi, '');

    }
}