/* ================================================================ 1 and 2 Kings: losing the land
   From her textbook, Old Testament Survey, chapter 7, "1 and 2 Kings: Losing the Land",
   pp. 141–151 (photos; p. 143 was not among them): the chapter box, the introduction, the five
   themes and dates, Solomon's reign (1 Kings 1–11), the "For Greater Historical Understanding"
   box, the temple drawing, the trade map, the split (1 Kings 11–14) and the two lists of kings.
   Her margin notes: the four signs of illness, the five themes, 970 / 722 / 587 BC.           */
var KINGS_NORTH = [
 ["Jeroboam I","930–909"], ["Nadab","909–908"], ["Baasha (usurper)","908–885"], ["Elah","885–884"],
 ["Zimri (usurper)","885 (7 days)"], ["Tibni","885–880"], ["[Civil unrest]","885–880"], ["Omri","880–874"],
 ["Ahab","874–853"], ["Ahaziah (eldest son of Ahab)","853–852"], ["Joram (second son of Ahab)","852–841"],
 ["Jehu (usurper, anointed by God)","841–814"], ["Jehoahaz","814–798"], ["Jehoash","798–782"],
 ["[Coregency with Jeroboam II]","793–782"], ["Jeroboam II","782–753"], ["Zechariah","753–752 (6 months)"],
 ["Shallum (usurper)","752 (1 month)"], ["Menahem (usurper)","752–742"], ["Pekahiah","742–740"],
 ["Pekah (usurper)","740–732"], ["Hoshea (usurper)","732–722"]];
var KINGS_SOUTH = [
 ["Rehoboam","930–913"], ["Abijah","913–910"], ["Asa","910–869"], ["[Coregency with Jehoshaphat]","872–869"],
 ["Jehoshaphat","869–848"], ["[Coregency with Jehoram]","853–848"], ["Jehoram","848–841"], ["Ahaziah","841"],
 ["Athaliah (Ahaziah’s mother, daughter of Ahab)","841–835"], ["Joash","835–796"], ["Amaziah","796–767"],
 ["[Coregency with Uzziah]","792–767"], ["Azariah/Uzziah","767–740"], ["[Coregency with Jotham]","750–740"],
 ["Jotham","740–731"], ["[Coregency with Ahaz]","735–731"], ["Ahaz","731–715"], ["Hezekiah","715–687"],
 ["[Coregency with Manasseh]","697–687"], ["Manasseh","687–642"], ["Amon","642–640"], ["Josiah","640–609"],
 ["Jehoahaz","609 (3 months)"], ["Jehoiakim","609–598"], ["Jehoiachin","598–597 (3 months)"], ["Zedekiah","597–587"]];
function kingsTable(list, head){
  return '<div class="tblwrap"><table class="tbl n0"><tr><th>'+head+'</th><th>Reigned (BC)</th></tr>'+
    list.map(function(k){ var co = k[0].charAt(0) === "["; return '<tr'+(co ? ' class="co"' : '')+'><td>'+(co ? '<i>'+k[0]+'</i>' : k[0])+'</td><td>'+k[1]+'</td></tr>'; }).join("")+'</table></div>';
}

