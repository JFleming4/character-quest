import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';
import { MONSTERS } from '../mock-monsters';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  monsters: Monster[] = MONSTERS;
  selectedMonster: Monster;
  constructor() { }

  onSelect(monster: Monster): void {
    this.selectedMonster = monster
  }

  ngOnInit() {
  }

}
