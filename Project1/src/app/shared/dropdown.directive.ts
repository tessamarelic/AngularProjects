import { Directive, HostListener, HostBinding } from "@angular/core";
//directive to allow us to add a css class to 
//element it sits on so once its clicked it drops down and clicked again it closes
@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') toggleOpen() {
            this.isOpen = !this.isOpen;
    }
}