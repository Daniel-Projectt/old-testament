/* ================================================================ the midterm quizzes
   Questions for the midterm, written 10-oct from the professor's slides only (sessions 1-14 and the
   Joshua handout). He says the test is multiple choice, matching and fill-in-the-blank.
   Rule for every question: the wrong choices are near neighbours (another chapter, another book,
   the next judge), and a false true/false differs from the truth by one swapped detail.
   bk = the book it belongs to ("int" = the introduction and the Hebrew Bible).                     */
var MID_QB = [
 /* ---------- introduction ---------- */
 {bk:"int",t:"mc",q:"Which books are the Former Prophets?",a:"Joshua, Judges, Samuel, Kings",w:["Isaiah, Jeremiah, Ezekiel, The Twelve","Joshua, Judges, Ruth, Samuel","Deuteronomy, Joshua, Judges, Kings"],e:"The Latter Prophets are Isaiah, Jeremiah, Ezekiel and The Twelve. Ruth is in the Writings."},
 {bk:"int",t:"mc",q:"What are the three parts of the Hebrew Bible (the Tanak)?",a:"Torah, Prophets, Writings",w:["Torah, Former Prophets, Latter Prophets","Law, History, Poetry","Pentateuch, Prophets, Psalms"],e:"The Prophets are then split into Former and Latter."},
 {bk:"int",t:"mc",q:"With a small t, what does “torah” mean?",a:"Instruction, teaching or law in general",w:["The five books of Moses","The whole Hebrew Bible","The laws given at Sinai only"],e:"With a capital T, the Torah is the book of Moses, Genesis through Deuteronomy."},
 {bk:"int",t:"mc",q:"What is the Septuagint (LXX)?",a:"The Old Testament in Greek",w:["The Old Testament in Hebrew","The first five books only","The list of books recognized as Scripture"],e:"The Hebrew text is the Masoretic Text (MT)."},
 {bk:"int",t:"mc",q:"How do the slides describe the shape of the Pentateuch?",a:"One book: narrative, then a poem, three times",w:["Five books, each closing with a law code","One book: law, then narrative, three times","Five books, each opening with a genealogy"],e:"“1 book, not 5.” The poems are Genesis 49, Numbers 24 and Deuteronomy 32–33."},
 {bk:"int",t:"mc",q:"Which three passages are the great poems “in the last days”?",a:"Genesis 49, Numbers 24, Deuteronomy 32–33",w:["Genesis 49, Exodus 15, Deuteronomy 32–33","Genesis 3, Numbers 24, Deuteronomy 30","Genesis 12, Exodus 15, Numbers 24"],e:"Jacob to his sons, Balaam before Balak, Moses to Israel."},
 {bk:"int",t:"mc",q:"Who speaks the poem in Numbers 24?",a:"Balaam",w:["Balak","Moses","Jacob"],e:"Balaam speaks it before Balak. Jacob speaks Genesis 49; Moses speaks Deuteronomy 32–33."},
 {bk:"int",t:"mc",q:"Which passage says that Christ died for our sins “according to the Scriptures”?",a:"1 Corinthians 15",w:["2 Timothy 3","Hebrews 11","Luke 24"],e:"2 Timothy 3: God-breathed and profitable. Hebrews 11: by faith. Luke 24: the Law, the Prophets and the Psalms."},
 {bk:"int",t:"tf",q:"In the Hebrew Bible, Ruth stands among the Former Prophets.",a:false,e:"Ruth is in the Writings. The Former Prophets are Joshua, Judges, Samuel and Kings."},
 {bk:"int",t:"tf",q:"In Luke 24:44 Jesus names the Law of Moses, the Prophets and the Psalms.",a:true,e:"That is the three-part Hebrew Bible: Torah, Prophets, Writings."},
 {bk:"int",t:"tf",q:"The horizon of the Pentateuch reaches from “the beginning” to the giving of the law at Sinai.",a:false,e:"It reaches to the “end of days” kingdom ruled by the Lion of Judah."},

 /* ---------- Genesis ---------- */
 {bk:"gen",t:"mc",q:"How does Genesis divide into two parts?",a:"1–11 and 12–50",w:["1–3 and 4–50","1–11 and 12–36","1–25 and 26–50"],e:"The Primeval History (1–11) and the Narrative of the Patriarchs (12–50)."},
 {bk:"gen",t:"mc",q:"In Genesis 1, what does God do on days 1–3 and then on days 4–6?",a:"He forms, then He fills",w:["He fills, then He forms","He creates, then He rests","He names, then He blesses"],e:"The earth was “formless and void.” God forms it and then fills it."},
 {bk:"gen",t:"mc",q:"What changes about the name of God at Genesis 2:4?",a:"“God” becomes “the LORD God”",w:["“The LORD God” becomes “God”","“God” becomes “God Almighty”","“The LORD” becomes “Adonai”"],e:"Elohim in chapter 1; Yahweh Elohim in chapter 2."},
 {bk:"gen",t:"mc",q:"In the Jewish tradition of reading aloud, which word normally replaces the name Yahweh?",a:"Adonai",w:["Elohim","El Shaddai","Jehovah"],e:"Adonai means “Lord,” which is why English Bibles print “the LORD.”"},
 {bk:"gen",t:"mc",q:"According to the slides, which idea is central to the story of the Fall?",a:"Wisdom",w:["Sacrifice","Covenant","Kingship"],e:"“Central to the story of the Fall is the idea of wisdom.”"},
 {bk:"gen",t:"mc",q:"Through whom is the serpent to be defeated (Genesis 3:15)?",a:"The seed of the woman",w:["The seed of Abraham","The Lion of Judah","The prophet like Moses"],e:"All of these come later in the story; Genesis 3:15 speaks of the seed of the woman."},
 {bk:"gen",t:"mc",q:"What happens to the man and the woman at the end of Genesis 3?",a:"They are exiled from the place of God’s provision",w:["They are scattered over the face of the earth","They go down to Egypt","They stay in the garden under a curse"],e:"Scattering is Babel (Genesis 11). Sin brought death and exile from the good land."},
 {bk:"gen",t:"mc",q:"Which three words sum up God’s promise to Abraham?",a:"Land, seed, blessing",w:["Land, law, king","Seed, temple, rest","Covenant, law, sacrifice"],e:"Seen in Genesis 12, 13, 15, 17 and 22."},
 {bk:"gen",t:"mc",q:"Where does it say that Abraham “believed the LORD, and he counted it to him as righteousness”?",a:"Genesis 15:6",w:["Genesis 12:3","Genesis 17:5","Genesis 22:18"],e:"12:3: all families blessed. 17:5: the name Abraham. 22:18: all nations blessed in his seed."},
 {bk:"gen",t:"mc",q:"In which chapter is Abram renamed Abraham and told that kings will come from him?",a:"Genesis 17",w:["Genesis 12","Genesis 15","Genesis 22"],e:"Genesis 17:3–8, the everlasting covenant."},
 {bk:"gen",t:"mc",q:"Which passage promises that Abraham’s seed “shall possess the gate of his enemies”?",a:"Genesis 22:15–18",w:["Genesis 12:1–3","Genesis 13:14–17","Genesis 15:1–6"],e:"It comes after Abraham did not withhold his son."},
 {bk:"gen",t:"mc",q:"To whom is the promise repeated in Genesis 26:3–5?",a:"Isaac",w:["Jacob","Joseph","Judah"],e:"Jacob receives it in 28:1–4 and 35:9–12."},
 {bk:"gen",t:"mc",q:"In Genesis 37–50 the story of the twelve becomes mainly the story of which two sons?",a:"Joseph and Judah",w:["Joseph and Benjamin","Reuben and Judah","Judah and Levi"],e:"Joseph and Judah; the scepter belongs to Judah (49:10)."},
 {bk:"gen",t:"mc",q:"Which verse do the slides call the guiding principle of the Joseph story?",a:"Genesis 50:20",w:["Genesis 50:24","Genesis 49:10","Genesis 37:5"],e:"50:24 is Joseph’s hope in the promises; 49:10 is the scepter of Judah."},
 {bk:"gen",t:"mc",q:"In Jacob’s poem (Genesis 49), from which son will the scepter not depart?",a:"Judah",w:["Joseph","Levi","Reuben"],e:"“The scepter shall not depart from Judah … until Shiloh comes.”"},
 {bk:"gen",t:"mc",q:"Abraham’s life shows what it means to do what?",a:"Walk by faith",w:["Keep the law","Rule with wisdom","Offer sacrifice"],e:"He believed, and God credited it to him as righteousness."},
 {bk:"gen",t:"tf",q:"On the slides, Abraham entered Canaan about 2092 BC.",a:true,e:"And Jacob’s family entered Egypt about 1876 BC."},
 {bk:"gen",t:"tf",q:"On the slides, Jacob’s family entered Egypt about 1446 BC.",a:false,e:"About 1876 BC. The year 1446 BC is the exodus."},
 {bk:"gen",t:"tf",q:"In the promise to Abraham, the “seed” is both corporate and individual.",a:true,e:"A people, and one person."},
 {bk:"gen",t:"tf",q:"The promised blessing in Genesis 12 is for Abraham’s descendants only.",a:false,e:"Blessing on Israel and on the nations: “in you all the families of the earth shall be blessed.”"},

 /* ---------- Exodus ---------- */
 {bk:"exo",t:"mc",q:"What are the three parts of Exodus, in order?",a:"Egypt, Wilderness, Sinai",w:["Egypt, Sinai, Wilderness","Egypt, Red Sea, Canaan","Wilderness, Sinai, Moab"],e:"1:1–15:21, 15:22–18:27, 19–40."},
 {bk:"exo",t:"mc",q:"At which chapter does the Sinai part of Exodus begin?",a:"Chapter 19",w:["Chapter 15","Chapter 20","Chapter 25"],e:"Israel stays at Sinai from Exodus 19 until Numbers 10:11."},
 {bk:"exo",t:"mc",q:"In Exodus 2:24, God heard their groaning and remembered what?",a:"His covenant with Abraham, Isaac and Jacob",w:["The covenant made at Sinai","The oppression by the Egyptians","His promise to David"],e:"The exodus happens in accordance with the promises to the fathers."},
 {bk:"exo",t:"mc",q:"Horeb is another name for which place?",a:"Sinai",w:["Zion","Moab","Canaan"],e:"“Horeb = Sinai.” It is where Moses is called."},
 {bk:"exo",t:"mc",q:"Which of Moses’ objections is answered with the name Yahweh?",a:"“What is your name?”",w:["“Who am I?”","“What if they will not believe me?”","“I am not eloquent.”"],e:"Objection 2. God identifies Himself as Yahweh, the God of the fathers."},
 {bk:"exo",t:"mc",q:"What were the signs given to Moses meant to do?",a:"Prompt faith in Israel",w:["Harden Pharaoh’s heart","Punish the Egyptians","Prove that Moses was eloquent"],e:"Note Exodus 4:31: the people believed."},
 {bk:"exo",t:"mc",q:"By what name does Exodus 6:3 say God appeared to Abraham, Isaac and Jacob?",a:"God Almighty (El Shaddai)",w:["Yahweh","Adonai","The LORD God"],e:"“But by my name the LORD I did not make myself known to them.”"},
 {bk:"exo",t:"mc",q:"According to Exodus 9:14–16, what was the purpose of the plagues?",a:"That God’s name be proclaimed in all the earth",w:["That Egypt be cut off from the earth","That Israel become rich","That Pharaoh’s heart be softened"],e:"“That you may know that there is none like me.” God says He could have cut Egypt off, but did not."},
 {bk:"exo",t:"mc",q:"What did Israel do when they saw the Egyptians dead on the seashore (Exodus 14:31)?",a:"They feared the LORD and believed",w:["They said, “All that the LORD has spoken we will do”","They cried out because of their bondage","They made a golden calf"],e:"The other answers are Exodus 19, Exodus 2 and Exodus 32."},
 {bk:"exo",t:"mc",q:"How does the song of Exodus 15:1–18 picture Yahweh?",a:"As the Warrior King",w:["As the God who sees","As God Almighty","As the God of the fathers"],e:"All four are on the slide “Who is God?”; the Warrior King is 15:1–18."},
 {bk:"exo",t:"mc",q:"What do verses 13–18 of the song in Exodus 15 do?",a:"Extend the exodus forward prophetically",w:["Interpret the exodus poetically","Retell the ten plagues","Give the Ten Commandments"],e:"Verses 1–12 are the poetic interpretation; verses 13–18 the prophetic extension."},
 {bk:"exo",t:"mc",q:"What pattern marks Israel’s time in the wilderness (Exodus 15:22–18:27)?",a:"God’s provision, but also testing",w:["God’s judgment, but also exile","War, and then rest","Sin, and then servitude"],e:"And more stringent regulations were on the way as their trust waned."},
 {bk:"exo",t:"mc",q:"How did all the people answer at Sinai (Exodus 19:8; 24:3)?",a:"“All that the LORD has spoken we will do!”",w:["“Who is the LORD, that we should obey His voice?”","“To obey is better than sacrifice.”","“The LORD is with him.”"],e:"They say it twice, and break it in chapter 32."},
 {bk:"exo",t:"mc",q:"What do the slides call the laws that begin at Exodus 21:1?",a:"The Covenant Code",w:["The Holiness Code","The Ten Commandments","The Sacrificial Laws"],e:"The Ten Commandments are chapter 20; the Holiness Code is Leviticus 17–27."},
 {bk:"exo",t:"mc",q:"After the people break the covenant in Exodus 32, how does the Lord respond?",a:"With grace, but also with another covenant",w:["With grace, and with no further laws","With exile from the land","With forty years in the wilderness"],e:"Exodus 34:10–11. The forty years belong to Numbers."},
 {bk:"exo",t:"mc",q:"What is the order of Exodus 25–40?",a:"Plans, golden calf, restoration, finishing",w:["Plans, finishing, golden calf, restoration","Golden calf, plans, finishing, restoration","Plans, restoration, golden calf, finishing"],e:"25–31, 32, 33–34, 35–40."},
 {bk:"exo",t:"mc",q:"Which is NOT one of the links the slides draw between the garden and the tabernacle?",a:"A flood",w:["Gold","Cherubim","Rest and the Sabbath"],e:"The links: Spirit, gold, jewels, cherubim, rest, inspection and blessing, and then a fall."},
 {bk:"exo",t:"mc",q:"In the garden-tabernacle pattern, what matches the fall of Genesis 3?",a:"The golden calf",w:["The ten plagues","The strange fire","The twelve spies"],e:"Each is “followed by” a fall: Genesis 3 and Exodus 32."},
 {bk:"exo",t:"mc",q:"In the line that starts in the garden, what comes right after the temple?",a:"The true tabernacle",w:["The tabernacle","The new heavens and new earth","The garden"],e:"Garden → tabernacle → temple → true tabernacle (Hebrews 8–9) → new heavens and new earth."},
 {bk:"exo",t:"mc",q:"Which date are you asked to remember for the exodus?",a:"1446 BC",w:["1406 BC","1876 BC","2092 BC"],e:"1406 BC is Jericho; 1876 BC is the move to Egypt; 2092 BC is Abraham in Canaan."},
 {bk:"exo",t:"mc",q:"Which chapter of Deuteronomy is tied to the New Covenant?",a:"Deuteronomy 30",w:["Deuteronomy 6","Deuteronomy 17","Deuteronomy 18"],e:"Deuteronomy 30:6. Chapter 17 is the king, chapter 18 the prophet."},
 {bk:"exo",t:"mc",q:"What was the tabernacle the means for?",a:"Restoring mankind’s lost fellowship with God",w:["Replacing the covenant with Abraham","Keeping Israel apart from the nations","Giving the Levites a place to live"],e:"Sailhamer: the tabernacle is pictured as the means of restoring humanity’s lost fellowship with God."},
 {bk:"exo",t:"tf",q:"The slides call the Mosaic Covenant a temporary covenant, until the New Covenant would come.",a:true,e:"Statement 11, with Deuteronomy 30."},
 {bk:"exo",t:"tf",q:"The law came because of disobedience, but also as punishment.",a:false,e:"“But also as protection.”"},
 {bk:"exo",t:"tf",q:"The Ten Commandments come before the Covenant Code.",a:true,e:"Exodus 20, then 21:1 and following."},
 {bk:"exo",t:"tf",q:"The golden calf comes after the tabernacle is finished.",a:false,e:"Plans (25–31), golden calf (32), restoration (33–34), then the tabernacle is finished (35–40)."},

 /* ---------- Leviticus ---------- */
 {bk:"lev",t:"mc",q:"What is Leviticus 8–10?",a:"The priestly narrative",w:["The sacrificial laws","The laws to protect ritual cleanness","The Holiness Code"],e:"1–7 sacrifices, 8–10 priestly narrative, 11–16 cleanness, 17–27 Holiness Code."},
 {bk:"lev",t:"mc",q:"Which chapters are the Holiness Code?",a:"Leviticus 17–27",w:["Leviticus 11–16","Leviticus 1–7","Leviticus 8–10"],e:"Its key verse is 19:2."},
 {bk:"lev",t:"mc",q:"What is Yom Kippur?",a:"The Day of Atonement",w:["The Passover","The Sabbath","The Holiness Code"],e:"It closes the section on ritual cleanness (Leviticus 11–16)."},
 {bk:"lev",t:"mc",q:"Which is NOT one of the five offerings of Leviticus 1–7?",a:"The incense offering",w:["The guilt offering","The fellowship offering","The grain offering"],e:"Burnt, grain, fellowship, sin, guilt."},
 {bk:"lev",t:"mc",q:"What are the two categories of sacrifice?",a:"Voluntary and obligatory",w:["Clean and unclean","Burnt and unburnt","Priestly and royal"],e:"Clean and unclean belong to chapters 11–16."},
 {bk:"lev",t:"mc",q:"What did Nadab and Abihu do?",a:"They offered strange fire the LORD had not commanded",w:["They made a golden calf","They brought back an unbelieving report","They refused to bless the people"],e:"Leviticus 10:1–3. Fire came out from the LORD and consumed them."},
 {bk:"lev",t:"mc",q:"In Leviticus 9:24, what does the fire from before the LORD consume?",a:"The burnt offering",w:["Nadab and Abihu","The tent of meeting","The strange fire"],e:"That is 9:24. In 10:2 the fire consumes Nadab and Abihu."},
 {bk:"lev",t:"mc",q:"What does being in a state of impurity mean?",a:"Being restricted from worship in the community",w:["Being exiled from the land","Being barred from the priesthood for life","Being guilty of idolatry"],e:"Impurity is tied to the goal of the covenant and of creation: the worship of God."},
 {bk:"lev",t:"mc",q:"Fill in the key verse (Leviticus 19:2): “You shall be ____, for I the LORD your God am ____.”",a:"holy",w:["faithful","righteous","clean"],e:"Also 11:45 and 20:26."},
 {bk:"lev",t:"mc",q:"The slides name three things that are sanctified (set apart). Which three?",a:"God, the people, the tent",w:["God, the people, the land","Priest, king, prophet","God, the law, the land"],e:"A sanctified God, a sanctified people, a sanctified tent."},
 {bk:"lev",t:"mc",q:"What does “wholly other” say about God?",a:"The infinite distinction between divinity and humanity",w:["That He is far from His people","That He cannot be known","That He lives only in heaven"],e:"Thomas Mann. Yet this holy God dwells in their midst in the tabernacle."},
 {bk:"lev",t:"tf",q:"In Leviticus, God’s instructions enable Him to live among His chosen people.",a:true,e:"And enable His people to have fellowship with Him."},
 {bk:"lev",t:"tf",q:"The Holiness Code is Leviticus 11–16.",a:false,e:"It is 17–27. Chapters 11–16 are the laws to protect ritual cleanness."},
 {bk:"lev",t:"tf",q:"The burnt offering and the grain offering are two of the five offerings.",a:true,e:"With the fellowship, sin and guilt offerings."},

 /* ---------- Numbers ---------- */
 {bk:"num",t:"mc",q:"What is the pattern of Numbers 1–10, 11–25 and 26–36?",a:"Obedience, disobedience, obedience",w:["Disobedience, obedience, disobedience","Obedience, obedience, disobedience","Disobedience, disobedience, obedience"],e:"First generation, its death, second generation."},
 {bk:"num",t:"mc",q:"What stands at the head of both Numbers 1–10 and Numbers 26–36?",a:"A census",w:["A poem","A covenant","A battle"],e:"One census for each generation."},
 {bk:"num",t:"mc",q:"What happens in Numbers 11–25?",a:"The first generation dies and the second is born",w:["The second generation dies and a third is born","The first generation enters the land","The first generation is counted"],e:"Persistent disobedience as faith waned in the wilderness."},
 {bk:"num",t:"mc",q:"Which chapter shows the unbelief of the leadership?",a:"Numbers 20",w:["Numbers 13–14","Numbers 22–24","Numbers 25"],e:"Numbers 13–14 is the unbelief of the people."},
 {bk:"num",t:"mc",q:"In Numbers 1–10, the law was having its intended results. Which results?",a:"Blessing and order",w:["Fear and silence","Death and exile","Rest and wealth"],e:"The first acts were acts of obedience."},
 {bk:"num",t:"mc",q:"How many attempts to thwart God’s plan are turned to blessing in the Balaam story?",a:"Three",w:["Two","Four","Seven"],e:"As in Exodus 1, where three attempts also fail."},
 {bk:"num",t:"mc",q:"Which earlier chapter does the Balaam story mirror?",a:"Exodus 1",w:["Genesis 3","Exodus 32","Numbers 13"],e:"In both, Israel is “a mighty nation” and a ruler tries three times to stop them."},
 {bk:"num",t:"mc",q:"In Numbers 24:17, what will the scepter out of Israel crush?",a:"The forehead of Moab",w:["The head of the serpent","The gate of his enemies","The horn of the proud"],e:"“A star shall come out of Jacob.”"},
 {bk:"num",t:"mc",q:"Numbers 24:9 echoes which two passages of Genesis?",a:"Genesis 49:9 and Genesis 12:3",w:["Genesis 3:15 and Genesis 15:6","Genesis 1:28 and Genesis 17:2","Genesis 22:18 and Genesis 50:20"],e:"The lion of Judah, and “blessed are those who bless you.”"},
 {bk:"num",t:"mc",q:"Where in Numbers is Exodus 34:6–7 repeated?",a:"Numbers 14:18",w:["Numbers 10:11","Numbers 20:12","Numbers 24:17"],e:"“Slow to anger and abounding in steadfast love … but by no means clearing the guilty.”"},
 {bk:"num",t:"mc",q:"Fill in: “Salvation would come at the hands of an end-of-days ____ who would crush His enemies.”",a:"king",w:["prophet","priest","judge"],e:"Statement 14, from Balaam’s poem."},
 {bk:"num",t:"tf",q:"Failure to obey by faith in the wilderness frustrated the Lord’s desire to bless Israel.",a:false,e:"It brought death, but His desire to bless Israel was <i>not</i> frustrated."},
 {bk:"num",t:"tf",q:"Israel leaves Sinai in Numbers 10:11.",a:true,e:"They arrived in Exodus 19:1–2."},
 {bk:"num",t:"tf",q:"The unbelief of the people is shown in Numbers 20.",a:false,e:"Numbers 13–14. Chapter 20 is the leadership."},

 /* ---------- Deuteronomy ---------- */
 {bk:"deu",t:"mc",q:"What does the title “Deuteronomy” mean?",a:"Second law",w:["These are the words","Fifth book","The law of Moses"],e:"“These are the Words” is the Hebrew title."},
 {bk:"deu",t:"mc",q:"Where is Israel during Deuteronomy?",a:"On the plains of Moab",w:["At Mount Sinai","On the plains of Jericho","In the wilderness of Egypt"],e:"Session 8: “On the Plains of Moab.”"},
 {bk:"deu",t:"mc",q:"How is Deuteronomy built?",a:"Four speeches and a blessing",w:["Three speeches and a song","Two censuses and a poem","Ten commandments and a code"],e:"1:1–4:43, 4:44–28:68, 29:1–30:20, 31:1–32:47, then the blessing."},
 {bk:"deu",t:"mc",q:"Which time does the second speech (4:44–28:68) look at?",a:"The present",w:["The past","The future","The end of days"],e:"Speech 1 looks at the past; speeches 3 and 4 and the blessing look to the future."},
 {bk:"deu",t:"mc",q:"Where is the law of the king?",a:"Deuteronomy 17:14–20",w:["Deuteronomy 18:15–22","Deuteronomy 17:8–13","Deuteronomy 12:1–14"],e:"17:8–13 priests and judges; 18:15–22 the prophet; 12 the place of worship."},
 {bk:"deu",t:"mc",q:"Which is NOT one of the offices of Deuteronomy 17–18?",a:"The warrior",w:["The king","The prophet","Priests and judges"],e:"Priests and judges, king, prophet."},
 {bk:"deu",t:"mc",q:"According to Deuteronomy 8:2, with what was Israel’s heart tested?",a:"The manna",w:["The golden calf","The spies’ report","The waters of the Jordan"],e:"The heart is a theme: Genesis 6:5; Deuteronomy 8:2; 10; 30:6."},
 {bk:"deu",t:"mc",q:"Thomas Mann calls Deuteronomy the conclusion of the Pentateuchal narrative and what else?",a:"The definitive commentary on what precedes it",w:["The introduction to the Former Prophets","A second copy of the Sinai laws","The first of the Writings"],e:"“Both the conclusion … and the definitive commentary.”"},
 {bk:"deu",t:"mc",q:"Moses exhorted Israel to be faithful so that she might do what?",a:"Go in and possess the land",w:["Receive a king like the nations","Build a house for the LORD","Return from exile"],e:"Statement 15: faithful to the Lord and to the Mosaic Covenant, so that she might possess the land."},
 {bk:"deu",t:"mc",q:"Who does the Pentateuch expect, according to Deuteronomy 18?",a:"A prophet like Moses",w:["A king like David","A priest like Aaron","A judge like Samuel"],e:"Joshua is like Moses, but he is not this “second Moses.”"},
 {bk:"deu",t:"tf",q:"The Hebrew title of Deuteronomy means “second law.”",a:false,e:"The Hebrew title is “These are the Words.” “Second law” is what “Deuteronomy” means."},
 {bk:"deu",t:"tf",q:"Genesis 6:5 and 8:21 describe humanity’s heart as plagued with evil.",a:true,e:"That is why Deuteronomy 30:6 matters."},
 {bk:"deu",t:"tf",q:"The solution of the Pentateuch is a king from the line of Judah ruling a people whose hearts are prepared to believe.",a:true,e:"Statement 16, the conclusion about the whole Pentateuch (Deuteronomy 30:6)."},

 /* ---------- Joshua ---------- */
 {bk:"jos",t:"mc",q:"What is Joshua 13–21?",a:"The distribution of the land",w:["The conquest of the land","The farewells","The crossing of the Jordan"],e:"Conquest 1–12, distribution 13–21, farewells 22–24."},
 {bk:"jos",t:"mc",q:"Where and about when does the conquest begin?",a:"At Jericho, about 1406 BC",w:["At Ai, about 1406 BC","At Jericho, about 1446 BC","At Shittim, about 1446 BC"],e:"Forty years after the exodus of 1446 BC."},
 {bk:"jos",t:"mc",q:"Which question do the farewells (Joshua 22–24) ask?",a:"How do they stay in the land?",w:["How do they enter the land?","Who will be their king?","How is the land divided?"],e:"The possibility of apostasy against the eventuality of apostasy."},
 {bk:"jos",t:"mc",q:"What does Joshua hold up during the battle at Ai?",a:"His javelin",w:["His staff","His sword","The ark"],e:"Moses held up his staff against the Amalekites (Exodus 17)."},
 {bk:"jos",t:"mc",q:"Rahab’s confession (Joshua 2:9–11) uses words taken from which passage?",a:"Exodus 15:13–15",w:["Genesis 12:1–3","Numbers 24:17","Deuteronomy 6:4–9"],e:"“All the inhabitants of Canaan have melted away.”"},
 {bk:"jos",t:"mc",q:"Rahab’s scarlet cord matches which event in the Torah?",a:"The blood on the doorframes at the Passover",w:["The manna in the wilderness","The staff held up in battle","The stones set up at the Jordan"],e:"Both kept a household safe during a destruction."},
 {bk:"jos",t:"mc",q:"The spies hidden in stalks of flax match which story?",a:"Moses found in the reeds of the Nile",w:["The twelve spies in the land","Jacob going down to Egypt","The Hebrew midwives"],e:"The midwives match Rahab’s resourcefulness; the reeds match the flax."},
 {bk:"jos",t:"mc",q:"What stops in Joshua 5:12?",a:"The manna",w:["The Passover","Circumcision","The crossing"],e:"It began in Exodus 16."},
 {bk:"jos",t:"mc",q:"Why is Israel defeated at Ai?",a:"They violated the ban, and Yahweh’s presence was not with them",w:["They sent too many men","They had not kept the Passover","Joshua had lowered his javelin"],e:"Joshua 7. Like Israel going up without Yahweh in Numbers 14:39–45."},
 {bk:"jos",t:"mc",q:"What does Joshua do before the conquest that Moses did before the exodus?",a:"Circumcision",w:["A census","A sacrifice","A song"],e:"Moses’ son (Exodus 4:24–26); the men of Israel (Joshua 5:2–8)."},
 {bk:"jos",t:"mc",q:"How many spies does Joshua send?",a:"Two",w:["Twelve","Three","Seven"],e:"Moses sent twelve, and two believed."},
 {bk:"jos",t:"mc",q:"What does Joshua 21:43–45 say?",a:"Not one of the LORD’s good promises failed",w:["Israel did what was right in their own eyes","The people could not drive them all out","The LORD’s anger burned against Israel"],e:"The LORD gave Israel the land He had sworn to their fathers, and rest on every side."},
 {bk:"jos",t:"mc",q:"“A minor shadow portends a coming canopy of darkness” describes the end of which book?",a:"Joshua",w:["Judges","Deuteronomy","Kings"],e:"Dempster. The darkness is Judges."},
 {bk:"jos",t:"mc",q:"What is the “Deuteronomic History”?",a:"The blessings and cursings of Deuteronomy worked out in Israel’s history",w:["A second telling of the laws of Sinai","The history of how Deuteronomy was written","The story of Israel in the wilderness"],e:"Dempster. Its four measures: allegiance, worship, king, prophet."},
 {bk:"jos",t:"mc",q:"Which is NOT one of the four themes Deuteronomy gives the Former Prophets?",a:"Wisdom",w:["Allegiance","Worship","Prophet"],e:"Allegiance, worship, king, prophet."},
 {bk:"jos",t:"mc",q:"How do the slides sum up the Former Prophets?",a:"Into the land, 800+ years in the land, exile",w:["Out of Egypt, 40 years in the wilderness, into the land","Into the land, 400 years of judges, a king","Exile, return, a new temple"],e:"Joshua, Judges, Samuel, Kings."},
 {bk:"jos",t:"tf",q:"Joshua is the “second Moses” that the Pentateuch expects in Deuteronomy 18.",a:false,e:"He is like Moses, but not that second Moses. He must carefully follow the book of Moses."},
 {bk:"jos",t:"tf",q:"According to Joshua, Israel drove out every people of the land without exception.",a:false,e:"“… except”: 11:22; 15:63; 16:10; 17:12–13; 19:47. Israel dwelt in <i>part</i> of the land."},
 {bk:"jos",t:"tf",q:"The Conquest was not the final fulfillment of God’s promises.",a:true,e:"Sailhamer: a future fulfillment still awaited God’s people."},
 {bk:"jos",t:"tf",q:"Both Moses and Joshua are called “servant of Yahweh.”",a:true,e:"One of the parallels between them."},

 /* ---------- Judges ---------- */
 {bk:"jdg",t:"mc",q:"What is Judges 3:7–16:31?",a:"The Book of Deliverers: cycles of failure",w:["The introduction: incomplete obedience","Internal strife: idolatry and immorality","The farewells"],e:"Introduction 1:1–3:6; deliverers 3:7–16:31; internal strife 17–21."},
 {bk:"jdg",t:"mc",q:"In the cycle, what comes right after servitude?",a:"Supplication",w:["Salvation","Security","Sin"],e:"Sin, servitude, supplication, salvation, security."},
 {bk:"jdg",t:"mc",q:"In the cycle, what is “supplication”?",a:"Crying out to Yahweh, as they did in Egypt",w:["Serving the oppressors the Lord sent","Doing evil in the eyes of the Lord","Rest for the land"],e:"Judges 2:18; 3:9."},
 {bk:"jdg",t:"mc",q:"How does salvation come in the cycle?",a:"Through the judge, by the Spirit",w:["Through the king, by the prophet","Through the priest, by sacrifice","Through the people, by repentance"],e:"Deliverance through the judge, by the Spirit."},
 {bk:"jdg",t:"mc",q:"Which word marks the “security” step of the cycle?",a:"Rest",w:["Peace","Blessing","Order"],e:"Judges 3:11, 30."},
 {bk:"jdg",t:"mc",q:"Which judge is the ideal pattern of a judge?",a:"Othniel",w:["Ehud","Gideon","Samson"],e:"The first one. Samson, the last, is a shadow of what a judge should be."},
 {bk:"jdg",t:"mc",q:"Which judge is “a shadow of what a judge should be”?",a:"Samson",w:["Jephthah","Gideon","Othniel"],e:"The judges go downhill from Othniel to Samson."},
 {bk:"jdg",t:"mc",q:"In the slides’ list, which judge comes right after Deborah?",a:"Gideon",w:["Ehud","Jephthah","Samson"],e:"Othniel, Ehud, Deborah, Gideon, Jephthah, Samson."},
 {bk:"jdg",t:"mc",q:"Which two words describe Israel’s failures in Judges 17–21?",a:"Idolatry and immorality",w:["Famine and plague","War and exile","Pride and unbelief"],e:"“Pictures of Israel’s failures.”"},
 {bk:"jdg",t:"mc",q:"In the introduction (Judges 1:1–3:6), what does incomplete obedience become?",a:"A snare",w:["A blessing","A covenant","A cycle"],e:"Joshua’s “except” list comes due."},
 {bk:"jdg",t:"mc",q:"Which is NOT one of the oppressors the slides name in Judges?",a:"Assyrians",w:["Moabites","Midianites","Philistines"],e:"Assyria belongs to Kings (722 BC)."},
 {bk:"jdg",t:"mc",q:"Fill in (Judges 21:25): “In those days there was no ____ in Israel; everyone did what was right in his own eyes.”",a:"king",w:["judge","prophet","priest"],e:"Also 17:6; 18:1; 19:1."},
 {bk:"jdg",t:"tf",q:"In class, the Judges statement included Israel’s need “to acknowledge Yahweh as King.”",a:true,e:"“… and to await a righteous human king.”"},
 {bk:"jdg",t:"tf",q:"Samson is presented as the ideal pattern of a judge.",a:false,e:"Othniel is. Samson is a shadow of what a judge should be."},
 {bk:"jdg",t:"tf",q:"The refrain “there was no king in Israel” belongs to Judges 17–21.",a:true,e:"17:6; 18:1; 19:1; 21:25."},
 {bk:"jdg",t:"tf",q:"The cycle of the judges ends each time with servitude.",a:false,e:"It ends with security (“rest”); servitude is the second step."},

 /* ---------- Samuel ---------- */
 {bk:"sam",t:"mc",q:"What is 2 Samuel 21–24?",a:"The appendix",w:["David’s kingship","The Davidic covenant","Saul’s kingship"],e:"Samuel (1 Sam 1–7), Saul (8–15), David (1 Sam 16–2 Sam 20), appendix (2 Sam 21–24)."},
 {bk:"sam",t:"mc",q:"How do the slides label Saul (1 Samuel 8–15)?",a:"A king like the nations",w:["God’s king","Prophet and judge","The warrior king"],e:"Samuel is prophet and judge; David is God’s king."},
 {bk:"sam",t:"mc",q:"Which three poems give Samuel its structure?",a:"Hannah’s song, the Davidic covenant, David’s songs",w:["Hannah’s song, Saul’s lament, David’s songs","Moses’ song, Hannah’s song, David’s songs","Hannah’s song, David’s lament, Solomon’s prayer"],e:"1 Samuel 2:1–10; 2 Samuel 7; 2 Samuel 22–23."},
 {bk:"sam",t:"mc",q:"What do the slides call Hannah’s song?",a:"The “table of contents” of the book",w:["The “appendix” of the book","The “second law” of the book","The “definitive commentary” on the book"],e:"It is the script or guiding principle by which the story proceeds."},
 {bk:"sam",t:"mc",q:"Which is NOT one of the lines of Hannah’s song on the slides?",a:"The Lord gives the land by holy war",w:["The Lord brings down the proud and exalts the humble","The Lord cannot be thwarted by human military power","The Lord will empower His king with strength"],e:"Holy war is the statement for Joshua."},
 {bk:"sam",t:"mc",q:"“He brings low; He also exalts.” Who is brought low opposite Samuel?",a:"Eli",w:["Saul","Peninnah","Jonathan"],e:"Hannah and Peninnah; Samuel and Eli; David and Saul."},
 {bk:"sam",t:"mc",q:"Where is the ark narrative?",a:"1 Samuel 4:1–7:1",w:["1 Samuel 1:1–2:11","1 Samuel 8–15","2 Samuel 21–24"],e:"Inside Samuel’s judgeship (1 Samuel 1–7)."},
 {bk:"sam",t:"mc",q:"“To obey is better than sacrifice” belongs to which offense of Saul?",a:"The second, 1 Samuel 15",w:["The first, 1 Samuel 13","The first, 1 Samuel 8","The second, 1 Samuel 28"],e:"The first offense (13:1–15): “you have not kept the commandment of Yahweh your God.”"},
 {bk:"sam",t:"mc",q:"Why was Saul rejected as king?",a:"He failed to listen to the words of the Lord through the prophet",w:["He failed to defeat the enemies of Israel","He asked for a kingdom like the nations","He failed to bring the ark to Jerusalem"],e:"“Because you have rejected the word of the LORD, He has also rejected you from being king.”"},
 {bk:"sam",t:"mc",q:"Selection, confirmation, recognition: which chapter is the confirmation of David?",a:"1 Samuel 17",w:["1 Samuel 16","1 Samuel 18","2 Samuel 7"],e:"Selection 16, confirmation 17, recognition 18."},
 {bk:"sam",t:"mc",q:"Which phrase is repeated about David again and again?",a:"“The LORD was with him”",w:["“He did what was right in his own eyes”","“His heart was wholly devoted”","“He walked in the ways of his father”"],e:"16:18; 17:37; 18:12, 14, 28; 2 Samuel 5:10; 7:9."},
 {bk:"sam",t:"mc",q:"Which is NOT one of the ways David shows he is a man after God’s own heart?",a:"He builds a house for the LORD",w:["He respects the king as God’s anointed","He listens to God’s word through the prophet","He mourns the deaths of Saul and Jonathan"],e:"The temple is Solomon’s."},
 {bk:"sam",t:"mc",q:"Where is the Davidic covenant?",a:"2 Samuel 7",w:["1 Samuel 16","2 Samuel 22","1 Kings 8"],e:"Also 1 Chronicles 17."},
 {bk:"sam",t:"mc",q:"What did God promise David?",a:"An eternal kingdom for his seed",w:["A temple built by his own hands","Rest from every enemy for Israel","The return of the ark to Shiloh"],e:"Statement 23. The seed is the Messiah."},
 {bk:"sam",t:"mc",q:"What did the people’s demand for a king like the nations amount to?",a:"A rejection of God’s rule over them",w:["A rejection of Samuel’s sons","A request the law had never foreseen","A return to the days of the judges"],e:"Statement 20. Deuteronomy 17 had already foreseen a king."},
 {bk:"sam",t:"tf",q:"The Spirit of the LORD came mightily upon David from the day he was selected.",a:true,e:"1 Samuel 16:13: “from that day forward.”"},
 {bk:"sam",t:"tf",q:"Saul was rejected because he lost the battle with the Philistines.",a:false,e:"Because he failed to listen to the words of the Lord through the prophet."},
 {bk:"sam",t:"tf",q:"David mourns the deaths of Saul and Jonathan in 2 Samuel 1.",a:true,e:"One of the marks of a man after God’s own heart."},
 {bk:"sam",t:"tf",q:"Hannah’s song is found in 2 Samuel 22.",a:false,e:"1 Samuel 2:1–10. David’s songs are in 2 Samuel 22–23."},

 /* ---------- Kings ---------- */
 {bk:"kgs",t:"mc",q:"What is 1 Kings 12–2 Kings 17?",a:"Judah and Israel, the divided kingdom",w:["Solomon’s reign","Judah alone","The exile to Babylon"],e:"Solomon (1 Kgs 1–11); the divided kingdom; Judah alone (2 Kgs 18–25)."},
 {bk:"kgs",t:"mc",q:"Which date do the slides give for the death of David?",a:"970 BC",w:["1010 BC","930 BC","722 BC"],e:"Kings runs from 970 BC to the release of Jehoiachin in 561 BC."},
 {bk:"kgs",t:"mc",q:"Who exiled the Northern Kingdom, and when?",a:"Assyria, 722 BC",w:["Babylon, 722 BC","Assyria, 586 BC","Babylon, 586 BC"],e:"Babylon exiled Judah in 587/6 BC."},
 {bk:"kgs",t:"mc",q:"What happens in 561 BC?",a:"Jehoiachin is released",w:["Jerusalem falls","Samaria falls","The temple is finished"],e:"The epilogue of Kings (2 Kings 25:22–30): hope?"},
 {bk:"kgs",t:"mc",q:"Which chapters of 1 Kings are about Solomon’s temple?",a:"1 Kings 5–9",w:["1 Kings 1–3","1 Kings 3–4","1 Kings 10"],e:"Established 1–3, wisdom 3–4, temple 5–9, wealth and glory 10, fall 11."},
 {bk:"kgs",t:"mc",q:"Which chapter is Solomon’s fall?",a:"1 Kings 11",w:["1 Kings 8","1 Kings 10","1 Kings 12"],e:"Chapter 12 is the division of the kingdom."},
 {bk:"kgs",t:"mc",q:"Which two verses show the change in Solomon’s heart?",a:"1 Kings 8:61 and 11:4",w:["1 Kings 2:2 and 3:6","1 Kings 4:29 and 10:7","1 Kings 13:1 and 2 Kings 23:15"],e:"“Wholly devoted” in 8:61; “not wholly devoted” in 11:4."},
 {bk:"kgs",t:"mc",q:"What turned Solomon’s heart away (1 Kings 11:4)?",a:"His wives, after other gods",w:["His wealth, after glory","His wisdom, after pride","His enemies, after war"],e:"“When Solomon was old, his wives turned his heart away after other gods.”"},
 {bk:"kgs",t:"mc",q:"Why do the slides say Solomon is not the promised seed?",a:"His kingdom does not make it past the first generation",w:["He was not a son of David","He never finished the temple","He never ruled over all Israel"],e:"No support that Solomon established the everlasting kingdom. The seed is the Messiah."},
 {bk:"kgs",t:"mc",q:"Who was the first king of the Northern Kingdom?",a:"Jeroboam",w:["Rehoboam","Ahab","Jehu"],e:"Jeroboam, of Ephraim. Rehoboam, of Judah, ruled the south."},
 {bk:"kgs",t:"mc",q:"What was the capital of the Northern Kingdom?",a:"Samaria",w:["Bethel","Dan","Jerusalem"],e:"Bethel and Dan were its places of worship; Jerusalem was Judah’s capital."},
 {bk:"kgs",t:"mc",q:"Where did Jeroboam set up worship?",a:"Bethel and Dan",w:["Samaria and Dan","Bethel and Shiloh","Samaria and Jerusalem"],e:"He immediately plunged the nation into idolatry."},
 {bk:"kgs",t:"mc",q:"Under which king did Elijah minister in 1 Kings 17–19?",a:"Ahab",w:["Ahaziah","Jehu","Jeroboam"],e:"In 2 Kings 1 he prophesies about the death of Ahaziah."},
 {bk:"kgs",t:"mc",q:"What did Elisha receive?",a:"A double portion",w:["A chariot ride to heaven","The throne of Israel","The book of the Torah"],e:"The chariot ride is Elijah’s (2 Kings 2). Elisha did twice as many miracles."},
 {bk:"kgs",t:"mc",q:"To which king did Elisha prophesy, “one of the few reformers”?",a:"Jehu",w:["Ahab","Josiah","Hezekiah"],e:"2 Kings 10:18 and following. Josiah and Hezekiah are kings of Judah."},
 {bk:"kgs",t:"mc",q:"In 2 Kings 18–25, who comes between Manasseh and Josiah?",a:"Amon",w:["Hezekiah","Jehoiachin","Ahaz"],e:"Hezekiah, Manasseh, Amon, Josiah."},
 {bk:"kgs",t:"mc",q:"What do the slides say about Josiah’s strict adherence to Torah?",a:"It does not turn the Lord’s anger from Judah",w:["It delays the exile of the Northern Kingdom","It makes him the promised seed of David","It brings the ark back to Jerusalem"],e:"“Even Josiah’s strict adherence to Torah doesn’t turn the Lord’s anger from Judah.”"},
 {bk:"kgs",t:"mc",q:"1 Kings 13:1–2 is a prophecy. Where is it fulfilled?",a:"2 Kings 23:15–16",w:["2 Kings 17","2 Kings 2","1 Kings 18"],e:"In the reign of Josiah (2 Kings 22:1–23:30)."},
 {bk:"kgs",t:"mc",q:"Why did the Lord patiently preserve Judah?",a:"Because of the promises He made to David",w:["Because of the reforms of Josiah","Because the temple stood in Jerusalem","Because Judah never served other gods"],e:"Statement 28: despite the long line of disobedient kings."},
 {bk:"kgs",t:"mc",q:"Samuel and Kings picture the future King in the likeness of David and Solomon. Which pairing is right?",a:"David the warrior king, Solomon the wise king",w:["David the wise king, Solomon the warrior king","David the priest king, Solomon the wise king","David the warrior king, Solomon the prophet king"],e:"Statement 24. Solomon’s wisdom: 1 Kings 3:6–14; 4:29–34."},
 {bk:"kgs",t:"mc",q:"Which passage do the slides give for wisdom and the seed of David?",a:"Isaiah 11",w:["Jeremiah 7","Hosea 3","Daniel 7"],e:"With 1 Corinthians 1:30 and Colossians 2:1–3."},
 {bk:"kgs",t:"mc",q:"In his last words to Solomon (1 Kings 2:2–4), what does David tell him to walk by?",a:"What is written in the Law (Torah) of Moses",w:["The words of Samuel the prophet","The counsel of the elders","The wisdom the LORD would give him"],e:"The king is under the Torah, as Deuteronomy 17 says."},
 {bk:"kgs",t:"tf",q:"Babylon exiled the Northern Kingdom in 722 BC.",a:false,e:"Assyria did. Babylon exiled Judah in 587/6 BC."},
 {bk:"kgs",t:"tf",q:"Elijah and Elisha were both prophets in the Northern Kingdom.",a:true,e:"They preserve faith during a corrupt generation; thus hope for the future."},
 {bk:"kgs",t:"tf",q:"Rehoboam was the first king of the Northern Kingdom.",a:false,e:"Jeroboam was. Rehoboam was the first king of Judah after Solomon."},
 {bk:"kgs",t:"tf",q:"Both Israel and Judah failed to believe, and therefore to remain allegiant to Yahweh.",a:true,e:"Statement 29: Israel in 722 BC, Judah in 587/6 BC."},
 {bk:"kgs",t:"tf",q:"The epilogue of Kings ends with the release of Jehoiachin.",a:true,e:"2 Kings 25:22–30, in 561 BC."},
 {bk:"kgs",t:"tf",q:"Solomon’s heart was wholly devoted to the LORD, as David’s had been.",a:false,e:"1 Kings 11:4: it was <i>not</i> wholly devoted, as the heart of David his father had been."}
];

