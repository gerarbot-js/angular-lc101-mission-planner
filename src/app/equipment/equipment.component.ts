import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tanks"},
  ];
  equipmentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(itemName: string) {
      this.equipment.push({name: itemName});
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: object) {
    this.equipmentBeingEdited = item;
  }

  save(name:string, item: object) {
    item['name'] = name;
    this.equipmentBeingEdited = null;
  }

}
