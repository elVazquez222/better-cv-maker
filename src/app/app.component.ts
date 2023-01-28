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
    { label: "Address", type: "text", value: "" },
    { label: "Phone", type: "text", value: "" },
    { label: "LinkedIn", type: "text", value: "" },
    { label: "Website", type: "text", value: "" },
  ];
  professionalInfoInputs: Array<TextInput> = [
    { label: "Job Title", type: "text", value: "Web-Developer" },
    { label: "Experience in years", type: "text", value: "5+" },
    { label: "Job Subtitle", type: "text", value: "Focused on JavaScript Frameworks" },
    { label: "Availability (time)", type: "text", value: "01.11.2023" },
    { label: "Availability (place)", type: "text", value: "Germany" },
    { label: "Would move to", type: "text", value: "Germany, Spain" },
    { label: "Skills With Experience", type: "text", value: "React.js Vue.js TypeScript JavaScript REST SASS Mobx Docker git PHP MySQL CSS3 SCRUM Jira CI/CD" },
    { label: "Further Skills", type: "text", value: "Angular Python ReactNative UI/UX Flutter" },
    { label: "Languages", type: "text", value: "" },
  ]
  workExperienceEntries: Array<WorkExperienceEntry> = [
    { title: '', description: '', time: '', skills: [] }
  ]
  newTextInput: TextInput = {
    label: '',
    type: 'text',
    value: ''
  }
  test = "tesdfgt"

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
