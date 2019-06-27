import { Component, OnInit, Input } from '@angular/core';
import { Monster, MonsterSizes } from '../monster';

@Component({
  selector: 'app-monster-editor',
  templateUrl: './monster-editor.component.html',
  styleUrls: ['./monster-editor.component.scss']
})
export class MonsterEditorComponent implements OnInit {

  @Input() monster: Monster
  sizes = MonsterSizes;

  constructor() { }

  ngOnInit() {
  }

}
