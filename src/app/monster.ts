export class Monster {
    id: number;
    //Title Section
    name: string;
    size: string;
    type: string;
    alignment: string;

    //Combat stats
    ac: number;
    hitPointAvg: number;
    hitDice: string;
    speed: number;

    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;

    //Creature attributes
    damageImunities?: string[];
    conditionImunities?: string[];
    senses?: string[];
    languages?: string [];
    cr: number;
    xp: number;

    // Abilities
    abilities?: IStatAbility[];

    // Actions
    actions?: IStatAbility[];

    //Legendary Actions
    legendaryActions?: IStatAbility[];

};

export interface IStatAbility
{
    title: string;
    description: string;
}