/* ---- matching sets: he lists "matching" as a question type ---- */
var MID_PAIRS = [
 {name:"People", left:"Who", right:"What the slides say", pairs:[
  ["Othniel", "The ideal pattern of a judge"], ["Samson", "A shadow of what a judge should be"], ["Jeroboam", "First king of the Northern Kingdom"],
  ["Rehoboam", "First king of Judah after Solomon"], ["Balaam", "Spoke of a star out of Jacob"], ["Rahab", "Hid two spies in stalks of flax"],
  ["Nadab and Abihu", "Offered strange fire"], ["Hannah", "Her song is the “table of contents”"], ["Elijah", "Prophet during the reign of Ahab"],
  ["Elisha", "Received a double portion"], ["Jehu", "One of the few reformers in the north"], ["Josiah", "Strict adherence to Torah"],
  ["Jehoiachin", "Released in 561 BC"], ["Saul", "A king like the nations"], ["Solomon", "The wise king"], ["David", "The warrior king"]]},
 {name:"Dates", left:"Date", right:"Event", pairs:[
  ["1446 BC", "The exodus"], ["722 BC", "Israel exiled by Assyria"], ["587/6 BC", "Judah exiled by Babylon"], ["about 1406 BC", "The conquest begins at Jericho"],
  ["970 BC", "The death of David"], ["561 BC", "The release of Jehoiachin"], ["about 2092 BC", "Abraham entered Canaan"], ["about 1876 BC", "Jacob’s family entered Egypt"]]},
 {name:"Passages", left:"Passage", right:"What it says", pairs:[
  ["Genesis 3:15", "The seed of the woman"], ["Genesis 15:6", "He believed, and it was counted as righteousness"], ["Genesis 49:8–10", "The scepter shall not depart from Judah"],
  ["Exodus 34:6–7", "Merciful and gracious, slow to anger"], ["Leviticus 19:2", "You shall be holy, for I am holy"], ["Numbers 24:17", "A star out of Jacob, a scepter out of Israel"],
  ["Deuteronomy 30:6", "The heart, and the New Covenant"], ["Deuteronomy 17:14–20", "The law of the king"], ["Deuteronomy 18:15–22", "The prophet like Moses"],
  ["Joshua 21:43–45", "Not one of the good promises failed"], ["Judges 21:25", "No king in Israel"], ["1 Samuel 15:22", "To obey is better than sacrifice"],
  ["2 Samuel 7", "The Davidic covenant"], ["1 Kings 11:4", "His heart was not wholly devoted"], ["2 Kings 17", "The exile of the Northern Kingdom"]]},
 {name:"Books", left:"Book", right:"Its structure", pairs:[
  ["Genesis", "Primeval history, then the patriarchs"], ["Exodus", "Egypt, wilderness, Sinai"], ["Leviticus", "Sacrifices, priests, cleanness, Holiness Code"],
  ["Numbers", "Obedience, disobedience, obedience"], ["Deuteronomy", "Four speeches and a blessing"], ["Joshua", "Conquest, distribution, farewells"],
  ["Judges", "Introduction, deliverers, internal strife"], ["Samuel", "Samuel, Saul, David, appendix"], ["Kings", "Solomon, the divided kingdom, Judah alone"]]},
 {name:"Terms", left:"Term", right:"Meaning", pairs:[
  ["torah", "Instruction, teaching or law"], ["Pentateuch", "Genesis through Deuteronomy"], ["Tanak", "Torah, Prophets, Writings"], ["Septuagint (LXX)", "The Old Testament in Greek"],
  ["Masoretic Text (MT)", "The Old Testament in Hebrew"], ["Elohim", "“God,” as in Genesis 1"], ["Adonai", "“Lord,” said in place of the name"], ["El Shaddai", "God Almighty"],
  ["Yom Kippur", "The Day of Atonement"], ["Former Prophets", "Joshua, Judges, Samuel, Kings"], ["Latter Prophets", "Isaiah, Jeremiah, Ezekiel, The Twelve"], ["Horeb", "Sinai"]]}
];

