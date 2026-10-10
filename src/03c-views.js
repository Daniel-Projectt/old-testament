/* ================================================================ small helpers */
function segWire(sel, attr, fn){
  var seg = $(sel); if(!seg) return;
  seg.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest("button["+attr+"]") : null;
    if(!b) return;
    $$("button", seg).forEach(function(x){ x.setAttribute("aria-pressed", String(x === b)); });
    fn(b.getAttribute(attr));
  });
}
function divider(){ return '<div class="divider"><span>&#9670;</span></div>'; }
function getJSON(k, dflt){ try{ var v = store.get(k); return v ? JSON.parse(v) : dflt; }catch(e){ return dflt; } }
function li(x){ return "<li>"+x+"</li>"; }

/* ================================================================ guide */
function renderGuide(){
  var done = getJSON("guide", {}), total = 0;
  GUIDE.sections.forEach(function(s){ total += s.items.length; });
  var html =
    '<div class="handout card-corners">'+CORNERS+
      '<div class="hcourse">'+COURSE.code+' &middot; '+COURSE.term+'</div>'+
      '<h2>'+COURSE.exam+'</h2><p class="hscope">'+COURSE.scope+'</p>'+
      '<ul class="hrules">'+COURSE.rules.map(li).join("")+'</ul>'+
    '</div>'+
    '<p class="note">'+COURSE.about+'</p>'+
    '<div class="gprog"><span class="count" id="gCount"></span><div class="bar"><i id="gBar" style="width:0"></i></div></div>';
  GUIDE.sections.forEach(function(s){
    html += '<div class="gsec"><h2>'+s.h+'</h2>'+divider();
    s.items.forEach(function(it){
      html += '<div class="gitem'+(done[it.id] ? " ok" : "")+'" data-gi="'+it.id+'">'+
        '<input type="checkbox" aria-label="I can explain '+strip(it.t)+'" data-g="'+it.id+'"'+(done[it.id] ? " checked" : "")+'>'+
        '<div><div class="gt">'+it.t+'</div>'+
          '<div class="gs">'+it.short+'</div>'+
          '<div class="gsub">'+it.subs.map(function(sb){ return '<button class="btn" type="button" data-go="'+s.tp+'/notes" data-a="'+sb[1]+'">'+sb[0]+'</button>'; }).join("")+'</div></div>'+
        '<button class="btn" type="button" data-go="'+s.tp+'/notes" data-a="'+it.a+'">Study it</button></div>';
    });
    html += '</div>';
  });
  html += '<div class="gsec"><div class="toolbar">'+
      '<button class="btn primary" type="button" data-go="exam/mock">Practice exam</button>'+
      '<button class="btn" type="button" id="gPrint">Print this list</button>'+
    '</div></div>';
  $("#guideRoot").innerHTML = html;
  function progress(){
    var d = getJSON("guide", {}), n = Object.keys(d).filter(function(k){ return d[k]; }).length;
    $("#gCount").innerHTML = "Ready on <b>"+n+" of "+total+"</b>";
    $("#gBar").style.width = (n/total*100) + "%";
  }
  $$("#guideRoot input[data-g]").forEach(function(cb){
    cb.addEventListener("change", function(){
      var d = getJSON("guide", {}); d[cb.getAttribute("data-g")] = cb.checked; store.set("guide", JSON.stringify(d));
      cb.closest(".gitem").classList.toggle("ok", cb.checked); progress();
    });
  });
  $$("#guideRoot [data-go]").forEach(function(b){
    b.addEventListener("click", function(){ goTo(b.getAttribute("data-go"), b.getAttribute("data-a")); });
  });
  $("#gPrint").addEventListener("click", function(){ window.print(); });
  progress();
}
function goTo(path, anchor){
  var parts = path.split("/"), t = parts[0], m = parts[1];
  currentMode[t] = m;
  showTopic(t);
  if(!anchor){ window.scrollTo({top:$(".topics").offsetTop - 8, behavior:"smooth"}); return; }
  setTimeout(function(){
    var el = document.getElementById(anchor);
    if(!el) return;
    el.scrollIntoView({behavior:"smooth", block:"start"});
    el.classList.add("flashhit"); setTimeout(function(){ el.classList.remove("flashhit"); }, 1800);
  }, 60);
}

