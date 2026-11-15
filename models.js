/* Models d'escrit de l'editor «Escrits» de CGT Castelló.
 *
 * NOMÉS dues fonts (no s'hi afig cap model redactat de nou):
 *   · «castello»: models propis de CGT Castelló, https://cgtcastello.org/delegades
 *   · «cig»: «Modelos de solicitudes para os novos permisos familiares» de la CIG
 *     (publicats el 25 de maig de 2026), traduïts del gallec al castellà i al valencià.
 *     https://www.cig.gal/documento/modelos-de-solicitudes-para-os-novos-permisos-familiares.html
 *
 * Cada model: g = grup, n = nom al desplegable (valencià), src = font, ref = document d'origen,
 * es / va = { a: assumpte, t: text }. Tots els models tenen les dues versions (les «va» de la CIG, al final).
 * El que va entre [CLAUDÀTORS] ho ha d'omplir qui fa l'escrit. [EMPRESA] i [NOMBRE Y APELLIDOS]
 * (o [NOM I COGNOMS]) s'omplin sols amb els camps del formulari.
 */
(function () {
'use strict';

var I = 'Yo, [NOMBRE Y APELLIDOS], con documento de identidad n.º [DNI O NIE], prestando servicios actualmente para la empresa [EMPRESA] con la categoría/puesto de [CATEGORÍA O PUESTO] en su centro de trabajo sito en [CENTRO DE TRABAJO],';
var Q15 = 'En caso de no recibir respuesta a este escrito en un plazo de quince días, se entenderá estimada la petición.';

window.CGT_MODEL_GROUPS = [
  { id: 'sind', n: 'Secció sindical i expedients (CGT Castelló)' },
  { id: 'perm', n: 'Permisos retribuïts' },
  { id: 'naix', n: 'Embaràs, naixement i lactància' },
  { id: 'jorn', n: 'Reducció i adaptació de jornada' },
  { id: 'exc',  n: 'Excedències' }
];

window.CGT_MODELS = {

/* ───────────── CGT Castelló ───────────── */

'seccio-sindical': { g: 'sind', n: 'Constitució de la secció sindical', src: 'castello',
  ref: '4 - Comunicació a l\'empresa de la constitució de la secció sindical',
  es: { a: 'Comunicación a la empresa de la constitución de la sección sindical y de la designación de la/del representante de la sección',
    t: `[NOMBRE Y APELLIDOS], como Representante de la Sección Sindical de CGT en [EMPRESA], y a los efectos recogidos en el artículo 8 de la Ley Orgánica de Libertad Sindical, comunico a esta empresa la constitución de la Sección Sindical de la Confederación General del Trabajo, así como la designación de la/del Representante, a los efectos que en Derecho proceda.

Se adjunta a esta comunicación el justificante de presentación del acta de constitución en la Sección de Mediación, Arbitraje y Conciliación de Castelló.` },
  va: { a: 'Comunicació a l\'empresa de la constitució de la secció sindical i de la designació de la/del representant de la secció',
    t: `[NOM I COGNOMS], com a Representant de la Secció Sindical de CGT en [EMPRESA], i als efectes recollits en l'article 8 de la Llei Orgànica de Llibertat Sindical, comunique a esta empresa la constitució de la Secció Sindical de la Confederació General del Treball, així com la designació de la/del Representant, als efectes que en Dret procedisca.

S'adjunta a esta comunicació el justificant de presentació de l'acta de constitució en la Secció de Mediació, Arbitratge i Conciliació de Castelló.` } },

'expedient-proves': { g: 'sind', n: 'Expedient sancionador: sol·licitud de proves', src: 'castello',
  ref: '02 - Sol·licitut proves expedient sancionador',
  es: { a: 'Solicitud de pruebas del expediente sancionador',
    t: `En relación con el expediente disciplinario notificado el [FECHA DE NOTIFICACIÓN] a [NOMBRE Y APELLIDOS DE LA PERSONA EXPEDIENTADA], trabajador/a de [EMPRESA, CENTRO DE TRABAJO O PROGRAMA], solicito que se me faciliten las pruebas de las faltas que se exponen en él.` },
  va: { a: 'Sol·licitud de proves de l\'expedient sancionador',
    t: `En relació amb l'expedient disciplinari notificat el [DATA DE NOTIFICACIÓ] a [NOM I COGNOMS DE LA PERSONA EXPEDIENTADA], treballador/a de [EMPRESA, CENTRE DE TREBALL O PROGRAMA], sol·licite que se'm faciliten les proves de les faltes que s'hi exposen.` } },

'expedient-retirada': { g: 'sind', n: 'Expedient sancionador: sol·licitud de retirada', src: 'castello',
  ref: '03 - Sol·licitut retirada expedient sancionador',
  es: { a: 'Solicitud de retirada del expediente sancionador',
    t: `Recibida la apertura de expediente sancionador a [NOMBRE Y APELLIDOS DE LA PERSONA EXPEDIENTADA] por parte de [EMPRESA].

Habiendo dialogado con las dos partes para recabar la máxima información posible sobre los hechos que se detallan en el expediente, pero sin haber podido acceder a las pruebas que se mencionan.

Solicito la retirada del expediente sancionador a [NOMBRE Y APELLIDOS DE LA PERSONA EXPEDIENTADA], sin ningún perjuicio para él/ella.` },
  va: { a: 'Sol·licitud de retirada de l\'expedient sancionador',
    t: `Rebuda l'obertura d'expedient sancionador a [NOM I COGNOMS DE LA PERSONA EXPEDIENTADA] per part de [EMPRESA].

Havent dialogat amb les dues parts per a recollir la màxima informació possible sobre els fets que es detallen en l'expedient, però sense haver pogut accedir a les proves que s'hi esmenten.

Sol·licite la retirada de l'expedient sancionador a [NOM I COGNOMS DE LA PERSONA EXPEDIENTADA], sense cap perjudici per a ell/ella.` } },

/* ───────────── CIG · permisos retribuïts ───────────── */

'accident-hospitalitzacio': { g: 'perm', n: '5 dies per accident, malaltia greu o hospitalització', src: 'cig', ref: '01',
  es: { a: 'Permiso por accidente/enfermedad grave/hospitalización o intervención quirúrgica sin hospitalización que precise reposo domiciliario',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.3.b) del ET, el trabajador o la trabajadora tiene derecho a «5 días por accidente o enfermedad graves, hospitalización o intervención quirúrgica sin hospitalización que precise reposo domiciliario del cónyuge, pareja de hecho o parientes hasta el segundo grado por consanguinidad o afinidad, incluido el familiar consanguíneo de la pareja de hecho, así como de cualquier otra persona distinta de las anteriores, que conviva con la persona trabajadora en el mismo domicilio y que requiera el cuidado efectivo de aquella».

SOLICITO:

Hacer uso de este permiso desde el día [FECHA DE INICIO] hasta el día [FECHA DE FIN], ambos incluidos.

Se adjunta la documentación justificativa.` } },

'defuncio': { g: 'perm', n: 'Defunció de familiar', src: 'cig', ref: '10',
  es: { a: 'Permiso por fallecimiento de cónyuge, pareja de hecho o parientes hasta el segundo grado',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.3.b bis) del ET, el personal tendrá derecho, con carácter retribuido, a un permiso de «dos días por el fallecimiento del cónyuge, pareja de hecho o parientes hasta el segundo grado de consanguinidad o afinidad. Cuando con tal motivo la persona trabajadora necesite hacer un desplazamiento al efecto, el plazo se ampliará en dos días».

SOLICITO:

Hacer uso de este permiso desde el [FECHA DE INICIO] hasta el [FECHA DE FIN], por un total de [2 DÍAS / 4 DÍAS SI HAY DESPLAZAMIENTO] de permiso.` } },

'forca-major': { g: 'perm', n: '4 dies per força major', src: 'cig', ref: '11',
  es: { a: 'Permiso de 4 días para ausentarse del trabajo por causa de fuerza mayor',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, de conformidad con lo establecido en el artículo 37.9 del ET, «la persona trabajadora tendrá derecho a ausentarse del trabajo por causa de fuerza mayor cuando sea necesario por motivos familiares urgentes relacionados con familiares o personas convivientes, en caso de enfermedad o accidente que hagan indispensable su presencia inmediata.

SEGUNDO: Las personas trabajadoras tendrán derecho a que sean retribuidas las horas de ausencia por las causas previstas en el presente apartado equivalentes a cuatro días al año, conforme a lo establecido en convenio colectivo o, en su defecto, en acuerdo entre la empresa y la representación legal de las personas trabajadoras, aportando las personas trabajadoras, en su caso, acreditación del motivo de ausencia».

SOLICITO:

Ausentarme de mi puesto de trabajo el día [FECHA], por un total de [NÚMERO] horas, en concreto desde las [HORA DE INICIO] hasta las [HORA DE FIN] horas.` } },

'impossibilitat-acces': { g: 'perm', n: 'Impossibilitat d\'accés al centre de treball', src: 'cig', ref: '13',
  es: { a: 'Permiso por imposibilidad de acceso al centro de trabajo (art. 37.3.g ET)',
    t: `${I}

MANIFIESTO:

PRIMERO.- Que, según el artículo 37.3.g) del ET, la persona trabajadora podrá ausentarse de su trabajo con derecho a remuneración, y que concurre una situación que imposibilita el acceso a mi centro de trabajo o el tránsito por las vías necesarias para desplazarme al mismo, como consecuencia de [CAUSA CONCRETA: p. ej. alertas meteorológicas, cortes de carretera, recomendación o prohibición de desplazamiento por parte de las autoridades, situación de riesgo grave e inminente, catástrofe, etc.], emitida/s por la autoridad competente [ORGANISMO O ALERTA].

SEGUNDO.- Que esta circunstancia afecta al día/s [FECHA/S], impidiendo el cumplimiento de mi jornada laboral con normalidad. Asimismo, informo de que [SI PROCEDE: la situación continúa o se prevé que pueda prolongarse], por lo que se mantendrá la imposibilidad de desplazamiento hasta nuevo aviso o hasta la desaparición de las circunstancias que la motivan.

SOLICITO:

Que se me reconozca y conceda el permiso retribuido previsto en el artículo 37.3.g) del ET durante el tiempo en que persista la imposibilidad de acceso al centro de trabajo o el riesgo grave e inminente que impide el desplazamiento.

En el caso de que, por la naturaleza de las funciones desempeñadas, sea posible la prestación de servicios a distancia, manifiesto mi disposición a desarrollar el trabajo en modalidad de trabajo a distancia, siempre que la empresa facilite los medios necesarios conforme a la normativa vigente.

A los efectos oportunos, [APORTARÉ / APORTO] la documentación justificativa emitida por las autoridades competentes.` } },

'matrimoni': { g: 'perm', n: 'Matrimoni o parella de fet', src: 'cig', ref: '15',
  es: { a: 'Permiso por matrimonio o unión de hecho',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.3.a) del ET, el trabajador o la trabajadora, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, durante 15 días naturales en caso de matrimonio o registro como pareja de hecho.

SOLICITO:

Disfrutar de los 15 días de permiso desde el día [FECHA DE INICIO] hasta el día [FECHA DE FIN].

${Q15}` } },

