
export class Monster {
    id: number;
    //Title Section
    name: string;
    size: IMonsterSize;
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
    savingThrows?: string[];
    skills?: string[];
    damageImmunities?: string[];
    damageResistances?: string[];
    conditionImunities?: string[];
    senses?: string[];
    languages?: string [];
    cr: number;
    xp: number;

    // Abilities
    abilities?: IStatAbility[];

    // Actions
    actions?: IStatAbility[];

    // Reactions
    reactions?: IStatAbility[];

    //Legendary Actions
    legendaryActions?: IStatAbility[];

};

export interface IStatAbility
{
    title: string;
    description: string;
}

export const MonsterSizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
export type IMonsterSize = typeof MonsterSizes[number];