const fs = require('fs');
const vm = require('vm');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

let fails = 0, checks = 0;
function ok(cond, label, detail) { checks++; if (!cond) { fails++; console.log('  FAIL  ' + label + (detail !== undefined ? '  -> ' + detail : '')); } }
function head(t) { console.log('\n== ' + t + ' =='); }

// ---------- load ----------
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log('NO SCRIPT'); process.exit(1); }
const src = m[1];
try { new vm.Script(src); } catch (e) { console.log('JS PARSE ERROR: ' + e.message); process.exit(1); }
const sandbox = { module: { exports: {} }, console };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const A = sandbox.module.exports;
console.log('script parsed and loaded, exports: ' + Object.keys(A).length);
const tps = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
const body = tp => A.CH[tp].notes.map(n => n.body).join(' ');
const allBodies = tps.map(body).join(' ');
const anchorExists = id => tps.some(tp => A.CH[tp].notes.some(n => n.id === id)) || allBodies.includes('id="' + id + '"');
const strip = s => String(s).replace(/<[^>]+>/g, '');

// ---------- 1. the course and its guide ----------
head('the course and the parts of the chapter');
ok(/Old Testament/.test(A.COURSE.code) && /Cedarville/.test(A.COURSE.term) && /1 and 2 Samuel/.test(A.COURSE.exam), 'course, place and chapters');
ok(A.COURSE.rules.length === 5 && /1&ndash;7/.test(A.COURSE.rules[0]) && /2 Samuel/.test(A.COURSE.rules[0]) && /2 Samuel 7/.test(A.COURSE.rules[1]) && /1 Samuel 15/.test(A.COURSE.rules[2]), 'the study notes: how the books divide, 2 Samuel 7, chapter 15, numbers, enemies');
ok(/2 Samuel/.test(A.COURSE.exam), 'the header names 2 Samuel');
ok(A.GUIDE.sections.length === 7 && A.GUIDE.sections.map(s => s.tp).join() === tps.join(), 'seven parts, in order');
const OUTLINES = {
  s1: ['The time and the man', 'Hannah and Samuel’s birth', 'Eli’s sons and God’s call', 'The ark lost and returned; Mizpah'],
  s2: ['Israel asks for a king', 'Saul’s kingdom and enemies', 'Saul chosen: the donkeys and three namings', 'Saul’s disobedience (1 Samuel 13–15)'],
  s3: ['David anointed; the Spirit leaves Saul', 'David and Goliath', 'Saul’s jealousy and David in flight', 'The medium, the Amalekites and Saul’s death'],
  s4: ['David mourns Saul; the long road to the throne', 'All Israel: Jerusalem, the Philistines, the ark', 'God’s promise to David (2 Samuel 7)', 'David’s sin and its consequences (2 Samuel 11–19)', 'David’s last years; the conclusion (2 Samuel 20–24)'],
  s5: ['The story of 1 and 2 Kings: Israel dies as a nation', 'Five themes from Deuteronomy; the key dates', 'Solomon takes the throne (1 Kings 1–4)', 'The temple (1 Kings 5–9)', 'Solomon’s fall and the kingdom split (1 Kings 9–14)', 'The kings of Israel (north) and Judah (south)'],
  s6: ['Omri, Ahab and Elijah (1 Kings 16–19)', 'Ahab’s end: Syria, the field and Micaiah (1 Kings 20–22)', 'Elisha and Jehu’s revolt (2 Kings 1–10)', 'The fall of northern Israel (2 Kings 11–17)', 'Hezekiah, Manasseh and Josiah (2 Kings 18–23)', 'The fall of Jerusalem and the conclusion (2 Kings 23–25)'],
  s7: ['Isaiah’s day and the book’s unity', 'Sin and the Messiah (Isaiah 1–12)', 'Sin and the nations (Isaiah 13–27)', 'Sin and the fall of Israel (Isaiah 28–35)', 'Jerusalem’s reprieve (Isaiah 36–39)', 'Salvation and the servant of God (Isaiah 40–55)', 'Future glory for God’s people (Isaiah 56–66); the conclusion'] };
A.GUIDE.sections.forEach(s => {
  ok(JSON.stringify(s.items.map(i => i.t)) === JSON.stringify(OUTLINES[s.tp]), 'guide items follow the notes for ' + s.tp, s.items.map(i => i.t).join(' | '));
  s.items.forEach(it => {
    ok(it.short && it.short.length > 60, 'item has a one-breath answer: ' + it.t);
    ok(A.CH[s.tp].notes.some(n => n.id === it.a), 'item points at a note section: ' + it.t, it.a);
    ok(it.subs.length >= 1 && it.subs.every(sb => sb[0] && anchorExists(sb[1])), 'every subsection anchor exists: ' + it.t, it.subs.map(sb => sb[1]).join(','));
  });
});
const items = A.GUIDE.sections.flatMap(s => s.items);
ok(items.length === 36 && new Set(items.map(i => i.id)).size === 36, 'thirty-six sections, unique ids', items.length);
ok(Object.keys(A.SEC_CHAPTER).length === 36, 'the engine knows all thirty-six');

// ---------- 2. the lessons ----------
head('2 Samuel, from the textbook');
['Amalekite', 'executed', 'lament', 'Ish-bosheth', 'man of shame', 'Abner', 'Joab', 'royal harem', 'decapitate', '1010–970 BC', 'Cherethites and Perethites', 'Ittai',
 'all 12 tribes', 'Jebusite', '12 acres', 'Eilat Mazar', 'Hebron', 'Mahanaim', 'Ziklag', 'Hadadezer', 'Jonathan',
 'Nathan', 'ark sits in a tent', 'forever', 'Messiah', 'Psalm 110', 'Matthew 1–2', 'heir, covenant, land',
 'Bathsheba', 'Uriah', 'Dt 17:17', 'Ex 20:13–14', 'parable', 'broad daylight', 'Solomon', 'Amnon', 'Tamar', 'Absalom', 'Hushai', 'lest the army desert him',
 'Sheba', 'census', 'plague', 'threshing floor', 'leadership crisis', 'great new era'].forEach(v => ok(strip(body('s4')).includes(v), '2 Samuel notes include: ' + v));