'trasllat-domicili': { g: 'perm', n: 'Trasllat de domicili', src: 'cig', ref: '28',
  es: { a: 'Permiso por traslado de domicilio',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.3.c) del ET, la persona trabajadora, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, durante 1 día, por traslado del domicilio habitual.

SOLICITO:

Disfrutar del día de permiso el [FECHA].` } },

'examens-prenatals': { g: 'perm', n: 'Exàmens prenatals i preparació al part', src: 'cig', ref: '07',
  es: { a: 'Permiso para la realización de exámenes prenatales y técnicas de preparación al parto',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.3.f) del ET, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, por el tiempo indispensable para la realización de exámenes prenatales y técnicas de preparación al parto, siempre que deban tener lugar dentro de la jornada de trabajo.

SOLICITO:

Ausentarme de mi puesto de trabajo el día [FECHA], de [HORA DE INICIO] a [HORA DE FIN] horas.` } },

'adopcio-acolliment': { g: 'perm', n: 'Tràmits d\'adopció o acolliment', src: 'cig', ref: '27',
  es: { a: 'Permiso para trámites relacionados con la adopción o acogimiento',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.3.f) del ET, la persona trabajadora, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, por el tiempo indispensable para la asistencia a las preceptivas sesiones de información y preparación y para la realización de los preceptivos informes psicológicos y sociales previos a la declaración de idoneidad, siempre que deban tener lugar dentro de la jornada de trabajo.

SOLICITO:

Ausentarme de mi puesto de trabajo el día [FECHA], de [HORA DE INICIO] a [HORA DE FIN] horas.` } },

/* ───────────── CIG · embaràs, naixement i lactància ───────────── */

'embaras': { g: 'naix', n: 'Comunicació d\'embaràs', src: 'cig', ref: '05',
  es: { a: 'Comunicación de embarazo a la empresa',
    t: `${I}

MANIFIESTO:

PRIMERO: Que en la actualidad estoy en situación de embarazo, encontrándome en la semana [NÚMERO] de gestación. Informo a la empresa de esta situación para que tenga conocimiento de los hechos y cumpla lo establecido en el artículo 26 de la Ley de Prevención de Riesgos Laborales, de manera que no tenga que estar expuesta a tareas y riesgos que pueden influir negativamente en mi salud y en la de mi feto.

SEGUNDO: Que, teniendo en cuenta lo anterior, se me comuniquen por escrito los resultados de la evaluación de riesgos de mi puesto de trabajo y, en caso de que las condiciones de mi puesto de trabajo puedan influir negativamente en mi salud y/o en la de mi feto por la existencia de riesgo, procedan al cambio o adaptación del puesto o agilicen el acceso a la prestación por riesgo durante el embarazo (y/o la lactancia), comunicando la fecha de acceso a esta, así como los trámites que debo realizar.` } },

'naixement': { g: 'naix', n: 'Permís per naixement i cura de menor', src: 'cig', ref: '18',
  es: { a: 'Comunicación de los períodos de suspensión de contrato por nacimiento y cuidado de menor',
    t: `${I}

MANIFIESTO:

PRIMERO.- Que el día [FECHA] tuvo lugar el [NACIMIENTO / ADOPCIÓN / ACOGIMIENTO] de mi hijo o hija.

SEGUNDO.- Que, al amparo de lo dispuesto en el artículo 48 del ET, voy a hacer uso del derecho a la suspensión del contrato por nacimiento y cuidado de menor del siguiente modo:

[DEJA SOLO LA OPCIÓN U OPCIONES QUE CORRESPONDAN Y BORRA EL RESTO]

- Disfrute continuado de las 19 semanas de suspensión del contrato, a contar desde el día [FECHA DE INICIO].

- Disfrute continuado de las 17 semanas de suspensión del contrato, a contar desde el día [FECHA DE INICIO], sin consumir las 2 semanas de disfrute hasta los 8 años.

- Disfrute obligatorio e ininterrumpido de las primeras 6 semanas inmediatamente posteriores al nacimiento / resolución judicial o administrativa, desde el día [FECHA DE INICIO] hasta el día [FECHA DE FIN].

- Disfrute fraccionado de las restantes 11 semanas, dentro de los 12 meses siguientes al nacimiento / adopción / acogimiento, en los siguientes períodos:
   · Del [FECHA DE INICIO] al [FECHA DE FIN].
   · Del [FECHA DE INICIO] al [FECHA DE FIN].

SOLICITO:

Que, teniendo por presentado este escrito, se tenga por comunicada formalmente mi intención de ejercer el derecho a la suspensión del contrato por nacimiento y cuidado de menor en los términos indicados en el apartado anterior, al amparo del artículo 48 del ET.

Asimismo, solicito que la empresa proceda a la tramitación correspondiente y reconozca el disfrute del permiso en la modalidad y períodos señalados.` } },

'naixement-monoparental': { g: 'naix', n: 'Permís per naixement: família monoparental', src: 'cig', ref: '19',
  es: { a: 'Solicitud de permiso por nacimiento monomarental/monoparental',
    t: `${I}

MANIFIESTO:

PRIMERO.- Que el día [FECHA] tuvo lugar el [NACIMIENTO / ADOPCIÓN / ACOGIMIENTO] de mi hijo o hija.

SEGUNDO.- Que, al amparo de lo dispuesto en el artículo 48 del Estatuto de los Trabajadores, voy a hacer uso del derecho a la suspensión del contrato por nacimiento y cuidado de menor del siguiente modo:

[DEJA SOLO LA OPCIÓN U OPCIONES QUE CORRESPONDAN Y BORRA EL RESTO]

- Disfrute continuado de las 32 semanas de suspensión del contrato, a contar desde el día [FECHA DE INICIO].

- Disfrute continuado de las 28 semanas de suspensión del contrato, a contar desde el día [FECHA DE INICIO], sin consumir las 4 semanas de disfrute hasta los 8 años.

- Disfrute obligatorio e ininterrumpido de las primeras 6 semanas inmediatamente posteriores al nacimiento / resolución judicial o administrativa, desde el día [FECHA DE INICIO] hasta el día [FECHA DE FIN], y posterior disfrute de las siguientes semanas de forma fraccionada.

- Disfrute fraccionado de las restantes 22 semanas, dentro de los 12 meses siguientes al nacimiento / adopción / acogimiento, en los siguientes períodos:
   · Del [FECHA DE INICIO] al [FECHA DE FIN].
   · Del [FECHA DE INICIO] al [FECHA DE FIN].

SOLICITO:

Que, teniendo por presentado este escrito, se tenga por comunicada formalmente mi intención de ejercer el derecho a la suspensión del contrato por nacimiento y cuidado de menor en los términos indicados en el apartado anterior, al amparo del artículo 48 del ET.

Asimismo, solicito que la empresa proceda a la tramitación correspondiente y reconozca el disfrute del permiso en la modalidad y períodos señalados.` } },

'parental-8-setmanes': { g: 'naix', n: 'Permís parental de 8 setmanes (menors de 8 anys)', src: 'cig', ref: '20',
  es: { a: 'Permiso de 8 semanas para cuidado de hijos e hijas menores de 8 años',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, de conformidad con lo establecido en el artículo 48 bis del ET, las personas trabajadoras tendrán derecho a un permiso parental para el cuidado de hijo o hija (o menores acogidos/as por tiempo superior a un año), que podrá disfrutarse hasta que tengan 8 años, y que será de duración no superior a 8 semanas, continuas o discontinuas, pudiendo disfrutarse a tiempo completo o en régimen de jornada a tiempo parcial, conforme a lo establecido reglamentariamente.

SEGUNDO: Que este permiso constituye un derecho individual de las personas trabajadoras, hombres o mujeres, sin que pueda transferirse su ejercicio, y corresponderá a la persona trabajadora especificar la fecha de inicio y fin del disfrute o, en su caso, de los períodos de disfrute, debiendo comunicarlo a la empresa con una antelación de diez días, salvo fuerza mayor.

SOLICITO:

Disfrutar de [NÚMERO] semanas de permiso parental, de forma [CONTINUA / FRACCIONADA], desde el día [FECHA DE INICIO] hasta el día [FECHA DE FIN], [A JORNADA COMPLETA / A TIEMPO PARCIAL, conforme al convenio colectivo].` } },

