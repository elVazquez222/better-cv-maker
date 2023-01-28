import { Component, Input, OnInit } from '@angular/core';
import { TextInput } from '../textInput';
import { WorkExperienceEntry } from '../workExperienceEntry'
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() personalInfo: Array<TextInput> = [];
  @Input() professionalInfo: Array<TextInput> = [];
  @Input() workExperienceEntries: Array<WorkExperienceEntry> = [];

  jobTitle = null;
  jobSubTitle = null;
  experienceInYears = null;
  availableFrom = null;
  availableAt = null;
  wouldMoveTo = null;
  skillsWithExperience = null;
  furtherSkills = null;
  languages = null;

  ngOnInit() {
    this.jobTitle = this.professionalInfo.filter(info => info.label === "Job Title")[0];
    this.jobSubTitle = this.professionalInfo.filter(info => info.label === "Job Subtitle")[0];
    this.experienceInYears = this.professionalInfo.filter(info => info.label === "Experience in years")[0];
    this.availableFrom = this.professionalInfo.filter(info => info.label === "Availability (time)")[0];
    this.availableAt = this.professionalInfo.filter(info => info.label === "Availability (place)")[0];
    this.wouldMoveTo = this.professionalInfo.filter(info => info.label === "Would move to")[0];
    this.skillsWithExperience = this.professionalInfo.filter(info => info.label === "Skills With Experience")[0].value.split(" ");
    this.furtherSkills = this.professionalInfo.filter(info => info.label === "Further Skills")[0].value.split(" ");
    this.languages = this.professionalInfo.filter(info => info.label === "Languages")[0];
  }
}
