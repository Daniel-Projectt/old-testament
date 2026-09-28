/* ================================================================ the course
   Built from her Old Testament class notes on 1 Samuel: Samuel (chs. 1–7),
   Saul (chs. 8–15), and David and Saul (chs. 16–31). The quiz is on this
   chapter, so everything here stays inside the notes.                         */
var COURSE = {
 code:"Old Testament Literature", term:"Cedarville University",
 exam:"1 Samuel &mdash; Samuel, Saul and David",
 scope:"Your class notes on the chapter: the last judge, the first king, and the shepherd God chose instead. The quiz is on this chapter.",
 rules:[
  "<b>1 Samuel 1&ndash;7</b> is Samuel, <b>8&ndash;15</b> is Saul, <b>16&ndash;31</b> is the new king, David.",
  "<b>1 Samuel 15</b> raises the important questions &mdash; Saul, the Amalekites, and why obedience is better than sacrifice.",
  "Know the <b>dates and numbers</b>: 1070&ndash;970 BC, Samuel 20 years, Saul 40, David king near 1010; 30,000 dead at the ark&rsquo;s capture; Goliath nine feet tall.",
  "Know <b>who fought whom</b>: the Philistines were the main threat; Saul also fought the Ammonites, Amalekites, Edomites and the kings of Zobah."],
 about:"Each heading below is a part of the chapter as your notes lay it out. The notes, flashcards, quizzes and practice exam all stay inside them. Green marks the lines most likely to be asked."
};

/* One item per part of the chapter. "a" is the note section; "subs" are the
   subsections inside it.                                                       */
var GUIDE = {sections:[
 {h:"Samuel · 1 Samuel 1–7", tp:"s1", items:[
  {id:"g1-setting", t:"The time and the man", a:"s1-setting",
   short:"1070–970 BC, accurate within about ten years. Samuel leads 20 years, Saul 40, and David is king near 1010. Samuel is the last great judge — prophet, priest and judge — who crowns the first king.",
   subs:[["Dates", "s1-dates"], ["Prophet, priest, judge", "s1-offices"]]},
  {id:"g1-birth", t:"Hannah and Samuel’s birth", a:"s1-birth",
   short:"An unusual birth like Isaac, Moses and Samson. Hannah prays at Shiloh while the other wife taunts her; Eli thinks she is drunk, then blesses her; she gives the child to God.",
   subs:[["Hannah’s prayer", "s1-birth"]]},
  {id:"g1-call", t:"Eli’s sons and God’s call", a:"s1-call",
   short:"Eli’s sons take meat from the sacrifices and sleep with women. God calls Samuel three times; Samuel thinks it is Eli; the message is judgment on Eli and his sons.",
   subs:[["The call", "s1-call"]]},
  {id:"g1-ark", t:"The ark lost and returned; Mizpah", a:"s1-ark",
   short:"Israel loses to the Philistines: 30,000 dead, Eli’s sons killed, the ark taken; Eli falls and breaks his neck. Dagon falls before the ark; plague of mice and tumors. Twenty years later, revival at Mizpah.",
   subs:[["The battle", "s1-battle"], ["Dagon", "s1-dagon"], ["Mizpah", "s1-mizpah"]]}]},

 {h:"Saul · 1 Samuel 8–15", tp:"s2", items:[
  {id:"g2-king", t:"Israel asks for a king", a:"s2-king",
   short:"Samuel’s sons take bribes. Israel wants a king like the nations — a king it did not need, since Samuel only had to pray. The theocracy ends; Samuel warns of drafts, a court and taxes.",
   subs:[["Why a king", "s2-why"], ["Samuel’s warning", "s2-warning"]]},
  {id:"g2-land", t:"Saul’s kingdom and enemies", a:"s2-land",
   short:"The Philistines were the main threat — five cities on the coastal plain, plus Beth Shean. Saul also fought Ammonites, Amalekites, Edomites and the kings of Zobah. A small kingdom; capital at Gibeah.",
   subs:[["Enemies", "s2-enemies"], ["Gibeah", "s2-gibeah"]]},
  {id:"g2-chosen", t:"Saul chosen: the donkeys and three namings", a:"s2-chosen",
   short:"Tall and impressive but unassuming. Kish’s lost donkeys bring him to Samuel. Named king three times: privately anointed with oil, publicly chosen at Mizpah (hiding), confirmed after beating the Ammonites, crowned at Gilgal.",
   subs:[["The donkeys", "s2-donkeys"], ["Three times", "s2-three"]]},
  {id:"g2-fall", t:"Saul’s disobedience (1 Samuel 13–15)", a:"s2-fall",
   short:"He offers the sacrifice himself when Samuel is late — so none of his sons will rule. He spares King Agag and the best animals of the Amalekites. Obedience is better than sacrifice; God rejects him.",
   subs:[["The sacrifice", "s2-sacrifice"], ["The Amalekites", "s2-amalek"]]}]},

 {h:"David and Saul · 1 Samuel 16–31", tp:"s3", items:[
  {id:"g3-anoint", t:"David anointed; the Spirit leaves Saul", a:"s3-anoint",
   short:"Samuel goes to Jesse in Bethlehem. Eliab impresses, but the Lord looks at the heart. The youngest, David, is anointed; God’s Spirit rushes on him and leaves Saul, replaced by an evil spirit (16:14).",
   subs:[["At Bethlehem", "s3-bethlehem"], ["The evil spirit — six notes", "s3-spirit"]]},
  {id:"g3-goliath", t:"David and Goliath", a:"s3-goliath",
   short:"Goliath is nine feet tall, his spear like a weaver’s rod. David comes with a staff, a sling and five smooth stones; the issue is the power of Israel’s God. The first stone kills him. Archaeology at Gath (Aren Maeir).",
   subs:[["The fight", "s3-fight"], ["Archaeology at Gath", "s3-gath"]]},
  {id:"g3-flight", t:"Saul’s jealousy and David in flight", a:"s3-flight",
   short:"Saul throws a spear at David, sets a deadly bride-price, sends men at night. Jonathan’s loyalty. David flees to Gath and acts mad, leads outcasts, twice spares Saul, and serves Achish of Gath.",
   subs:[["Saul’s attempts", "s3-attempts"], ["Jonathan", "s3-jonathan"], ["The outlaw years", "s3-outlaw"]]},
  {id:"g3-end", t:"The medium, the Amalekites and Saul’s death", a:"s3-end",
   short:"Samuel dead and God silent, Saul consults a medium, and Samuel appears. David is kept out of the battle and defeats the Amalekites. Jonathan dies; Saul falls on his own sword. One day: the war, the king and his heirs.",
   subs:[["The medium", "s3-medium"], ["The last battle", "s3-death"], ["Saul, summed up", "s3-verdict"]]}]}
]};
