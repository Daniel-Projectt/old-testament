/* ================================================================ the course
   Built from her Old Testament class notes on 1 Samuel: Samuel (chs. 1–7),
   Saul (chs. 8–15), and David and Saul (chs. 16–31). The quiz is on this
   chapter, so everything here stays inside the notes.                         */
var COURSE = {
 code:"Old Testament Literature", term:"Cedarville University",
 exam:"1 and 2 Samuel &middot; 1 and 2 Kings &mdash; Samuel, Saul, David and Solomon",
 scope:"Your class notes on 1 Samuel &mdash; the last judge, the first king, and the shepherd God chose instead &mdash; and your textbook on 2 Samuel, David&rsquo;s kingdom, and 1 and 2 Kings, losing the land.",
 rules:[
  "<b>1 Samuel 1&ndash;7</b> is Samuel, <b>8&ndash;15</b> is Saul, <b>16&ndash;31</b> is the new king, David. <b>2 Samuel</b> is David&rsquo;s kingdom: <b>1&ndash;10</b> he builds it, <b>11&ndash;19</b> his sin and its consequences, <b>20&ndash;24</b> his last years.",
  "<b>2 Samuel 7</b> is the high point: God promises David a <b>house</b> &mdash; a throne forever &mdash; the promise that leads to the Messiah.",
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
   subs:[["The medium", "s3-medium"], ["The last battle", "s3-death"], ["Saul, summed up", "s3-verdict"]]}]},

 {h:"David’s kingdom · 2 Samuel (textbook, pp. 132–140)", tp:"s4", items:[
  {id:"g4-rise", t:"David mourns Saul; the long road to the throne", a:"s4-rise",
   short:"David mourns and executes the Amalekite who claims he killed Saul. Judah crowns David; the north follows Ish-bosheth. Joab murders Abner; two men kill Ish-bosheth; David executes them. David reigns 1010–970 BC: 7 years over Judah, 33 over all.",
   subs:[["David mourns", "s4-mourn"], ["Two kings", "s4-divided"], ["Two murders", "s4-murders"]]},
  {id:"g4-kingdom", t:"All Israel: Jerusalem, the Philistines, the ark", a:"s4-kingdom",
   short:"All 12 tribes anoint David. Three ways he secures the kingdom: Jerusalem as capital (neutral, defensible, 12 acres), the Philistines subdued, the ark brought to Jerusalem. Eilat Mazar’s tenth-century palace. Wars won; kindness to Jonathan’s son.",
   subs:[["Three ways", "s4-three"], ["Why Jerusalem", "s4-jerusalem"], ["The maps", "s4-maps"], ["After the promise", "s4-prosper"]]},
  {id:"g4-promise", t:"God’s promise to David (2 Samuel 7)", a:"s4-promise",
   short:"David wants to build God a house; God promises David a house — a royal line and a throne forever (7:16). David’s son will build the temple. The rest of the Bible reads it as the Messiah from David’s family, uniting the Testaments in Jesus.",
   subs:[["The house", "s4-house"], ["Why it matters", "s4-meaning"]]},
  {id:"g4-sin", t:"David’s sin and its consequences (2 Samuel 11–19)", a:"s4-sin",
   short:"Bathsheba, Uriah’s death, marriage. Nathan’s parable; two punishments — the child dies, David’s wives taken in broad daylight. Amnon and Tamar, Absalom kills Amnon, revolts, and dies at Joab’s hand. Sin, punishment, and God’s forgiveness.",
   subs:[["Bathsheba and Uriah", "s4-bathsheba"], ["What he broke", "s4-laws"], ["Nathan", "s4-nathan"], ["Amnon and Absalom", "s4-family"]]},
  {id:"g4-last", t:"David’s last years; the conclusion (2 Samuel 20–24)", a:"s4-last",
   short:"Sheba’s rebellion; Joab rescues David again. David praises God. The census, the plague, and the threshing floor. Conclusion: Abraham’s promises basically fulfilled, the leadership crisis solved, a great new era.",
   subs:[["Turmoil", "s4-turmoil"], ["The census", "s4-census"], ["Conclusion", "s4-conclusion"]]}]},

 {h:"Losing the land · 1 and 2 Kings (textbook, pp. 141–151)", tp:"s5", items:[
  {id:"g5-intro", t:"The story of 1 and 2 Kings: Israel dies as a nation", a:"s5-intro",
   short:"From David’s death, Israel slides to idolatry, division, destruction and exile. Four signs of illness: Solomon’s idols, the split, Assyria destroys the north, Babylon conquers the south. Elijah and Elisha lead the prophets; Assyria and Babylon do God’s work (2 Kings 17:23).",
   subs:[["At a glance", "s5-box"], ["Four signs", "s5-signs"], ["The characters", "s5-cast"]]},
  {id:"g5-themes", t:"Five themes from Deuteronomy; the key dates", a:"s5-themes",
   short:"Obey the covenant (even kings, Dt 17:14–20); God rules history; prophets preach repentance; the temple, the one place of worship; God forgives if they repent (Dt 30). David dies about 970 BC; Solomon reigns 40 years; the north falls 722, the south 587.",
   subs:[["The five themes", "s5-five"], ["The dates", "s5-dates"]]},
  {id:"g5-throne", t:"Solomon takes the throne (1 Kings 1–4)", a:"s5-throne",
   short:"David’s counsel and death. Solomon removes Adonijah (Abishag), Joab (sanctuary) and Shimei. He asks for wisdom; God adds riches and fame. History box: Siamun and Gezer, the casemate wall, six-chambered gates, foreign wives, gold, and weary taxpayers.",
   subs:[["David’s last counsel", "s5-david"], ["Rivals removed", "s5-rivals"], ["Wisdom", "s5-wisdom"]]},
  {id:"g5-temple", t:"The temple (1 Kings 5–9)", a:"s5-temple",
   short:"Hiram’s cedar, 30,000 workers, seven years, begun about 966 BC; 30 by 90 by 45 feet, cedar and gold inside. The ark and the cloud of glory. Five themes, Israel at its midpoint. Solomon prays for forgiveness, with Deuteronomy 27–28 and 30 in mind.",
   subs:[["Building it", "s5-build"], ["The drawing", "s5-drawing"], ["Five themes", "s5-meaning"], ["The prayer", "s5-prayer"]]},
  {id:"g5-fall", t:"Solomon’s fall and the kingdom split (1 Kings 9–14)", a:"s5-fall",
   short:"A 13-year palace and great wealth. 700 wives and 300 concubines break Dt 17:17; he worships their gods. Ahijah promises Jeroboam ten tribes. Rehoboam threatens the people; all but Judah and Benjamin follow Jeroboam. Two kings, two capitals, two religions.",
   subs:[["Riches", "s5-wealth"], ["What erodes him", "s5-wives"], ["Jeroboam and Ahijah", "s5-jeroboam"], ["Summed up", "s5-verdict"], ["The split", "s5-split"]]},
  {id:"g5-kings", t:"The kings of Israel (north) and Judah (south)", a:"s5-kings",
   short:"North: several dynasties and many usurpers, Jeroboam I (930) to Hoshea (722); Zimri seven days; Jehu anointed by God. South: the Davidic dynasty, Rehoboam (930) to Zedekiah (587); Athaliah, Ahab’s daughter. All dates approximate.",
   subs:[["The north", "s5-north"], ["The south", "s5-south"]]}]},

 {h:"The two kingdoms fall · 1 Kings 16 – 2 Kings 25 (textbook, pp. 156–171)", tp:"s6", items:[
  {id:"g6-elijah", t:"Omri, Ahab and Elijah (1 Kings 16–19)", a:"s6-elijah",
   short:"Omri: able by secular history, condemned for Jeroboam’s religion. Ahab keeps that religion, marries Jezebel of Tyre and spreads Baal worship. Elijah: the drought, the widow, fire on Mount Carmel against 450 prophets of Baal, then flight, the cave and three tasks.",
   subs:[["Omri and Ahab", "s6-omri"], ["The drought", "s6-drought"], ["Mount Carmel", "s6-carmel"], ["Three tasks", "s6-cave"]]},
  {id:"g6-ahab", t:"Ahab’s end: Syria, the field and Micaiah (1 Kings 20–22)", a:"s6-ahab",
   short:"Ahab defeats Ben-Hadad but spares him, like Saul. Jezebel has a field’s owner executed; Elijah’s sentence; Ahab repents and it is postponed. Four hundred false prophets promise victory; Micaiah foretells Ahab’s death, and he dies disguised in battle.",
   subs:[["Syria", "s6-syria"], ["The field", "s6-field"], ["Micaiah", "s6-micaiah"], ["Two kings", "s6-two"]]},
  {id:"g6-elisha", t:"Elisha and Jehu’s revolt (2 Kings 1–10)", a:"s6-elisha",
   short:"Elijah goes up in a chariot of fire; Elisha receives a double portion. His miracles: oil, ax head, Naaman, Hazael, Jehu. In 841 BC Jehu kills Joram, Ahaziah and Jezebel and the priests of Baal — a lukewarm follower. Mesha’s stele, the stone at Dan, the Shalmaneser stele.",
   subs:[["Elijah to Elisha", "s6-double"], ["Miracles", "s6-miracles"], ["Jehu", "s6-jehu"]]},
  {id:"g6-north", t:"The fall of northern Israel (2 Kings 11–17)", a:"s6-north",
   short:"No king leaves the sins of Jeroboam. Menahem pays Tiglath-pileser III; Pekah refuses and part of the north is deported; under Hoshea, Shalmaneser V besieges Samaria and Sargon takes it in 722 BC. Cause: idolatry, ignoring covenant and prophets, pagan rites. Ahaz becomes Assyria’s vassal.",
   subs:[["After Jehu", "s6-jeroboam2"], ["Last kings", "s6-last"], ["Why it fell", "s6-why"], ["Judah meanwhile", "s6-judah8"]]},
  {id:"g6-reform", t:"Hezekiah, Manasseh and Josiah (2 Kings 18–23)", a:"s6-reform",
   short:"Hezekiah: faith like David’s; in 701 BC he prays, Isaiah answers, 185,000 Assyrians die; his mistake is showing Babylon’s envoys everything. Manasseh: 55 years of idolatry. Josiah: the Book of the Law, Huldah, covenant renewal, Passover; killed by Egypt in 609 BC.",
   subs:[["Hezekiah", "s6-hezekiah"], ["Manasseh", "s6-manasseh"], ["Josiah", "s6-josiah"], ["Josiah’s death", "s6-jdeath"]]},
  {id:"g6-fall", t:"The fall of Jerusalem and the conclusion (2 Kings 23–25)", a:"s6-fall",
   short:"Jehoahaz, Jehoiakim, Jehoiachin, Zedekiah. Nebuchadnezzar takes Judah in 605 BC (Daniel), exiles Jehoiachin and Ezekiel in 597, destroys Jerusalem and the temple in 587. Cyrus takes Babylon in 539. Jehoiachin honored after 37 years: the promises to Abraham and David remain.",
   subs:[["Last four kings", "s6-four"], ["587 BC", "s6-587"], ["Hope", "s6-hope"], ["Conclusion", "s6-conclusion"]]}]}
]};
