import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { RowComponent, ColComponent } from '@coreui/angular';

@Component({
    selector: 'app-client-overview',
    templateUrl: './client-overview.component.html',
    styleUrls: ['./client-overview.component.scss'],
    imports: [RowComponent, ColComponent]
})
export class ClientOverviewComponent {

  formCheck1 = this.formBuilder.group({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });
  formRadio1 = new UntypedFormGroup({
    radio1: new UntypedFormControl('Radio1')
  });

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  setCheckBoxValue(controlName: string) {
    const prevValue = this.formCheck1.get(controlName)?.value;
    const value = this.formCheck1.value;
    value[controlName] = !prevValue;
    this.formCheck1.setValue(value);
  }

  setRadioValue(value: string): void {
    this.formRadio1.setValue({ radio1: value });
  }
}