ok(!/rich man|only lamb|Amasa/.test(JSON.stringify(A.CH.s4) + JSON.stringify(A.QB.filter(q => q.tp === 's4'))), 'nothing beyond the textbook pages (no names the book did not give)');
ok(A.QB.filter(q => q.tp === 's4').length >= 60, 'plenty of 2 Samuel questions', A.QB.filter(q => q.tp === 's4').length);

head('1 and 2 Kings, from the textbook');
['death of Israel as a nation', 'accelerates or slows', 'Idols', 'The kingdom splits', 'Assyria destroys Northern Israel', 'levels Jerusalem', 'over two hundred years',
 'Rehoboam and Jeroboam', 'new religion', 'Ahab and Jezebel', 'Hezekiah, Josiah', 'Elijah and Elisha', 'Ahijah', 'Micaiah', 'never silenced', '2 Kings 17:23', 'Deuteronomy 27–28',
 'Dt 17:14–20', 'Dt 4:32–40', 'Dt 18:14–22', 'Dt 12:4–6', 'Dt 30:1–10', 'four centuries', '970 BC', '40 years', '722 BC', '587 BC', 'Writings',
 'reward some old friends', 'Abraham and Moses', 'Adonijah', 'Abishag', 'sanctuary', 'Shimei', 'young and inexperienced', 'rich and famous', 'botany and biology',
 'Siamun', 'Gezer', 'casemate wall', 'Megiddo and Hazor', 'six-chambered gate', 'forced labor and taxes',
 'Hiram, king of Tyre', '30,000', 'seven years', '966 BC', '30 feet wide, 90 feet long, 45 feet high', 'cloud of glory', 'Exodus 40:34–38', 'Boaz and Jachin', 'four sets of oxen', 'shewbread', 'midpoint',
 '13 years', '700 wives and 300 concubines', 'Deuteronomy 17:17', 'broken the covenant', 'Jeroboam', '10 tribes', 'Judah and Benjamin', 'two kings, two capitals and two religions', '2 Kings 18–25',
 'Hoshea', 'Zedekiah', 'Zimri', 'anointed by God', 'Athaliah', 'Davidic dynasty', 'approximate'].forEach(v => ok(strip(body('s5')).includes(v), '1 and 2 Kings notes include: ' + v));
ok(A.KINGS_NORTH.length === 22 && A.KINGS_NORTH[0][0] === 'Jeroboam I' && A.KINGS_NORTH[21].join() === 'Hoshea (usurper),732–722', 'the northern chart, first to last');
ok(A.KINGS_SOUTH.length === 26 && A.KINGS_SOUTH[0].join() === 'Rehoboam,930–913' && A.KINGS_SOUTH[25].join() === 'Zedekiah,597–587', 'the southern chart, first to last');
ok(A.KINGS_NORTH.filter(k => /usurper/.test(k[0])).length === 7, 'seven northern usurpers, as on the chart');
ok(!/Rehoboam’s mother|Jezebel was|Naboth|Carmel|Shunammite|Queen of Sheba/.test(JSON.stringify(A.CH.s5)), 'the notes stay inside the textbook pages');
ok(A.QB.filter(q => q.tp === 's5').length >= 60, 'plenty of 1 and 2 Kings questions', A.QB.filter(q => q.tp === 's5').length);

head('1 and 2 Kings part two, from the textbook');
['Jeroboam’s illegitimate religion', 'Jezebel of Tyre', 'Qarqar in 853 BC', '2,000 chariots', 'Arameans', 'no rain', 'widow', 'Dt 18:14–22', 'troubler of Israel', 'Mount Carmel', '450 prophets of Baal', 'soaked with water three times', 'the Lord is God', 'cave', 'Hazael', 'Jehu', 'Elisha',
 'Ben-Hadad', 'Saul', '12 tribes', 'dogs will lick up their blood', 'postpones', 'Four hundred false prophets', 'Micaiah', 'disguises himself', 'high places',
 'chariot of fire', 'double portion', 'ax head float', 'Naaman', '841 BC', 'Joram', 'Ahaziah', 'priests of Baal', 'Seven decades', 'Mesha of Moab', 'Chemosh', 'Athaliah', 'Jehoiada', 'house of David', 'Shalmaneser III stele', 'Jeroboam II', 'Uzziah',
 'sins of the house of Jeroboam', 'Menahem', '740 BC', 'Tiglath-pileser III', 'Pekahiah', 'Pekah', 'Leviticus 26', 'Hoshea', 'Shalmaneser V', 'Sargon', '722 BC', 'Idolatry', 'Pagan religious rites', 'Lord of history', 'Joash', 'Amaziah', 'Ahaz', 'Rezin of Damascus', 'Immanuel', 'vassal', 'Ashurbanipal',
 'Hezekiah', '701 BC', 'Isaiah', 'God’s honor', 'Sennacherib', '185,000', 'shows them everything', 'Manasseh', '55 years', 'eight-year-old', 'the Book of the Law', 'Huldah', 'covenant renewal', 'Jeroboam’s old altar', 'Passover', 'greatest reformer', '612 BC', '609 BC',
 'Jehoahaz', 'Jehoiakim', 'Jehoiachin', 'Zedekiah', 'political suicide', 'eyes gouged out', 'looted and burned', 'Neco II', 'Nebuchadnezzar', 'Carchemish', '605 BC', 'Daniel', '597 BC', 'Ezekiel', '587 BC', 'a remnant remained', 'Cyrus', '539 BC', 'Tyre', 'Edomites and Philistines', 'Thirty-seven years', 'eternal kingdom', 'Promise, fulfillment, despair and hope'].forEach(v => ok(strip(body('s6')).includes(v), 'Kings part two notes include: ' + v));
