import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Operationservice } from "./Operationservice";


@Directive({
    selector: '[nz-operation-text]'
}) export class OperationHidden implements OnInit{
    counter: any;

    showtimeClass: string = 'show-time';
    showtimeClassHidden: string = 'show-time-hidden'


    constructor(
        private elementRef: ElementRef, 
        private renderer2: Renderer2,
        private operationservice: Operationservice
    ) {

    }

    ngOnInit(): void {
        this.counter = this.operationservice.counter;
    }

    // When counter Increments
    // Opertion details display/hidden
    Test() {
        if (this.counter == 1) {
            this.renderer2.addClass(this.elementRef.nativeElement, this.showtimeClass);
            this.renderer2.removeClass(this.elementRef.nativeElement, this.showtimeClassHidden);
            
        } else {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.showtimeClass);
            this.renderer2.addClass(this.elementRef.nativeElement, this.showtimeClassHidden);
        };
        console.log(this.counter)
    }

}