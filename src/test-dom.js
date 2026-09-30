/* Clicks through the real page in a simulated browser (jsdom).
   Usage: node test-dom.js <path-to-node_modules-containing-jsdom>             */
const path = require('path');
const fs = require('fs');
const NM = process.argv[2];
const { JSDOM, VirtualConsole } = require(path.join(NM, 'jsdom'));
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

let fails = 0, checks = 0; const errors = [];
function ok(c, label, d) { checks++; if (!c) { fails++; console.log('  FAIL  ' + label + (d !== undefined ? '  -> ' + d : '')); } }
function head(t) { console.log('\n== ' + t + ' =='); }

const vc = new VirtualConsole();
vc.on('jsdomError', e => errors.push(e.message + (e.detail ? ' | ' + e.detail : '')));
vc.on('error', e => errors.push(String(e)));
const dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://example.test/', virtualConsole: vc,
  beforeParse(w) {
    w.scrollTo = () => {}; w.print = () => { w.__printed = (w.__printed || 0) + 1; };
    w.Element.prototype.scrollIntoView = function () { w.__scrolledTo = this.id; };
    w.addEventListener('error', e => errors.push('window.onerror: ' + e.message));
  } });
const w = dom.window, d = w.document;
const $ = s => d.querySelector(s), $$ = s => Array.from(d.querySelectorAll(s));
const visible = el => { for (let n = el; n && n !== d; n = n.parentNode) if (n.hidden) return false; return true; };
const click = el => el.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const key = k => d.dispatchEvent(new w.KeyboardEvent('keydown', { key: k, bubbles: true }));
const topic = t => click($('.topic-btn[data-topic="' + t + '"]'));
const mode = (t, m) => click($('.seg[data-modes="' + t + '"] button[data-mode="' + m + '"]'));
const panel = p => $('[data-panel="' + p + '"]');
const tps = ['s1', 's2', 's3', 's4'];

function answerQuiz(root, label) {
  let guard = 0;
  while (guard++ < 80) {
    const opts = Array.from(root.querySelectorAll('.qbody .opt'));
    if (!opts.length) break;
    click(opts[Math.floor(Math.random() * opts.length)]);
    ok(root.querySelectorAll('.qbody .opt.correct').length === 1, label + ': the right answer is revealed');
    ok(root.querySelector('.qbody .feedback').textContent.length > 10, label + ': feedback explains');
    const nb = root.querySelector('.qbody .next'); ok(nb && !nb.hidden, label + ': next appears');
    click(nb);
  }
  return root.querySelector('.qbody .result');
}

head('landing');
ok(errors.length === 0, 'no errors while loading', errors.join(' || '));
ok(visible($('#topic-guide')) && !visible($('#topic-s1')), 'opens on the Guide');
const items = $$('#guideRoot .gitem');
ok(items.length === 17, 'guide shows all seventeen parts', items.length);
ok(/0 of 17/.test($('#gCount').textContent), 'progress starts at 0 of 17', $('#gCount').textContent);
ok(!!$('#guideRoot .handout') && $$('#guideRoot .handout .hrules li').length === 5 && /1 and 2 Samuel/.test($('#guideRoot .handout h2').textContent), 'the course header with the five study notes');
ok($$('#guideRoot .gsub .btn').length >= 20, 'subsection buttons');
ok($$('#guideRoot .gsec h2').length === 4, 'four groups on the guide');