CH.s5 = {n:5, title:"Losing the land", short:"1 Kings", ref:"1 Kings 1–14; 1 and 2 Kings overview",
 notes:[
  {id:"s5-intro", h:"The story of 1 and 2 Kings: Israel dies as a nation", body:
   '<div class="point"><b>The point</b><p><mark>Starting with David’s death, 1 and 2 Kings describe the <b>death of Israel as a nation</b></mark>. Israel slowly slides from the glories of Solomon’s reign to <b>idolatry, division, destruction and exile</b>. <mark>Every event either <b>accelerates or slows</b> the nation’s end.</mark> <mark>If the books’ plots, themes and characters are kept in focus, the text makes sense.</mark></p><p class="able"><b>Be able to</b> give the four signs of illness in order, and say who the main characters are and what each one did to the nation.</p></div>'+
   '<h3 class="sub" id="s5-box">The chapter at a glance</h3>'+
   '<div class="tblwrap"><table class="tbl n0">'+
   '<tr><td><b>Plot</b></td><td>Israel <mark>slowly yet persistently slides from the glories of Solomon’s reign to idolatry, division, destruction and exile</mark>. A few outstanding prophets and kings <b>impede</b> this process but are <b>unable to stop it</b>.</td></tr>'+
   '<tr><td><b>Major characters</b></td><td>David, Solomon, Rehoboam, Jeroboam, Omri, Ahab, Jezebel, Elijah, Elisha, Jehu, Uzziah, Hezekiah, Manasseh and Josiah</td></tr>'+
   '<tr><td><b>Major events</b></td><td>David’s death, Solomon’s temple construction, the division of the kingdom, Ahab and Jezebel’s conflict with Elijah, Elisha’s ministry, the fall of Samaria, the Sennacherib crisis, Josiah’s reform, and the destruction of Jerusalem</td></tr></table></div>'+
   '<h3 class="sub" id="s5-signs">The four signs of illness</h3>'+
   '<ol><li><mark><b>Idols</b> — Solomon, David’s son, begins to worship idols.</mark></li>'+
   '<li><mark><b>The kingdom splits</b> — the nation divides into two parts, north and south.</mark> David’s descendants rule the <b>south</b>; other men reign over the north.</li>'+
   '<li><mark><b>Assyria destroys Northern Israel</b></mark> — slightly <b>over two hundred years after the division</b>.</li>'+
   '<li><mark><b>Babylon</b> conquers southern Israel and levels Jerusalem</mark> — the nation dies altogether.</li></ol>'+
   '<h3 class="sub" id="s5-cast">The characters who drive the plot</h3>'+
   '<ul><li><mark><b>David</b> links 1 and 2 Kings with 1 and 2 Samuel.</mark></li>'+
   '<li><mark><b>Solomon</b> helps fulfill God’s promises to David (2 Samuel 7:1–17), yet he also sins in a way that <b>hastens Israel’s ruin</b>.</mark></li>'+
   '<li><mark><b>Rehoboam and Jeroboam</b> tear the kingdom into two pieces</mark>, and <b>Jeroboam creates a new religion</b>.</li>'+
   '<li><mark><b>Ahab and Jezebel</b> lead the nation away from God.</mark></li>'+
   '<li><mark><b>Hezekiah, Josiah</b> and six other faithful kings attempt to make the nation repent and seek Yahweh, but ultimately fail.</mark></li>'+
   '<li><b>The prophets</b> are perhaps the books’ most impressive characters, with <mark><b>Elijah and Elisha</b> playing the most important roles</mark>. Other prophets, like <b>Ahijah</b> and <b>Micaiah</b>, also try to turn Israel back to Yahweh. They <mark>remind Israel of their <b>covenant obligations</b></mark> and stand against kings who dishonor God. <mark>Many times they are persecuted, yet they are <b>never silenced</b>.</mark></li>'+
   '<li>Two more “characters” are nations, not individuals: <mark><b>Assyria</b> and <b>Babylon</b></mark>. Assyria destroys the north; Babylon devastates what remains. They hover over the story, waiting to attack. When they finish, <mark><b>2 Kings 17:23</b> says they have in reality done <b>God’s work</b>: Israel’s sins have been punished in the manner dictated by <b>Deuteronomy 27–28</b>.</mark></li></ul>'},

  {id:"s5-themes", h:"Five themes from Deuteronomy; the key dates", body:
   '<div class="point"><b>The point</b><p>Most of the ideas that explain 1 and 2 Kings <mark>come from <b>Deuteronomy</b></mark> — the same ideas found in Joshua, Judges and Samuel. And three dates hold the story together: <mark><b>970</b>, <b>722</b> and <b>587 BC</b></mark>.</p><p class="able"><b>Be able to</b> list the five themes with their passage in Deuteronomy, and say what happened in 970, 722 and 587 BC.</p></div>'+
   '<h3 class="sub" id="s5-five">The five themes</h3>'+
   '<div class="tblwrap"><table class="tbl n0"><tr><th>Theme</th><th>What it means</th></tr>'+
   '<tr><td><mark>1. <b>Obey the covenant</b></mark></td><td>God expects Israel to obey the stipulations of the covenant. <mark>Even the kings must act according to the rules in <b>Dt 17:14–20</b>.</mark> Above all, <b>idolatry must be avoided</b> and the law followed.</td></tr>'+
   '<tr><td><mark>2. <b>God rules history</b></mark></td><td>The Creator controls kings and nations (<b>Dt 4:32–40</b>).</td></tr>'+
   '<tr><td><mark>3. <b>Prophets</b></mark></td><td>Prophets arise and <mark>preach repentance to a sinful nation</mark> (<b>Dt 18:14–22</b>).</td></tr>'+
   '<tr><td><mark>4. <b>The temple</b></mark></td><td>The temple is built, fulfilling <b>2 Samuel 7:1–17</b> and making <mark>Jerusalem the central place of worship</mark> (<b>Dt 12:4–6</b>). Sacrifices can be offered <b>only</b> there.</td></tr>'+
   '<tr><td><mark>5. <b>Forgiveness if they repent</b></mark></td><td><mark>God will forgive and restore Israel if they repent</mark> (<b>Dt 30:1–10</b>).</td></tr></table></div>'+
   '<h3 class="sub" id="s5-dates">The dates</h3>'+
   '<ul><li><mark>Almost <b>four centuries</b> pass in 1 and 2 Kings.</mark></li>'+
   '<li><mark><b>970 BC</b> — David dies</mark> (about).</li>'+
   '<li><mark>Solomon reigns <b>40 years</b>; then the nation divides</mark>.</li>'+
   '<li><mark><b>722 BC</b> — the northern kingdom falls.</mark></li>'+
   '<li><mark><b>587 BC</b> — the southern kingdom falls.</mark></li></ul>'+
   '<p><mark>722 and 587 are vital for the rest of the Old Testament</mark>: the <b>prophets</b> either announce, experience or comment on these events, and most of the <b>Writings</b> relate to David, Solomon, or the fall or rebuilding of the nation.</p>'},

  {id:"s5-throne", h:"Solomon takes the throne (1 Kings 1–4)", body:
   '<div class="point"><b>The point</b><p>With David’s death an era passes. <mark>Solomon follows David’s political advice and removes every rival</mark>, then <mark>asks God for <b>wisdom</b> — and God makes him rich and famous too</mark>. <mark>Yahweh has kept His promise to Solomon, just as He kept those made to David.</mark></p><p class="able"><b>Be able to</b> say how Solomon dealt with Adonijah, Joab and Shimei, what he asked God for, and what the history box says about Gezer and Solomon’s wealth.</p></div>'+
   '<h3 class="sub" id="s5-david">David’s last counsel and death</h3>'+
   '<ul><li>David’s counsel to Solomon includes: <mark>the king asks Solomon to <b>reward some old friends</b> (2:7)</mark>. Solomon must learn to <mark><b>trust God, distrust his enemies, and honor his allies</b></mark>. Probably no one in Israel’s history understood that balance better than David.</li>'+
   '<li><mark>With <b>David’s death</b> (2:10–12) an era has passed.</mark> Israel now clearly favors having a king, with a <b>solid economy, fighting force and system of justice</b>; its days as a group of tribes that fears every new enemy are over.</li>'+
   '<li>This imperfect ruler, who follows Yahweh and yet sins greatly, achieved <b>something of a political miracle</b>. He gave worship added status by bringing the ark to Jerusalem, listening to the prophets and supporting the priests.</li>'+
   '<li><mark>Next to <b>Abraham and Moses</b>, David is the most influential person in the Old Testament.</mark></li></ul>'+
   '<h3 class="sub" id="s5-rivals">Solomon removes his rivals (1 Kings 2)</h3>'+
   '<ul><li><mark><b>Adonijah</b></mark>: Solomon lets him live until he <mark>asks to marry <b>Abishag</b>, David’s last concubine</mark> (2:13–21). <mark>Whoever possesses the harem rules the land</mark> (see 2 Sm 3:7; 16:21–22), so the request lacks subtlety and wisdom. Solomon has him killed (2:22–25).</li>'+
   '<li><mark><b>Joab</b></mark> dies too: though he <mark>runs to the tabernacle for <b>sanctuary</b></mark>, Solomon has him put to death (2:28–35).</li>'+
   '<li><mark><b>Shimei</b></mark>, who <mark>opposed David during the <b>Absalom revolt</b></mark>, is executed (2:36–46).</li>'+
   '<li>Now Solomon has <b>no rivals</b> to the throne or rebels to stir dissent.</li></ul>'+
   '<h3 class="sub" id="s5-wisdom">Wisdom, riches and fame (1 Kings 3–4)</h3>'+
   '<ul><li>Early on, Solomon <b>follows David’s spiritual counsel</b>, with a few significant exceptions: <mark>he marries <b>Pharaoh’s daughter</b> and offers sacrifices <b>outside Jerusalem</b></mark> (3:1–3). These lead to greater problems later.</li>'+
   '<li><mark>He asks God for <b>wisdom</b> to rule, for he realizes he is <b>young and inexperienced</b>.</mark> God answers and also <mark>promises to make the king <b>rich and famous</b></mark> (3:10–14).</li>'+
   '<li>He settles seemingly <b>impossible disputes</b> (3:16–28), organizes an effective <b>government</b> (4:1–19), and establishes a powerful, even opulent, <b>royal court</b> (4:20–28).</li>'+
   '<li><mark>His wisdom becomes known throughout the region</mark> (4:29–34): he writes numerous <b>proverbs and songs</b> and acquires a vast knowledge of <b>botany and biology</b>.</li></ul>'+
   '<div class="exam-tip"><b>For greater historical understanding</b><ul>'+
   '<li>Solomon built a <b>palace</b> and the <b>temple</b>, and rebuilt and fortified key cities.</li>'+
   '<li><mark>The Egyptian Pharaoh <b>Siamun</b> may have been the one who gave one of these key cities to Solomon.</mark> <b>1 Kings 9:15–16</b>: a pharaoh destroyed <mark><b>Gezer</b> and gave it as a gift/<b>dowry</b> to Solomon</mark> on his marriage to Pharaoh’s daughter.</li>'+
   '<li><mark>Excavations at <b>Tel Gezer</b> have uncovered this destruction under the <b>Solomonic casemate wall</b>.</mark></li>'+
   '<li><mark><b>Gezer, Megiddo and Hazor</b></mark> were royal cities rebuilt by Solomon, with the same architecture: city gates all the same size and style, with a <mark><b>six-chambered gate</b></mark>.</li>'+
   '<li>Marrying an Egyptian princess fits his <mark>foreign policy of marrying the daughters of foreign kings</mark> to forge strong international relationships.</li>'+
   '<li>He continued the <b>trade agreements with the Phoenicians</b> that David began.</li>'+
   '<li>By the Bible, his wealth was extravagant. Some scholars dispute the amounts, but <mark>his yearly gold income is <b>not unusual</b> compared with Egypt, Assyria, Babylon and Persia</mark>.</li>'+
   '<li><mark>His excesses <b>wearied the Israelites of forced labor and taxes</b>, setting the stage for the divided monarchy.</mark></li></ul></div>'},

  {id:"s5-temple", h:"The temple (1 Kings 5–9)", body:
   '<div class="point"><b>The point</b><p><mark>Solomon demonstrates his love for God by building the temple.</mark> God approves with a <b>cloud of glory</b>, and the temple’s completion brings out <mark><b>five theological themes</b></mark>. Israel stands at the <b>midpoint of its history</b>: the struggle for land behind, exile ahead.</p><p class="able"><b>Be able to</b> give the temple’s facts (who helped, how many workers, how long, when, how big), the five themes, what Solomon prayed for, and the parts of the temple on the drawing.</p></div>'+
   '<h3 class="sub" id="s5-build">Building it (1 Kings 5–6)</h3>'+
   '<ul><li>Israel has no experience with such projects, so <mark>Solomon enlists <b>Hiram, king of Tyre</b></mark> (5:1–6), who provides the <mark><b>cedar and pine</b> logs</mark> (5:7–12).</li>'+
   '<li>Solomon <b>conscripts</b> men “from all Israel” (5:13): <mark>over <b>30,000</b> men work during the <b>seven years</b> it takes</mark> (5:13–18; 6:38). <mark>Eventually the people <b>resent</b> being drafted for royal building projects</mark> (12:4), but for now they do not protest.</li>'+
   '<li><mark>Construction begins in the <b>fourth year</b> of Solomon’s reign, about <b>966 BC</b></mark> (6:1).</li>'+
   '<li>By modern standards it was <mark>not very big: <b>30 feet wide, 90 feet long, 45 feet high</b></mark>. What makes it stunning is the <b>interior</b>: <mark>stone walls covered with <b>cedar</b>, and the cedar with <b>gold</b></mark> (6:14–22), ornate carvings (6:23–35), and utensils of precious metals (7:13–51).</li>'+
   '<li><mark>Solomon brings the <b>ark of the covenant</b>, which houses Moses’ tablets</mark> (8:1–9). <mark>Yahweh approves by sending a “<b>cloud of glory</b>”</mark> (8:10–12) — as in <b>Exodus 40:34–38</b> when Israel finished the tabernacle.</li></ul>'+
   '<h3 class="sub" id="s5-drawing">The drawing: Solomon’s Temple</h3>'+
   '<ul><li>Outside, in front: <mark>the <b>sacrificial altar</b></mark>, the <mark><b>bronze basin atop four sets of oxen</b></mark>, and at the entrance <mark>two bronze pillars, <b>Boaz and Jachin</b></mark>.</li>'+
   '<li>Inside: the <mark><b>table with shewbread</b></mark>, the <b>golden lampstand</b> and the <b>altar with incense</b>; in the back room, the <mark><b>ark of the covenant</b></mark>.</li></ul>'+
   '<h3 class="sub" id="s5-meaning">Five themes from the temple’s completion</h3>'+
   '<ol><li><mark>Moses’ prediction that God would choose a <b>central place for worship</b> has come true</mark> (Dt 12:4–6). All sacrifices must take place here, or God will not accept them.</li>'+
   '<li><mark>God’s <b>promises to David</b> continue to materialize</mark>: David’s son rules and has built a temple for the Lord (2 Sm 7:13).</li>'+
   '<li><mark>God <b>lives with the people</b> in the promised land.</mark> Yahweh keeps the covenant made years ago.</li>'+
   '<li><mark>Israel can have <b>sins forgiven by sacrificing</b> here.</mark></li>'+
   '<li><mark>Israel stands at the <b>midpoint of their history</b>.</mark> The struggle for land and survival lies behind; <b>exile</b> waits in the future. Never again will Israel have such a king, worship center, influence or peace.</li></ol>'+
   '<h3 class="sub" id="s5-prayer">Solomon’s prayer of dedication (1 Kings 8)</h3>'+
   '<ul><li>Before the first sacrifice, Solomon prays that God will <b>keep the promises to David</b> (8:25–26), <b>hear Israel’s prayers</b> (8:27–30), <b>judge the wicked</b> (8:31–32), and <b>bless the foreigner</b> who accepts Israel’s God (8:41–43).</li>'+
   '<li><mark>Most importantly, he prays that Yahweh will <b>forgive the people when they sin</b></mark> (8:33–40, 46–53) — and if Israel goes into <b>exile</b> as punishment, that God will <b>bring them back</b> to the land (8:46–51).</li>'+
   '<li>In other words, <mark>he prays with <b>Deuteronomy 27–28 and 30</b> in mind</mark>.</li>'+
   '<li>Sacrifices and a <b>festival</b> conclude the dedication (8:62–65). <mark>God promises to do as Solomon asked <b>if the people obey the covenant</b></mark> (9:1–9).</li></ul>'},

  {id:"s5-fall", h:"Solomon’s fall and the kingdom split (1 Kings 9–14)", body:
   '<div class="point"><b>The point</b><p>Solomon seems to serve and please God, but <mark>beneath the surface his practices erode his moral strength</mark>. <mark>He no longer serves God alone, which means he has <b>broken the covenant</b> and must face punishment</mark> (11:9–12). After his death <mark>his son <b>Rehoboam</b> threatens the people, and all but <b>Judah and Benjamin</b> follow <b>Jeroboam</b></mark>.</p><p class="able"><b>Be able to</b> say what led to Solomon’s fall and which law he broke, who Jeroboam and Ahijah were, and how and why the kingdom split.</p></div>'+
   '<h3 class="sub" id="s5-wealth">Palaces, fame and riches (1 Kings 7–10)</h3>'+
   '<ul><li><mark>His own <b>palace</b> takes <b>13 years</b></mark> (7:1–12) — obviously <mark>larger and probably more expensive than the temple</mark>.</li>'+
   '<li>He rebuilds towns (9:17), builds <b>store cities and ships</b>, and even a palace for his <b>Egyptian wife</b> (9:10–24). His fame spreads (10:1–13) and he becomes <b>extremely rich</b> (10:14–29).</li>'+
   '<li><b>The trade map</b> (Solomon’s Economic Enterprises; 1 Kgs 5–10; 2 Chr 1:14–17; 3–8; 9): <mark>the <b>Phoenician sea trade</b> across the Mediterranean</mark>, a route to <b>Sheba</b> by the <b>Red Sea</b>, and <b>war chariots</b> from Egypt.</li></ul>'+
   '<h3 class="sub" id="s5-wives">What erodes him</h3>'+
   '<ul><li><mark>He collects <b>700 wives and 300 concubines</b>, many from idol-worshipping countries</mark> (11:1–3). <mark>This clearly violates <b>Deuteronomy 17:17</b>.</mark></li>'+
   '<li>Most of the marriages were <b>politically motivated</b>: they kept peace between Solomon and his neighbors.</li>'+
   '<li><mark>Eventually Solomon <b>worships his wives’ gods</b> and even builds worship places for them</mark> (11:4–9).</li>'+
   '<li><mark>Love of women, coupled with excessive wealth, led to his downfall.</mark> God tells him <mark>the kingdom will be <b>divided into two parts</b></mark> (11:11). His descendants will rule only <b>because of Yahweh’s promises to David</b> and love for Israel (11:12–13).</li></ul>'+
   '<h3 class="sub" id="s5-jeroboam">Jeroboam and Ahijah (1 Kings 11)</h3>'+
   '<ul><li>Various individuals rebel against Solomon in his last years (11:14–24). <mark>The most significant foe is <b>Jeroboam</b>, one of Solomon’s officials</mark> (11:26–28).</li>'+
   '<li><mark>Just as Yahweh used Samuel to anoint David, the Lord sends a prophet, <b>Ahijah</b>, to tell Jeroboam he will rule <b>10 tribes</b></mark> (11:29–31). At least eight more times in 1 and 2 Kings, prophets make such strategic predictions.</li>'+
   '<li><mark>God promises to build Jeroboam a secure house, like David’s, <b>if he obeys the covenant</b></mark> (11:37–39).</li>'+
   '<li><mark>Like <b>Saul</b>, Solomon becomes so jealous of this young man that he tries, unsuccessfully, to kill him</mark> (11:40).</li></ul>'+
   '<h3 class="sub" id="s5-verdict">Solomon, summed up</h3>'+
   '<ul><li>He raised the kingdom to new heights, militarily and economically, and building the temple aided Israel’s worship.</li>'+
   '<li><mark>Unlike David, he <b>served other gods</b>. Whatever his other faults, <b>David never committed idolatry</b>.</mark></li>'+
   '<li><mark>Though wise and the author of wisdom literature (4:29–34), Solomon foolishly forsook <b>the covenant, the nation, and the monarchy’s governing document</b>.</mark></li></ul>'+
   '<h3 class="sub" id="s5-split">The kingdom splits (1 Kings 12–14)</h3>'+
   '<ol><li>After Solomon dies, <mark>his son <b>Rehoboam</b> takes over</mark> (12:1).</li>'+
   '<li><mark>Led by Jeroboam, the people ask him to <b>relieve the burdens of taxation and forced labor</b></mark> Solomon created (12:2–4).</li>'+
   '<li>Foolishly, <mark>Rehoboam <b>threatens</b> them: he will be <b>much harsher than his father</b></mark> (12:5–15).</li>'+
   '<li><mark>All but <b>Judah and Benjamin</b> follow Jeroboam</mark> (12:16–21) — <mark>just as the prophet <b>Ahijah</b> said</mark> (11:30–31; 12:22–24).</li>'+
   '<li>Unlike his father, <mark>Rehoboam never becomes wise, rich or powerful, and he cannot <b>reunite</b> the nation</mark> (14:21–31).</li></ol>'+
   '<p>Now two kingdoms exist. <mark>Until <b>2 Kings 17</b> the story has <b>two kings, two capitals and two religions</b> — yet they share the same destiny: <b>destruction</b>.</mark> Most of <b>1 Kings 12:25–2 Kings 10:36</b> deals with the <b>northern</b> kingdom; all of <b>2 Kings 18–25</b> with the <b>southern</b>.</p>'},

  {id:"s5-kings", h:"The kings of Israel (north) and Judah (south)", body:
   '<div class="point"><b>The point</b><p>The two charts keep the kingdoms apart. <mark>The <b>south (Judah)</b> stays with <b>one family, David’s</b> — the Davidic dynasty</mark>; <mark>the <b>north (Israel)</b> goes through <b>several dynasties</b>, and many of its kings are <b>usurpers</b></mark>. <mark>The north ends with <b>Hoshea in 722 BC</b>; the south with <b>Zedekiah in 587 BC</b>.</mark> All dates are approximate.</p><p class="able"><b>Be able to</b> name the first and last king of each kingdom, and spot the unusual reigns: Zimri’s seven days, Jehu anointed by God, Athaliah the queen.</p></div>'+
   '<h3 class="sub" id="s5-north">Kings of Israel (north)</h3>'+
   '<p class="lead">Dynasties — “usurper” means he seized the throne. <i>Coregency</i> means two kings ruled at once.</p>'+
   kingsTable(KINGS_NORTH, "Dynasties")+
   '<ul><li><mark>First: <b>Jeroboam I</b> (930 BC). Last: <b>Hoshea</b> (to 722 BC).</mark></li>'+
   '<li><mark><b>Zimri</b> reigned <b>7 days</b></mark>; Shallum one month; Zechariah six months.</li>'+
   '<li><mark><b>Jehu</b> was a usurper <b>anointed by God</b></mark>.</li>'+
   '<li><b>Omri</b> and his son <b>Ahab</b>; then two of Ahab’s sons, <b>Ahaziah</b> and <b>Joram</b>.</li></ul>'+
   '<h3 class="sub" id="s5-south">Kings of Judah (south)</h3>'+
   '<p class="lead">The Davidic dynasty.</p>'+
   kingsTable(KINGS_SOUTH, "Davidic dynasty")+
   '<ul><li><mark>First: <b>Rehoboam</b> (930 BC). Last: <b>Zedekiah</b> (to 587 BC).</mark></li>'+
   '<li><mark><b>Athaliah</b> — Ahaziah’s mother and <b>a daughter of Ahab</b> — ruled 841–835</mark>, the one woman on either list.</li>'+
   '<li>The faithful kings named in the chapter: <mark><b>Hezekiah</b> (715–687) and <b>Josiah</b> (640–609)</mark>. <b>Manasseh</b> reigned longest on this list (687–642).</li>'+
   '<li>Both kingdoms begin in <mark><b>930 BC</b></mark> — Solomon’s 40 years after David’s death in 970.</li></ul>'}
 ],
 decks:[
  {id:"terms", label:"People, places & terms", cards:[
   ["The plot of 1 and 2 Kings","Israel slides from Solomon’s glory to idolatry, division, destruction and exile","g5-intro"],
   ["The four signs of illness","Idols; the kingdom splits; Assyria destroys the north; Babylon conquers the south","g5-intro"],
   ["Rehoboam and Jeroboam","Tore the kingdom into two pieces","g5-intro"],
   ["Ahab and Jezebel","Led the nation away from God","g5-intro"],
   ["Hezekiah and Josiah","Faithful kings who tried to make the nation repent, but failed","g5-intro"],
   ["Elijah and Elisha","The most important prophets in 1 and 2 Kings","g5-intro"],
   ["2 Kings 17:23","Assyria and Babylon in reality did God’s work, as Dt 27–28 said","g5-intro"],
   ["Dt 17:14–20","The rules even Israel’s kings must follow","g5-themes"],
   ["Dt 4:32–40","God rules history: the Creator controls kings and nations","g5-themes"],
   ["Dt 18:14–22","Prophets arise and preach repentance","g5-themes"],
   ["Dt 12:4–6","One central place of worship — the temple in Jerusalem","g5-themes"],
   ["Dt 30:1–10","God will forgive and restore Israel if they repent","g5-themes"],
   ["970 BC","David dies","g5-themes"],
   ["722 BC","The northern kingdom falls","g5-themes"],
   ["587 BC","The southern kingdom falls","g5-themes"],
   ["Adonijah","Asked to marry Abishag; Solomon had him killed","g5-throne"],
   ["Abishag","David’s last concubine","g5-throne"],
   ["Shimei","Opposed David in Absalom’s revolt; executed by Solomon","g5-throne"],
   ["Joab’s end","Ran to the tabernacle for sanctuary; put to death anyway","g5-throne"],
   ["Solomon’s request","Wisdom, because he was young and inexperienced","g5-throne"],
   ["Siamun","The pharaoh who may have given Gezer to Solomon as a dowry","g5-throne"],
   ["Tel Gezer","Excavations found the destruction under the Solomonic casemate wall","g5-throne"],
   ["Gezer, Megiddo, Hazor","Royal cities Solomon rebuilt, each with a six-chambered gate","g5-throne"],
   ["Hiram","King of Tyre; supplied cedar and pine for the temple","g5-temple"],
   ["966 BC","Temple construction begins, Solomon’s fourth year","g5-temple"],
   ["The temple’s size","30 feet wide, 90 feet long, 45 feet high","g5-temple"],
   ["The cloud of glory","God’s approval of the temple (8:10–12)","g5-temple"],
   ["Boaz and Jachin","The two bronze pillars at the temple entrance","g5-temple"],
   ["Bronze basin","Stood atop four sets of oxen","g5-temple"],
   ["Solomon’s palace","Took 13 years; larger than the temple","g5-fall"],
   ["700 and 300","Solomon’s wives and concubines","g5-fall"],
   ["Dt 17:17","The command Solomon broke by multiplying wives","g5-fall"],
   ["Jeroboam","Solomon’s official; led the revolt and ruled the north","g5-fall"],
   ["Ahijah","The prophet who told Jeroboam he would rule 10 tribes","g5-fall"],
   ["Judah and Benjamin","The tribes that stayed with Rehoboam","g5-fall"],
   ["Hoshea","The last king of the north (732–722 BC)","g5-kings"],
   ["Zedekiah","The last king of the south (597–587 BC)","g5-kings"],
   ["Zimri","A northern usurper who reigned seven days","g5-kings"],
   ["Jehu","A northern usurper anointed by God","g5-kings"],
   ["Athaliah","Ahaziah’s mother, Ahab’s daughter; ruled Judah 841–835","g5-kings"]]},
  {id:"order", label:"In order", cards:[
   ["1 · David’s death","About 970 BC; his counsel to Solomon","g5-throne"],
   ["2 · Rivals removed","Adonijah, Joab and Shimei are put to death","g5-throne"],
   ["3 · Wisdom","Solomon asks for wisdom; God adds riches and fame","g5-throne"],
   ["4 · The temple","Begun about 966 BC; seven years; Hiram’s cedar","g5-temple"],
   ["5 · Dedication","The ark comes in, the cloud of glory, Solomon’s prayer","g5-temple"],
   ["6 · Riches","A 13-year palace, store cities, ships, trade","g5-fall"],
   ["7 · Idolatry","Foreign wives turn his heart; he worships their gods","g5-fall"],
   ["8 · Ahijah","Tells Jeroboam he will rule ten tribes","g5-fall"],
   ["9 · The split","Rehoboam threatens; the north follows Jeroboam (930 BC)","g5-fall"],
   ["10 · Assyria","Destroys the north, 722 BC","g5-intro"],
   ["11 · Babylon","Conquers the south and levels Jerusalem, 587 BC","g5-intro"]]}
 ]
};

