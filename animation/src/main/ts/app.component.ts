import { Component, trigger, state, style, transition, animate } from "@angular/core";

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html',
    animations: [
        trigger('testTrigger', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active',   style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class AppComponent {
    state = 'active';

    changeState():void{
        if (this.state == 'active') {
            this.state = 'inactive';
        } else {
            this.state = 'active';
        }
    }
}