ok((body('s6').match(/class="exam-tip"/g) || []).length === 4, 'the four history boxes of pages 156–171');
ok(!/<div class="exam-tip">(?:(?!<\/div>)[\s\S])*<\/b>(?:(?!<\/div>)[\s\S])*<b>/.test(body('s6')), 'inside a history box only the label uses <b>');
ok(!/Naboth’s vineyard|still small voice|Shunammite woman|Gehazi|Rabshakeh|Josiah’s mother/.test(JSON.stringify(A.CH.s6) + JSON.stringify(A.QB.filter(q => q.tp === 's6'))), 'nothing beyond the textbook pages');
ok(A.QB.filter(q => q.tp === 's6').length >= 85, 'plenty of questions on the second half of Kings', A.QB.filter(q => q.tp === 's6').length);

head('Isaiah, from the textbook');
['742 to 538 BC', '2 Kings 16–20', 'nineteenth century', 'about 740–700 BC', 'about 550–500 BC', 'unity of Isaiah', 'as a unity', 'unified message', '740 BC to 687 BC', 'Jotham (740–731 BC)', 'Ahaz (731–715 BC)', 'Hezekiah (715–687 BC)', 'Tiglath-pileser III’s reign (745–727 BC)', 'Pekah, son of Remaliah', 'Rezin, king of Damascus', '120,000', 'Syro-Ephraimitic Crisis (735–734 BC)', 'vassal', 'Hoshea', 'Shalmaneser V', 'Haran', 'Samaritans', 'Immanuel', 'Maher-Shalal-Hash-Baz', 'Shear-Jashub', 'naked and barefoot',
 'Sodom and Gomorrah', 'three courses of action', 'the remnant', 'Warning always precedes punishment', 'Holy, holy, holy', '2 Samuel 7:1–17', 'Matthew 1:22–23', 'Elath',
 'accountable to God', 'Hammurabi (1792–1750 BC)', '587 BC', '612 BC', 'heap of ruins', 'Egypt and Assyria will worship Yahweh together', 'the entire world', 'swallow up death forever', '1 Corinthians 15',
 'only real ally now is the Lord', 'Six times', 'covenant with death', 'pro-Egypt alliance', 'stubborn children', 'Samaria’s mistakes',
 '701 BC', '185,000', 'Sennacherib', 'Jr 7:1–15', 'Siloam Tunnel Inscription', 'Gihon', 'like a bird in a cage', '15 more years', 'Merodach-Baladan II', 'hollow log', 'Tirhakah', 'Lachish and Libnah', 'transition',
 'from the east', 'Cyrus the Great', '539 BC', 'Bernhard Duhm', 'four major “servant songs,”', 'light to the Gentiles', 'never opens his mouth', 'Matthew 12:15–21', 'Ethiopian eunuch', 'alongside thieves', 'foundation for their teachings on the cross',
 'holy mountain', 'There is no peace … for the wicked', 'radiant bride', 'recreated heaven and Earth', 'Genesis 3:1–20', 'new earth', 'Latter Prophets', 'the destruction of Jerusalem itself'].forEach(v => ok(strip(body('s7')).includes(v), 'Isaiah notes include: ' + v));
ok((body('s7').match(/class="exam-tip"/g) || []).length === 2, 'the two history boxes of pages 179–195');
ok(!/<div class="exam-tip">(?:(?!<\/div>)[\s\S])*<\/b>(?:(?!<\/div>)[\s\S])*<b>/.test(body('s7')), 'inside an Isaiah history box only the label uses <b>');
ok(!/Deutero-Isaiah|Trito-Isaiah|Shebna|Eliakim|Leviathan|Molech/.test(JSON.stringify(A.CH.s7) + JSON.stringify(A.QB.filter(q => q.tp === 's7'))), 'Isaiah stays inside the textbook pages');
ok(A.QB.filter(q => q.tp === 's7').length >= 100, 'plenty of Isaiah questions', A.QB.filter(q => q.tp === 's7').length);