head('guide checkboxes and jumps');
const cb = $('#guideRoot input[data-g="g3-goliath"]'); cb.checked = true; cb.dispatchEvent(new w.Event('change', { bubbles: true }));
ok(/1 of 17/.test($('#gCount').textContent), 'checking an item moves the progress', $('#gCount').textContent);
ok(/":true/.test(w.localStorage.getItem('ot.guide') || ''), 'the check is saved on the device under ot.');
click($('#gPrint')); ok(w.__printed === 1, 'print button prints');
click($('#guideRoot .gitem[data-gi="g2-fall"] > button[data-go]'));
ok(visible($('#topic-s2')) && visible(panel('s2/notes')) && !!d.getElementById('s2-fall'), 'Saul’s disobedience: jumps to the Saul notes');
topic('guide');
click($('#guideRoot .gitem[data-gi="g3-goliath"] .gsub .btn[data-a="s3-gath"]'));
ok(visible(panel('s3/notes')) && d.getElementById('s3-gath').closest('.note-sec').id === 's3-goliath', 'a subsection button lands inside its section');
topic('guide');
click($('#guideRoot .gitem[data-gi="g1-ark"] .gsub .btn[data-a="s1-dagon"]'));
ok(visible(panel('s1/notes')) && d.getElementById('s1-dagon').closest('.note-sec').id === 's1-ark', 'Dagon lives inside the ark section');
topic('guide');
click($('#guideRoot [data-go="exam/mock"]'));
ok(visible(panel('exam/mock')) && !!$('#mxStart'), 'the practice-exam button opens the exam setup');

head('every tab and mode');
const modes = {};
$$('.seg[data-modes]').forEach(s => { modes[s.getAttribute('data-modes')] = Array.from(s.querySelectorAll('button[data-mode]')).map(b => b.getAttribute('data-mode')); });
Object.keys(modes).forEach(t => {
  topic(t);
  ok(visible($('#topic-' + t)), 'tab opens: ' + t);
  ok($$('.topic').filter(visible).length === 1, 'only one section visible: ' + t);
  modes[t].forEach(m => {
    mode(t, m);
    ok(visible(panel(t + '/' + m)), 'mode opens: ' + t + '/' + m);
    ok($$('#topic-' + t + ' .panel').filter(visible).length === 1, 'one panel at a time: ' + t + '/' + m);
    ok(panel(t + '/' + m).textContent.trim().length > 20, 'panel has content: ' + t + '/' + m);
  });
});
ok(errors.length === 0, 'no errors after visiting every mode', errors.join(' || '));

head('notes');
const want = { s1: 4, s2: 4, s3: 4, s4: 5 };
tps.forEach(t => {
  topic(t); mode(t, 'notes');
  ok($$('#' + t + 'Notes .note-sec').length === want[t], t + ': ' + want[t] + ' note sections rendered', $$('#' + t + 'Notes .note-sec').length);
  ok($$('#' + t + 'Notes .secnav a').length === want[t], t + ': section nav rendered');
  ok($$('#' + t + 'Notes .point').length === want[t], t + ': every section opens with The point');
  ok($$('#' + t + 'Notes mark').length >= want[t], t + ': green highlights rendered');
});
ok($$('#s1Notes .tbl').length >= 1 && $$('#s2Notes .tbl').length >= 1, 'the dates table and the three namings rendered');

head('flashcards');
tps.forEach(t => {
  topic(t); mode(t, 'cards');
  const p = panel(t + '/cards'), c = p.querySelector('.counter');
  ok(/^1 of \d+$/.test(c.textContent), t + ': counter starts at 1', c.textContent);
  click(p.querySelector('.flip')); ok(p.querySelector('.flash').classList.contains('flipped'), t + ': flips');
  ok(/In the notes · /.test(p.querySelector('.face.back').textContent), t + ': the card back names its section');
  click(p.querySelector('.next')); ok(/^2 of /.test(c.textContent) && !p.querySelector('.flash').classList.contains('flipped'), t + ': next card, unflipped');
  key('ArrowLeft'); ok(/^1 of /.test(c.textContent), t + ': arrow key goes back');
  const decks = Array.from(p.querySelectorAll('[data-deck]'));
  ok(decks.length === 2, t + ': two decks');
  click(decks[1]); ok(/^1 of \d+$/.test(c.textContent) && decks[1].getAttribute('aria-pressed') === 'true', t + ': second deck loads');
});

head('match');
tps.forEach(t => {
  topic(t); mode(t, 'match');
  const p = panel(t + '/match');
  const L = Array.from(p.querySelectorAll('.L .tile')), R = Array.from(p.querySelectorAll('.R .tile'));
  ok(L.length === 6 && R.length === 6, t + ': six pairs', L.length + '/' + R.length);
  click(L[0]); click(R[R.length - 1]);   // a deliberate first pair, right or wrong
  // solve the rest: only undone tiles, so every click(l) is a fresh selection and each (l, r) is compared
  Array.from(p.querySelectorAll('.L .tile')).filter(l => !l.classList.contains('done')).forEach(l => {
    click(l);
    for (const r of Array.from(p.querySelectorAll('.R .tile')).filter(x => !x.classList.contains('done'))) {
      click(r);
      if (l.classList.contains('done')) break;
      click(l);
    }
  });
  ok(p.querySelectorAll('.tile.done').length === 12, t + ': all six pairs solved', p.querySelectorAll('.tile.done').length);
  ok(/Matched 6 of 6/.test(p.querySelector('.scoreline').textContent) && !!p.querySelector('.banner'), t + ': scoreline and banner');
  click(p.querySelector('.toolbar .btn')); ok(p.querySelectorAll('.tile.done').length === 0 && p.querySelectorAll('.L .tile').length === 6, t + ': new round resets');
});

head('quizzes');
tps.forEach(t => {
  topic(t); mode(t, 'quiz');
  const root = $('#' + t + 'Quiz');
  ok(root.querySelectorAll('.dots i').length === 10, t + ': ten dots');
  ok(root.querySelector('.qtag.sec') && root.querySelector('.qtag.sec').textContent.length > 8, t + ': the question card names its outline section');
  const res = answerQuiz(root, t);
  ok(res && /\d+\/10/.test(res.querySelector('.big').textContent), t + ': score shown', res && res.querySelector('.big').textContent);
  ok(!!res.querySelector('.again'), t + ': new quiz button');
  click(res.querySelector('.again')); ok(root.querySelectorAll('.dots i').length === 10 && !root.querySelector('.result'), t + ': new quiz starts');
});
topic('s1'); mode('s1', 'quiz');
key('1'); ok($('#s1Quiz .qbody .opt.correct') !== null, 'number key answers');
key('Enter'); ok(/Question 2/.test($('#s1Quiz .qnum').textContent), 'Enter moves on', $('#s1Quiz .qnum').textContent);

head('practice exam');
topic('exam');
ok(!!$('#mxStart') && !!$('#mxFifty') && !$('#mxF'), 'exam setup: start, the fifty, and no Quizlet row');
click($('#mxN button[data-n="15"]')); click($('#mxT button[data-t="all"]')); click($('#mxP button[data-p="all"]'));
click($('#mxStart'));
ok($$('#mockExam .dots i').length === 15, 'fifteen-question exam', $$('#mockExam .dots i').length);
const mres = answerQuiz($('#mockExam'), 'exam');
const secTbl = mres && mres.querySelectorAll('.tbl')[0];
ok(secTbl && secTbl.querySelectorAll('tr').length >= 4 && secTbl.querySelectorAll('tr').length <= 17 && secTbl.querySelectorAll('.secch').length === secTbl.querySelectorAll('tr').length, 'results break down by outline section', secTbl && secTbl.querySelectorAll('tr').length);
click(mres.querySelector('.setupbtn')); ok(!!$('#mxStart'), 'change settings returns to setup');
click($('#mxT button[data-t="ap"]')); click($('#mxN button[data-n="15"]')); click($('#mxStart'));
ok($$('#mockExam .dots i').length === 15 && $('#mockExam .qtag').textContent === 'Application', 'application-only exam', $$('#mockExam .dots i').length);
ok(/"types":"ap"/.test(w.localStorage.getItem('ot.mockcfg') || ''), 'exam settings remembered under ot.');
const apRes = answerQuiz($('#mockExam'), 'application exam');
click(apRes.querySelector('.setupbtn')); click($('#mxP button[data-p="s2"]')); click($('#mxT button[data-t="all"]')); click($('#mxStart'));
ok(Array.from($$('#mockExam .qnum')).every(n => /Saul/.test(n.textContent)), 'one-part quiz draws only that part');
const oneRes = answerQuiz($('#mockExam'), 'one-lesson exam');

head('the 50 for the exam');
click(oneRes.querySelector('.setupbtn'));
click($('#mxFifty'));
const fifty = $('#mockExam');
ok(fifty.querySelectorAll('.dots i').length === 50, 'fifty questions', fifty.querySelectorAll('.dots i').length);
const fRes = answerQuiz(fifty, 'the fifty');
ok(!!fRes, 'the fifty reaches results');
const fSec = fRes.querySelectorAll('.tbl')[0];
ok(fSec && fSec.querySelectorAll('tr').length === 17, 'the results list all seventeen parts', fSec && fSec.querySelectorAll('tr').length);
ok(Array.from(fSec.querySelectorAll('.num')).every(td => parseInt(td.textContent.split('/')[1], 10) >= 2), 'every section got at least two questions');

head('remembers where you were');
topic('s3'); mode('s3', 'cards');
ok(w.localStorage.getItem('ot.topic') === 's3' && w.localStorage.getItem('ot.mode.s3') === 'cards', 'topic and mode saved');
ok($$('.topic-btn').length === 6, 'six tabs');
topic('s4');
ok(/Bathsheba/.test($('#s4Notes').textContent) && $$('#s4Notes .note-sec').length === 5 && $$('#s4Notes .exam-tip').length === 2, 'the 2 Samuel chapter renders, with both history boxes');
click($('#guideRoot .gitem[data-gi="g4-promise"] > button[data-go]'));

head('errors');
ok(errors.length === 0, 'no runtime errors anywhere', errors.join(' || '));
console.log('\n' + (fails === 0 ? 'ALL ' + checks + ' DOM CHECKS PASSED' : fails + ' FAILURES out of ' + checks + ' DOM checks'));
w.close();
process.exit(fails ? 1 : 0);
