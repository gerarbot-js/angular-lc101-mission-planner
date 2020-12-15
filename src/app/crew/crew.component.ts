import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    let nameArray: string[] = [];
    for (let member of this.crew) {
      nameArray.push(member['name']);
    }

// The push needs bracket notation. The below cause an error but 
// still run fine (ng serve won't work if you close it and open it
// up again, though):
    // for (let member of this.crew) {
    //   nameArray.push(member.name);
    // }

    // for (let i = 0; i < this.crew.length; i++) {
    //   nameArray.push(this.crew[i].name);
    //   console.log(nameArray);
    // }

    if (!nameArray.includes(memberName)) {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name:string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}