head('lessons');
const noteIds = [];
tps.forEach(tp => {
  const c = A.CH[tp];
  ok(c.n && c.title && c.short, 'lesson header: ' + tp);
  const want = OUTLINES[tp];
  ok(c.notes.length === want.length && c.notes.map(n => n.h).join('|') === want.join('|'), 'note sections carry the outline headings: ' + tp, c.notes.map(n => n.h).join(' | '));
  c.notes.forEach(n => {
    ok(n.id.indexOf(tp + '-') === 0, 'note id prefixed: ' + n.id); noteIds.push(n.id);
    ok(n.body.length > 300, 'note has substance: ' + n.h, n.body.length);
    ok(n.body.indexOf('<div class="point"><b>The point</b>') === 0, 'section opens with “The point”: ' + n.h);
    ok(/<p class="able"><b>Be able to<\/b>/.test(n.body), 'section says what to be able to do: ' + n.h);
    ok(/<mark>/.test(n.body), 'section has at least one green highlight: ' + n.h);
  });
  ok(c.decks.length === 2 && c.decks.every(d => d.id && d.label && d.match !== false && d.cards.length >= 8), 'two decks with cards in play: ' + tp, c.decks.map(d => d.cards.length).join(','));
  c.decks.forEach(d => {
    ok(d.cards.every(x => x.length === 3 && x[0] && x[1] && A.SEC_CHAPTER[x[2]] === tp), 'every card has front, back and a section of its lesson: ' + tp + '/' + d.id);
    ok(new Set(d.cards.map(x => x[0])).size === d.cards.length, 'card fronts unique: ' + tp + '/' + d.id);
  });
  ok(A.PAIRSETS[tp].pairs.length >= 20, 'enough pairs to match: ' + tp, A.PAIRSETS[tp].pairs.length);
  ok(new Set(A.PAIRSETS[tp].pairs.map(p => p[1])).size === A.PAIRSETS[tp].pairs.length, 'pair meanings unique: ' + tp);
});
ok(new Set(noteIds).size === noteIds.length, 'note ids unique across lessons');
const subIds = [...new Set((allBodies.match(/ id="([a-z0-9-]+)"/g) || []).map(s => s.slice(5, -1)))];
ok(new Set(subIds.concat(noteIds)).size === subIds.length + noteIds.length, 'subsection ids do not collide with section ids');
// what the notes name outright
['1070–970 BC', '20 years', '40 years', '1010 BC', 'prophet, priest and judge', 'flexibility, piety and zeal', 'Isaac, Moses and Samson', 'Hannah', 'Shiloh', 'drunk',
 'meat from the sacrifices', 'three times', '30,000', 'breaks his neck', 'Dagon', 'hands are severed', 'mice and tumors', 'Mizpah', 'Twenty years later'].forEach(v => ok(body('s1').includes(v), 'Samuel: ' + v));
['bribes', 'theocracy', 'did not need', 'sons and daughters', 'court', 'Tax', 'Philistines', 'Ammonites', 'Amalekites', 'Edomites', 'kings of Zobah', 'five cities', 'Beth Shean',
 'Jerusalem', 'Gibeon', 'Gibeah', 'Tell el-Ful', 'Kish', 'donkeys', 'Benjamin', 'pours oil', 'hides', 'Gilgal', 'Samuel was late', 'none of Saul’s sons', 'Agag', 'obedience more than sacrifices', 'power is his god'].forEach(v => ok(body('s2').includes(v), 'Saul: ' + v));
['Bethlehem', 'Jesse', 'Eliab', 'looks at the heart', '16:14', 'not a demon', 'music soothes', 'common word for <b>bad</b>', 'God rules history', 'musician', 'nine feet tall', 'weaver’s rod',
 'five smooth stones', 'forehead', 'Aren Maeir', 'Tell es-Safi', '50 years after', 'hundred Philistines', 'Jonathan', 'courage, humility and loyalty', 'acts like a madman', 'Achish', 'Twice',
 'medium', 'surprised', 'Amalekites', 'falls on his own sword', 'the war, the king, and his heirs', 'jealous, vengeful and petty'].forEach(v => ok(body('s3').includes(v), 'David and Saul: ' + v));