/* ================================================================ chapter notes */
function renderNotes(tp){
  var c = CH[tp];
  $("#"+tp+"Notes").innerHTML = '<div class="secnav">'+c.notes.map(function(s){ return '<a href="#'+s.id+'" data-a="'+s.id+'">'+strip(s.h).replace(/“|”/g,"").replace(/^Figure [\d.]+ · /, "")+'</a>'; }).join("")+'</div>'+
    c.notes.map(function(s){ return '<div class="note-sec" id="'+s.id+'"><h2>'+s.h+'</h2>'+divider()+s.body+'</div>'; }).join("");
  $$("#"+tp+"Notes .secnav a").forEach(function(a){
    a.addEventListener("click", function(e){ e.preventDefault(); var el = document.getElementById(a.getAttribute("data-a")); if(el) el.scrollIntoView({behavior:"smooth", block:"start"}); });
  });
}

/* ================================================================ practice exam */
var mockCfg = getJSON("mockcfg", {n:25, types:"all", topic:"all"});
function mockGen(){ return mockQuestions({n:mockCfg.n, types:mockCfg.types, topics:mockCfg.topic === "all" ? [] : [mockCfg.topic]}); }
function startMock(keys){
  engines.mock = makeQuiz($("#mockExam"), mockGen, {showTopic:true, againLabel:"New practice exam", onSetup:renderMockSetup});
  engines.mock.start(keys || null);
}
/* the one-button exam: 50 questions, all sixteen study-guide sections covered */
function startFifty(){
  engines.mock = makeQuiz($("#mockExam"), function(){ return finalFifty(50); }, {showTopic:true, againLabel:"Another fifty", onSetup:renderMockSetup});
  engines.mock.start(null);
}
function renderMockSetup(){
  var root = $("#mockExam");
  function seg(id, attr, val, list){
    return '<div class="seg" id="'+id+'">'+list.map(function(o){ return '<button type="button" '+attr+'="'+o[0]+'" aria-pressed="'+(String(o[0]) === String(val))+'">'+o[1]+'</button>'; }).join("")+'</div>';
  }
  root.innerHTML = '<div class="quizWrap"><div class="qcard card-corners">'+CORNERS+
    '<div class="qnum">Practice exam</div><p class="qtext">Set it up, then answer across the chapters. Each run is drawn fresh.</p>'+
    '<div class="fifty"><button class="btn primary" type="button" id="mxFifty">The 50 &mdash; every section of the guide</button>'+
      '<p>Fifty questions, at least two from every part of the chapter &mdash; so nothing in the notes is skipped. Drawn fresh each time.</p></div>'+
    '<div class="setup">'+
      '<p class="orline">or set one up yourself</p>'+
      '<div class="row"><span class="label">Length</span><br>'+seg("mxN","data-n",mockCfg.n,[[15,"15"],[25,"25"],[40,"40"],[60,"60"]])+'</div>'+
      '<div class="row"><span class="label">Question types</span><br>'+seg("mxT","data-t",mockCfg.types,[["all","Everything"],["mc","Multiple choice"],["tf","True / false"],["ap","Application"]])+'</div>'+
      '<div class="row"><span class="label">Part</span><br>'+seg("mxP","data-p",mockCfg.topic,[["all","All three"]].concat(CHAPTERS.map(function(tp){ return [tp, CH[tp].title]; })))+'</div>'+
      '<div class="row" style="margin-top:22px"><button class="btn primary" type="button" id="mxStart">Start</button></div>'+
    '</div></div></div>';
  segWire("#mxN","data-n",function(v){ mockCfg.n = parseInt(v,10); store.set("mockcfg", JSON.stringify(mockCfg)); });
  segWire("#mxT","data-t",function(v){ mockCfg.types = v; store.set("mockcfg", JSON.stringify(mockCfg)); });
  segWire("#mxP","data-p",function(v){ mockCfg.topic = v; store.set("mockcfg", JSON.stringify(mockCfg)); });
  $("#mxStart").addEventListener("click", function(){ startMock(null); });
  $("#mxFifty").addEventListener("click", startFifty);
  engines.mock = null;
}