'lactancia-hora': { g: 'naix', n: 'Lactància: 1 hora d\'absència', src: 'cig', ref: '12',
  es: { a: '1 hora de ausencia para el cuidado de lactante',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, de conformidad con lo establecido en el artículo 37.4 del Estatuto de los Trabajadores, las personas trabajadoras tendrán derecho a una hora de ausencia del trabajo, que podrán dividir en dos fracciones, para el cuidado del lactante, hasta que cumpla 9 meses, pudiendo sustituir este derecho por una reducción de su jornada en media hora con la misma finalidad o acumularlo en jornadas completas.

SEGUNDO: Que, atendiendo a la modificación del Real Decreto-ley 6/2019, de 1 de marzo, de medidas urgentes para garantía de la igualdad de trato y de oportunidades entre mujeres y hombres en el empleo y la ocupación, «la reducción de jornada es un derecho individual de las personas trabajadoras sin que pueda transferirse su ejercicio a la otra persona progenitora, adoptante, guardadora o acogedora. Cuando ambas personas progenitoras, adoptantes, guardadoras o acogedoras ejerzan este derecho con la misma duración y régimen, el período de disfrute podrá extenderse hasta que el lactante cumpla 12 meses, con reducción proporcional del salario a partir del cumplimiento de los 9 meses».

COMUNICO:

La hora de ausencia del trabajo para el cuidado de lactante establecida en el artículo 37.4 del ET, de modo que el horario quede establecido del siguiente modo: entre las [HORA DE INICIO] horas y las [HORA DE FIN] horas, entrando en vigor esta licencia el próximo día [FECHA DE INICIO] y finalizando el día [FECHA DE FIN], fecha en la que el lactante cumple 9 meses.

${Q15}` } },

'lactancia-acumulada': { g: 'naix', n: 'Lactància acumulada en jornades completes', src: 'cig', ref: '14',
  es: { a: 'Acumulación de la hora de ausencia para el cuidado de lactante',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.4 del ET, las personas trabajadoras tendrán derecho a una hora de ausencia del trabajo, que podrán dividir en dos fracciones, para el cuidado del lactante hasta que este cumpla 9 meses, o a acumularla en jornadas completas.

SOLICITO:

Que se proceda a acumular a la suspensión del contrato por [NACIMIENTO / ACOGIMIENTO / ADOPCIÓN] la hora de ausencia para el cuidado de lactante establecida en el artículo 37.4 del Estatuto de los Trabajadores, correspondiente a [NÚMERO] jornadas de trabajo, entrando en vigor esta licencia el día [FECHA DE INICIO] hasta el día [FECHA DE FIN].

${Q15}` } },

'prematurs': { g: 'naix', n: 'Naixement prematur o hospitalització després del part', src: 'cig', ref: '16',
  es: { a: 'Permiso por el nacimiento de hijas o hijos prematuros',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 37.5 del ET, «las personas trabajadoras tendrán derecho a ausentarse de su puesto de trabajo durante una hora en el caso de nacimiento prematuro de hijo o hija, o que, por cualquier causa, deban permanecer hospitalizados a continuación del parto. Asimismo, tendrán derecho a reducir su jornada de trabajo hasta un máximo de dos horas, con la disminución proporcional del salario».

SOLICITO:

Ausentarme de mi puesto de trabajo de [HORA DE INICIO] a [HORA DE FIN] horas durante el tiempo que dure la hospitalización.

En caso de no recibir respuesta a este escrito en un plazo de 7 días, se entenderá estimada la petición.` } },

'vacances-coincidents': { g: 'naix', n: 'Vacances coincidents amb el permís per naixement', src: 'cig', ref: '29',
  es: { a: 'Vacaciones coincidentes con la suspensión del contrato por nacimiento/adopción/acogimiento',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 38.3 del ET, cuando el período de vacaciones fijado en el calendario de vacaciones de la empresa coincida en el tiempo con una incapacidad temporal derivada del embarazo, el parto o la lactancia natural, o con el período de suspensión de contrato por nacimiento, se tendrá derecho a disfrutar de las vacaciones en fecha distinta a la de la incapacidad temporal o a la del disfrute del permiso que por aplicación de dicho precepto le correspondiera, al finalizar el período de suspensión, aunque haya terminado el año natural a que correspondan.

SOLICITO:

El disfrute de las vacaciones correspondientes al ejercicio [AÑO], con fecha de inicio el día [FECHA DE INICIO], incorporándome a mi puesto de trabajo el próximo día [FECHA DE REINCORPORACIÓN].

${Q15}` } },

/* ───────────── CIG · reducció i adaptació de jornada ───────────── */

'reduccio-menor': { g: 'jorn', n: 'Reducció de jornada per cura de menor de 12 anys', src: 'cig', ref: '25',
  es: { a: 'Reducción de jornada por cuidado de menor',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, de conformidad con lo establecido en el artículo 37.6 del ET, quien por razones de guarda legal tenga a su cuidado directo a una persona menor de 12 años tendrá derecho a una reducción de la jornada de trabajo de entre, al menos, un octavo y un máximo de la mitad de la duración de aquella.

SEGUNDO: Que, teniendo en cuenta lo recogido en el artículo 37.7 del ET, la concreción horaria y la determinación del período de disfrute del permiso de lactancia y de la reducción de jornada corresponderán a la persona trabajadora.

SOLICITO:

Desde el día [FECHA DE INICIO], reducir mi jornada de trabajo [NÚMERO] horas, resultando, por tanto, el siguiente horario: de [HORA DE INICIO] a [HORA DE FIN] horas.

${Q15}` } },

'reduccio-cura': { g: 'jorn', n: 'Reducció de jornada per cura de familiar', src: 'cig', ref: '24',
  es: { a: 'Reducción de jornada por cuidado',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, teniendo en cuenta lo recogido en el artículo 37.6 del ET, podrán solicitar la reducción de jornada las personas trabajadoras para el cuidado directo del cónyuge o pareja de hecho, o de un familiar hasta el segundo grado de consanguinidad y afinidad, incluido el familiar consanguíneo de la pareja de hecho, que por razones de edad, accidente o enfermedad no pueda valerse por sí mismo y que no desempeñe actividad retribuida.

SEGUNDO: Que, teniendo en cuenta lo recogido en el artículo 37.7 del ET, la concreción horaria y la determinación del período de disfrute de la reducción de jornada corresponderán a la persona trabajadora.

SOLICITO:

Que, a partir del día [FECHA DE INICIO], mi jornada se vea reducida en un [PORCENTAJE] % (o [NÚMERO] horas diarias), quedando fijado el siguiente horario: [HORARIO].

${Q15}` } },

'cume': { g: 'jorn', n: 'Reducció per menor amb càncer o malaltia greu (CUME)', src: 'cig', ref: '06',
  es: { a: 'Permiso por cuidado de menor con cáncer o enfermedad grave (CUME)',
    t: `${I}

MANIFIESTO:

PRIMERO.- Que tengo a mi cargo un hijo o hija nacido el [FECHA DE NACIMIENTO], que padece [ENFERMEDAD].

SEGUNDO.- Que el artículo 37.6 del ET reconoce el derecho de la persona progenitora, guardadora con fines de adopción o acogedora permanente a una reducción de la jornada de trabajo, con la disminución proporcional del salario, de al menos la mitad de la duración de aquella, para el cuidado, durante la hospitalización y tratamiento continuado, del menor a su cargo afectado por cáncer o por cualquier otra enfermedad grave que implique ingreso hospitalario de larga duración y requiera la necesidad de su cuidado directo, continuo y permanente, acreditado por el informe del Servicio Público de Salud u órgano administrativo sanitario de la comunidad autónoma correspondiente.

TERCERO.- Que la patología que padece está incluida en el Anexo I del Real Decreto 1148/2011, de 29 de julio, modificado por la Orden TMS/103/2019, de 6 de febrero, por el que se regula la prestación económica por cuidado de menores afectados por cáncer u otra enfermedad grave en el sistema de la Seguridad Social.

CUARTO.- Que precisa cuidado directo, continuo y permanente, según se acredita con la documentación médica aportada.

Por todo lo anterior,

SOLICITO:

La reducción de mi jornada de trabajo al amparo del artículo 37.6 del ET, en un porcentaje del [PORCENTAJE] %, con la correspondiente disminución proporcional del salario, con el siguiente horario: de [HORA DE INICIO] horas a [HORA DE FIN] horas.` } },