ok(!/Holiath|Ssaul|gight|fites/.test(allBodies), 'the notes’ typos are not copied onto the page');
ok(!/Whitmore|Plate Tectonics|St\. Helens|volcano/i.test(html), 'nothing left over from the earth science page');
ok(/--gold:#557a55/.test(html) && /--rose-wash:#eef4e7/.test(html), 'the accent is a sage green');
ok(!/Kotler|Quizlet|marketing mix|four Ps/i.test(html), 'nothing left over from the marketing page');

// ---------- 3. every question belongs to a section ----------
head('every question belongs to a section');
for (let i = 0; i < A.QB.length; i++) ok(A.QB[i] && typeof A.QB[i] === 'object', 'no empty slot in the question list at #' + i);
A.QB.forEach((q, i) => ok(q.sec && A.SEC_CHAPTER[q.sec] === q.tp, 'question #' + i + ' carries a section of its own lesson', q.sec + ' / ' + strip(q.q).slice(0, 60)));
Object.keys(A.SEC_CHAPTER).forEach(id => {
  const n = A.QB.filter(q => q.sec === id).length;
  ok(n >= 4, 'at least four questions for “' + A.SEC_TITLES[id] + '”', n);
  ok(A.CH[A.SEC_CHAPTER[id]].decks.some(d => d.cards.some(c => c[2] === id)), 'at least one flashcard for “' + A.SEC_TITLES[id] + '”');
});
tps.forEach(tp => {
  const mine = A.QB.filter(q => q.tp === tp);
  ok(mine.filter(q => q.ap).length >= 1, 'application questions on ' + tp, mine.filter(q => q.ap).length);
  ok(mine.filter(q => q.t === 'tf').length >= 2, 'true/false on ' + tp, mine.filter(q => q.t === 'tf').length);
});
console.log('  questions per section: ' + Object.keys(A.SEC_CHAPTER).map(id => id.replace(/^g/, '') + '=' + A.QB.filter(q => q.sec === id).length).join(' '));

// ---------- 4. question bank ----------
head('question bank');
A.QB.forEach((q, i) => {
  ok(tps.includes(q.tp), 'known lesson #' + i);
  ok(q.q && q.e && strip(q.e).length >= 20, 'question and a real explanation #' + i, strip(q.q).slice(0, 50) + ' || ' + q.e);
  if (q.t === 'mc') {
    ok(q.w.length === 3, 'three wrong answers #' + i, q.q);
    ok(!q.w.includes(q.a), 'right answer not among the wrong #' + i, q.q);
    ok(new Set([q.a].concat(q.w)).size === 4, 'four distinct options #' + i, q.q);
  } else ok(q.t === 'tf' && typeof q.a === 'boolean', 'true/false has a boolean answer #' + i);
});
ok(new Set(A.QB.map(q => q.q)).size === A.QB.length, 'no duplicate questions');
// an exam asks about the earth, not about where things sat on a slide
const META = /means the same thing|which pair of names|is another name for|two namings|sits at the center|in figure \d|on the slide, which/i;
A.QB.forEach((q, i) => ok(!META.test(q.q), 'question #' + i + ' asks a concept, not the page’s own wording', q.q));
A.QB.filter(q => q.t === 'tf').forEach((q, i) => {
  const rest = String(q.e).replace(/^(True|False)\s*[—-]\s*/, '');
  const stem = new Set(strip(q.q).toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(x => x.length > 4));
  const said = strip(rest).toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(x => x.length > 4);
  const echo = said.length ? said.filter(x => stem.has(x)).length / said.length : 0;
  ok(echo < 0.75, 'true/false #' + i + ' is not answered by its own wording', q.q + ' || ' + q.e);
});
console.log('  questions: ' + A.QB.length);

// ---------- 5. option length must not give the answer away ----------
head('option length is not a tell');
const mcq = A.QB.filter(q => q.t === 'mc');
const olen = s => strip(s).length;
const longestShare = mcq.filter(q => olen(q.a) > Math.max(...q.w.map(olen))).length / mcq.length;
const lenRatio = mcq.reduce((t, q) => t + olen(q.a) / (q.w.reduce((u, x) => u + olen(x), 0) / q.w.length), 0) / mcq.length;
ok(longestShare <= 0.40, 'the right answer is not usually the longest option', (longestShare * 100).toFixed(1) + '% (chance 25%)');
ok(lenRatio <= 1.20, 'the right answer is not much wordier than the wrong ones', lenRatio.toFixed(2) + ' (ideal 1.00)');
mcq.forEach((q, i) => ok(!(olen(q.a) > 60 && q.w.some(x => olen(x) < 20)), 'no throwaway distractor beside a long answer', q.q));
console.log('  right answer longest: ' + (longestShare * 100).toFixed(1) + '%   length ratio: ' + lenRatio.toFixed(2));

// ---------- 6. generators ----------
head('question generators (100 runs)');
const secs = Object.keys(A.SEC_CHAPTER);
for (let r = 0; r < 100; r++) {
  const tp = tps[r % tps.length];
  const qs = A.topicQuestions(tp, null, 10);
  ok(qs.length === 10, tp + ': ten questions', qs.length);
  ok(new Set(qs.map(q => q.key)).size === 10, tp + ': no repeats');
  ok(qs.every(q => q.tp === tp && q.sec && A.SEC_CHAPTER[q.sec] === tp), tp + ': all from this lesson, each with a section');
  ok(qs.every(q => q.opts && q.opts.filter(o => o.ok).length === 1), tp + ': one right option each');
  const means = qs.map(q => A.meaningOf(q));
  let clash = 0;
  for (let x = 0; x < means.length; x++) for (let y = x + 1; y < means.length; y++) if (A.sameThing(means[x], means[y])) clash++;
  ok(clash === 0, tp + ': no two questions asking the same thing', clash);
  const back = A.questionsByKeys(qs.map(q => q.key));
  ok(back.length === 10 && back.every((q, i) => q.key === qs[i].key), tp + ': questions rebuild from their keys');
  const n = [15, 25, 40, 60][r % 4];
  const mx = A.mockQuestions({ n: n, types: 'all' });
  ok(mx.length === n, 'exam of ' + n, mx.length);
  ok(new Set(mx.map(q => q.tp)).size === 7, 'exam spans all seven parts', [...new Set(mx.map(q => q.tp))].join(','));
  ok(A.mockQuestions({ n: 20, types: 'ap' }).every(q => q.ap), 'application-only exam');
  ok(A.mockQuestions({ n: 20, types: 'tf' }).every(q => q.kind === 'tf'), 'true/false-only exam');
  ok(A.mockQuestions({ n: 15, types: 'all', topics: [tp] }).every(q => q.tp === tp), 'one-lesson exam');
}
for (let r = 0; r < 40; r++) {
  const f = A.finalFifty(50);
  ok(f.length === 50, 'the fifty is fifty', f.length);
  ok(new Set(f.map(q => q.key)).size === 50, 'no repeated question in the fifty');
  const covered = new Set(f.map(q => q.sec));
  ok(covered.size === secs.length, 'the fifty covers every section of every outline', covered.size + '/' + secs.length);
  secs.forEach(s => ok(f.filter(q => q.sec === s).length >= 1, 'at least one on ' + A.SEC_TITLES[s], f.filter(q => q.sec === s).length));
  const means = f.map(q => A.meaningOf(q));
  let clash = 0;
  for (let x = 0; x < means.length; x++) for (let y = x + 1; y < means.length; y++) if (A.sameThing(means[x], means[y])) clash++;
  ok(clash === 0, 'no two questions in the fifty ask the same thing', clash);
}
tps.forEach(tp => {
  for (let r = 0; r < 20; r++) {
    const d = A.deckFor(tp, A.CH[tp].decks[0].id);
    ok(d.length === A.CH[tp].decks[0].cards.length && d.every(c => c.front && c.back && /In the notes · /.test(c.back)), tp + ': deck renders with its section on the back');
    const m = A.matchRound(tp, 6);
    ok(m.items.length === 6 && new Set(m.items.map(x => x.right)).size === 6, tp + ': match round of six');
  }
});

// ---------- 7. verdicts and wording ----------
head('verdicts');
ok(A.VERDICTS.length === 5 && A.VERDICTS[0].min === 100 && A.VERDICTS[4].min === 0, 'five verdict tiers');
const lines = A.VERDICTS.flatMap(v => v.t.concat([v.a])).join(' | ');
ok(!/cheeks|goat|bruh|cooked|twin|\bbro\b|\bchat\b|aura|npc|\bnah\b|ain.t|dawg|no cap|lock in|\bL\b|mid\./i.test(lines), 'no slang anywhere in the verdicts', lines);
ok(/<b>Correct\.<\/b>/.test(src) && /<b>Not this one\.<\/b>/.test(src), 'answer feedback is plain');

// ---------- 8. markup ----------
head('markup');
ok((html.match(/class="topic-btn"/g) || []).length === 10, 'ten tabs: midterm, guide, seven parts, practice quiz');

head('the midterm');
{
  const S = A.MID_ST, plain = S.map(s => A.midPlain(s.t)), x = s => String(s).replace(/<[^>]+>/g, '');
  ok(S.length === 30 && new Set(S.map(s => s.id)).size === 30, 'thirty statements (the guide prints number 12 twice)', S.length);
  ok(S.map(s => s.n).join() === '1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29', 'numbered as the study guide numbers them');
  ok(S.filter(s => s.grp === 't').length === 17 && S.filter(s => s.grp === 'f').length === 13 && S.findIndex(s => s.grp === 'f') === 17, 'seventeen on the Torah, thirteen on the Former Prophets, in his order');
  // his wording, word for word
  const guide = ['The horizon of the Pentateuch reaches from “the beginning” to the “end of days” kingdom ruled by the Lion of Judah, the seed of Abraham, the seed of the woman.',
    'Yahweh created mankind and blessed them on the land.', 'Sin issued in death and exile from the good land.', 'Yahweh has promised the defeat of the serpent through the seed of the woman.',
    'Yahweh promised blessing to Abraham’s descendants on the land and blessing to the nations through Abraham’s seed.',
    'Abraham believed and God credited it to him as righteousness. His life shows what it means to walk by faith.',
    'The stories of Genesis should be read with the backdrop of the Abrahamic covenant.',
    'Yahweh is the God who redeemed His people from Egypt in accordance with the promises He made to Abraham, Isaac, and Jacob.',
    'The law came because of disobedience, but also as protection.', 'The tabernacle was the means for restoring mankind’s lost fellowship with God.',
    'The Mosaic Covenant was a temporary covenant governing the relationship between Yahweh and Israel until the New Covenant would come. (Deuteronomy 30)',
    'The Pentateuch contrasts the life of faith and obedience before the law with lack of faith and disobedience after the law.',
    'In Leviticus, the holy God gave instructions that enabled Him to live among His chosen people and enabled His people to have fellowship with Him.',
    'Failure to obey by faith in the wilderness brought death, but the Lord’s desire to bless Israel was not frustrated. (Numbers)',
    'Salvation would come at the hands of an end-of-days king who would crush His enemies.',
    'Moses exhorted Israel to be faithful to the Lord and to the Mosaic Covenant so that she might go in and possess the Land. (Deuteronomy)',
    'The solution to humanity’s plight of wandering in the wilderness is his promised rest and blessing brought by the hands of an end-of-days king from the line of Judah who will rule over a people whose hearts have been prepared to believe in Him.',
    'Yahweh gave the land of Canaan to Israel through holy war in accordance with His promise to Abraham.', 'Israel dwelt in part of the land according to her faithful obedience to Yahweh.',
    'The failure of Israel during the period of the Judges demonstrated Israel’s need for a righteous human king.',
    'The people’s demand for a king like the nations was a rejection of God’s rule over them.',
    'Saul was rejected as king because he failed to listen to the words of the Lord through the prophet.',
    'David’s actions—particularly his treatment of Saul—demonstrated that he was a man after God’s own heart.', 'God promised to establish an eternal kingdom for David’s seed.',
    'Samuel and Kings paint a picture of the future King in the likeness of David (the warrior king) and Solomon (the wise king).',
    'Though Solomon ruled wisely and built the temple, his heart was not wholly devoted to the Lord and the kingdom was torn apart',
    'Solomon’s descent into false worship showed he was not the seed David had been promised.',
    'Jeroboam, the first king of Israel—the Northern Kingdom—immediately plunged the nation into idolatry at Bethel and Dan.',
    'Despite the long line of disobedient kings, the Lord patiently preserved Judah—the Southern Kingdom—because of the promises God made to David.',
    'Israel was exiled from the land by Assyria in 722 b.c.; Judah was exiled from the land by Babylon in 587/6 b.c. Both failed to believe and therefore remain allegiant to Yahweh.'];
  guide.forEach((g, i) => ok(plain[i] === g, 'statement ' + S[i].n + ' is word for word', plain[i]));
  // the blanks he uses on his own review slides
  const prof = { m1: 'kingdom,Lion,seed,Abraham,seed,woman', m2: 'created,blessed,land', m3: 'death,exile', m4: 'serpent,seed', m5: 'blessing,descendants,blessing,seed', m6: 'believed,righteousness,faith',
    m8: 'redeemed,Abraham,Isaac,Jacob', m9: 'law,disobedience,protection', m10: 'tabernacle,fellowship', m11: 'Mosaic,Covenant,New,Covenant,30', m12: 'faith,obedience,lack,of,faith,disobedience',
    m12b: 'Leviticus,holy', m13: 'obey,faith,bless', m15: 'exhorted,Mosaic,Covenant', m17: 'land,war,promise', m18: 'obedience', m19: 'failure,king' };
  S.forEach(s => { const b = A.midBlanks(s.t); ok(b.length >= 1 && b.length <= 6, s.id + ': one to six blanks', b.length);
    if (prof[s.id]) ok(s.p === 1 && b.join() === prof[s.id], s.id + ': the blanks are his', b.join()); else ok(!s.p, s.id + ': blanks marked as mine'); });
  S.forEach(s => ok(s.where.length >= 1 && s.where.every(w => w.length > 20) && s.why.length > 60 && s.bk, s.id + ': has where, why and a book'));
  const all = x(S.map(s => s.where.join(' ') + ' ' + s.why).join(' '));
  ['Genesis 49', 'Numbers 24', 'Deuteronomy 32–33', 'Genesis 3:15', 'Genesis 12:1–3', 'Genesis 15:6', '50:20', 'Exodus 6:2–8', '1446 BC', 'Exodus 32', 'Hebrews 8:2', 'Deuteronomy 30:6', 'Numbers 13–14', 'Numbers 20',
   'Nadab and Abihu', '19:2', 'Balaam', '24:17', '17:14–20', '18:15–22', '1406 BC', '21:43–45', 'Rahab', '21:25', 'Othniel', 'Samson', '13:1–15', '15:1–35', '2 Samuel 7', '2:1–10', '8:61', '11:4', '13:1–2', '23:15–16', 'Jehoiachin', '2 Kings 17', 'Dempster', 'Sailhamer'].forEach(k => ok(all.includes(k), 'the answers cite ' + k));
  // stay inside the slides: names the slides never give
  ok(!/Achan|Caleb’s daughter|Delilah|Bathsheba|Nathan|Absalom|Naboth|Jezebel|Nebuchadnezzar|Sennacherib|Goliath|Boaz|Eglon|Sisera|Barak/.test(all + A.MID_WHICH.map(w => w[0]).join(' ')), 'no names the slides do not give');
  const B = A.MID_BOOKS;
  ok(B.map(b => b.n).join() === 'Genesis,Exodus,Leviticus,Numbers,Deuteronomy,Joshua,Judges,Samuel,Kings', 'nine books in the order of the Hebrew Bible');
  ok(B.every(b => b.parts.length >= 2 && b.parts.every(p => p[0] && /\d/.test(p[1])) && b.more.length >= 2), 'every book has its structure');
  const str = k => A.midBook(k).parts.map(p => p[1]).join(' | ');
  ok(str('gen') === '1–11 | 12–50' && str('exo') === '1:1–15:21 | 15:22–18:27 | 19–40' && str('lev') === '1–7 | 8–10 | 11–16 | 17–27' && str('num') === '1–10 | 11–25 | 26–36' && str('jos') === '1–12 | 13–21 | 22–24'
    && str('jdg') === '1:1–3:6 | 3:7–16:31 | 17–21' && str('sam') === '1 Sam 1–7 | 1 Sam 8–15 | 1 Sam 16–2 Sam 20 | 2 Sam 21–24' && str('kgs') === '1 Kgs 1–11 | 1 Kgs 12–2 Kgs 17 | 2 Kgs 18–25'
    && str('deu') === '1:1–4:43 | 4:44–28:68 | 29:1–30:20 | 31:1–32:47 | 32:48–34:12', 'the structures match the slides');
  ok(A.MID_DATES.filter(d => d[2]).map(d => d[0]).join() === '1446 BC,722 BC,587/6 BC' && A.MID_DATES.length === 8, 'his three dates lead the list');
  ok(A.MID_TERMS.length >= 15 && A.MID_TERMS.filter(t => !t[2]).map(t => t[0]).join() === 'Canon,Jehovah,Imago Dei', 'the terms; three the slides only list are marked');
  const W = A.MID_WHICH, keys = new Set(B.map(b => b.k));
  ok(W.length >= 65 && W.every(w => keys.has(w[1])) && new Set(W.map(w => w[0])).size === W.length, 'which-book items: each has a real book, none twice', W.length);
  B.forEach(b => ok(W.filter(w => w[1] === b.k).length >= 6, b.n + ' has at least six items'));
  ok(W.some(w => w[0] === 'The ten plagues' && w[1] === 'exo'), 'his own example: the ten plagues are in Exodus');
  ok(W.every(w => !new RegExp('\\b' + A.midBook(w[1]).n + '\\b').test(w[0])), 'no item names its own book');
  for (let r = 0; r < 40; r++) A.midWhichRound(15).forEach(q => {
    ok(q.opts.length === 4 && new Set(q.opts).size === 4 && q.opts.includes(q.answer), 'a which-book question has four books, one right');
    const idx = k => B.findIndex(b => b.k === k);
    ok(q.opts.every(k => Math.abs(idx(k) - idx(q.answer)) <= 4), 'the wrong books are neighbours', q.opts.join());
    ok(q.opts.map(idx).join() === q.opts.map(idx).sort((a, b) => a - b).join(), 'books are listed in Bible order');
  });
  ok(new Set(A.midWhichRound(15).map(q => q.idx)).size === 15, 'a round never repeats an item');
  // ---- the quizzes
  const Q = A.MID_QB, bks = ['int', 'gen', 'exo', 'lev', 'num', 'deu', 'jos', 'jdg', 'sam', 'kgs'];
  ok(Q.length >= 170 && new Set(Q.map(q => q.q)).size === Q.length, 'the quiz bank: no question twice', Q.length);
  bks.forEach(k => ok(Q.filter(q => q.bk === k).length >= 10, A.MID_QNAMES[k] + ' has at least ten questions', Q.filter(q => q.bk === k).length));
  ok(Q.every(q => bks.includes(q.bk) && (q.t === 'mc' || q.t === 'tf') && q.q.length > 15 && q.e && q.e.length > 15), 'every question has a book, a kind and a reason');
  Q.filter(q => q.t === 'mc').forEach(q => {
    ok(q.w.length === 3 && new Set(q.w.concat([q.a])).size === 4, 'four different choices: ' + q.q.slice(0, 50));
    const lens = q.w.map(w => w.length), mx = Math.max(...lens);
    ok(q.a.length <= mx * 2.2 + 8, 'the right answer is not the long one: ' + q.q.slice(0, 50), q.a.length + ' vs ' + mx);
    ok(!/all of the above|none of the above/i.test(q.w.join(' ') + q.a), 'no “all of the above”');
  });
  const tf = Q.filter(q => q.t === 'tf'), tr = tf.filter(q => q.a === true).length;
  ok(tf.length >= 30 && tr / tf.length > 0.4 && tr / tf.length < 0.6, 'true/false is balanced', tr + ' of ' + tf.length);
  bks.forEach(k => { const m = Q.filter(q => q.bk === k && q.t === 'tf'); ok(m.some(q => q.a) && m.some(q => !q.a), A.MID_QNAMES[k] + ' has both a true and a false'); });
  ok(Q.filter(q => /^Fill in/.test(q.q)).length >= 3, 'some fill-in-the-blank questions');
  // spot-check the key against the slides
  const ans = re => { const q = Q.find(q => re.test(q.q)); return q ? q.a : undefined; };
  ok(ans(/date are you asked to remember for the exodus/) === '1446 BC' && ans(/exiled the Northern Kingdom, and when/) === 'Assyria, 722 BC' && ans(/first king of the Northern Kingdom\?/) === 'Jeroboam'
    && ans(/ideal pattern of a judge/) === 'Othniel' && ans(/Where is the Davidic covenant/) === '2 Samuel 7' && ans(/counted it to him as righteousness/) === 'Genesis 15:6'
    && ans(/Holiness Code\?/) === 'Leviticus 17–27' && ans(/law of the king/) === 'Deuteronomy 17:14–20' && ans(/What stops in Joshua 5:12/) === 'The manna' && ans(/Babylon exiled the Northern Kingdom/) === false
    && ans(/Samson is presented as the ideal/) === false && ans(/Rehoboam was the first king of the Northern/) === false && ans(/Joshua is the “second Moses”/) === false, 'the answer key matches the slides');
  for (let r = 0; r < 30; r++) {
    const all = A.midQuiz(25);
    ok(all.length === 25 && new Set(all.map(q => q.key)).size === 25 && new Set(all.map(q => q.bk)).size === 10, 'the whole-midterm quiz: 25 different questions, every book present');
    all.forEach(q => ok(q.opts.filter(o => o.ok).length === 1 && (q.kind === 'tf' ? q.opts.length === 2 : q.opts.length === 4), 'exactly one right choice'));
    bks.forEach(k => { const b = A.midQuiz(10, k); ok(b.length === 10 && b.every(q => q.bk === k) && new Set(b.map(q => q.key)).size === 10, 'a book quiz stays in its book'); });
  }
  ok(A.midQuiz(50).length === 50, 'the long one has fifty');
  const back = A.midByKeys(['mid:0', 'mid:5']); ok(back.length === 2 && back.every(q => /^mid:(0|5)$/.test(q.key)), 'missed questions can be practiced again');
  // ---- matching
  ok(A.MID_PAIRS.length === 5 && A.MID_PAIRS.every(s => s.pairs.length >= 8 && new Set(s.pairs.map(p => p[0])).size === s.pairs.length && new Set(s.pairs.map(p => p[1])).size === s.pairs.length), 'five matching sets, nothing repeated inside a set');
  for (let r = 0; r < 30; r++) { const m = A.midMatchRound(null, 6); ok(m.items.length === 6 && new Set(m.items.map(i => i.right)).size === 6 && m.leftTitle && m.rightTitle, 'a matching round has six pairs'); }
  ok(A.MID_PAIRS[1].pairs.some(p => p[0] === '1446 BC' && p[1] === 'The exodus') && A.MID_PAIRS[3].pairs.length === 9, 'the dates and the nine books are matching sets');
  ok(/id="topic-mid"/.test(html) && html.indexOf('data-topic="mid"') < html.indexOf('data-topic="guide"') && /open paper Bible/.test(html), 'the Midterm tab comes first and says the exam is open Bible');
}
['guide', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 'exam'].forEach(t => ok(html.includes('data-topic="' + t + '"') && html.includes('id="topic-' + t + '"'), 'tab and section: ' + t));
tps.forEach(tp => ['Notes', 'Cards', 'Match', 'Quiz'].forEach(s => ok(html.includes('id="' + tp + s + '"'), 'root exists: ' + tp + s)));
ok(/data-topic="mid"\s+aria-selected="true"/.test(html) && /data-topic="guide"\s+aria-selected="false"/.test(html), 'Midterm is the default tab');
ok(html.includes('id="flourish"') && html.includes('id="emblem"') && html.includes('class="emblem"'), 'ornaments and the earth emblem present');
ok(/--gold:#557a55/.test(html) && /--rose-wash:#eef4e7/.test(html), 'the sage green palette is in force');
ok(html.indexOf('--gold:#557a55') > html.indexOf('--gold:#9a7a44'), 'the green override comes after the gold base, so it wins');
ok(html.includes('rel="manifest"') && html.includes('sw.js') && fs.existsSync(path.join(ROOT, 'sw.js')) && fs.existsSync(path.join(ROOT, 'manifest.webmanifest')), 'PWA pieces: manifest and service worker');
ok(/"ot-v\d+"/.test(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8')), 'the service worker has its own cache name');
ok(/1 Samuel/.test(fs.readFileSync(path.join(ROOT, 'manifest.webmanifest'), 'utf8')), 'the manifest is this page’s');
ok(html.includes('og:image') && html.includes('/old-testament/preview.png'), 'link preview metadata');
ok(!/�/.test(html), 'no broken characters');
ok(!/licensed under|CC BY|Public Domain Mark|openverse/.test(html), 'no image-credit boilerplate leaked in from the slides');
console.log('  file size: ' + (html.length / 1024).toFixed(1) + ' KB');

console.log('\n' + (fails === 0 ? 'ALL ' + checks + ' CHECKS PASSED' : fails + ' FAILURES out of ' + checks + ' checks'));
process.exit(fails ? 1 : 0);
