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
const tps = ['s1', 's2', 's3', 's4', 's5'];
const body = tp => A.CH[tp].notes.map(n => n.body).join(' ');
const allBodies = tps.map(body).join(' ');
const anchorExists = id => tps.some(tp => A.CH[tp].notes.some(n => n.id === id)) || allBodies.includes('id="' + id + '"');
const strip = s => String(s).replace(/<[^>]+>/g, '');

// ---------- 1. the course and its guide ----------
head('the course and the parts of the chapter');
ok(/Old Testament/.test(A.COURSE.code) && /Cedarville/.test(A.COURSE.term) && /1 and 2 Samuel/.test(A.COURSE.exam), 'course, place and chapters');
ok(A.COURSE.rules.length === 5 && /1&ndash;7/.test(A.COURSE.rules[0]) && /2 Samuel/.test(A.COURSE.rules[0]) && /2 Samuel 7/.test(A.COURSE.rules[1]) && /1 Samuel 15/.test(A.COURSE.rules[2]), 'the study notes: how the books divide, 2 Samuel 7, chapter 15, numbers, enemies');
ok(/2 Samuel/.test(A.COURSE.exam), 'the header names 2 Samuel');
ok(A.GUIDE.sections.length === 5 && A.GUIDE.sections.map(s => s.tp).join() === tps.join(), 'five parts, in order');
const OUTLINES = {
  s1: ['The time and the man', 'Hannah and Samuel’s birth', 'Eli’s sons and God’s call', 'The ark lost and returned; Mizpah'],
  s2: ['Israel asks for a king', 'Saul’s kingdom and enemies', 'Saul chosen: the donkeys and three namings', 'Saul’s disobedience (1 Samuel 13–15)'],
  s3: ['David anointed; the Spirit leaves Saul', 'David and Goliath', 'Saul’s jealousy and David in flight', 'The medium, the Amalekites and Saul’s death'],
  s4: ['David mourns Saul; the long road to the throne', 'All Israel: Jerusalem, the Philistines, the ark', 'God’s promise to David (2 Samuel 7)', 'David’s sin and its consequences (2 Samuel 11–19)', 'David’s last years; the conclusion (2 Samuel 20–24)'],
  s5: ['The story of 1 and 2 Kings: Israel dies as a nation', 'Five themes from Deuteronomy; the key dates', 'Solomon takes the throne (1 Kings 1–4)', 'The temple (1 Kings 5–9)', 'Solomon’s fall and the kingdom split (1 Kings 9–14)', 'The kings of Israel (north) and Judah (south)'] };
A.GUIDE.sections.forEach(s => {
  ok(JSON.stringify(s.items.map(i => i.t)) === JSON.stringify(OUTLINES[s.tp]), 'guide items follow the notes for ' + s.tp, s.items.map(i => i.t).join(' | '));
  s.items.forEach(it => {
    ok(it.short && it.short.length > 60, 'item has a one-breath answer: ' + it.t);
    ok(A.CH[s.tp].notes.some(n => n.id === it.a), 'item points at a note section: ' + it.t, it.a);
    ok(it.subs.length >= 1 && it.subs.every(sb => sb[0] && anchorExists(sb[1])), 'every subsection anchor exists: ' + it.t, it.subs.map(sb => sb[1]).join(','));
  });
});
const items = A.GUIDE.sections.flatMap(s => s.items);
ok(items.length === 23 && new Set(items.map(i => i.id)).size === 23, 'twenty-three sections, unique ids', items.length);
ok(Object.keys(A.SEC_CHAPTER).length === 23, 'the engine knows all twenty-three');

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
  ok(new Set(mx.map(q => q.tp)).size === 5, 'exam spans all five parts', [...new Set(mx.map(q => q.tp))].join(','));
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
  secs.forEach(s => ok(f.filter(q => q.sec === s).length >= 2, 'at least two on ' + A.SEC_TITLES[s], f.filter(q => q.sec === s).length));
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
ok((html.match(/class="topic-btn"/g) || []).length === 7, 'seven tabs: guide, five parts, practice quiz');
['guide', 's1', 's2', 's3', 's4', 's5', 'exam'].forEach(t => ok(html.includes('data-topic="' + t + '"') && html.includes('id="topic-' + t + '"'), 'tab and section: ' + t));
tps.forEach(tp => ['Notes', 'Cards', 'Match', 'Quiz'].forEach(s => ok(html.includes('id="' + tp + s + '"'), 'root exists: ' + tp + s)));
ok(/data-topic="guide"\s+aria-selected="true"/.test(html), 'Guide is the default tab');
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
