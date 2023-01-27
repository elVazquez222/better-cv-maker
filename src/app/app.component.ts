import { Component } from '@angular/core';
import { TextInput } from './textInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Better CV Maker';
  personalInfoInputs: Array<TextInput> = [
    { label: "Name", type: "text", value: "" },
    { label: "Adresse", type: "text", value: "" },
    { label: "Phone", type: "text", value: "" },
    { label: "LinkedIn", type: "text", value: "" },
    { label: "website", type: "text", value: "" },
  ];
  workExperienceInputs: Array<WorkExperienceInput> = [
    { label: "Name", type: "text", value: "" },
    { label: "Adresse", type: "text", value: "" },
    { label: "Phone", type: "text", value: "" },
    { label: "LinkedIn", type: "text", value: "" },
    { label: "website", type: "text", value: "" },
  ];

  newTextInput: TextInput = {
    label: '',
    type: 'text',
    value: ''
  }

  addInput(): void {
    this.inputs = [...this.inputs, this.newTextInput];
  }
}
