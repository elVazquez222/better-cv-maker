import { Component } from '@angular/core';
import { TextInput } from './textInput';
import { WorkExperienceEntry } from './workExperienceEntry'

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
    { label: "Website", type: "text", value: "" },
  ];
  professionalInfoInputs: Array<TextInput> = [
    { label: "Job Title", type: "text", value: "" },
    { label: "Job Subtitle", type: "text", value: "" },
    { label: "Skills With Experience", type: "text", value: "" },
    { label: "Further Skills", type: "text", value: "" },
  ]
  workExperienceEntries: Array<WorkExperienceEntry> = [
    { title: '', description: '', time: '', skills: [] }
  ]

  newTextInput: TextInput = {
    label: '',
    type: 'text',
    value: ''
  }

  updateSkills(list: string, title: string, time: string) {
    const updateThis = this.workExperienceEntries.find(exp => exp.title === title && exp.time === time);
    const skills = list.split(" ");
    updateThis.skills = skills;
  }

  addWorkExperienceEntry() {
    this.workExperienceEntries.push({ title: '', description: '', time: '', skills: [] })
  }

  addInput(): void {
    // this.inputs = [...this.inputs, this.newTextInput];
  }
}
