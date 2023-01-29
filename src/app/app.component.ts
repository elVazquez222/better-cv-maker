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
    { label: "Skills With Experience", type: "text", value: "React.js, Vue.js, TypeScript, JavaScript, REST, SASS, Mobx, Docker, git, PHP, MySQL, CSS3, SCRUM, Kanban, Jira, CI/CD" },
    { label: "Further Skills", type: "text", value: "Angular, Python, ReactNative, UI/UX, Flutter, AI/ML" },
    { label: "Languages", type: "text", value: "de us es fr" },
  ]
  workExperienceEntries: Array<WorkExperienceEntry> = [
    { title: 'Web Developer', location: 'Bundeswehr, Germany', description: 'Creating innovative new apps for the members of the German Army to facilitate every day life in Service. Being member of a small team I am having the challenge and the opportunity to build a great project from scratch using a modern tech stack.', time: '2022 – today', skills: 'Vue.js, JavaScript, SASS, Docker, gitlab, KeyCloak' },
    { title: 'Web Developer', location: 'CHECK 24, Münster', description: 'Building the hotel comparison website hotel.check24.de in a Team of 10+ FrontendDevelopers. Collaborating with other teams using SCRUM, Kanban, Slack, zoom and realizing new features in close cooperation with the product management using Jira, Adobe XD and hot coffee.', time: '2020 – 2022', skills: 'React.js, TypeScript, PHP, REST, Jira, SASS, Twig, Mobx, Docker, MVC, UI/UX, git' },
    { title: 'Frontend Developer', location: 'Command Cyber- & Informationroom CIR, Bonn', description: 'Refactoring and extending the existing Microsoft Sharepointbased intranet using React JS and RESTful API to allow to the employees to display and manage speci:c data on a personalized dashboard. SideProjectW Building a digital Kanban board that was used during the COVID19 restrictions using React JS and Firebase.', time: '2019 – 2020', skills: 'React.js, JavaScript, Sharepoint, REST, git, Kanban, Ui-Fabric, firebase' },
    { title: 'Reservist', location: 'Bundeswehr, Schwarzenborn', description: 'Participating in military NATO maneuvers, such as Allied Spirit X, as Infantryman and IT-Specialist.', time: '2018 – 2019', skills: 'Army command and information system, mil. stuff' },
    { title: 'Backend Developer', location: 'HAWK, Hildesheim', time: '2017 – 2018', description: 'Project Refactoring the website of the University of Applied Science HAQK (Hochschule für angewandte Qissenschaft und Kunst. Mainly responsible for the database schemes.', skills: 'PHP, MySQLi, phpMyAdmin, jQuery, HTML/CSS, JavaScript' },
    { title: 'Technical Support', location: 'Unity Media, Göttingen', description: 'Technical Customer Support. Customer service at a large Internet and multimedia provider. Being responsible for recording and processing technical tickets. ', time: '2015 – 2017', skills: 'Customer Service, Tech Support, Multimedia, network technology' },
    { title: 'Web Content Manager', location: 'Franks Bone Schmuck, Hannover', description: 'Administrating the web shop of a local retailer. Being responsible for the content and presentation of the goods offered and for creating the media (images)', time: '2013-2015', skills: 'Photography, HTML/CSS, Webshop, customer service' },
    { title: 'Internship Webdesign', location: 'Setup-Design, Hannover', description: 'Web Development internship. Applying what I had learned about web development and learning a lot about professional web development and design.', time: '2013 – 2013', skills: 'JavaScript, jQuery, Design, PhotoShop, Bootstrap, HTML/CSS, PHP, MySQL' },
    { title: 'Vocational Training', location: 'Hannover', description: 'IT-Training. Learning the fundamentals of Software-Development, Web-Development, Network-Technology, Databases. At the same time, get your high school diploma.', time: '2011 – 2013', skills: 'C++, HTML, CSS, JavaScript, PHP, MySQL, phpMyAdmin' },
    { title: 'Military Service', location: 'Bundeswehr', description: 'Serving as an Infantryman inter alia in JgBtl292 in Donaueschingen. Building knowledge of human nature and discipline, which are also helpful in civilian work and everyday life.', time: '2005 – 2010', skills: 'soft skills, military skills, leading skills' }
  ]
  newTextInput: TextInput = {
    label: '',
    type: 'text',
    value: ''
  }
  test = "tesdfgt"

  updateSkills(list: string, title: string, time: string) {
    const updateThis = this.workExperienceEntries.find(exp => exp.title === title && exp.time === time);
    const skills = list;

    updateThis.skills = skills;
  }

  addWorkExperienceEntry() {
    this.workExperienceEntries.push({ title: '', description: '', location: '', time: '', skills: '' })
  }

  resetItAll() {
    this.personalInfoInputs = [];
    this.professionalInfoInputs = [];
    this.workExperienceEntries = [{ title: '', description: '', location: '', time: '', skills: '' }];
  }

  addInput(): void {
    // this.inputs = [...this.inputs, this.newTextInput];
  }
}
