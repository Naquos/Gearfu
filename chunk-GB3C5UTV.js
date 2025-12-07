import{c as h}from"./chunk-PALE3FTD.js";import{b as P}from"./chunk-L52UF7GJ.js";import{A as v,E as s,I as i,M as l,bc as g,d as p,i as c,j as m}from"./chunk-TUA6PSGT.js";import{a as u,b as f}from"./chunk-EQDQRRRY.js";var d=class r{imageDict={};setImageDictionary(e){this.imageDict=e}decompressRLE(e,a){for(let[t,o,n]of e)if(a>=o&&a<=n)return t;return[]}replaceImagePlaceholders(e){return e.replace(/\{(\w+)\}/g,(a,t)=>this.imageDict[t]||a)}replaceValuePlaceholders(e,a){return e.replace(/\$\{(\d+)\}/g,(t,o)=>{let n=parseInt(o,10);return n<a.length?a[n].toString():t})}getFormattedEffect(e,a,t){let o=this.decompressRLE(a,t),n=this.replaceImagePlaceholders(e);return n=this.replaceValuePlaceholders(n,o),n}static \u0275fac=function(a){return new(a||r)};static \u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"})};var b=[{gfxId:5144,name:{fr:"Carnage",en:"Carnage",es:"Carnicer\xEDa",pt:"Carnificina"},description:{fr:"Soif de sang et de pouvoir, je suis l\xE0 pour faire des d\xE9g\xE2ts !",en:"Thirsty for blood and power, I'm here to deal damage!",es:"Sediento de sangre y poder, \xA1estoy aqu\xED para hacer da\xF1o!",pt:"Sedento por sangue e poder, estou aqui para causar dano!"},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`15% Dommages inflig\xE9s.
10% Dommages inflig\xE9s aux cibles ayant de l'armure.
-30% Soins r\xE9alis\xE9s`,en:`15% Damage dealt.
10% Damage dealt to targets with armor.
-30% Healing done`,es:`15% de da\xF1o infligido.
10% de da\xF1o infligido a objetivos con armadura.
-30% de curaci\xF3n realizada`,pt:`15% de dano causado.
10% de dano causado a alvos com armadura.
-30% de cura realizada`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:4957,name:{fr:"Evasion",en:"Evasion",es:"Evasi\xF3n",pt:"Evas\xE3o"},description:{fr:"Pour s'\xE9chapper un moment, ou m\xEAme durablement, ce passif est id\xE9al !",en:"To escape for a moment, or even permanently, this passive is ideal!",es:"\xA1Para escapar por un momento, o incluso permanentemente, este pasivo es ideal!",pt:"Para escapar por um momento, ou mesmo permanentemente, este passivo \xE9 ideal!"},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`100% du niveau en Esquive
Apr\xE9s avoir esquiv\xE9 (avec pertes) :
35% du niveau en Esquive (3 tours)`,en:`100% of level in Evasion
After evading (with losses):
35% of level in Evasion (3 turns)`,es:`100% del nivel en Evasi\xF3n
Despu\xE9s de evadir (con p\xE9rdidas):
35% del nivel en Evasi\xF3n (3 turnos)`,pt:`100% do n\xEDvel em Evas\xE3o
Ap\xF3s evadir (com perdas):
35% do n\xEDvel em Evas\xE3o (3 turnos)`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:5621,name:{fr:"Fluctuation",en:"Fluctuation",es:"Fluctuaci\xF3n",pt:"Flutua\xE7\xE3o"},description:{fr:"Lorsqu'un combattant se frotte \xE0 un autre, une \xE9nergie se transmet forc\xE9ment de l'un \xE0 l'autre. Le concept de ce passif r\xE9side dans l'utilisation d\xE9tourn\xE9e de cette \xE9nergie, \xE0 des fins brutales.",en:"When one fighter rubs against another, energy is inevitably transmitted from one to the other. The concept of this passive lies in the diverted use of this energy, for brutal purposes.",es:"Cuando un luchador se frota contra otro, la energ\xEDa se transmite inevitablemente de uno a otro. El concepto de este pasivo radica en el uso desviado de esta energ\xEDa, con fines brutales.",pt:"Quando um lutador se esfrega contra outro, a energia \xE9 inevitavelmente transmitida de um para o outro. O conceito deste passivo reside no uso desviado dessa energia, para fins brutais."},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`Lorsque vous esquivez une cible :
Avec pertes : Sur la cible Fluctuation (+10Niv)
 Sans perte : Sur la cible Fluctuation (+15Niv)
Lorsque vous taclez une cible: Fluctuation (+15 Niv)
Aux cibles terminant leur tour \xE0 votre contact : Fulctuation (+20 Niv.)`,en:`When you evade a target:
With losses: On the target Fluctuation (+10Lvl)
 Without loss: On the target Fluctuation (+15Lvl)
When you tackle a target: Fluctuation (+15 Lvl)
To targets ending their turn in your contact: Fluctuation (+20 Lvl.)`,es:`Cuando evades un objetivo:
Con p\xE9rdidas: En el objetivo Fluctuaci\xF3n (+10Niv)
 Sin p\xE9rdida: En el objetivo Fluctuaci\xF3n (+15Niv)
Cuando tacleas a un objetivo: Fluctuaci\xF3n (+15 Niv)
A los objetivos que terminan su turno en tu contacto: Fluctuaci\xF3n (+20 Niv.)`,pt:`Quando voc\xEA evade um alvo:
Com perdas: No alvo Flutua\xE7\xE3o (+10Niv)
 Sem perda: No alvo Flutua\xE7\xE3o (+15Niv)
Quando voc\xEA tacleia um alvo: Flutua\xE7\xE3o (+15 Niv)
Para alvos que terminam seu turno em seu contato: Flutua\xE7\xE3o (+20 Niv.)`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:4956,name:{fr:"Inspiration",en:"Inspiration",es:"Inspiraci\xF3n",pt:"Inspira\xE7\xE3o"},description:{fr:"Une bonne respiration, une boisson fra\xEEche et on entame le combat !",en:"A good breath, a cool drink and we start the fight!",es:"\xA1Una buena respiraci\xF3n, una bebida fresca y comenzamos la pelea!",pt:"Uma boa respira\xE7\xE3o, uma bebida fresca e come\xE7amos a luta!"},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`50% du niveau en Initiative
 10% Dommages inflig\xE9s aux cibles ayant plus d'Initiative`,en:`50% of level in Initiative
 10% Damage dealt to targets with more Initiative`,es:`50% del nivel en Iniciativa
 10% de da\xF1o infligido a objetivos con m\xE1s Iniciativa`,pt:`50% do n\xEDvel em Iniciativa
 10% de dano causado a alvos com mais Iniciativa`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:4958,name:{fr:"Interception",en:"Interception",es:"Intercepci\xF3n",pt:"Intercep\xE7\xE3o"},description:{fr:"Hopla ! O\xF9 croyez-vous aller ? Restez donc ici !",en:"Hopla! Where do you think you're going? Stay here!",es:"\xA1Hopla! \xBFA d\xF3nde crees que vas? \xA1Qu\xE9date aqu\xED!",pt:"Hopla! Para onde voc\xEA pensa que est\xE1 indo? Fique aqui!"},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`100% du niveau en Tacle
Apr\xE8s avoir tacl\xE9 :
35% du niveau en Tacle (3 tours)`,en:`100% of level in Tackle
After tackling:
35% of level in Tackle (3 turns)`,es:`100% del nivel en Tacle
Despu\xE9s de taclear:
35% del nivel en Tacle (3 turnos)`,pt:`100% do n\xEDvel em Tackle
Ap\xF3s tackle:
35% do n\xEDvel em Tackle (3 turnos)`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:5146,name:{fr:"M\xE9decine",en:"Medicine",es:"Medicina",pt:"Medicina"},description:{fr:"Besoin d'un soigneur dans votre \xE9quipe ? Je suis l\xE0 !",en:"Need a healer on your team? I'm here!",es:"\xBFNecesitas un sanador en tu equipo? \xA1Estoy aqu\xED!",pt:"Precisa de um curandeiro na sua equipa? Estou aqui!"},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`30% Soins r\xE9alis\xE9s
25% Armure donn\xE9e
-15% Dommages inflig\xE9s`,en:`30% Healing done
25% Armor given
-15% Damage dealt`,es:`30% de curaci\xF3n realizada
25% de armadura dada
-15% de da\xF1o infligido`,pt:`30% de cura realizada
25% de armadura dada
-15% de dano causado`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:5237,name:{fr:"Motivation",en:"Motivation",es:"Motivaci\xF3n",pt:"Motiva\xE7\xE3o"},description:{fr:"En \xE9tant motiv\xE9, on peut rapidement prendre le pas sur ses adversaires.",en:"By being motivated, one can quickly gain the upper hand over one's opponents.",es:"Al estar motivado, uno puede ganar r\xE1pidamente la ventaja sobre sus oponentes.",pt:"Ao estar motivado, pode-se rapidamente ganhar vantagem sobre os advers\xE1rios."},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`1PA
-20% Dommages inflig\xE9s
10 Volont\xE9`,en:`1AP
-20% Damage dealt
10 Willpower`,es:`1PA
-20% de da\xF1o infligido
10 Voluntad`,pt:`1PA
-20% de dano causado
10 Vontade`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:5145,name:{fr:"Rock",en:"Rock",es:"Roca",pt:"Rocha"},description:{fr:"Plus solide que la montagne, je prendrai les d\xE9g\xE2ts pour vous !",en:"Stronger than the mountain, I will take the damage for you!",es:"\xA1M\xE1s fuerte que la monta\xF1a, yo recibir\xE9 el da\xF1o por ti!",pt:"Mais forte que a montanha, eu vou receber o dano por voc\xEA!"},urls:{fr:"",en:"",es:"",pt:""},PA:0,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`60% Points de Vie
25% Soins re\xE7us
-25% DOmmages inflig\xE9s
-50% Soins r\xE9alis\xE9s`,en:`60% Health Points
25% Healing received
-25% Damage dealt
-50% Healing done`,es:`60% Puntos de vida
25% de curaci\xF3n recibida
-25% de da\xF1o infligido
-50% de curaci\xF3n realizada`,pt:`60% Pontos de Vida
25% Cura recebida
-25% de Dano causado
-50% de Cura realizada`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}}],M=[{gfxId:5623,name:{fr:"Charme de masse",en:"Mass Charm",es:"Encanto masivo",pt:"Encanto em massa"},description:{fr:"Ce sort permet de simuler une attirance physiqque pour votre cible et de la transf\xE9rer vers d'autres pour les attirer fatalement vers elle. Attention, ce sort est fort en \xE9motions.",en:"This spell simulates a physical attraction to your target and transfers it to others to fatally draw them towards it. Beware, this spell is strong in emotions.",es:"Este hechizo simula una atracci\xF3n f\xEDsica hacia tu objetivo y la transfiere a otros para atraerlos fatalmente hacia \xE9l. Cuidado, este hechizo es fuerte en emociones.",pt:"Este feiti\xE7o simula uma atra\xE7\xE3o f\xEDsica ao seu alvo e a transfere para outros para atra\xED-los fatalmente em sua dire\xE7\xE3o. Cuidado, este feiti\xE7o \xE9 forte em emo\xE7\xF5es."},urls:{fr:"",en:"",es:"",pt:""},PA:2,PW:0,PM:0,NotLDV:!0,POModifiable:!0,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`Sur la cible 150 Tacle
 Attire de 2 cases en croix vers la cible`,en:`On the target 150 Tackle
 Draws 2 squares in a cross towards the target`,es:`En el objetivo 150 Tacle
 Atrae 2 casillas en cruz hacia el objetivo`,pt:`No alvo 150 Tackle
 Atrai 2 quadrados em cruz em dire\xE7\xE3o ao alvo`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:5622,name:{fr:"Ma\xEEtrise d'armes",en:"Weapon Mastery",es:"Maestr\xEDa con armas",pt:"Dom\xEDnio de armas"},description:{fr:"En lan\xE7ant ce sort, le porteur s'enrobe du savoir ancestral de tous les ma\xEEtres d'armes l'ayant pr\xE9c\xE9d\xE9, le flot de pouvoir se d\xE9verse dans ses veines et le rend euphorique, pr\xEAt \xE0 tabasser gaiement tous ses adversaires !",en:"By casting this spell, the wearer is enveloped in the ancestral knowledge of all the weapon masters who preceded him, the flow of power flows through his veins and makes him euphoric, ready to happily bash all his opponents!",es:"Al lanzar este hechizo, el portador se envuelve en el conocimiento ancestral de todos los maestros de armas que lo precedieron, el flujo de poder fluye por sus venas y lo vuelve euf\xF3rico, \xA1listo para golpear felizmente a todos sus oponentes!",pt:"Ao lan\xE7ar este feiti\xE7o, o portador \xE9 envolvido no conhecimento ancestral de todos os mestres de armas que o precederam, o fluxo de poder flui por suas veias e o torna euf\xF3rico, pronto para bater felizmente em todos os seus oponentes!"},urls:{fr:"",en:"",es:"",pt:""},PA:2,PW:0,PM:0,NotLDV:!1,POModifiable:!1,Ligne:!1,PorteeMin:0,PorteeMax:0,effect_normal:{fr:`Matrise d'Armes (Niv 100)
Passe son tour`,en:`Weapon Mastery (Lvl 100)
Skips its turn`,es:`Maestr\xEDa con armas (Niv 100)
Omite su turno`,pt:`Dom\xEDnio de armas (Niv 100)
Omite seu turno`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}},{gfxId:6327,name:{fr:"Os \xE0 Moelle",en:"Marrow Bones",es:"Huesos de m\xE9dula",pt:"Ossos da medula"},description:{fr:"Les disciples d'Ouginak vous ont enseign\xE9 comment se d\xE9lecter d'un bon Os \xE0 Moelle. Ce sort invoque un obstacle bloquant. A la fin de votre tour, l'Os est grignott\xE9 pour soigner les cibles \xE0 son contact.",en:"The disciples of Ouginak have taught you how to enjoy a good Marrow Bone. This spell summons a blocking obstacle. At the end of your turn, the Bone is nibbled to heal targets in contact with it.",es:"Los disc\xEDpulos de Ouginak te han ense\xF1ado a disfrutar de un buen Hueso de M\xE9dula. Este hechizo invoca un obst\xE1culo bloqueador. Al final de tu turno, el Hueso es mordisqueado para curar a los objetivos en contacto con \xE9l.",pt:"Os disc\xEDpulos de Ouginak ensinaram-lhe a desfrutar de um bom Osso da Medula. Este feiti\xE7o invoca um obst\xE1culo bloqueador. No final do seu turno, o Osso \xE9 ro\xEDdo para curar os alvos em contacto com ele."},urls:{fr:"",en:"",es:"",pt:""},PA:3,PW:0,PM:0,NotLDV:!1,POModifiable:!0,Ligne:!1,PorteeMin:1,PorteeMax:4,effect_normal:{fr:`Invoque un Os \xE0 Moelle
En fin de tour du lanceur : 
 L'Os \xE0 Moelle perd 1% PV max
Soin eau : 33 autour de l'Os \xE0 Moelle en zone 1-1`,en:`Summons a Marrow Bone
At the end of the caster's turn:
 The Marrow Bone loses 1% max HP
Water healing: 33 around the Marrow Bone in area 1-1`,es:`Invoca un Hueso de M\xE9dula
Al final del turno del lanzador:
 El Hueso de M\xE9dula pierde 1% de PV m\xE1x
Curaci\xF3n de agua: 33 alrededor del Hueso de M\xE9dula en \xE1rea 1-1`,pt:`Invoca um Osso da Medula
No final do turno do lan\xE7ador:
 O Osso da Medula perde 1% de PV m\xE1x
Cura de \xE1gua: 33 ao redor do Osso da Medula na \xE1rea 1-1`},effect_critical:{fr:"",en:"",es:"",pt:""},normalEffect:{fr:[],en:[],es:[],pt:[]},criticalEffect:{fr:[],en:[],es:[],pt:[]}}];var E=class r{http=l(g);classeFormService=l(h);spellEffectService=l(d);sorts=new p([]);sorts$=this.sorts.asObservable();sortsClasse=P(m([this.sorts$,this.classeFormService.classe$]).pipe(c(([e,a])=>e.filter(t=>t.idClasse===a)[0]),c(e=>e?f(u({},e),{sortActifs:[...e.sortActifs],sortPassifs:[...e.sortPassifs],sortElementaires:{feu:[...e.sortElementaires.feu],eau:[...e.sortElementaires.eau],air:[...e.sortElementaires.air],terre:[...e.sortElementaires.terre]}}):void 0),s(e=>e?.sortActifs.push(...M)),s(e=>e?.sortPassifs.push(...b))),{initialValue:void 0});loadPromise;load(){return this.loadPromise?this.loadPromise:(this.loadPromise=new Promise(e=>{this.http.get("/sorts.json").pipe(s(a=>{this.spellEffectService.setImageDictionary(a.imageDict),this.sorts.next(a.classes)}),v(1)).subscribe({next:()=>e(),error:a=>{console.error("Failed to load monster drops:",a),this.sorts.next([]),e()}})}),this.loadPromise)}getDescriptionSortElementaireById(e){return this.sortsClasse()?.sortElementaires.feu.find(a=>a.gfxId===e)||this.sortsClasse()?.sortElementaires.eau.find(a=>a.gfxId===e)||this.sortsClasse()?.sortElementaires.air.find(a=>a.gfxId===e)||this.sortsClasse()?.sortElementaires.terre.find(a=>a.gfxId===e)}getDescriptionSortPassifById(e){return this.sortsClasse()?.sortPassifs.find(a=>a.gfxId===e)}getDescriptionSortActifById(e){return this.sortsClasse()?.sortActifs.find(a=>a.gfxId===e)}static \u0275fac=function(a){return new(a||r)};static \u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"})};export{d as a,E as b};
