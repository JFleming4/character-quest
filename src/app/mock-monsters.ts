import { Monster } from './monster';

export const MONSTERS: Monster[] = [
    { id: 11, name: "Goblin", ac: 12, size: "medium", type: "humonoid", alignment: "choatic evil", hitPointAvg: 7, hitDice: "1d6 +2", speed: 30, str: 20, dex: 10, con: 10, int: 5, wis: 6, cha: 4, cr: 0.25, xp: 100 },
    { id: 12, name: "Goblin Shaman", ac: 12, size: "medium", type: "humonoid", alignment: "choatic evil", hitPointAvg: 7, hitDice: "1d6 +2", speed: 30, str: 20, dex: 10, con: 10, int: 5, wis: 6, cha: 4, cr: 0.25, xp: 100 },
    { id: 13, name: "Kobold", ac: 12, size: "medium", type: "humonoid", alignment: "choatic evil", hitPointAvg: 7, hitDice: "1d6 +2", speed: 30, str: 20, dex: 10, con: 10, int: 5, wis: 6, cha: 4, cr: 0.25, xp: 100 },
    { id: 14, name: "Winged Kobold", ac: 12, size: "medium", type: "humonoid", alignment: "choatic evil", hitPointAvg: 7, hitDice: "1d6 +2", speed: 30, str: 20, dex: 10, con: 10, int: 5, wis: 6, cha: 4, cr: 0.25, xp: 100 },
    { id: 15, name: "Kobold Sorcerer", ac: 12, size: "medium", type: "humonoid", alignment: "choatic evil", hitPointAvg: 7, hitDice: "1d6 +2", speed: 30, str: 20, dex: 10, con: 10, int: 5, wis: 6, cha: 4, cr: 0.25, xp: 100 },
    { id: 16, name: "Kobold Inventor", ac: 12, size: "medium", type: "humonoid", alignment: "choatic evil", hitPointAvg: 7, hitDice: "1d6 +2", speed: 30, str: 20, dex: 10, con: 10, int: 5, wis: 6, cha: 4, cr: 0.25, xp: 100 },
    
    { id: 17, name: "Young Red Dragon", ac: 18, size: "large", type: "draconic", alignment: "choatic evil", hitPointAvg: 170, hitDice: "8d12 +20", speed: 30, str: 20, dex: 10, con: 10, int: 5, wis: 6, cha: 4, cr: 13,xp:3400,
        abilities: [
            {
                title: "Hoarder",
                description: "The dragon has a vast collection of gold and magical items. It will always consider adding more to its collection if asked to bargain"
            },
            {
                title: "Out of reach",
                description: "The dragon can make tail attacks while flying without provoking opportunity attacks when passing by"
            }
        ],
        actions: [
            {
                title:"Multi Attack: ",
                description: "The dragon can make either two Claw attacks or a Tail and a Claw attack"
            },
            {
                title: "Claw: ",
                description: "+8 to hit, reach 5ft, one target. Hit 2d8 + 5 slashing damage"
            },
            {
                title: "Tail: ",
                description: "+8 to hit, reach 10ft, one target. Hit 3d8 + 5 bludgeoning damage "
            }
        ],
        legendaryActions: [
            {
                title: "Fire Breath (recharge 5-6): ",
                description: "Each creature in a 30ft cone makes a Dexterity saving throw. On Fail take 6d8 fire damage half on success"
            }
        ],
        languages: ["Draconic", "Common"],
        conditionImunities: ["Fear", "Charmed"],
        damageImunities: ["Fire"],
        senses: ["Darkvision 120ft", "Blindsight 60ft", "Passive Perception 17"]
    },
]