/* ================================================================ wiring */
var engines = {};
CHAPTERS.forEach(function(tp){
  var seg = $('.seg[data-decks="'+tp+'"]'), cur = CH[tp].decks[0].id;
  seg.innerHTML = CH[tp].decks.map(function(d, i){ return '<button type="button" data-deck="'+d.id+'" aria-pressed="'+(i === 0)+'">'+d.label+'</button>'; }).join("");
  engines[tp+"Cards"] = makeCards($("#"+tp+"Cards")); engines[tp+"Cards"].load(deckFor(tp, cur));
  segWire('.seg[data-decks="'+tp+'"]', "data-deck", function(v){ cur = v; engines[tp+"Cards"].load(deckFor(tp, v)); });
  $('[data-shuffle="'+tp+'"]').addEventListener("click", function(){ engines[tp+"Cards"].load(deckFor(tp, cur)); });
  engines[tp+"Match"] = makeMatch($("#"+tp+"Match"), function(){ return matchRound(tp, 6); });
  engines[tp+"Quiz"]  = makeQuiz($("#"+tp+"Quiz"), function(){ return topicQuestions(tp, null, 10); });
  renderNotes(tp);
});
renderGuide();

var ON_SHOW = {"exam/mock":function(){ if(!engines.mock) renderMockSetup(); }};
var KEYS = {"exam/mock":function(e){ return engines.mock ? engines.mock.keys(e) : false; }};
CHAPTERS.forEach(function(tp){
  ON_SHOW[tp+"/match"] = function(){ engines[tp+"Match"].ensure(); };
  ON_SHOW[tp+"/quiz"]  = function(){ engines[tp+"Quiz"].ensure(); };
  KEYS[tp+"/cards"] = function(e){ return engines[tp+"Cards"].keys(e); };
  KEYS[tp+"/quiz"]  = function(e){ return engines[tp+"Quiz"].keys(e); };
});
/* ================================================================ the midterm tab */
function midGroup(g){ return MID_ST.filter(function(s){ return s.grp === g; }); }
function renderMidStatements(){
  function one(s){
    return '<details class="mst" id="'+s.id+'"><summary><span class="mnum">'+s.n+'</span><span class="mtxt">'+midPlain(s.t)+'<span class="mbk">'+s.bk+'</span></span></summary>'+
      '<div class="mbody">'+(s.note ? '<p class="mnote">'+s.note+'</p>' : '')+
      '<h4>Where it is in the text</h4><ul>'+s.where.map(li).join("")+'</ul>'+
      '<h4>Why it matters</h4><p>'+s.why+'</p></div></details>';
  }
  $("#midSt").innerHTML =
    '<div class="note-sec"><div class="point"><b>The point</b><p>The test covers the class discussion of <mark>Genesis through 2 Kings</mark>. For each statement, be able to show <mark>where it is in the biblical text</mark> and <mark>why it is important</mark>. He is not asking you to memorize them word for word.</p>'+
    '<p class="able"><b>How to use this</b>Tap a statement to open it. Say the &ldquo;where&rdquo; and the &ldquo;why&rdquo; aloud first, then check.</p></div>'+
    '<div class="toolbar" style="justify-content:center"><button class="btn" type="button" id="midOpenAll">Open all</button><button class="btn" type="button" id="midCloseAll">Close all</button></div>'+
    '<h3 class="sub">Summary statements on the Torah / Pentateuch</h3>'+midGroup("t").map(one).join("")+
    '<h3 class="sub">Summary statements on the Former Prophets</h3>'+midGroup("f").map(one).join("")+'</div>';
  $("#midOpenAll").addEventListener("click", function(){ $$("#midSt details").forEach(function(d){ d.open = true; }); });
  $("#midCloseAll").addEventListener("click", function(){ $$("#midSt details").forEach(function(d){ d.open = false; }); });
}
function renderMidBooks(){
  $("#midBooks").innerHTML =
    '<div class="note-sec"><div class="point"><b>The point</b><p>Know the <mark>structure of each book</mark> and what it adds to the story, and be able to say <mark>in which book</mark> a person, theme or event appears. The class follows the order of the Hebrew Bible, so this is the Pentateuch plus Joshua, Judges, Samuel and Kings.</p></div>'+
    '<h3 class="sub">The dates</h3><div class="tblwrap"><table class="tbl n0"><tbody>'+
      MID_DATES.map(function(d){ return '<tr'+(d[2] ? ' class="mkey"' : '')+'><td class="head">'+d[0]+'</td><td class="sm">'+d[1]+'</td></tr>'; }).join("")+'</tbody></table></div>'+
    '<p class="hint">The first three are the ones he lists as the important dates. The rest are on the slides.</p>'+
    '<h3 class="sub">The Hebrew Bible</h3><p><b>Torah</b> (Pentateuch): Genesis, Exodus, Leviticus, Numbers, Deuteronomy. <b>Prophets</b>: the Former Prophets (Joshua, Judges, Samuel, Kings) and the Latter Prophets (Isaiah, Jeremiah, Ezekiel, The Twelve). <b>Writings</b>: Psalms, Job, Proverbs, Ruth, Song of Solomon, Ecclesiastes, Lamentations, Esther, Daniel, Ezra-Nehemiah, Chronicles.</p>'+
    '<p>The Former Prophets in one line: <b>into the land → 800+ years in the land → exile</b>.</p>'+
    MID_BOOKS.map(function(B){
      var sts = MID_ST.filter(function(s){ return s.bk.indexOf(B.n) >= 0; }).map(function(s){ return s.n; });
      return '<h3 class="sub">'+B.n+'</h3><p class="mses">'+B.ses+'</p>'+
        '<div class="tblwrap"><table class="tbl n0"><tbody>'+B.parts.map(function(p){ return '<tr><td class="sm">'+p[0]+'</td><td class="head">'+p[1]+'</td></tr>'; }).join("")+'</tbody></table></div>'+
        '<ul>'+B.more.map(li).join("")+'</ul>'+
        '<p class="mfind"><b>Found in '+B.n+'</b>'+MID_WHICH.filter(function(w){ return w[1] === B.k; }).map(function(w){ return w[0]; }).join(" · ")+'</p>'+
        (sts.length ? '<p class="hint">Statements: '+sts.join(", ")+'</p>' : '');
    }).join("")+
    '<h3 class="sub">Terms to know</h3><div class="tblwrap"><table class="tbl n0"><tbody>'+
      MID_TERMS.map(function(t){ return '<tr><td class="head">'+t[0]+'</td><td class="sm">'+t[1]+(t[2] ? '' : ' <span class="mown">(listed on the slides without a definition)</span>')+'</td></tr>'; }).join("")+'</tbody></table></div></div>';
}
function renderMidBlanks(){
  function line(s){
    var html = s.t.replace(/\{([^}]+)\}/g, function(_, w){ return '<button type="button" class="blank" data-w="'+w+'" aria-label="blank">&nbsp;</button>'; });
    return '<li class="bline"><span class="mnum">'+s.n+'</span><span>'+html+'</span></li>';
  }
  $("#midBlanks").innerHTML =
    '<div class="note-sec"><div class="point"><b>The point</b><p>Your professor reviews with these statements as <mark>fill-in-the-blank</mark> slides. Say the missing word, then tap the blank to check. Up to statement 19 these are the very words he leaves out on his slides.</p></div>'+
    '<div class="toolbar" style="justify-content:center"><button class="btn" type="button" id="blShow">Show all</button><button class="btn" type="button" id="blHide">Hide all</button></div>'+
    '<p class="scoreline" id="blCount"></p>'+
    '<ul class="blist">'+MID_ST.map(line).join("")+'</ul></div>';
  function count(){ $("#blCount").innerHTML = "Opened <b>"+$$("#midBlanks .blank.on").length+" of "+$$("#midBlanks .blank").length+"</b>"; }
  function set(b, on){ b.classList.toggle("on", on); b.innerHTML = on ? b.getAttribute("data-w") : "&nbsp;"; }
  $$("#midBlanks .blank").forEach(function(b){ b.addEventListener("click", function(){ set(b, !b.classList.contains("on")); count(); }); });
  $("#blShow").addEventListener("click", function(){ $$("#midBlanks .blank").forEach(function(b){ set(b, true); }); count(); });
  $("#blHide").addEventListener("click", function(){ $$("#midBlanks .blank").forEach(function(b){ set(b, false); }); count(); });
  count();
}
function renderMidWhich(){
  var root = $("#midWhich"), qs = [], qi = 0, score = 0, missed = [];
  function start(){ qs = midWhichRound(15); qi = 0; score = 0; missed = []; show(); }
  function show(){
    if(qi >= qs.length){
      root.innerHTML = '<div class="qcard card-corners">'+CORNERS+'<div class="qnum">Result</div><p class="qtext">'+score+' of '+qs.length+'</p>'+
        (missed.length ? '<p class="feedback">Look again at: '+missed.map(function(q){ return q.text+' <b>('+midBook(q.answer).n+')</b>'; }).join("; ")+'.</p>' : '<p class="feedback">A clean round.</p>')+
        '<div class="qfoot"><button class="btn primary" type="button" id="mwAgain">Another round</button></div></div>';
      $("#mwAgain").addEventListener("click", start); return;
    }
    var q = qs[qi];
    root.innerHTML = '<div class="qcard card-corners">'+CORNERS+'<div class="qnum">Question '+(qi+1)+' of '+qs.length+'</div>'+
      '<div style="text-align:center;margin-top:10px"><span class="qtag">In which book?</span></div><p class="qtext">'+q.text+'</p>'+
      '<div class="opts">'+q.opts.map(function(k, i){ return '<button type="button" class="opt" data-k="'+k+'"><span class="k">'+(i+1)+'</span>'+midBook(k).n+'</button>'; }).join("")+'</div>'+
      '<p class="feedback"></p><div class="qfoot"><button class="btn primary next" type="button" hidden>Next &rsaquo;</button></div></div>';
    $$(".opt", root).forEach(function(b){ b.addEventListener("click", function(){
      if($(".opt[disabled]", root)) return;
      var right = b.getAttribute("data-k") === q.answer;
      $$(".opt", root).forEach(function(x){ x.disabled = true; if(x.getAttribute("data-k") === q.answer) x.classList.add("correct"); });
      if(right) score++; else { b.classList.add("wrong"); missed.push(q); }
      $(".feedback", root).innerHTML = (right ? "<b>Correct.</b> " : "<b>Not this one.</b> ")+"It is in <b>"+midBook(q.answer).n+"</b>: "+midBook(q.answer).ses.toLowerCase().replace(/^./, function(c){ return c.toUpperCase(); })+".";
      var nb = $(".next", root); nb.hidden = false; nb.textContent = qi === qs.length - 1 ? "See results" : "Next";
    }); });
    $(".next", root).addEventListener("click", function(){ qi++; show(); });
  }
  start();
}
/* the midterm quizzes: the whole midterm, or one book at a time */
var midEngine = null;
function renderMidQuizSetup(){
  midEngine = null;
  var count = function(k){ return MID_QB.filter(function(b){ return b.bk === k; }).length; };
  $("#midQuiz").innerHTML =
    '<div class="note-sec"><div class="point"><b>The point</b><p>Questions written from the slides, in the kinds he says he may ask: <mark>multiple choice</mark>, <mark>true or false</mark> and <mark>fill in the blank</mark>. Every answer comes with the reason and the place in the text.</p></div>'+
    '<div class="mqgrid"><button class="btn primary" type="button" data-mq="all" data-n="25">The whole midterm &middot; 25 questions</button>'+
    '<button class="btn" type="button" data-mq="all" data-n="50">The long one &middot; 50 questions</button></div>'+
    '<h3 class="sub">One book at a time</h3><div class="mqgrid">'+
    ["int","gen","exo","lev","num","deu","jos","jdg","sam","kgs"].map(function(k){ return '<button class="btn" type="button" data-mq="'+k+'" data-n="10">'+MID_QNAMES[k]+' <span class="mqn">'+count(k)+'</span></button>'; }).join("")+
    '</div><p class="hint">Each book quiz draws 10 from that book&rsquo;s questions; the number shows how many it has.</p></div>';
  $$("#midQuiz [data-mq]").forEach(function(b){ b.addEventListener("click", function(){
    var k = b.getAttribute("data-mq"), n = parseInt(b.getAttribute("data-n"), 10);
    midEngine = makeQuiz($("#midQuiz"), function(){ return midQuiz(n, k === "all" ? null : k); }, {byKeys:midByKeys, againLabel:"Another quiz", onSetup:renderMidQuizSetup});
    $("#midQuiz").innerHTML = ""; midEngine.start(null);
  }); });
}
KEYS["mid/quiz"] = function(e){ return midEngine ? midEngine.keys(e) : false; };
var midMatch = makeMatch($("#midMatch"), function(){ return midMatchRound(null, 6); });
ON_SHOW["mid/match"] = function(){ midMatch.ensure(); };
renderMidStatements(); renderMidBooks(); renderMidBlanks(); renderMidWhich(); renderMidQuizSetup();