QB = QB.concat([
 {tp:"s5",sec:"g5-intro",t:"mc",q:"According to the textbook, 1 and 2 Kings describe:",a:"The death of Israel as a nation",w:["The birth of Israel as a nation","The return of Israel from its exile","The conquest of the land under Joshua"],e:"Starting with David’s death — Israel slides to idolatry, division, destruction and exile."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"What is the first sign of Israel’s illness?",a:"Solomon begins to worship idols",w:["Assyria invades the northern tribes","The nation splits into north and south","Babylon besieges the city of Jerusalem"],e:"Then the split, then Assyria, then Babylon."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"Which is the right order of the four signs of illness?",a:"Idols, the split, Assyria, Babylon",w:["The split, idols, Babylon, Assyria","Assyria, idols, the split, Babylon","Idols, Babylon, the split, Assyria"],e:"Solomon’s idols; north and south divide; Assyria destroys the north; Babylon conquers the south."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"After the split, who ruled the southern kingdom?",a:"David’s descendants",w:["Jeroboam’s descendants","Saul’s descendants","Governors from Assyria"],e:"David’s descendants rule the south; other men reign over the north."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"Which nation destroyed Northern Israel?",a:"Assyria",w:["Babylon","Egypt","Philistia"],e:"Slightly over two hundred years after the division."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"Which nation conquered the south and leveled Jerusalem?",a:"Babylon",w:["Assyria","Egypt","Persia"],e:"The fourth sign — the nation dies altogether."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"Who tore the kingdom into two pieces?",a:"Rehoboam and Jeroboam",w:["Ahab and Jezebel","Elijah and Elisha","Hezekiah and Josiah"],e:"And Jeroboam created a new religion."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"Which pair led the nation away from God?",a:"Ahab and Jezebel",w:["Rehoboam and Abijah","Elijah and Elisha","Hezekiah and Josiah"],e:"Elijah stood against them."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"What did Hezekiah, Josiah and six other faithful kings try to do?",a:"Make the nation repent and seek Yahweh",w:["Reunite the north and south under one king","Rebuild the temple after Babylon burned it","Make a lasting treaty with Assyria and Egypt"],e:"But they ultimately failed."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"Which two prophets play the most important roles in 1 and 2 Kings?",a:"Elijah and Elisha",w:["Ahijah and Micaiah","Samuel and Nathan","Isaiah and Jeremiah"],e:"Ahijah and Micaiah also try to turn Israel back to Yahweh."},
 {tp:"s5",sec:"g5-intro",t:"mc",q:"What does 2 Kings 17:23 say about Assyria and Babylon?",a:"They really did God’s work",w:["They acted against God’s will","They will be punished forever","They worshiped Yahweh in secret"],e:"Israel’s sins were punished the way Deuteronomy 27–28 said."},
 {tp:"s5",sec:"g5-intro",t:"tf",q:"Many times the prophets in Kings are persecuted, yet they are never silenced.",a:true,e:"True — they remind Israel of its covenant obligations and stand against kings who dishonor God."},
 {tp:"s5",sec:"g5-intro",t:"tf",q:"The faithful kings, like Hezekiah and Josiah, stop Israel’s slide for good.",a:false,e:"False — a few outstanding prophets and kings impede the process but cannot stop it."},
 {tp:"s5",sec:"g5-intro",ap:true,t:"mc",q:"A reader wants one key for 1 and 2 Kings: does each event speed up the nation’s end or slow it down? Which idea from the chapter is that?",a:"Every event accelerates or slows Israel’s end",w:["Every king is judged only by his wars","Every prophet predicts a new kingdom","Every chapter retells 2 Samuel"],e:"The books tell the story of Israel’s demise."},

 {tp:"s5",sec:"g5-themes",t:"mc",q:"Most of the themes that explain 1 and 2 Kings come from:",a:"Deuteronomy",w:["Leviticus","Genesis","Psalms"],e:"The same ideas appear in Joshua, Judges and Samuel."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"Which passage sets the rules even the kings must follow?",a:"Deuteronomy 17:14–20",w:["Deuteronomy 30:1–10","Deuteronomy 12:4–6","Deuteronomy 4:32–40"],e:"Theme one: obey the covenant; above all, avoid idolatry."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"“God rules history” means:",a:"The Creator controls kings and nations",w:["Kings decide what happens to the nation","History repeats itself in cycles","Only Israel’s history matters to God"],e:"Dt 4:32–40 — the second theme; the Creator is in charge."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"What do the prophets do, by the third theme?",a:"Preach repentance to a sinful nation",w:["Anoint every king of the north","Collect the tithes for the temple","Write down the laws of the kingdom"],e:"Dt 18:14–22 — they remind Israel of its covenant obligations."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"Which theme says God will forgive and restore Israel if they repent?",a:"The fifth",w:["The first","The second","The fourth"],e:"Dt 30:1–10 — forgiveness and restoration after repentance."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"Under the fourth theme, where may sacrifices be offered?",a:"Only at the temple in Jerusalem",w:["At any altar in the promised land","On the high places of every tribe","Wherever a prophet happens to be"],e:"Dt 12:4–6 — one central place of worship."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"About when did David die?",a:"970 BC",w:["1010 BC","930 BC","722 BC"],e:"Then Solomon reigned 40 years."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"When did the northern kingdom fall?",a:"722 BC",w:["587 BC","930 BC","970 BC"],e:"To Assyria, the third sign of illness."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"When did the southern kingdom fall?",a:"587 BC",w:["722 BC","609 BC","966 BC"],e:"To Babylon, which leveled Jerusalem — the fourth sign."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"How long did Solomon reign before the nation divided?",a:"40 years",w:["7 years","20 years","33 years"],e:"From about 970 to 930 BC."},
 {tp:"s5",sec:"g5-themes",t:"mc",q:"About how much time passes in 1 and 2 Kings?",a:"Almost four centuries",w:["About one century","Almost two centuries","About forty years"],e:"From David’s death, about 970 BC, to the fall of Jerusalem in 587."},
 {tp:"s5",sec:"g5-themes",t:"tf",q:"The dates 722 and 587 BC matter for the rest of the Old Testament, because the prophets announce, experience or comment on those events.",a:true,e:"True — and most of the Writings relate to David, Solomon, or the nation’s fall or rebuilding."},
 {tp:"s5",sec:"g5-themes",t:"tf",q:"The themes of 1 and 2 Kings are brand new ideas that appear nowhere earlier in the Bible.",a:false,e:"False — they also appear in Joshua, Judges and Samuel, so readers find familiar concepts."},
 {tp:"s5",sec:"g5-themes",ap:true,t:"mc",q:"A king builds altars to foreign gods, and soon prophets warn him to turn back or face judgment. Which two themes are at work?",a:"Obey the covenant; prophets preach repentance",w:["The temple is built; God lives with His people","God forgives; Israel stands at its midpoint","God rules history; the kings follow Dt 30"],e:"Idolatry breaks the covenant; prophets call the nation to repent."},

 {tp:"s5",sec:"g5-throne",t:"mc",q:"Which request does David make of Solomon in 1 Kings 2:7?",a:"To reward some old friends",w:["To build the temple at once","To make peace with Egypt","To spare the life of Joab"],e:"Solomon must learn to trust God, distrust his enemies and honor his allies."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"Next to Abraham and Moses, who is the most influential person in the Old Testament?",a:"David",w:["Solomon","Samuel","Elijah"],e:"An imperfect ruler who achieved something of a political miracle."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"What request cost Adonijah his life?",a:"To marry Abishag, David’s last concubine",w:["To take command of the army of Israel","To be crowned king of the ten northern tribes","To build a palace of his own in Jerusalem"],e:"Whoever possesses the harem rules the land (2:13–25)."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"Where did Joab run, hoping to be spared?",a:"To the tabernacle, for sanctuary",w:["To Egypt, for refuge with Pharaoh","To Hebron, to raise an army","To Tyre, to the court of Hiram"],e:"Solomon had him put to death anyway (2:28–35)."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"Why was Shimei executed?",a:"He had opposed David in Absalom’s revolt",w:["He had worshiped the gods of Pharaoh","He had stolen gold from the temple","He had tried to marry Abishag himself"],e:"2:36–46 — now Solomon had no rivals left."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"What did Solomon ask God for?",a:"Wisdom to rule the people",w:["A long life and many sons","Victory over Egypt","Riches and fame"],e:"He knew he was young and inexperienced; God added riches and fame (3:10–14)."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"Which two early actions lead to greater problems later?",a:"Marrying Pharaoh’s daughter; sacrificing outside Jerusalem",w:["Executing Adonijah; banishing the priests from Jerusalem","Building the palace; refusing to listen to the prophets","Rewarding David’s friends; trading with the Phoenicians"],e:"3:1–3 — exceptions to following David’s spiritual counsel."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"Which pharaoh may have given Solomon a key city?",a:"Siamun",w:["Shishak","Ramesses","Necho"],e:"A pharaoh destroyed Gezer and gave it as a dowry (1 Kings 9:15–16)."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"What did excavations at Tel Gezer uncover?",a:"The destruction under the Solomonic casemate wall",w:["The foundation stones of Solomon’s first temple","A royal letter from Hiram, the king of Tyre","The tomb of Pharaoh’s daughter, Solomon’s wife"],e:"It fits 1 Kings 9:15–16."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"Which three royal cities did Solomon rebuild with matching gates?",a:"Gezer, Megiddo and Hazor",w:["Hebron, Gibeah and Shiloh","Tyre, Sidon and Gath","Bethel, Dan and Samaria"],e:"Each with a six-chambered gate of the same size and style."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"Why did Solomon marry the daughters of foreign kings?",a:"To forge strong international relationships",w:["To fulfill the command in Dt 17:17","To convert their nations to Yahweh","To end the war with the Philistines"],e:"His foreign policy — the Egyptian princess fits it."},
 {tp:"s5",sec:"g5-throne",t:"mc",q:"What do the textbook’s comparisons say about Solomon’s yearly gold income?",a:"It is not unusual next to other empires",w:["It is impossible for any ancient king","It is far larger than Egypt’s or Persia’s","It is unknown, since no one recorded it"],e:"Compared with Egypt, Assyria, Babylon and Persia."},
 {tp:"s5",sec:"g5-throne",t:"tf",q:"Solomon’s excesses wearied the Israelites of forced labor and taxes, setting the stage for the divided monarchy.",a:true,e:"True — from the “For Greater Historical Understanding” box."},
 {tp:"s5",sec:"g5-throne",t:"tf",q:"God gave Solomon wisdom but refused to make him rich.",a:false,e:"False — God also promised to make the king rich and famous (3:10–14)."},
 {tp:"s5",sec:"g5-throne",ap:true,t:"mc",q:"A new king spares his brother — until the brother asks for the old king’s concubine. Why is that request so dangerous?",a:"Whoever holds the harem rules the land",w:["She was promised to the new king’s son","Concubines could never remarry by law","The prophet had forbidden the marriage"],e:"Adonijah and Abishag (2:13–25); compare 2 Sm 3:7 and 16:21–22."},

 {tp:"s5",sec:"g5-temple",t:"mc",q:"Who helped Solomon build the temple?",a:"Hiram, king of Tyre",w:["Siamun, king of Egypt","Achish, king of Gath","Hadadezer, king of Zobah"],e:"He supplied cedar and pine logs (5:1–12)."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"About how many men worked on the temple?",a:"Over 30,000",w:["About 3,000","Over 300,000","About 700"],e:"Conscripted “from all Israel” (5:13)."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"How long did the temple take to build?",a:"Seven years",w:["Thirteen years","Forty years","Four years"],e:"5:13–18; 6:38. His palace took 13."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"When did temple construction begin?",a:"About 966 BC, his fourth year",w:["About 970 BC, his first year","About 930 BC, his last year","About 1010 BC, under David"],e:"1 Kings 6:1 — the fourth year of Solomon’s reign."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"How big was Solomon’s temple?",a:"30 feet wide, 90 long, 45 high",w:["90 feet wide, 300 long, 45 high","30 feet wide, 45 long, 90 high","12 feet wide, 30 long, 15 high"],e:"Not very big — hundreds of modern churches are larger."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"What made the temple stunning?",a:"Its interior: cedar walls covered with gold",w:["Its size: the largest building of its age","Its towers: visible from every tribe","Its gates: six chambers of bronze"],e:"6:14–35 — and utensils of precious metals."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"How did Yahweh show approval of the temple?",a:"He sent a cloud of glory",w:["He sent fire on the city","He spoke from the ark","He sent rain after drought"],e:"8:10–12 — as when the tabernacle was finished (Exodus 40:34–38)."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"What did the ark of the covenant hold?",a:"Moses’ tablets",w:["Solomon’s crown","David’s harp","Goliath’s sword"],e:"Solomon brought it into the temple (8:1–9)."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"On the drawing, what are Boaz and Jachin?",a:"The two bronze pillars",w:["The two golden lampstands","The two altars of incense","The two cherubim of gold"],e:"They stand at the temple entrance."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"On the drawing, what does the bronze basin rest on?",a:"Four sets of oxen",w:["Twelve stone lions","Two bronze pillars","The sacrificial altar"],e:"It stands outside, in front of the temple."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"Why does the completed temple mean Israel stands at its midpoint?",a:"The struggle for land lies behind; exile lies ahead",w:["It was built halfway between the north and south","Solomon finished it in the middle of his reign","The ark was set halfway between two pillars"],e:"Never again will Israel have such a king, worship center, influence or peace."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"Which of these is one of the five themes of the temple’s completion?",a:"Israel can have sins forgiven by sacrificing here",w:["Israel no longer needs prophets or priests","Israel’s kings may now offer sacrifices anywhere","Israel will never again face an enemy army"],e:"Also: the central place, David’s promises, God lives with the people, the midpoint."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"What did Solomon pray for most importantly at the dedication?",a:"That God forgive the people when they sin",w:["That God make Israel’s army undefeated","That God give him many more sons","That God bless the trade with Tyre"],e:"8:33–40, 46–53 — even bringing them back from exile."},
 {tp:"s5",sec:"g5-temple",t:"mc",q:"Solomon’s prayer shows he had which passages in mind?",a:"Deuteronomy 27–28 and 30",w:["Genesis 12 and 15","Exodus 20 and 24","1 Samuel 8 and 15"],e:"Curses for sin, exile, and restoration after repentance."},
 {tp:"s5",sec:"g5-temple",t:"tf",q:"God promised to do what Solomon asked only if the people obeyed the covenant.",a:true,e:"True — the condition comes with the promise (9:1–9)."},
 {tp:"s5",sec:"g5-temple",t:"tf",q:"Solomon’s prayer asked God to curse every foreigner who came to the temple.",a:false,e:"False — he asked God to bless the foreigner who accepts Israel’s God (8:41–43)."},
 {tp:"s5",sec:"g5-temple",ap:true,t:"mc",q:"Centuries before, Moses said God would choose one place for His name and all sacrifices. Which event fulfills it?",a:"Solomon’s temple in Jerusalem",w:["The ark’s stay at Shiloh","Jeroboam’s altars at Bethel","David’s tent for the ark"],e:"Dt 12:4–6 — the first theme of the temple’s completion."},

 {tp:"s5",sec:"g5-fall",t:"mc",q:"How long did Solomon’s own palace take to build?",a:"13 years",w:["7 years","40 years","4 years"],e:"Larger and probably more expensive than the temple (7:1–12)."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"How many wives and concubines did Solomon collect?",a:"700 wives and 300 concubines",w:["300 wives and 700 concubines","70 wives and 30 concubines","1,000 wives and no concubines"],e:"Many from idol-worshipping countries (11:1–3)."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"Which law did Solomon’s many marriages clearly violate?",a:"Deuteronomy 17:17",w:["Deuteronomy 12:4–6","Deuteronomy 30:1–10","Deuteronomy 4:32–40"],e:"Kings must not multiply wives."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"What did Solomon’s foreign wives eventually lead him to do?",a:"Worship their gods and build them shrines",w:["Move his whole court to Egypt and Tyre","Tear down the temple he had built","Banish the prophets from the land"],e:"11:4–9 — he no longer served God alone."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"What two things, together, led to Solomon’s downfall?",a:"Love of women and excessive wealth",w:["War with Egypt and a famine","Bad advisors and a weak army","Jeroboam’s revolt and Ahijah’s word"],e:"So God said the kingdom would be divided (11:11)."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"Why would Solomon’s descendants still rule part of the kingdom?",a:"Because of God’s promises to David",w:["Because Solomon repented before he died","Because Judah had the strongest army","Because Jeroboam refused the southern crown"],e:"And Yahweh’s love for Israel (11:12–13)."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"Who was Solomon’s most significant foe?",a:"Jeroboam, one of his officials",w:["Hiram, the king of Tyre","Adonijah, his older brother","Hadadezer, king of Zobah"],e:"11:26–28 — later king of the ten northern tribes."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"Which prophet told Jeroboam he would rule ten tribes?",a:"Ahijah",w:["Nathan","Elijah","Micaiah"],e:"11:29–31 — as Samuel anointed David."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"In what way is Solomon like Saul at the end of his reign?",a:"Jealous, he tries to kill a young rival",w:["He consults a medium before a battle","He falls on his own sword in defeat","He spares an enemy king against orders"],e:"Solomon tried, unsuccessfully, to kill Jeroboam (11:40)."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"What did the people ask of Rehoboam?",a:"Relief from taxes and forced labor",w:["A new temple for the north","War against Egypt and Tyre","The return of the ark to Shiloh"],e:"Led by Jeroboam (12:2–4)."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"How did Rehoboam answer the people?",a:"He threatened to be much harsher",w:["He cut the taxes by half at once","He asked Ahijah to decide for him","He gave the north to Jeroboam freely"],e:"12:5–15 — so the north followed Jeroboam."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"Which tribes stayed with Rehoboam?",a:"Judah and Benjamin",w:["Judah and Ephraim","Benjamin and Dan","Levi and Simeon"],e:"All the rest followed Jeroboam (12:16–21)."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"After the split, the two kingdoms had two kings, two capitals and:",a:"Two religions",w:["Two languages","Two temples to Yahweh","Two arks"],e:"Until 2 Kings 17 — yet both were headed for destruction."},
 {tp:"s5",sec:"g5-fall",t:"mc",q:"Which part of the books tells only the southern kingdom’s story?",a:"2 Kings 18–25",w:["1 Kings 1–11","1 Kings 12–22","2 Kings 1–10"],e:"Most of 1 Kings 12:25–2 Kings 10:36 is the north."},
 {tp:"s5",sec:"g5-fall",t:"tf",q:"Like his father, Solomon never committed idolatry.",a:false,e:"False — David never did, whatever his faults; Solomon served other gods."},
 {tp:"s5",sec:"g5-fall",t:"tf",q:"Rehoboam never became wise, rich or powerful, and could not reunite the nation.",a:true,e:"True — 14:21–31, in contrast to his father."},
 {tp:"s5",sec:"g5-fall",ap:true,t:"mc",q:"A ruler is famous for wisdom and even writes proverbs, yet abandons the covenant late in life. Whom does the textbook describe?",a:"Solomon",w:["David","Rehoboam","Jeroboam"],e:"He foolishly forsook the covenant, the nation, and the monarchy’s governing document."},
 {tp:"s5",sec:"g5-fall",ap:true,t:"mc",q:"A new king tells overworked people he will be harsher than his father, and most of the country walks away. Which event is this?",a:"The kingdom splits under Rehoboam",w:["Absalom drives David from Jerusalem","Sheba leads the tribes away from David","Israel asks Samuel to give them a king"],e:"1 Kings 12 — just as Ahijah had said."},

 {tp:"s5",sec:"g5-kings",t:"mc",q:"Who was the first king of the northern kingdom?",a:"Jeroboam I",w:["Omri","Jehu","Nadab"],e:"Jeroboam I reigned 930–909 BC."},
 {tp:"s5",sec:"g5-kings",t:"mc",q:"Who was the last king of the northern kingdom?",a:"Hoshea",w:["Pekah","Menahem","Jeroboam II"],e:"732–722 BC — a usurper; the north fell in 722."},
 {tp:"s5",sec:"g5-kings",t:"mc",q:"Who was the last king of Judah?",a:"Zedekiah",w:["Josiah","Jehoiakim","Hezekiah"],e:"597–587 BC — the south fell in 587."},
 {tp:"s5",sec:"g5-kings",t:"mc",q:"Which northern king reigned only seven days?",a:"Zimri",w:["Shallum","Tibni","Zechariah"],e:"885 BC; Shallum reigned one month, Zechariah six months."},
 {tp:"s5",sec:"g5-kings",t:"mc",q:"Which northern usurper was anointed by God?",a:"Jehu",w:["Baasha","Omri","Hoshea"],e:"Jehu reigned 841–814 BC, a usurper anointed by God."},
 {tp:"s5",sec:"g5-kings",t:"mc",q:"Who was Athaliah?",a:"Ahaziah’s mother, Ahab’s daughter",w:["Solomon’s Egyptian wife","Ahab’s wife from Sidon","Rehoboam’s mother"],e:"She ruled Judah 841–835 BC."},
 {tp:"s5",sec:"g5-kings",t:"mc",q:"What does the chart call the line of Judah’s kings?",a:"The Davidic dynasty",w:["The dynasty of Omri","The house of Saul","The house of Jeroboam"],e:"The north went through several dynasties."},
 {tp:"s5",sec:"g5-kings",t:"mc",q:"In what year do both kingdoms’ lists begin?",a:"930 BC",w:["970 BC","1010 BC","722 BC"],e:"Rehoboam in the south, Jeroboam I in the north."},
 {tp:"s5",sec:"g5-kings",t:"tf",q:"Many kings of the north were usurpers who seized the throne.",a:true,e:"True — Baasha, Zimri, Jehu, Shallum, Menahem, Pekah and Hoshea are all marked “usurper”."},
 {tp:"s5",sec:"g5-kings",t:"tf",q:"The dates in the king lists are exact to the year.",a:false,e:"False — the charts note that all dates are approximate."},
 {tp:"s5",sec:"g5-kings",ap:true,t:"mc",q:"A chart shows two kings ruling at once for a few years, father and son. What does the textbook call that?",a:"A coregency",w:["A usurpation","A dynasty","A civil war"],e:"For example Asa with Jehoshaphat, 872–869 BC."}
]);