'reduccio-concrecio': { g: 'jorn', n: 'Reducció de jornada i concreció horària', src: 'cig', ref: '22',
  es: { a: 'Reducción de jornada y concreción horaria',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, de conformidad con lo establecido en el artículo 37.6 del ET, quien por razones de guarda legal tenga a su cuidado directo a algún menor de 12 años tendrá derecho a una reducción de la jornada de trabajo de entre, al menos, un octavo y un máximo de la mitad de la duración de aquella.

SEGUNDO: Que, teniendo en cuenta lo recogido en el artículo 37.7 del Estatuto de los Trabajadores, la concreción horaria y la determinación del período de disfrute del permiso de lactancia y de la reducción de jornada corresponderán a la persona trabajadora, dentro de su jornada ordinaria.

TERCERO: Al amparo de lo recogido en el artículo 34.8 del ET, según el cual «las personas trabajadoras tienen derecho a solicitar las adaptaciones de la duración y distribución de la jornada de trabajo, en la ordenación del tiempo de trabajo y en la forma de prestación, incluida la prestación de su trabajo a distancia, para hacer efectivo su derecho a la conciliación de la vida personal, familiar y laboral. En el caso de que tengan hijos o hijas, las personas trabajadoras tienen derecho a efectuar dicha solicitud hasta que cumplan 12 años, teniendo derecho a solicitar el regreso a su jornada o modalidad contractual anterior una vez concluido el período acordado, o cuando el cambio de las circunstancias así lo justifique, aun cuando no hubiese transcurrido el período previsto».

SOLICITO:

Adaptar la duración y distribución de la jornada de trabajo para hacer efectivo mi derecho a la conciliación de la vida personal, laboral y familiar, de modo que la jornada quede distribuida del siguiente modo: de [HORA DE INICIO] a [HORA DE FIN] horas.

${Q15}` } },

'adaptacio-dependents': { g: 'jorn', n: 'Adaptació de jornada per dependents a càrrec', src: 'cig', ref: '03',
  es: { a: 'Solicitud de adaptación de la jornada por dependientes a cargo',
    t: `${I}

MANIFIESTO:

Al amparo de lo recogido en el artículo 34.8 del ET, según el cual: «las personas trabajadoras tienen derecho a solicitar las adaptaciones de la duración y distribución de la jornada de trabajo, en la ordenación del tiempo de trabajo y en la forma de prestación, incluida la prestación de su trabajo a distancia, para hacer efectivo su derecho a la conciliación de la vida personal, familiar y laboral.

En el caso de que tengan hijos o hijas, las personas trabajadoras tienen derecho a efectuar dicha solicitud hasta que los hijos o hijas cumplan 12 años.

También tendrán este derecho aquellas que tengan necesidades de cuidado respecto de los hijos e hijas mayores de doce años, el cónyuge o pareja de hecho, familiares por consanguinidad hasta el segundo grado de la persona trabajadora, así como de otras personas dependientes cuando, en este último caso, convivan en el mismo domicilio, y que por razones de edad, accidente o enfermedad no puedan valerse por sí mismos, debiendo justificar las circunstancias en las que fundamenta su petición.

La empresa, ante la solicitud de la persona trabajadora, abrirá un proceso de negociación con esta que tendrá que desarrollarse con la máxima celeridad y, en todo caso, durante un período máximo de quince días, presumiéndose su concesión si no concurre oposición motivada expresa en este plazo. Finalizado el proceso de negociación, la empresa comunicará por escrito la aceptación de la petición. En caso contrario, hará una propuesta alternativa que posibilite las necesidades de conciliación de la persona trabajadora o bien manifestará la negativa a su ejercicio. Cuando se presente una propuesta alternativa o se deniegue la petición, se motivarán las razones objetivas en las que se sustenta la decisión.

La persona trabajadora tendrá derecho a regresar a la situación anterior a la adaptación una vez concluido el período acordado o previsto o cuando decaigan las causas que motivaron la solicitud. En el resto de los supuestos, de concurrir un cambio de circunstancias que así lo justifique, la empresa solo podrá denegar el regreso solicitado cuando existan razones objetivas motivadas para ello».

SOLICITO:

Adaptar la duración y distribución de la jornada de trabajo para hacer efectivo mi derecho a la conciliación de la vida personal, laboral y familiar, de modo que la jornada quede distribuida del siguiente modo: de [HORA DE INICIO] a [HORA DE FIN] horas.

Se adjunta documentación acreditativa de dicha situación.

${Q15}` } },

'violencia-genere': { g: 'jorn', n: 'Reducció o adaptació per violència de gènere', src: 'cig', ref: '21',
  es: { a: 'Reducción y/o adaptación de la jornada por situación de violencia de género',
    t: `${I}

MANIFIESTO:

PRIMERO.- Que tengo la consideración de víctima de violencia de género, circunstancia que acredito mediante la documentación legalmente prevista a estos efectos.

SEGUNDO.- Que el artículo 37.8 del Estatuto de los Trabajadores establece: «Las personas trabajadoras que tengan la consideración de víctimas de violencia de género, de violencia sexual o de víctimas del terrorismo tendrán derecho, para hacer efectiva su protección o su derecho a la asistencia social integral, a la reducción de la jornada de trabajo con disminución proporcional del salario o a la reordenación del tiempo de trabajo, a través de la adaptación del horario, de la aplicación del horario flexible o de otras formas de ordenación del tiempo de trabajo que se utilicen en la empresa».

Por todo ello,

SOLICITO:

Para garantizar mi protección y mi asistencia social integral:

[DEJA SOLO LA OPCIÓN U OPCIONES QUE CORRESPONDAN Y BORRA EL RESTO]

- La reducción de mi jornada de trabajo en un porcentaje del [PORCENTAJE] %, quedando mi horario del siguiente modo: [HORARIO].

- La adaptación y/o reordenación de mi tiempo de trabajo en los siguientes términos: [TÉRMINOS DE LA ADAPTACIÓN].

- La prestación de trabajo a distancia en los siguientes términos: [TÉRMINOS DEL TRABAJO A DISTANCIA].

Solicito que estas medidas tengan efectos desde el día [FECHA DE INICIO].

Se adjunta la documentación acreditativa correspondiente.` } },

'reduccio-nou-fill': { g: 'jorn', n: 'Continuar la reducció per un nou fill o filla', src: 'cig', ref: '17 (i 04)',
  es: { a: 'Comunicación de concreción de la reducción de jornada por nuevo hijo o hija',
    t: `${I}

MANIFIESTO:

PRIMERO: Que las cotizaciones realizadas durante los tres primeros años del período de reducción de jornada por cuidado de menor de 12 años, en los términos del art. 37.6 del ET, se computarán incrementadas hasta el 100 % de la cuantía que hubiera correspondido si se hubiera mantenido sin dicha reducción la jornada de trabajo.

SEGUNDO: Que acabo de tener un segundo hijo o hija el día [FECHA].

COMUNICO:

Mi intención de continuar con la reducción de jornada por cuidado que venía realizando hasta ahora, con la misma distribución horaria, pero aplicando este derecho por el nuevo hijo o hija.` } },

'reingres-jornada-completa': { g: 'jorn', n: 'Tornada a la jornada completa', src: 'cig', ref: '26',
  es: { a: 'Comunicación de reingreso a la jornada completa',
    t: `${I}

COMUNICO:

Que a partir del día [FECHA] pondré fin a la reducción de jornada por cuidado, incorporándome a la jornada completa, al amparo del artículo 37.6 del ET, según el cual: «Quien por razones de guarda legal tenga a su cuidado directo a una persona menor de 12 años tendrá derecho a una reducción de la jornada de trabajo diaria, con la disminución proporcional del salario entre, al menos, un octavo y un máximo de la mitad de la duración de aquella. La concreción horaria y la determinación del período de disfrute de la reducción de jornada corresponderán a la persona trabajadora, dentro de su jornada ordinaria, quien deberá preavisar a la empresa con 15 días de antelación a la fecha de reincorporación a su jornada anterior», y del artículo 34.8, que recoge lo siguiente: «La persona trabajadora tendrá derecho a solicitar el regreso a su jornada o modalidad contractual anterior una vez concluido el período acordado o cuando el cambio de las circunstancias así lo justifique, aun cuando no hubiese transcurrido el período previsto».

La reincorporación tendrá lugar el próximo día [FECHA DE REINCORPORACIÓN].` } },

'acumulacio-vacances-reduccio': { g: 'jorn', n: 'Lactància acumulada + vacances + reducció de jornada', src: 'cig', ref: '02',
  es: { a: 'Acumulación, vacaciones y reducción de jornada',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, de conformidad con lo establecido en el artículo 37.6 del ET, quien por razones de guarda legal tenga a su cuidado directo a algún menor de 12 años tendrá derecho a una reducción de la jornada de trabajo de entre, al menos, un octavo y un máximo de la mitad de la duración de aquella.

SEGUNDO: Que, de conformidad con lo establecido en el artículo 37.4 del ET, las trabajadoras y trabajadores, por lactancia de un hijo o hija menor de 9 meses, tendrán derecho a una hora de ausencia del trabajo, que podrán dividir en dos fracciones, o acumularla en jornadas completas.

TERCERO: Que, teniendo en cuenta lo recogido en el artículo 37.7 del ET, la concreción horaria y la determinación del período de disfrute del permiso de lactancia y de la reducción de jornada corresponderán a la persona trabajadora, dentro de su jornada ordinaria.

CUARTO: Tomando como referencia lo recogido en el artículo 38.3 del ET, según el cual, cuando el período de vacaciones fijado en el calendario de vacaciones de la empresa coincida en el tiempo con una incapacidad temporal derivada del embarazo, el parto o la lactancia natural o con el período de suspensión del contrato de trabajo por nacimiento y cuidado de menor, se tendrá derecho a disfrutar de las vacaciones en fecha distinta a la de la incapacidad temporal o a la del disfrute del permiso que por dicho precepto le correspondiera, al finalizar el período de suspensión, aunque haya terminado el año natural a que correspondan.

SOLICITO:

Que se proceda a acumular a la suspensión del contrato por [NACIMIENTO / ACOGIMIENTO / ADOPCIÓN] el permiso por cuidado del lactante, correspondiente a [NÚMERO] jornadas de trabajo, entrando en vigor esta licencia el día [FECHA DE INICIO] hasta el día [FECHA DE FIN].

Disfrutar de las vacaciones correspondientes al ejercicio [AÑO] a continuación del disfrute del permiso por cuidado del lactante, desde el [FECHA DE INICIO DE LAS VACACIONES] hasta el [FECHA DE FIN DE LAS VACACIONES], incorporándome a mi puesto de trabajo el próximo día [FECHA DE REINCORPORACIÓN].

Desde el día [FECHA DE INICIO DE LA REDUCCIÓN], reducir mi jornada de trabajo [NÚMERO DE HORAS] horas, resultando, por tanto, el siguiente horario: de [HORA DE INICIO] a [HORA DE FIN] horas.

${Q15}` } },