var TOPICS = ["mid","guide","s1","s2","s3","s4","s5","s6","exam"];
var currentTopic = "mid", currentMode = {mid:"st", guide:"overview", s1:"notes", s2:"notes", s3:"notes", s4:"notes", s5:"notes", s6:"notes", exam:"mock"};
function showMode(topic, mode){
  currentMode[topic] = mode;
  $$('.seg[data-modes="'+topic+'"] button').forEach(function(b){ b.setAttribute("aria-pressed", String(b.getAttribute("data-mode") === mode)); });
  $$('#topic-'+topic+' .panel').forEach(function(p){ p.hidden = (p.getAttribute("data-panel") !== topic+"/"+mode); });
  var id = topic+"/"+mode;
  if(ON_SHOW[id]) ON_SHOW[id]();
  store.set("mode."+topic, mode);
}
function showTopic(id){
  currentTopic = id;
  $$(".topic-btn").forEach(function(b){ b.setAttribute("aria-selected", String(b.getAttribute("data-topic") === id)); });
  $$(".topic").forEach(function(s){ s.hidden = (s.id !== "topic-"+id); });
  showMode(id, currentMode[id]);
  store.set("topic", id);
}
$$(".topic-btn").forEach(function(b){
  b.addEventListener("click", function(){ showTopic(b.getAttribute("data-topic")); window.scrollTo({top:$(".topics").offsetTop - 8, behavior:"smooth"}); });
});
$$(".seg[data-modes]").forEach(function(seg){
  seg.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest("button[data-mode]") : null;
    if(b) showMode(seg.getAttribute("data-modes"), b.getAttribute("data-mode"));
  });
});
document.addEventListener("keydown", function(e){
  var t = e.target, tag = (t && t.tagName) || "";
  if(/INPUT|TEXTAREA|SELECT/.test(tag)) return;
  if(tag === "BUTTON" && (e.key === " " || e.key === "Enter")) return;
  var h = KEYS[currentTopic+"/"+currentMode[currentTopic]];
  if(h && h(e)) e.preventDefault();
});

/* ---- come back to where you were ---- */
(function(){
  var t = store.get("topic");
  TOPICS.forEach(function(k){ var m = store.get("mode."+k); if(m && $('.seg[data-modes="'+k+'"] button[data-mode="'+m+'"]')) currentMode[k] = m; });
  /* the midterm tab is new: show it once even to a phone that remembers another tab */
  if(!store.get("seenMid")){ t = "mid"; store.set("seenMid", "1"); }
  showTopic(t && TOPICS.indexOf(t) >= 0 ? t : "mid");
})();

/* ---- offline copy: the service worker keeps the page on the phone ---- */
if("serviceWorker" in navigator && /^https?:/.test(location.protocol)){
  navigator.serviceWorker.register("sw.js").catch(function(){});
}
