import { SortIdEnum } from "../enum/sortIdEnum";
import { DescriptionSort } from "./descriptionSort";

export const sortPassifCommun: DescriptionSort[] = [
    {
        gfxId: SortIdEnum.CARNAGE,
        name: {
            fr: "Carnage",
            en: "Carnage",
            es: "Carnicería",
            pt: "Carnificina"
        },
        description: {
            fr: "Soif de sang et de pouvoir, je suis là pour faire des dégâts !",
            en: "Thirsty for blood and power, I'm here to deal damage!",
            es: "Sediento de sangre y poder, ¡estoy aquí para hacer daño!",
            pt: "Sedento por sangue e poder, estou aqui para causar dano!"
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 0,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "15% Dommages infligés.\n10% Dommages infligés aux cibles ayant de l'armure.\n-30% Soins réalisés",
            en: "15% Damage dealt.\n10% Damage dealt to targets with armor.\n-30% Healing done",
            es: "15% de daño infligido.\n10% de daño infligido a objetivos con armadura.\n-30% de curación realizada",
            pt: "15% de dano causado.\n10% de dano causado a alvos com armadura.\n-30% de cura realizada"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.EVASION,
        name: {
            fr: "Evasion",
            en: "Evasion",
            es: "Evasión",
            pt: "Evasão"
        },
        description: {
            fr: "Pour s'échapper un moment, ou même durablement, ce passif est idéal !",
            en: "To escape for a moment, or even permanently, this passive is ideal!",
            es: "¡Para escapar por un momento, o incluso permanentemente, este pasivo es ideal!",
            pt: "Para escapar por um momento, ou mesmo permanentemente, este passivo é ideal!"
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 0,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "100% du niveau en Esquive\nAprés avoir esquivé (avec pertes) :\n35% du niveau en Esquive (3 tours)",
            en: "100% of level in Evasion\nAfter evading (with losses):\n35% of level in Evasion (3 turns)",
            es: "100% del nivel en Evasión\nDespués de evadir (con pérdidas):\n35% del nivel en Evasión (3 turnos)",
            pt: "100% do nível em Evasão\nApós evadir (com perdas):\n35% do nível em Evasão (3 turnos)"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.FLUCTUATION,
        name: {
            fr: "Fluctuation",
            en: "Fluctuation",
            es: "Fluctuación",
            pt: "Flutuação"
        },
        description: {
            fr: "Lorsqu'un combattant se frotte à un autre, une énergie se transmet forcément de l'un à l'autre. Le concept de ce passif réside dans l'utilisation détournée de cette énergie, à des fins brutales.",
            en: "When one fighter rubs against another, energy is inevitably transmitted from one to the other. The concept of this passive lies in the diverted use of this energy, for brutal purposes.",
            es: "Cuando un luchador se frota contra otro, la energía se transmite inevitablemente de uno a otro. El concepto de este pasivo radica en el uso desviado de esta energía, con fines brutales.",
            pt: "Quando um lutador se esfrega contra outro, a energia é inevitavelmente transmitida de um para o outro. O conceito deste passivo reside no uso desviado dessa energia, para fins brutais."
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 0,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "Lorsque vous esquivez une cible :\nAvec pertes : Sur la cible Fluctuation (+10Niv)\n Sans perte : Sur la cible Fluctuation (+15Niv)\nLorsque vous taclez une cible: Fluctuation (+15 Niv)\nAux cibles terminant leur tour à votre contact : Fulctuation (+20 Niv.)",
            en: "When you evade a target:\nWith losses: On the target Fluctuation (+10Lvl)\n Without loss: On the target Fluctuation (+15Lvl)\nWhen you tackle a target: Fluctuation (+15 Lvl)\nTo targets ending their turn in your contact: Fluctuation (+20 Lvl.)",
            es: "Cuando evades un objetivo:\nCon pérdidas: En el objetivo Fluctuación (+10Niv)\n Sin pérdida: En el objetivo Fluctuación (+15Niv)\nCuando tacleas a un objetivo: Fluctuación (+15 Niv)\nA los objetivos que terminan su turno en tu contacto: Fluctuación (+20 Niv.)",
            pt: "Quando você evade um alvo:\nCom perdas: No alvo Flutuação (+10Niv)\n Sem perda: No alvo Flutuação (+15Niv)\nQuando você tacleia um alvo: Flutuação (+15 Niv)\nPara alvos que terminam seu turno em seu contato: Flutuação (+20 Niv.)"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.INSPIRATION,
        name: {
            fr: "Inspiration",
            en: "Inspiration",
            es: "Inspiración",
            pt: "Inspiração"
        },
        description: {
            fr: "Une bonne respiration, une boisson fraîche et on entame le combat !",
            en: "A good breath, a cool drink and we start the fight!",
            es: "¡Una buena respiración, una bebida fresca y comenzamos la pelea!",
            pt: "Uma boa respiração, uma bebida fresca e começamos a luta!"
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 0,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "50% du niveau en Initiative\n 10% Dommages infligés aux cibles ayant plus d'Initiative",
            en: "50% of level in Initiative\n 10% Damage dealt to targets with more Initiative",
            es: "50% del nivel en Iniciativa\n 10% de daño infligido a objetivos con más Iniciativa",
            pt: "50% do nível em Iniciativa\n 10% de dano causado a alvos com mais Iniciativa"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.INTERCEPTION,
        name: {
            fr: "Interception",
            en: "Interception",
            es: "Intercepción",
            pt: "Intercepção"
        },
        description: {
            fr: "Hopla ! Où croyez-vous aller ? Restez donc ici !",
            en: "Hopla! Where do you think you're going? Stay here!",
            es: "¡Hopla! ¿A dónde crees que vas? ¡Quédate aquí!",
            pt: "Hopla! Para onde você pensa que está indo? Fique aqui!"
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 0,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "100% du niveau en Tacle\nAprès avoir taclé :\n35% du niveau en Tacle (3 tours)",
            en: "100% of level in Tackle\nAfter tackling:\n35% of level in Tackle (3 turns)",
            es: "100% del nivel en Tacle\nDespués de taclear:\n35% del nivel en Tacle (3 turnos)",
            pt: "100% do nível em Tackle\nApós tackle:\n35% do nível em Tackle (3 turnos)"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.MEDECINE,
        name: {
            fr: "Médecine",
            en: "Medicine",
            es: "Medicina",
            pt: "Medicina"
        },
        description: {
            fr: "Besoin d'un soigneur dans votre équipe ? Je suis là !",
            en: "Need a healer on your team? I'm here!",
            es: "¿Necesitas un sanador en tu equipo? ¡Estoy aquí!",
            pt: "Precisa de um curandeiro na sua equipa? Estou aqui!"
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 0,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "30% Soins réalisés\n25% Armure donnée\n-15% Dommages infligés",
            en: "30% Healing done\n25% Armor given\n-15% Damage dealt",
            es: "30% de curación realizada\n25% de armadura dada\n-15% de daño infligido",
            pt: "30% de cura realizada\n25% de armadura dada\n-15% de dano causado"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.MOTIVATION,
        name: {
            fr: "Motivation",
            en: "Motivation",
            es: "Motivación",
            pt: "Motivação"
        },
        description: {
            fr: "En étant motivé, on peut rapidement prendre le pas sur ses adversaires.",
            en: "By being motivated, one can quickly gain the upper hand over one's opponents.",
            es: "Al estar motivado, uno puede ganar rápidamente la ventaja sobre sus oponentes.",
            pt: "Ao estar motivado, pode-se rapidamente ganhar vantagem sobre os adversários."
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 0,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "1PA\n-20% Dommages infligés\n10 Volonté",
            en: "1AP\n-20% Damage dealt\n10 Willpower",
            es: "1PA\n-20% de daño infligido\n10 Voluntad",
            pt: "1PA\n-20% de dano causado\n10 Vontade"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
        {
            gfxId: SortIdEnum.ROCK,
            name: {
                fr: "Rock",
                en: "Rock",
                es: "Roca",
                pt: "Rocha"
            },
            description: {
                fr: "Plus solide que la montagne, je prendrai les dégâts pour vous !",
                en: "Stronger than the mountain, I will take the damage for you!",
                es: "¡Más fuerte que la montaña, yo recibiré el daño por ti!",
                pt: "Mais forte que a montanha, eu vou receber o dano por você!"
            },
            urls: {
                fr: "",
                en: "",
                es: "",
                pt: ""
            },
            PA: 0,
            PW: 0,
            PM: 0,
            NotLDV: false,
            POModifiable: false,
            Ligne: false,
            PorteeMin: 0,
            PorteeMax: 0,
            effect_normal: {
                fr: "60% Points de Vie\n25% Soins reçus\n-25% DOmmages infligés\n-50% Soins réalisés",
                en: "60% Health Points\n25% Healing received\n-25% Damage dealt\n-50% Healing done",
                es: "60% Puntos de vida\n25% de curación recibida\n-25% de daño infligido\n-50% de curación realizada",
                pt: "60% Pontos de Vida\n25% Cura recebida\n-25% de Dano causado\n-50% de Cura realizada"
            },
            effect_critical: {
                fr: "",
                en: "",
                es: "",
                pt: ""
            },
            normalEffect: {
                fr: [],
                en: [],
                es: [],
                pt: []
            },
            criticalEffect: {
                fr: [],
                en: [],
                es: [],
                pt: []
            }
        }
]

export const sortNeutreCommun: DescriptionSort[] = [
    {
        gfxId: SortIdEnum.CHARME_DE_MASSE,
        name: {
            fr: "Charme de masse",
            en: "Mass Charm",
            es: "Encanto masivo",
            pt: "Encanto em massa"
        },
        description: {
            fr: "Ce sort permet de simuler une attirance physiqque pour votre cible et de la transférer vers d'autres pour les attirer fatalement vers elle. Attention, ce sort est fort en émotions.",
            en: "This spell simulates a physical attraction to your target and transfers it to others to fatally draw them towards it. Beware, this spell is strong in emotions.",
            es: "Este hechizo simula una atracción física hacia tu objetivo y la transfiere a otros para atraerlos fatalmente hacia él. Cuidado, este hechizo es fuerte en emociones.",
            pt: "Este feitiço simula uma atração física ao seu alvo e a transfere para outros para atraí-los fatalmente em sua direção. Cuidado, este feitiço é forte em emoções."
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 2,
        PW: 0,
        PM: 0,
        NotLDV: true,
        POModifiable: true,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "Sur la cible 150 Tacle\n Attire de 2 cases en croix vers la cible",
            en: "On the target 150 Tackle\n Draws 2 squares in a cross towards the target",
            es: "En el objetivo 150 Tacle\n Atrae 2 casillas en cruz hacia el objetivo",
            pt: "No alvo 150 Tackle\n Atrai 2 quadrados em cruz em direção ao alvo"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.MAITRISES_D_ARMES,
        name: {
            fr: "Maîtrise d'armes",
            en: "Weapon Mastery",
            es: "Maestría con armas",
            pt: "Domínio de armas"
        },
        description: {
            fr: "En lançant ce sort, le porteur s'enrobe du savoir ancestral de tous les maîtres d'armes l'ayant précédé, le flot de pouvoir se déverse dans ses veines et le rend euphorique, prêt à tabasser gaiement tous ses adversaires !",
            en: "By casting this spell, the wearer is enveloped in the ancestral knowledge of all the weapon masters who preceded him, the flow of power flows through his veins and makes him euphoric, ready to happily bash all his opponents!",
            es: "Al lanzar este hechizo, el portador se envuelve en el conocimiento ancestral de todos los maestros de armas que lo precedieron, el flujo de poder fluye por sus venas y lo vuelve eufórico, ¡listo para golpear felizmente a todos sus oponentes!",
            pt: "Ao lançar este feitiço, o portador é envolvido no conhecimento ancestral de todos os mestres de armas que o precederam, o fluxo de poder flui por suas veias e o torna eufórico, pronto para bater felizmente em todos os seus oponentes!"
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 2,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: false,
        Ligne: false,
        PorteeMin: 0,
        PorteeMax: 0,
        effect_normal: {
            fr: "Matrise d'Armes (Niv 100)\nPasse son tour",
            en: "Weapon Mastery (Lvl 100)\nSkips its turn",
            es: "Maestría con armas (Niv 100)\nOmite su turno",
            pt: "Domínio de armas (Niv 100)\nOmite seu turno"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    },
    {
        gfxId: SortIdEnum.OS_A_MOELLE,
        name: {
            fr: "Os à Moelle",
            en: "Marrow Bones",
            es: "Huesos de médula",
            pt: "Ossos da medula"
        },
        description: {
            fr: "Les disciples d'Ouginak vous ont enseigné comment se délecter d'un bon Os à Moelle. Ce sort invoque un obstacle bloquant. A la fin de votre tour, l'Os est grignotté pour soigner les cibles à son contact.",
            en: "The disciples of Ouginak have taught you how to enjoy a good Marrow Bone. This spell summons a blocking obstacle. At the end of your turn, the Bone is nibbled to heal targets in contact with it.",
            es: "Los discípulos de Ouginak te han enseñado a disfrutar de un buen Hueso de Médula. Este hechizo invoca un obstáculo bloqueador. Al final de tu turno, el Hueso es mordisqueado para curar a los objetivos en contacto con él.",
            pt: "Os discípulos de Ouginak ensinaram-lhe a desfrutar de um bom Osso da Medula. Este feitiço invoca um obstáculo bloqueador. No final do seu turno, o Osso é roído para curar os alvos em contacto com ele."
        },
        urls: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        PA: 3,
        PW: 0,
        PM: 0,
        NotLDV: false,
        POModifiable: true,
        Ligne: false,
        PorteeMin: 1,
        PorteeMax: 4,
        effect_normal: {
            fr: "Invoque un Os à Moelle\nEn fin de tour du lanceur : \n L'Os à Moelle perd 1% PV max\nSoin eau : 33 autour de l'Os à Moelle en zone 1-1",
            en: "Summons a Marrow Bone\nAt the end of the caster's turn:\n The Marrow Bone loses 1% max HP\nWater healing: 33 around the Marrow Bone in area 1-1",
            es: "Invoca un Hueso de Médula\nAl final del turno del lanzador:\n El Hueso de Médula pierde 1% de PV máx\nCuración de agua: 33 alrededor del Hueso de Médula en área 1-1",
            pt: "Invoca um Osso da Medula\nNo final do turno do lançador:\n O Osso da Medula perde 1% de PV máx\nCura de água: 33 ao redor do Osso da Medula na área 1-1"
        },
        effect_critical: {
            fr: "",
            en: "",
            es: "",
            pt: ""
        },
        normalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        },
        criticalEffect: {
            fr: [],
            en: [],
            es: [],
            pt: []
        }
    }
]