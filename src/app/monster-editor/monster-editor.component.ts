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

  addItem(property: string)
  {
    if(this.monster[property])
    {
      this.monster[property].push("");
    }
    else
    {
      this.monster[property] = [""];
    }
  }

  addObject(property: string)
  {
    if(this.monster[property])
    {
      this.monster[property].push({});
    }
    else
    {
      this.monster[property] = [{}];
    }
  }

  removeItem(property:string, index: number)
  {
    if(this.monster[property] && this.monster[property][index])
    {
      (<Array<any>>this.monster[property]).splice(index, 1);
    }
  }

  trackByFn(index: any, item:any)
  {
    return index;
  }

  ngOnInit() {
  }

}
