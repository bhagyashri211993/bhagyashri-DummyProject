import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'child-component',
    templateUrl:'./child.component.html',
    styleUrls:[]    
})

export class child{
@Input() public parentData;

@Output()
parentUpdate = new EventEmitter();

// @Output()  childfunction;
childfunctioncall()
{
    console.log('i am in child function');
}


}