/* ---- pure helpers ---- */
var MID_QNAMES = {int:"Introduction", gen:"Genesis", exo:"Exodus", lev:"Leviticus", num:"Numbers", deu:"Deuteronomy", jos:"Joshua", jdg:"Judges", sam:"Samuel", kgs:"Kings"};
function midFromBank(i){
  var b = MID_QB[i], q = {key:"mid:"+i, tp:"mid", bk:b.bk, sec:null, ap:false, kind:b.t, text:b.q, explain:b.e};
  if(b.t === "tf"){
    q.opts = [{html:"True", ok:b.a === true, cls:"tf"}, {html:"False", ok:b.a === false, cls:"tf"}];
    q.miss = strip(b.q) + " — <b>" + (b.a ? "True" : "False") + "</b>";
  } else {
    q.opts = shuffle([{html:b.a, ok:true}].concat(b.w.map(function(w){ return {html:w, ok:false}; })));
    q.miss = strip(b.q) + " — <b>" + b.a + "</b>";
  }
  return q;
}
/* bk = one book, or nothing for the whole midterm (then every book is represented) */
function midQuiz(n, bk){
  var idx = [], i;
  for(i = 0; i < MID_QB.length; i++) if(!bk || MID_QB[i].bk === bk) idx.push(i);
  idx = shuffle(idx);
  if(!bk){
    var first = [], rest = [], seen = {};
    idx.forEach(function(j){ var k = MID_QB[j].bk; if(!seen[k]){ seen[k] = 1; first.push(j); } else rest.push(j); });
    idx = shuffle(first.concat(rest.slice(0, Math.max(0, n - first.length))));
  }
  return idx.slice(0, n).map(midFromBank);
}
function midByKeys(keys){ return shuffle(keys.map(function(k){ return midFromBank(parseInt(String(k).split(":")[1], 10)); })); }
function midMatchRound(setIdx, n){
  var s = MID_PAIRS[setIdx == null ? Math.floor(Math.random() * MID_PAIRS.length) : setIdx];
  var items = shuffle(s.pairs).slice(0, n || 6).map(function(p, i){ return {id:i, left:p[0], right:p[1]}; });
  return {items:items, leftTitle:s.left, rightTitle:s.right, name:s.name};
}
