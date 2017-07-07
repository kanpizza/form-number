import { Component } from '@angular/core';

import { Number }    from './number';

@Component({
  selector: 'number-form',
  templateUrl: './number-form.component.html'
})
export class NumberFormComponent {
  model = new Number(null,null,null);

  showFormControls(form: any) {
    return form && form.controls['id'] &&
    form.controls['id'].value; 
  }
  addThousandSeparator(form:any){
    return (form.controls['id'].value).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }
  addcommaintextfiled(form:any){
    this.model.id = this.model.id.replace(',','');
    this.model.id = (this.model.id).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }
  removecomma(stirng:any){
    this.model.idTxt = this.model.id ;
    return  this.model.idTxt.replace(/,/g,"");
  }
  chkNumber(ele:any){
  var theEvent = ele || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }

}
clear(){
  this.model.id = this.model.id.replace(/,/g,"");;
}

}
