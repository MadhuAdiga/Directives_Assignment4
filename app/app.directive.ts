import { Directive, TemplateRef, ViewContainerRef, Input, } from '@angular/core'; //Import required dependenices from angular core

// Directive decorator
@Directive({ selector: '[myUnless]' })
// Directive class
export class HiddenDirective { //Declare the class HiddenDirective
    private hasView = false; //Declare a variable hasview and assign it to false
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }//Constructor initiates two private variables of the type TemplateRef and ViewContainerRef
    
    @Input() set myUnless(display: boolean) { //@Input receives a boolean value from the AppComponent
    if (!display && !this.hasView) { //If the boolean value if true
      this.viewContainer.createEmbeddedView(this.templateRef);//Display the element in DOM
      this.hasView = true;
    } else if (display && this.hasView) {//If input value is false
      this.viewContainer.clear(); //Hide the element in DOM
      this.hasView = false;
    }
  }
    }    
    
