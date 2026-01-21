Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
In opdracht van 270 Degrees heb ik een responsive pagina gemaakt, waarbij het mobiele ontwerp zelf bedacht is. 

## Inhoudsopgave
[**_Beschrijving_**](#beschrijving)<br/>
[Responsive](#responsive)<br/>
[Toegankelijkheid](#toegankelijkheid)<br/>
[Huisstijl](#huisstijl)<br/>
[Interactief](#interactief)<br/>

[**_Kenmerken_**](#kenmerken)<br/>
[HTML](#html)<br/>
[CSS](#css)<br/>
[JavaScript](#js)<br/>
[Uitleg interacties](#uitleg-interactie)<br/>
[Codeconventies](#codeconventies)<br/>

## Beschrijving
https://github.com/user-attachments/assets/826f2062-1b43-4809-a9ca-dd0a1e647cee

Dit is hoe ik de mobile versie heb gemaakt. Je ziet dat ik de viewers om en om links en recht te houden, voor een levendig effect. Dan per viewer heb ik ervoor gekozen om de lange informatie klapbaar te maken, zodat het niet eindeloos scrollen is op de telefoon. Verder staat alles op volgorde zoals op het meegegeven desktop design. Voor de navigatie heb ik ervoor gekozen om een hamburger menu te maken, die het hele scherm bedekt. Zo zijn de opties duidelijk zichtbaar. 

### responsive
[Responsiveness.webm](https://github.com/user-attachments/assets/538c6534-ef10-4c59-8e8e-1b4316f8f4e5)

Ik heb vanaf mobiel gewerkt en over het algemeen breakpoints vanaf 768px(tablet) en 1024px(desktop). De tekstgrootte verandert mee, en je ziet op een gegven moment dat de teksten bij de viewers volledig worden uitgeschreven en het hamburger verdwijnt voor een navigatie in de header.

### toegankelijkheid
Voor toegankelijkheid heb ik een [WCAG-audit](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/issues/23) gedaan met de lighthouse test en die verwerkt.

### huisstijl
<img width="663" height="362" alt="image" src="https://github.com/user-attachments/assets/4ee567e2-d707-4650-b39a-7129272ee916" />
<img width="567" height="720" alt="image" src="https://github.com/user-attachments/assets/85699198-2182-430a-92cf-bfb65174d76c" />
<img width="179" height="676" alt="image" src="https://github.com/user-attachments/assets/3b67b65e-7c6c-4358-908c-b8b7b4f426a9" />
Dit zijn onderdelen uit de meegegeven styleguide. Alles over kleuren, lettertypen en een ontwerp staan hier duidelijk in.

<img width="725" height="749" alt="image" src="https://github.com/user-attachments/assets/49dbaf14-05b2-4c86-b37f-6db8893506c2" />
<img width="248" height="1202" alt="image" src="https://github.com/user-attachments/assets/43f7c82b-d973-48bc-b61b-b22fb2d54a41" />
Die heb ik zoveel mogelijk aangehouden, en ook zo vertaald naar een mobile versie. 

### interactief
[interactie.webm](https://github.com/user-attachments/assets/e3afaa8a-96d2-46b9-840a-c9ba762913dd)

Mijn interactie is een hamburger menu. Je ziet het typische hamburger logo en daaronder het label 'menu', om meer te duiden wat het is (feedforward). Wanneer je het opent wordt het hamburge logo vervormt naar een kruis (feedback), en het label verandert naar 'close', zo is het weer duidelijk dat je het daarmee sluit (feedforward). Ook zie je dat de contact button wit en een klein beetje groter wordt, wanneer je eroverheen hovered (feedforward). Dan wanneer je erop klikt wordt de button kleiner, zo weet je echt dat je hem indrukt (feedback). 

## Kenmerken
### HTML
In mijn HTML heb ik geprobeerd om [zo weinig mogelijk](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/index.html#L11-L32) div elementen te gebruiken om duidelijk te houden waar ik wat voor gebruik. Ik gebruik het eigenlijk alleen voor styling. Ook heb ik [landmark](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/index.html#L31-L34) roles [goed gebruikt](https://developer.mozilla.org/en-US/blog/aria-accessibility-html-landmark-roles/) voor accesibility.

### CSS
Voor CSS gebruik ik [nesting](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/styles/assist.css#L208-L239), omdat dit mij code scheelt en ik het dan makkelijk terug te vinden vindt. Ik gebruik [media query's per selector](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/styles/assist.css#L280-L309).

### JS
Met JS gebruik ik een [3 stappenplan](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/programming-user-interaction.md#het-3-stappenplan-waarmee-je-bijna-alles-kan), [dit](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/scripts/assist.js#L1-L16) werkt voor mij en is duidelijk.

### uitleg interactie
In HTML heb ik een [list met de classname="menu"](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/index.html#L24-L30). Deze heb ik in CSS [gestyled en standaard buiten het scherm gezet met een animatie](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/styles/assist.css#L130-L170). Dan heb ik er met JS voorgezord dat wanneer er [op de menu button wordt gelikt, er een nieuwe class op de "menu" list komt](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/scripts/assist.js#L1-L16), waamee [de positie overwrite](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/styles/assist.css#L177-L195) wordt en het in beeld komt.
Tegelijkertijd wordt het hamburger menu logo'tje en het labek veranderd door [dit stukje JS](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/9674c75684a6eb362d81fb10b3ab89527fab8d56/scripts/assist.js#L7-L15), wanneer er op dezelfde button wordt geklikt.

### codeconventies
[Ademruimte en inspringen](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/index.html#L11-L34) - Voor inspringen gebruik ik altijd tabs. Tussen een aantal belangrijke selectors hou ik een regels ruimte om het voor mijzelf overzichtelijk te houden.

Volgorde en nesten van CSS selectors - CSS nest ik eigenlijk [zo veel mogelijk](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L92-L128), alleen [keyframes](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L68-L90) staan los.

Nesten van media queries - Ik heb een beetje geprobeerd wat ik fijner vindt. Bij [de header](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L202-L243) heb ik 1 media query voor de hele header. De rest heb ik het [per selector](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L251-L262) gedaan. Ik ben erachter dat ik het fijner vind om het per selector te doen.

Naamgeving - Ik heb voor custom properties [kebab naamgeving](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L8-L15) gebruikt. Maar heb voor de [font properties](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L17-L51) wel erbij gezet welke element het is, omdat er per element meerder maten zijn meegegeven van uit de styleguide. Verder met classnames ben ik niet super consistent geweest ik heb het meest wel [een - gebruikt](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L102) tussen woorden, maar ook een keer het volgende woord [met een hoofdletter](https://github.com/SebBastiaans/the-startup-responsive-interactive-website/blob/6c6a2c9c119de3413ceae6c2326154c69d3bf39d/styles/assist.css#L177) beginnen. Ik moet 1 manier aanhouden en dat is vanaf nu met een - er tussen. 


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


