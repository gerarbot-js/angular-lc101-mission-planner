import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  experiments: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"},
  ];
  experimentBeingEdited: object = null;

  ngOnInit() {
  }

add(experimentName: string) {
    this.experiments.push({name: experimentName});
}

remove(expirement: object) {
  let index = this.experiments.indexOf(expirement);
  this.experiments.splice(index, 1);
}

edit(experiment: object) {
  this.experimentBeingEdited = experiment;
}

save(name:string, experiment: object) {
  experiment['name'] = name;
  this.experimentBeingEdited = null;
}

}
