import { Component, OnInit, Directive } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { AppServices } from './app.services'; // Import AppService 
import { FormBuilder,Validators} from '@angular/forms';// Import form dependenicies



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`
            .classTableHead {background-color:	#ffa69f;
                             border: 3px solid #ffb69f}
            .classTableBody {background-color:	#ffe69f;
                             border: 3px solid #ffd69f}
         `]// Two styles are defined, one for the table head and one for the table body
})


export class AppComponent implements OnInit { // Export a class AppComponent 
        cartoons = [{}]; //Declare an array of objects
        constructor(private _appServives : AppServices){} //Declare a private variable of the type AppServices
        
        ngOnInit(){
            this.cartoons = this._appServives.getData() //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
        }
     
    
        selectedCartoon = {"name":"Angelina Pickles", "DOB":"29-12-1993", "email": "angie@email.com"}; //Assign a default value to the variable selectedCartoon
        onChange(newValue) {// On change of the dropdown option, a newValue is taken in as the parameter
        this.selectedCartoon = newValue;//the selectedCartoon is assigned the new value
        return this.selectedCartoon;// selectedCartoon is returned
        }

} 



