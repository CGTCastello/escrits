# Escrits amb capçalera · CGT Castelló

Web per a fer, des del mòbil o l'ordinador, escrits amb la capçalera de CGT Castelló i baixar-los en PDF per a enviar-los a l'empresa. Tot passa al navegador: ni el text ni la signatura s'envien a cap servidor.

## Què fa

- Capçalera del sistema de disseny de CGT Castelló (logo apaisat, Anton + Open Sans), en color o en blanc i negre per a fotocopiar.
- Camps: destinatària, lloc i data, assumpte, text, nom i càrrec de qui signa.
- Signatura amb el dit o amb una imatge.
- Requadre de «Rebut» per a la còpia segellada i opció de dos exemplars en un mateix PDF.
- Avís dels buits `[ENTRE CLAUDÀTORS]` que queden per omplir.
- 31 models d'escrit, en castellà i en valencià (`models.js`).

## D'on ixen els models

Només de dues fonts. No hi ha cap model redactat de nou.

| Font | Models |
|---|---|
| **CGT Castelló**, [cgtcastello.org/delegades](https://cgtcastello.org/delegades) | Comunicació de la constitució de la secció sindical (valencià i castellà) · Sol·licitud de proves d'un expedient sancionador · Sol·licitud de retirada d'un expedient sancionador (originals en valencià; castellà traduït) |
| **CIG**, [Modelos de solicitudes para os novos permisos familiares](https://www.cig.gal/documento/modelos-de-solicitudes-para-os-novos-permisos-familiares.html) (25 de maig de 2026) | 28 models de permisos, naixement, lactància, reducció i adaptació de jornada i excedències, traduïts del gallec al castellà i al valencià |

Cada model de `models.js` porta el camp `src` (font) i `ref` (document d'origen).

### Canvis respecte dels originals

- Els buits (`____`) són ara `[CLAUDÀTORS]`. El lloc, la data, la signatura i el «Rebut» els posa l'editor.
- Les caselles ☐ dels models de la CIG (naixement, monoparental, violència de gènere) són una llista amb l'avís «deja solo la opción que corresponda».
- CIG 04 i 17 són el mateix escrit; l'únic canvi és «dos» o «tres primeros años» de cotització. Només s'ha inclòs el 17 (tres anys).
- CIG 10 (defunció): l'original cita «artigo 37 b) bis)»; ací, «artículo 37.3.b bis) del ET».
- CIG 23: el punt quart de l'original cita l'art. 34.8 per a la concreció horària; ací, el 37.7, com en la resta de models de la CIG.
- CIG 13: s'ha reordenat la primera frase perquè la cita de l'art. 37.3.g) i el cas concret no es barregen.
- CIG 02 i 25: llevades dades d'exemple que havien quedat a l'original («outubro», «de 9:30 a 13:30», «A Coruña»).
- «Crianza» i «fille» s'han traduït per «hijo o hija» / «fill o filla».
- Tots els models estan en castellà i en valencià; l'idioma es tria a dalt del formulari.
- Models de CGT Castelló: corregides errades de tecleig.

### Models de cgtcastello.org/delegades que NO s'han inclòs

Els sis models de permisos i conciliació (permís 8 setmanes, 5 dies, 4 dies de força major, concreció horària, reducció horària, lactància acumulada) tracten el mateix que els de la CIG, que són més recents. A més:

- Els de 5 dies i 4 dies citen l'art. 48 bis de l'ET, que és el del permís parental; els articles són el 37.3.b) i el 37.9.
- El de concreció horària dona 30 dies a l'empresa i diu que, sense resposta, s'entén denegat; el model de la CIG, amb l'art. 34.8, parla de 15 dies i de concessió presumida.

Tampoc s'han inclòs les actes, convocatòries i calendaris d'eleccions, que no són escrits per a l'empresa.

**Revisió pendent:** les traduccions i aquests ajustos convé que els revise el gabinet jurídic abans de difondre la web.

## Publicar-ho a GitHub Pages

1. Puja aquesta carpeta a un repositori de GitHub.
2. A **Settings → Pages**: *Deploy from a branch*, branca `main`, carpeta `/ (root)`.
3. En un parell de minuts estarà a `https://<usuari-o-organització>.github.io/<repositori>/`.
4. Opcional: subdomini propi amb un arxiu `CNAME` i un registre DNS CNAME.

No cal compilar res. Per a provar-ho en local: `python3 -m http.server 8000`.

## Estructura

```
index.html   L'editor (HTML + CSS + JS)
models.js    Els models d'escrit
fonts/       Anton i Open Sans (SIL OFL 1.1)
vendor/      jsPDF 2.5.1 (MIT)
.nojekyll    Perquè GitHub Pages servisca els arxius tal qual
CLAUDE.md    Context per a treballar el codi amb Claude Code
```

## Llicències

- Codi: a decidir pel sindicat.
- Fonts: SIL Open Font License 1.1 (`fonts/OFL-*.txt`). jsPDF: MIT (`vendor/LICENSE-jspdf.txt`).
- Logo de CGT Castelló: ús exclusiu del sindicat.
- Models de la CIG: © Confederación Intersindical Galega; ací, traduïts i citant-ne la font.