'nou-fill-vacances-lactancia': { g: 'jorn', n: 'Nou fill o filla: reducció + vacances + lactància acumulada', src: 'cig', ref: '23',
  es: { a: 'Reducción de jornada por nuevo hijo o hija, vacaciones y lactancia acumulada',
    t: `${I}

MANIFIESTO:

PRIMERO: Que el día [FECHA] tuvo lugar el nacimiento de mi hijo o hija.

SEGUNDO: Que, de conformidad con lo establecido en el artículo 37.6 del ET, quien por razones de guarda legal tenga a su cuidado directo a algún menor de 12 años tendrá derecho a una reducción de la jornada de trabajo de entre, al menos, un octavo y un máximo de la mitad de la duración de aquella.

TERCERO: Que, de conformidad con lo establecido en el artículo 37.4 del ET, las personas trabajadoras, por lactancia de un hijo o hija menor de 9 meses, tendrán derecho a una hora de ausencia del trabajo, que podrán dividir en dos fracciones, o acumularla en jornadas completas, correspondiente a [NÚMERO] días laborables.

CUARTO: Que, teniendo en cuenta lo recogido en el artículo 37.7 del Estatuto de los Trabajadores, la concreción horaria y la determinación del período de disfrute del permiso de lactancia y de la reducción de jornada corresponderán a la persona trabajadora, dentro de su jornada ordinaria.

QUINTO: Tomando como referencia lo recogido en el artículo 38 del ET, según el cual, cuando el período de vacaciones fijado en el calendario de vacaciones de la empresa coincida en el tiempo con una incapacidad temporal derivada del embarazo, el parto o la lactancia natural o con el período de suspensión del contrato de trabajo por nacimiento, se tendrá derecho a disfrutar las vacaciones en fecha distinta a la de la incapacidad temporal o a la del disfrute del permiso que por dicho precepto le correspondiera, al finalizar el período de suspensión, aunque haya terminado el año natural a que correspondan.

SOLICITO:

Que se proceda a acumular a la suspensión del contrato por nacimiento y cuidado de menor el permiso de lactancia, correspondiente a [NÚMERO] días laborables, entrando en vigor esta licencia el día [FECHA DE INICIO].

Disfrutar de las [NÚMERO] semanas correspondientes a las vacaciones del ejercicio [AÑO ANTERIOR] a continuación del disfrute del permiso de lactancia, desde el [FECHA DE INICIO DE LAS VACACIONES], y, a continuación, de las [NÚMERO] semanas de vacaciones correspondientes a este año, incorporándome a mi puesto de trabajo el [FECHA DE REINCORPORACIÓN].

Continuar con la reducción de jornada por cuidado que venía realizando hasta ahora, con la misma distribución horaria, pero aplicando este derecho por el nuevo hijo o hija.` } },

/* ───────────── CIG · excedències ───────────── */

'excedencia-fill': { g: 'exc', n: 'Excedència per cura de fill o filla menor de 3 anys', src: 'cig', ref: '09',
  es: { a: 'Excedencia por cuidado de hijo o hija menor de tres años',
    t: `${I}

MANIFIESTO:

Que, de conformidad con lo establecido en el artículo 46.3 del ET, las personas trabajadoras tendrán derecho a un período de excedencia de duración no superior a tres años para atender al cuidado de cada hijo o hija, tanto cuando lo sea por naturaleza como por adopción, o en los supuestos de acogimiento, tanto permanente como preadoptivo, aunque estos sean provisionales, a contar desde la fecha de nacimiento o, en su caso, de la resolución judicial o administrativa.

SOLICITO:

Pasar a la situación de excedencia por cuidado de hijo/a, por lo que a partir del próximo día [FECHA DE INICIO] dejaré de prestar cualquier tipo de actividad para su empresa.` } },

'excedencia-familiar': { g: 'exc', n: 'Excedència per cura de familiar', src: 'cig', ref: '08',
  es: { a: 'Excedencia por cuidado de familiar',
    t: `${I}

MANIFIESTO:

PRIMERO: Que, tal y como recoge el artículo 46.3 del ET, el personal tendrá derecho a un período de excedencia, de duración no superior a dos años, para atender al cuidado de un familiar hasta el segundo grado de consanguinidad o afinidad que, por razones de edad, accidente, enfermedad o discapacidad, no pueda valerse por sí mismo y no desempeñe actividad retribuida.

SEGUNDO: Que, dada la situación de [SITUACIÓN DEL FAMILIAR], me veo en la obligación de acogerme a una excedencia para poder hacerme cargo de su cuidado.

SOLICITO:

Pasar a la situación de excedencia por cuidado de familiar, a disfrutar desde el [FECHA DE INICIO] hasta el [FECHA DE FIN], por lo que a partir del próximo día [FECHA DE INICIO] dejaré de prestar cualquier tipo de actividad para su empresa.` } }

};

/* ───────────── Versió en valencià dels models de la CIG ───────────── */

var IV = 'Jo, [NOM I COGNOMS], amb document d\'identitat núm. [DNI O NIE], que preste serveis actualment per a l\'empresa [EMPRESA] amb la categoria/lloc de [CATEGORIA O LLOC] en el seu centre de treball situat a [CENTRE DE TREBALL],';
var QV = 'En cas de no rebre resposta a este escrit en un termini de quinze dies, s\'entendrà estimada la petició.';

var VA = {

'accident-hospitalitzacio': { a: 'Permís per accident/malaltia greu/hospitalització o intervenció quirúrgica sense hospitalització que requerisca repòs domiciliari',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.3.b) de l'ET, el treballador o la treballadora té dret a «5 dies per accident o malaltia greus, hospitalització o intervenció quirúrgica sense hospitalització que requerisca repòs domiciliari del cònjuge, parella de fet o parents fins al segon grau per consanguinitat o afinitat, inclòs el familiar consanguini de la parella de fet, així com de qualsevol altra persona diferent de les anteriors que convisca amb la persona treballadora en el mateix domicili i que requerisca la cura efectiva d'aquella».

SOL·LICITE:

Fer ús d'este permís des del dia [DATA D'INICI] fins al dia [DATA DE FI], tots dos inclosos.

S'adjunta la documentació justificativa.` },

'defuncio': { a: 'Permís per defunció de cònjuge, parella de fet o parents fins al segon grau',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.3.b bis) de l'ET, el personal tindrà dret, amb caràcter retribuït, a un permís de «dos dies per la defunció del cònjuge, parella de fet o parents fins al segon grau de consanguinitat o afinitat. Quan amb este motiu la persona treballadora necessite fer un desplaçament a este efecte, el termini s'ampliarà en dos dies».

SOL·LICITE:

Fer ús d'este permís des del [DATA D'INICI] fins al [DATA DE FI], per un total de [2 DIES / 4 DIES SI HI HA DESPLAÇAMENT] de permís.` },

'forca-major': { a: 'Permís de 4 dies per a absentar-se del treball per causa de força major',
  t: `${IV}

MANIFESTE:

PRIMER: Que, de conformitat amb el que estableix l'article 37.9 de l'ET, «la persona treballadora tindrà dret a absentar-se del treball per causa de força major quan siga necessari per motius familiars urgents relacionats amb familiars o persones convivents, en cas de malaltia o accident que facen indispensable la seua presència immediata.

SEGON: Les persones treballadores tindran dret que siguen retribuïdes les hores d'absència per les causes previstes en este apartat equivalents a quatre dies a l'any, d'acord amb el que establisca el conveni col·lectiu o, si no n'hi ha, l'acord entre l'empresa i la representació legal de les persones treballadores, i les persones treballadores hauran d'aportar, si és el cas, acreditació del motiu d'absència».

SOL·LICITE:

