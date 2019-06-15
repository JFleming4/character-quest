import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'abilityMod'})
export class AbilityModifierPipe implements PipeTransform {
    transform(value: number): string {
        let mod =  Math.floor((value - 10) / 2);
        if(mod > 0) return "+" + mod;
        return mod.toString();
    }
}