Absentar-me del meu lloc de treball el dia [DATA], per un total de [NOMBRE] hores, en concret des de les [HORA D'INICI] fins a les [HORA DE FI] hores.` },

'impossibilitat-acces': { a: 'Permís per impossibilitat d\'accés al centre de treball (art. 37.3.g ET)',
  t: `${IV}

MANIFESTE:

PRIMER.- Que, segons l'article 37.3.g) de l'ET, la persona treballadora podrà absentar-se del seu treball amb dret a remuneració, i que concorre una situació que impossibilita l'accés al meu centre de treball o el trànsit per les vies necessàries per a desplaçar-m'hi, com a conseqüència de [CAUSA CONCRETA: p. ex. alertes meteorològiques, talls de carretera, recomanació o prohibició de desplaçament per part de les autoritats, situació de risc greu i imminent, catàstrofe, etc.], emesa/es per l'autoritat competent [ORGANISME O ALERTA].

SEGON.- Que esta circumstància afecta el dia/es [DATA/ES] i impedeix el compliment de la meua jornada laboral amb normalitat. Així mateix, informe que [SI ESCAU: la situació continua o es preveu que puga prolongar-se], per la qual cosa es mantindrà la impossibilitat de desplaçament fins a nou avís o fins a la desaparició de les circumstàncies que la motiven.

SOL·LICITE:

Que se'm reconega i concedisca el permís retribuït previst en l'article 37.3.g) de l'ET durant el temps en què persistisca la impossibilitat d'accés al centre de treball o el risc greu i imminent que impedeix el desplaçament.

En cas que, per la naturalesa de les funcions exercides, siga possible la prestació de serveis a distància, manifeste la meua disposició a fer el treball en modalitat de treball a distància, sempre que l'empresa facilite els mitjans necessaris d'acord amb la normativa vigent.

Als efectes oportuns, [APORTARÉ / APORTE] la documentació justificativa emesa per les autoritats competents.` },

'matrimoni': { a: 'Permís per matrimoni o unió de fet',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.3.a) de l'ET, el treballador o la treballadora, amb avís previ i justificació, podrà absentar-se del treball, amb dret a remuneració, durant 15 dies naturals en cas de matrimoni o registre com a parella de fet.

SOL·LICITE:

Gaudir dels 15 dies de permís des del dia [DATA D'INICI] fins al dia [DATA DE FI].

${QV}` },

'trasllat-domicili': { a: 'Permís per trasllat de domicili',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.3.c) de l'ET, la persona treballadora, amb avís previ i justificació, podrà absentar-se del treball, amb dret a remuneració, durant 1 dia, per trasllat del domicili habitual.

SOL·LICITE:

Gaudir del dia de permís el [DATA].` },

'examens-prenatals': { a: 'Permís per a la realització d\'exàmens prenatals i tècniques de preparació al part',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.3.f) de l'ET, amb avís previ i justificació, podrà absentar-se del treball, amb dret a remuneració, pel temps indispensable per a la realització d'exàmens prenatals i tècniques de preparació al part, sempre que hagen de tindre lloc dins de la jornada de treball.

SOL·LICITE:

Absentar-me del meu lloc de treball el dia [DATA], de [HORA D'INICI] a [HORA DE FI] hores.` },

'adopcio-acolliment': { a: 'Permís per a tràmits relacionats amb l\'adopció o l\'acolliment',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.3.f) de l'ET, la persona treballadora, amb avís previ i justificació, podrà absentar-se del treball, amb dret a remuneració, pel temps indispensable per a l'assistència a les sessions preceptives d'informació i preparació i per a la realització dels informes psicològics i socials preceptius previs a la declaració d'idoneïtat, sempre que hagen de tindre lloc dins de la jornada de treball.

SOL·LICITE:

Absentar-me del meu lloc de treball el dia [DATA], de [HORA D'INICI] a [HORA DE FI] hores.` },

'embaras': { a: 'Comunicació d\'embaràs a l\'empresa',
  t: `${IV}

MANIFESTE:

PRIMER: Que actualment estic en situació d'embaràs i em trobe en la setmana [NOMBRE] de gestació. Informe l'empresa d'esta situació perquè tinga coneixement dels fets i complisca el que estableix l'article 26 de la Llei de prevenció de riscos laborals, de manera que no haja d'estar exposada a tasques i riscos que poden influir negativament en la meua salut i en la del meu fetus.

SEGON: Que, tenint en compte això, se'm comuniquen per escrit els resultats de l'avaluació de riscos del meu lloc de treball i, en cas que les condicions del meu lloc de treball puguen influir negativament en la meua salut i/o en la del meu fetus per l'existència de risc, es procedisca al canvi o l'adaptació del lloc o s'agilite l'accés a la prestació per risc durant l'embaràs (i/o la lactància), i se'm comunique la data d'accés a esta, així com els tràmits que he de fer.` },

'naixement': { a: 'Comunicació dels períodes de suspensió de contracte per naixement i cura de menor',
  t: `${IV}

MANIFESTE:

PRIMER.- Que el dia [DATA] va tindre lloc [EL NAIXEMENT / L'ADOPCIÓ / L'ACOLLIMENT] del meu fill o filla.

SEGON.- Que, a l'empara del que disposa l'article 48 de l'ET, faré ús del dret a la suspensió del contracte per naixement i cura de menor de la manera següent:

[DEIXA NOMÉS L'OPCIÓ O OPCIONS QUE CORRESPONGUEN I ESBORRA LA RESTA]

- Gaudi continuat de les 19 setmanes de suspensió del contracte, a comptar des del dia [DATA D'INICI].

- Gaudi continuat de les 17 setmanes de suspensió del contracte, a comptar des del dia [DATA D'INICI], sense consumir les 2 setmanes de gaudi fins als 8 anys.

- Gaudi obligatori i ininterromput de les primeres 6 setmanes immediatament posteriors al naixement / resolució judicial o administrativa, des del dia [DATA D'INICI] fins al dia [DATA DE FI].

- Gaudi fraccionat de les 11 setmanes restants, dins dels 12 mesos següents al naixement / adopció / acolliment, en els períodes següents:
   · Del [DATA D'INICI] al [DATA DE FI].
   · Del [DATA D'INICI] al [DATA DE FI].

SOL·LICITE:

Que, tenint per presentat este escrit, es tinga per comunicada formalment la meua intenció d'exercir el dret a la suspensió del contracte per naixement i cura de menor en els termes indicats en l'apartat anterior, a l'empara de l'article 48 de l'ET.

Així mateix, sol·licite que l'empresa faça la tramitació corresponent i reconega el gaudi del permís en la modalitat i els períodes assenyalats.` },

'naixement-monoparental': { a: 'Sol·licitud de permís per naixement monomarental/monoparental',
  t: `${IV}

MANIFESTE:

PRIMER.- Que el dia [DATA] va tindre lloc [EL NAIXEMENT / L'ADOPCIÓ / L'ACOLLIMENT] del meu fill o filla.

SEGON.- Que, a l'empara del que disposa l'article 48 de l'Estatut dels Treballadors, faré ús del dret a la suspensió del contracte per naixement i cura de menor de la manera següent:

[DEIXA NOMÉS L'OPCIÓ O OPCIONS QUE CORRESPONGUEN I ESBORRA LA RESTA]

- Gaudi continuat de les 32 setmanes de suspensió del contracte, a comptar des del dia [DATA D'INICI].

- Gaudi continuat de les 28 setmanes de suspensió del contracte, a comptar des del dia [DATA D'INICI], sense consumir les 4 setmanes de gaudi fins als 8 anys.

- Gaudi obligatori i ininterromput de les primeres 6 setmanes immediatament posteriors al naixement / resolució judicial o administrativa, des del dia [DATA D'INICI] fins al dia [DATA DE FI], i gaudi posterior de les setmanes següents de manera fraccionada.

- Gaudi fraccionat de les 22 setmanes restants, dins dels 12 mesos següents al naixement / adopció / acolliment, en els períodes següents:
   · Del [DATA D'INICI] al [DATA DE FI].
   · Del [DATA D'INICI] al [DATA DE FI].

SOL·LICITE:

Que, tenint per presentat este escrit, es tinga per comunicada formalment la meua intenció d'exercir el dret a la suspensió del contracte per naixement i cura de menor en els termes indicats en l'apartat anterior, a l'empara de l'article 48 de l'ET.

Així mateix, sol·licite que l'empresa faça la tramitació corresponent i reconega el gaudi del permís en la modalitat i els períodes assenyalats.` },

'parental-8-setmanes': { a: 'Permís de 8 setmanes per a la cura de fills i filles menors de 8 anys',
  t: `${IV}

MANIFESTE:

PRIMER: Que, de conformitat amb el que estableix l'article 48 bis de l'ET, les persones treballadores tindran dret a un permís parental per a la cura de fill o filla (o menors acollits/des per temps superior a un any), que es podrà gaudir fins que tinguen 8 anys i que serà de duració no superior a 8 setmanes, contínues o discontínues, i es podrà gaudir a temps complet o en règim de jornada a temps parcial, d'acord amb el que s'establisca reglamentàriament.

SEGON: Que este permís constitueix un dret individual de les persones treballadores, homes o dones, sense que se'n puga transferir l'exercici, i correspondrà a la persona treballadora especificar la data d'inici i de fi del gaudi o, si és el cas, dels períodes de gaudi, i haurà de comunicar-ho a l'empresa amb una antelació de deu dies, excepte força major.

SOL·LICITE:

Gaudir de [NOMBRE] setmanes de permís parental, de forma [CONTÍNUA / FRACCIONADA], des del dia [DATA D'INICI] fins al dia [DATA DE FI], [A JORNADA COMPLETA / A TEMPS PARCIAL, d'acord amb el conveni col·lectiu].` },

'lactancia-hora': { a: '1 hora d\'absència per a la cura de lactant',
  t: `${IV}

MANIFESTE:

PRIMER: Que, de conformitat amb el que estableix l'article 37.4 de l'Estatut dels Treballadors, les persones treballadores tindran dret a una hora d'absència del treball, que podran dividir en dos fraccions, per a la cura del lactant, fins que complisca 9 mesos, i podran substituir este dret per una reducció de la seua jornada en mitja hora amb la mateixa finalitat o acumular-lo en jornades completes.

SEGON: Que, atenent la modificació del Reial decret llei 6/2019, d'1 de març, de mesures urgents per a la garantia de la igualtat de tracte i d'oportunitats entre dones i homes en l'ocupació, «la reducció de jornada és un dret individual de les persones treballadores sense que se'n puga transferir l'exercici a l'altra persona progenitora, adoptant, guardadora o acollidora. Quan les dos persones progenitores, adoptants, guardadores o acollidores exercisquen este dret amb la mateixa duració i règim, el període de gaudi podrà estendre's fins que el lactant complisca 12 mesos, amb reducció proporcional del salari a partir del compliment dels 9 mesos».

COMUNIQUE:

L'hora d'absència del treball per a la cura de lactant establida en l'article 37.4 de l'ET, de manera que l'horari quede establit així: entre les [HORA D'INICI] hores i les [HORA DE FI] hores. Esta llicència entrarà en vigor el pròxim dia [DATA D'INICI] i finalitzarà el dia [DATA DE FI], data en què el lactant compleix 9 mesos.

${QV}` },

'lactancia-acumulada': { a: 'Acumulació de l\'hora d\'absència per a la cura de lactant',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.4 de l'ET, les persones treballadores tindran dret a una hora d'absència del treball, que podran dividir en dos fraccions, per a la cura del lactant fins que este complisca 9 mesos, o a acumular-la en jornades completes.

SOL·LICITE:

Que s'acumule a la suspensió del contracte per [NAIXEMENT / ACOLLIMENT / ADOPCIÓ] l'hora d'absència per a la cura de lactant establida en l'article 37.4 de l'Estatut dels Treballadors, corresponent a [NOMBRE] jornades de treball. Esta llicència entrarà en vigor el dia [DATA D'INICI] fins al dia [DATA DE FI].

${QV}` },

'prematurs': { a: 'Permís pel naixement de filles o fills prematurs',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 37.5 de l'ET, «les persones treballadores tindran dret a absentar-se del seu lloc de treball durant una hora en cas de naixement prematur de fill o filla, o que, per qualsevol causa, hagen de romandre hospitalitzats a continuació del part. Així mateix, tindran dret a reduir la seua jornada de treball fins a un màxim de dos hores, amb la disminució proporcional del salari».

SOL·LICITE:

Absentar-me del meu lloc de treball de [HORA D'INICI] a [HORA DE FI] hores durant el temps que dure l'hospitalització.

En cas de no rebre resposta a este escrit en un termini de 7 dies, s'entendrà estimada la petició.` },

'vacances-coincidents': { a: 'Vacances coincidents amb la suspensió del contracte per naixement/adopció/acolliment',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 38.3 de l'ET, quan el període de vacances fixat en el calendari de vacances de l'empresa coincidisca en el temps amb una incapacitat temporal derivada de l'embaràs, el part o la lactància natural, o amb el període de suspensió de contracte per naixement, es tindrà dret a gaudir de les vacances en una data diferent de la de la incapacitat temporal o de la del gaudi del permís que per aplicació d'este precepte corresponguera, en finalitzar el període de suspensió, encara que haja acabat l'any natural a què corresponguen.

SOL·LICITE:

El gaudi de les vacances corresponents a l'exercici [ANY], amb data d'inici el dia [DATA D'INICI], i incorporar-me al meu lloc de treball el pròxim dia [DATA DE REINCORPORACIÓ].

${QV}` },

'reduccio-menor': { a: 'Reducció de jornada per cura de menor',
  t: `${IV}

MANIFESTE:

PRIMER: Que, de conformitat amb el que estableix l'article 37.6 de l'ET, qui per raons de guarda legal tinga a la seua cura directa una persona menor de 12 anys tindrà dret a una reducció de la jornada de treball d'entre, almenys, un octau i un màxim de la mitat de la duració d'aquella.

SEGON: Que, tenint en compte el que recull l'article 37.7 de l'ET, la concreció horària i la determinació del període de gaudi del permís de lactància i de la reducció de jornada correspondran a la persona treballadora.

SOL·LICITE:

Des del dia [DATA D'INICI], reduir la meua jornada de treball [NOMBRE] hores, de manera que en resulte l'horari següent: de [HORA D'INICI] a [HORA DE FI] hores.

${QV}` },

'reduccio-cura': { a: 'Reducció de jornada per cura',
  t: `${IV}

MANIFESTE:

PRIMER: Que, tenint en compte el que recull l'article 37.6 de l'ET, podran sol·licitar la reducció de jornada les persones treballadores per a la cura directa del cònjuge o parella de fet, o d'un familiar fins al segon grau de consanguinitat i afinitat, inclòs el familiar consanguini de la parella de fet, que per raons d'edat, accident o malaltia no puga valdre's per si mateix i que no exercisca activitat retribuïda.

SEGON: Que, tenint en compte el que recull l'article 37.7 de l'ET, la concreció horària i la determinació del període de gaudi de la reducció de jornada correspondran a la persona treballadora.

SOL·LICITE:

Que, a partir del dia [DATA D'INICI], la meua jornada es reduïsca en un [PERCENTATGE] % (o [NOMBRE] hores diàries), i quede fixat l'horari següent: [HORARI].

${QV}` },

'cume': { a: 'Permís per cura de menor amb càncer o malaltia greu (CUME)',
  t: `${IV}

MANIFESTE:

PRIMER.- Que tinc al meu càrrec un fill o filla nascut el [DATA DE NAIXEMENT], que pateix [MALALTIA].

SEGON.- Que l'article 37.6 de l'ET reconeix el dret de la persona progenitora, guardadora amb fins d'adopció o acollidora permanent a una reducció de la jornada de treball, amb la disminució proporcional del salari, d'almenys la mitat de la duració d'aquella, per a la cura, durant l'hospitalització i el tractament continuat, del menor al seu càrrec afectat per càncer o per qualsevol altra malaltia greu que implique ingrés hospitalari de llarga duració i requerisca la necessitat de la seua cura directa, contínua i permanent, acreditat per l'informe del Servei Públic de Salut o l'òrgan administratiu sanitari de la comunitat autònoma corresponent.

TERCER.- Que la patologia que pateix està inclosa en l'annex I del Reial decret 1148/2011, de 29 de juliol, modificat per l'Orde TMS/103/2019, de 6 de febrer, pel qual es regula la prestació econòmica per cura de menors afectats per càncer o una altra malaltia greu en el sistema de la Seguretat Social.

QUART.- Que necessita cura directa, contínua i permanent, segons s'acredita amb la documentació mèdica aportada.

Per tot això,

SOL·LICITE:

La reducció de la meua jornada de treball a l'empara de l'article 37.6 de l'ET, en un percentatge del [PERCENTATGE] %, amb la corresponent disminució proporcional del salari, amb l'horari següent: de [HORA D'INICI] hores a [HORA DE FI] hores.` },

'reduccio-concrecio': { a: 'Reducció de jornada i concreció horària',
  t: `${IV}

MANIFESTE:

PRIMER: Que, de conformitat amb el que estableix l'article 37.6 de l'ET, qui per raons de guarda legal tinga a la seua cura directa algun menor de 12 anys tindrà dret a una reducció de la jornada de treball d'entre, almenys, un octau i un màxim de la mitat de la duració d'aquella.

SEGON: Que, tenint en compte el que recull l'article 37.7 de l'Estatut dels Treballadors, la concreció horària i la determinació del període de gaudi del permís de lactància i de la reducció de jornada correspondran a la persona treballadora, dins de la seua jornada ordinària.

TERCER: A l'empara del que recull l'article 34.8 de l'ET, segons el qual «les persones treballadores tenen dret a sol·licitar les adaptacions de la duració i distribució de la jornada de treball, en l'ordenació del temps de treball i en la forma de prestació, inclosa la prestació del seu treball a distància, per a fer efectiu el seu dret a la conciliació de la vida personal, familiar i laboral. En cas que tinguen fills o filles, les persones treballadores tenen dret a fer esta sol·licitud fins que complisquen 12 anys, i tenen dret a sol·licitar la tornada a la seua jornada o modalitat contractual anterior una vegada conclòs el període acordat, o quan el canvi de les circumstàncies així ho justifique, encara que no haja transcorregut el període previst».

SOL·LICITE:

Adaptar la duració i distribució de la jornada de treball per a fer efectiu el meu dret a la conciliació de la vida personal, laboral i familiar, de manera que la jornada quede distribuïda així: de [HORA D'INICI] a [HORA DE FI] hores.

${QV}` },

'adaptacio-dependents': { a: 'Sol·licitud d\'adaptació de la jornada per dependents a càrrec',
  t: `${IV}

MANIFESTE:

A l'empara del que recull l'article 34.8 de l'ET, segons el qual: «les persones treballadores tenen dret a sol·licitar les adaptacions de la duració i distribució de la jornada de treball, en l'ordenació del temps de treball i en la forma de prestació, inclosa la prestació del seu treball a distància, per a fer efectiu el seu dret a la conciliació de la vida personal, familiar i laboral.

En cas que tinguen fills o filles, les persones treballadores tenen dret a fer esta sol·licitud fins que els fills o filles complisquen 12 anys.

També tindran este dret les que tinguen necessitats de cura respecte dels fills i filles majors de dotze anys, el cònjuge o parella de fet, familiars per consanguinitat fins al segon grau de la persona treballadora, així com d'altres persones dependents quan, en este últim cas, convisquen en el mateix domicili, i que per raons d'edat, accident o malaltia no puguen valdre's per si mateixos, i hauran de justificar les circumstàncies en què fonamenten la seua petició.

L'empresa, davant de la sol·licitud de la persona treballadora, obrirà un procés de negociació amb esta que haurà de desenvolupar-se amb la màxima celeritat i, en tot cas, durant un període màxim de quinze dies, i se'n presumirà la concessió si no hi ha oposició motivada expressa en este termini. Finalitzat el procés de negociació, l'empresa comunicarà per escrit l'acceptació de la petició. En cas contrari, farà una proposta alternativa que possibilite les necessitats de conciliació de la persona treballadora o bé manifestarà la negativa al seu exercici. Quan es presente una proposta alternativa o es denegue la petició, es motivaran les raons objectives en què se sustenta la decisió.

La persona treballadora tindrà dret a tornar a la situació anterior a l'adaptació una vegada conclòs el període acordat o previst o quan decaiguen les causes que van motivar la sol·licitud. En la resta de supòsits, si hi ha un canvi de circumstàncies que així ho justifique, l'empresa només podrà denegar la tornada sol·licitada quan hi haja raons objectives motivades per a això».

SOL·LICITE:

Adaptar la duració i distribució de la jornada de treball per a fer efectiu el meu dret a la conciliació de la vida personal, laboral i familiar, de manera que la jornada quede distribuïda així: de [HORA D'INICI] a [HORA DE FI] hores.

S'adjunta documentació acreditativa d'esta situació.

${QV}` },

'violencia-genere': { a: 'Reducció i/o adaptació de la jornada per situació de violència de gènere',
  t: `${IV}

MANIFESTE:

PRIMER.- Que tinc la consideració de víctima de violència de gènere, circumstància que acredite mitjançant la documentació legalment prevista a estos efectes.

SEGON.- Que l'article 37.8 de l'Estatut dels Treballadors estableix: «Les persones treballadores que tinguen la consideració de víctimes de violència de gènere, de violència sexual o de víctimes del terrorisme tindran dret, per a fer efectiva la seua protecció o el seu dret a l'assistència social integral, a la reducció de la jornada de treball amb disminució proporcional del salari o a la reordenació del temps de treball, a través de l'adaptació de l'horari, de l'aplicació de l'horari flexible o d'altres formes d'ordenació del temps de treball que s'utilitzen en l'empresa».

Per tot això,

SOL·LICITE:

Per a garantir la meua protecció i la meua assistència social integral:

[DEIXA NOMÉS L'OPCIÓ O OPCIONS QUE CORRESPONGUEN I ESBORRA LA RESTA]

- La reducció de la meua jornada de treball en un percentatge del [PERCENTATGE] %, de manera que el meu horari quede així: [HORARI].

- L'adaptació i/o reordenació del meu temps de treball en els termes següents: [TERMES DE L'ADAPTACIÓ].

- La prestació de treball a distància en els termes següents: [TERMES DEL TREBALL A DISTÀNCIA].

Sol·licite que estes mesures tinguen efectes des del dia [DATA D'INICI].

S'adjunta la documentació acreditativa corresponent.` },

'reduccio-nou-fill': { a: 'Comunicació de concreció de la reducció de jornada per nou fill o filla',
  t: `${IV}

MANIFESTE:

PRIMER: Que les cotitzacions realitzades durant els tres primers anys del període de reducció de jornada per cura de menor de 12 anys, en els termes de l'art. 37.6 de l'ET, es computaran incrementades fins al 100 % de la quantia que hauria correspost si s'haguera mantingut sense esta reducció la jornada de treball.

SEGON: Que acabe de tindre un segon fill o filla el dia [DATA].

COMUNIQUE:

La meua intenció de continuar amb la reducció de jornada per cura que feia fins ara, amb la mateixa distribució horària, però aplicant este dret pel nou fill o filla.` },

'reingres-jornada-completa': { a: 'Comunicació de reingrés a la jornada completa',
  t: `${IV}

COMUNIQUE:

Que a partir del dia [DATA] posaré fi a la reducció de jornada per cura i m'incorporaré a la jornada completa, a l'empara de l'article 37.6 de l'ET, segons el qual: «Qui per raons de guarda legal tinga a la seua cura directa una persona menor de 12 anys tindrà dret a una reducció de la jornada de treball diària, amb la disminució proporcional del salari entre, almenys, un octau i un màxim de la mitat de la duració d'aquella. La concreció horària i la determinació del període de gaudi de la reducció de jornada correspondran a la persona treballadora, dins de la seua jornada ordinària, qui haurà de preavisar l'empresa amb 15 dies d'antelació a la data de reincorporació a la seua jornada anterior», i de l'article 34.8, que recull el següent: «La persona treballadora tindrà dret a sol·licitar la tornada a la seua jornada o modalitat contractual anterior una vegada conclòs el període acordat o quan el canvi de les circumstàncies així ho justifique, encara que no haja transcorregut el període previst».

La reincorporació tindrà lloc el pròxim dia [DATA DE REINCORPORACIÓ].` },

'acumulacio-vacances-reduccio': { a: 'Acumulació, vacances i reducció de jornada',
  t: `${IV}

MANIFESTE:

PRIMER: Que, de conformitat amb el que estableix l'article 37.6 de l'ET, qui per raons de guarda legal tinga a la seua cura directa algun menor de 12 anys tindrà dret a una reducció de la jornada de treball d'entre, almenys, un octau i un màxim de la mitat de la duració d'aquella.

SEGON: Que, de conformitat amb el que estableix l'article 37.4 de l'ET, les treballadores i els treballadors, per lactància d'un fill o filla menor de 9 mesos, tindran dret a una hora d'absència del treball, que podran dividir en dos fraccions, o acumular-la en jornades completes.

TERCER: Que, tenint en compte el que recull l'article 37.7 de l'ET, la concreció horària i la determinació del període de gaudi del permís de lactància i de la reducció de jornada correspondran a la persona treballadora, dins de la seua jornada ordinària.

QUART: Prenent com a referència el que recull l'article 38.3 de l'ET, segons el qual, quan el període de vacances fixat en el calendari de vacances de l'empresa coincidisca en el temps amb una incapacitat temporal derivada de l'embaràs, el part o la lactància natural o amb el període de suspensió del contracte de treball per naixement i cura de menor, es tindrà dret a gaudir de les vacances en una data diferent de la de la incapacitat temporal o de la del gaudi del permís que per este precepte corresponguera, en finalitzar el període de suspensió, encara que haja acabat l'any natural a què corresponguen.

SOL·LICITE:

Que s'acumule a la suspensió del contracte per [NAIXEMENT / ACOLLIMENT / ADOPCIÓ] el permís per cura del lactant, corresponent a [NOMBRE] jornades de treball. Esta llicència entrarà en vigor el dia [DATA D'INICI] fins al dia [DATA DE FI].

Gaudir de les vacances corresponents a l'exercici [ANY] a continuació del gaudi del permís per cura del lactant, des del [DATA D'INICI DE LES VACANCES] fins al [DATA DE FI DE LES VACANCES], i incorporar-me al meu lloc de treball el pròxim dia [DATA DE REINCORPORACIÓ].

Des del dia [DATA D'INICI DE LA REDUCCIÓ], reduir la meua jornada de treball [NOMBRE D'HORES] hores, de manera que en resulte l'horari següent: de [HORA D'INICI] a [HORA DE FI] hores.

${QV}` },

'nou-fill-vacances-lactancia': { a: 'Reducció de jornada per nou fill o filla, vacances i lactància acumulada',
  t: `${IV}

MANIFESTE:

PRIMER: Que el dia [DATA] va tindre lloc el naixement del meu fill o filla.

SEGON: Que, de conformitat amb el que estableix l'article 37.6 de l'ET, qui per raons de guarda legal tinga a la seua cura directa algun menor de 12 anys tindrà dret a una reducció de la jornada de treball d'entre, almenys, un octau i un màxim de la mitat de la duració d'aquella.

TERCER: Que, de conformitat amb el que estableix l'article 37.4 de l'ET, les persones treballadores, per lactància d'un fill o filla menor de 9 mesos, tindran dret a una hora d'absència del treball, que podran dividir en dos fraccions, o acumular-la en jornades completes, corresponent a [NOMBRE] dies laborables.

QUART: Que, tenint en compte el que recull l'article 37.7 de l'Estatut dels Treballadors, la concreció horària i la determinació del període de gaudi del permís de lactància i de la reducció de jornada correspondran a la persona treballadora, dins de la seua jornada ordinària.

CINQUÉ: Prenent com a referència el que recull l'article 38 de l'ET, segons el qual, quan el període de vacances fixat en el calendari de vacances de l'empresa coincidisca en el temps amb una incapacitat temporal derivada de l'embaràs, el part o la lactància natural o amb el període de suspensió del contracte de treball per naixement, es tindrà dret a gaudir de les vacances en una data diferent de la de la incapacitat temporal o de la del gaudi del permís que per este precepte corresponguera, en finalitzar el període de suspensió, encara que haja acabat l'any natural a què corresponguen.

SOL·LICITE:

Que s'acumule a la suspensió del contracte per naixement i cura de menor el permís de lactància, corresponent a [NOMBRE] dies laborables. Esta llicència entrarà en vigor el dia [DATA D'INICI].

Gaudir de les [NOMBRE] setmanes corresponents a les vacances de l'exercici [ANY ANTERIOR] a continuació del gaudi del permís de lactància, des del [DATA D'INICI DE LES VACANCES], i, a continuació, de les [NOMBRE] setmanes de vacances corresponents a enguany, i incorporar-me al meu lloc de treball el [DATA DE REINCORPORACIÓ].

Continuar amb la reducció de jornada per cura que feia fins ara, amb la mateixa distribució horària, però aplicant este dret pel nou fill o filla.` },

'excedencia-fill': { a: 'Excedència per cura de fill o filla menor de tres anys',
  t: `${IV}

MANIFESTE:

Que, de conformitat amb el que estableix l'article 46.3 de l'ET, les persones treballadores tindran dret a un període d'excedència de duració no superior a tres anys per a atendre la cura de cada fill o filla, tant quan ho siga per naturalesa com per adopció, o en els supòsits d'acolliment, tant permanent com preadoptiu, encara que estos siguen provisionals, a comptar des de la data de naixement o, si és el cas, de la resolució judicial o administrativa.

SOL·LICITE:

Passar a la situació d'excedència per cura de fill/a, per la qual cosa a partir del pròxim dia [DATA D'INICI] deixaré de prestar qualsevol tipus d'activitat per a la seua empresa.` },

'excedencia-familiar': { a: 'Excedència per cura de familiar',
  t: `${IV}

MANIFESTE:

PRIMER: Que, tal com recull l'article 46.3 de l'ET, el personal tindrà dret a un període d'excedència, de duració no superior a dos anys, per a atendre la cura d'un familiar fins al segon grau de consanguinitat o afinitat que, per raons d'edat, accident, malaltia o discapacitat, no puga valdre's per si mateix i no exercisca activitat retribuïda.

SEGON: Que, donada la situació de [SITUACIÓ DEL FAMILIAR], em veig en l'obligació d'acollir-me a una excedència per a poder fer-me càrrec de la seua cura.

SOL·LICITE:

Passar a la situació d'excedència per cura de familiar, que gaudiré des del [DATA D'INICI] fins al [DATA DE FI], per la qual cosa a partir del pròxim dia [DATA D'INICI] deixaré de prestar qualsevol tipus d'activitat per a la seua empresa.` }

};
Object.keys(VA).forEach(function (k) { if (window.CGT_MODELS[k]) window.CGT_MODELS[k].va = VA[k]; else throw new Error('VA sense model: ' + k); });
})();
