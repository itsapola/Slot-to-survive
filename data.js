// Fictional universe authoring data. Update canonical facts here; browser edits remain local.
window.STORY_DATA = {
  "people": [
    {
      "id": "jake",
      "name": "Jake Mercer",
      "nickname": "The Kid",
      "age": 46,
      "team": "Mercer Racing",
      "role": "Driver · Team captain",
      "backstory": "Three-time defending champion; at 46 he is still the league’s young prodigy. An insurance salesman who joined at 32, Jake is warm, naturally quick, playful and popular on camera. His first title came in 2023; he followed it with wins in 2024 and 2025.",
      "goal": "Win a fourth consecutive championship and make the club accessible to new racers.",
      "flaw": "Wants to be liked even while beating everyone; occasionally needles Gary because he thinks the accusations are funny.",
      "relationships": "Richard: archrival; Martin: friendly to his face, target of Martin’s obsession; Dennis: teammate and mentor; Elaine and Dale: teammates; Linda: wife; Deborah: sponsor; Gary: accuser."
    },
    {
      "id": "richard",
      "name": "Richard Voss",
      "nickname": "The Colonel",
      "age": 69,
      "team": "Voss Competition",
      "role": "Driver · Team captain",
      "backstory": "Seven-time champion and founding-era member. A retired electrical contractor who treats the club as his personal legacy and still resents the move away from traditional equipment. Never served in the military despite his nickname. His seventh title in 2017 is disputed.",
      "goal": "Win an eighth title, defeat Jake, and preserve the old guard’s control.",
      "flaw": "Confuses respect with obedience; rails against recruitment problems while belittling newcomers and women.",
      "relationships": "Jake: rival; Gordon, Frank, Terry: teammates; Stanley: estranged brother; Dennis: former closest friend; Elaine: rival-team driver; Neil: rulemaking ally."
    },
    {
      "id": "gary",
      "name": "Gary Blevins",
      "nickname": "The Truth",
      "age": 58,
      "team": "Independent",
      "role": "Driver · Self-appointed investigator",
      "backstory": "Latino hobbyist and former telecom technician. Best finish: fourth. Maintains a sprawling dossier about suspected cheating, motors, magnets and committee corruption. Less theatrical in person than his posts suggest.",
      "goal": "Expose institutional corruption and finally earn a title.",
      "flaw": "Cannot separate legitimate technical concerns from his resentment over losing.",
      "relationships": "Jake: screw allegations; Neil: frequent target; Gordon: suspected mastermind; Pam: reluctant fact-checker; Val: sought-after expert."
    },
    {
      "id": "martin",
      "name": "Martin Keller",
      "nickname": "Speedy",
      "age": 62,
      "team": "Keller Motorsport · Independent",
      "role": "Driver · Perennial runner-up",
      "backstory": "A reserved Asian municipal accountant who has finished second four straight seasons (2022–2025). In 2017 a timely protest about an uncounted lap was wrongly rejected. Has installed an elaborate six-lane circuit in his garage while telling his wife he is renovating.",
      "goal": "Finally beat Jake and win the title he believes should already be his.",
      "flaw": "Compulsively prepares and conceals spending rather than admitting how much winning matters.",
      "relationships": "Jake: obsessive rival who thinks they are friends; Richard: 2017 adversary; Susan: wife; Brent: former friend and chassis antagonist; Dale: equipment and venue link."
    },
    {
      "id": "terry",
      "name": "Terry McCluskey",
      "nickname": "T-Bone",
      "age": 62,
      "team": "Voss Competition",
      "role": "Driver · Veteran wildcard",
      "backstory": "Retired auto-parts distributor and long-time SlotTime loyalist. Loud, emotional and famously offended by everything from a moved pit chair to an allegedly stolen sandwich. Treats minor racing incidents as personal betrayals.",
      "goal": "Win one title before retirement and be taken seriously.",
      "flaw": "Misreads inconvenience as intentional disrespect.",
      "relationships": "Richard: ally; Gordon and Frank: teammates; Brent: pit-table feud; Elaine: rare calming influence; Valerie: condescending technical rival."
    },
    {
      "id": "brent",
      "name": "Brent Whitmore",
      "nickname": "Fast Hands",
      "age": 72,
      "team": "Whitmore Performance · Independent",
      "role": "Driver · Owner / sponsor",
      "backstory": "Slim, clean-shaven, wealthy owner of three tire shops. His motorsport nickname increasingly outpaces his reflexes. Buys MRZ equipment in bulk, uses external technicians and talks about racing as a business opportunity.",
      "goal": "Secure a championship and gain commercial influence over the league.",
      "flaw": "Believes every problem can be solved with money; cannot accept Jake getting better results with less spending.",
      "relationships": "Deborah: ex-wife and sponsor of Jake; Martin: chassis dispute; Jake: equipment rival; Dale: potential investment partner; Gordon: political opponent."
    },
    {
      "id": "dennis",
      "name": "Dennis Callahan",
      "nickname": "DC",
      "age": 76,
      "team": "Mercer Racing",
      "role": "Driver · Returning veteran",
      "backstory": "Black 76-year-old racer returning after a decade away. Left the 2016 Reno invitational after a personal betrayal by Richard involving setup information and a motel bill. Observant, guarded and still remarkably capable.",
      "goal": "Finish unfinished business and reclaim his place in the sport.",
      "flaw": "Would rather cultivate mystery than admit embarrassment.",
      "relationships": "Richard: former friend; Jake: teammate; Stanley: knows part of the Reno story; Gary: desperate to interview him."
    },
    {
      "id": "elaine",
      "name": "Elaine Pritchard",
      "nickname": "",
      "age": 68,
      "team": "Mercer Racing",
      "role": "Driver · League treasurer",
      "backstory": "Longtime league treasurer, former administrator and Gordon’s estranged wife. After decades handling registration and finances, she now races seriously and is sharper than most competitors realize.",
      "goal": "Race on her own terms and keep league finances honest.",
      "flaw": "Enjoys her leverage, sometimes retaliates with devastatingly precise paperwork.",
      "relationships": "Gordon: estranged husband/opposing team; Jake, Dale, Dennis: teammates; Stanley: confidant; Terry: calming influence; Deborah: ally."
    },
    {
      "id": "gordon",
      "name": "Gordon Pritchard",
      "nickname": "",
      "age": 72,
      "team": "Voss Competition",
      "role": "Driver · League president / race director",
      "backstory": "League president since his contested 2008 election. Runs meetings like a national governing body. Also races, directs events, assigns lanes and certifies results while claiming perfect impartiality.",
      "goal": "Retain presidency and repel Brent’s takeover ambitions.",
      "flaw": "Rules do not apply to him when he is the one interpreting them.",
      "relationships": "Elaine: estranged wife and rival; Richard, Terry, Frank: teammates; Neil: officiating ally; Jake: recruitment critic; Stanley: knows election history."
    },
    {
      "id": "neil",
      "name": "Neil Forsythe",
      "nickname": "",
      "age": 61,
      "team": "Independent",
      "role": "Driver · Chief steward / technical director",
      "backstory": "Former building inspector who wrote exhaustive racing regulations in Word. Inspecting his own winning car does not strike him as a conflict. Neil is married to Valerie Chen, an actual engineer he routinely patronizes.",
      "goal": "Protect regulatory authority and demonstrate the seriousness of competitive slot racing.",
      "flaw": "His rules contradict one another and he resents technically competent correction.",
      "relationships": "Valerie: wife; Gordon: president and patron; Richard: technical committee; Jake and Gary: frequent appeals; all racers: inspections."
    },
    {
      "id": "frank",
      "name": "Frank D’Amato",
      "nickname": "",
      "age": 64,
      "team": "Voss Competition",
      "role": "Driver · Owner of D’Amato Raceway",
      "backstory": "Hosted the founding race in his parents’ basement in 1987. Relocated the growing club to a strip-mall storefront in 1998, now defended as a historic institution. Territorial about his circuit, kitchenette and lane power.",
      "goal": "Keep the championship finale at D’Amato Raceway and preserve the track.",
      "flaw": "Can't afford needed repairs; treats criticism of wiring as a personal attack.",
      "relationships": "Dale: rival venue owner; Richard, Terry, Gordon: teammates; Martin: potential rival garage; league: his paying tenant."
    },
    {
      "id": "dale",
      "name": "Dale Cooper",
      "nickname": "Big Dale",
      "age": 59,
      "team": "Mercer Racing",
      "role": "Driver · Owner of Cooper International Raceway",
      "backstory": "Sales-minded proprietor of a flashy six-lane track with computerized timing and branded pit stations. ‘International’ has never described the entrants. A serious threat to Frank's venue.",
      "goal": "Host the season finale and expand commercially.",
      "flaw": "Overextended his finances and needs bookings.",
      "relationships": "Frank: bitter rival; Jake, Dennis, Elaine: teammates; Brent: possible investor; Martin: envy and technical inspiration."
    },
    {
      "id": "stanley",
      "name": "Stanley Voss",
      "nickname": "",
      "age": 67,
      "team": "Independent",
      "role": "Driver · Former league secretary",
      "backstory": "Richard's quiet younger brother and former secretary. In 2017 he altered the committee minutes after Gordon misfiled Martin’s timely protest, then resigned. Still races and attends meetings with an old briefcase.",
      "goal": "Protect what remains of his reputation and eventually set the record straight.",
      "flaw": "Protected family and the institution at Martin's expense.",
      "relationships": "Richard: estranged brother; Elaine: confidante with original photocopy; Gordon: former ally; Martin: wronged racer; Dennis: shared history."
    },
    {
      "id": "elliot",
      "name": "Elliot Briggs",
      "nickname": "",
      "age": 57,
      "team": "Independent",
      "role": "Driver · English race commentator",
      "backstory": "English expatriate who races in the very events he commentates on. Treats tiny deslottings as existential motorsport disasters and considers his own calls completely impartial, including while involved in contact.",
      "goal": "Become a recognized international motorsport commentator.",
      "flaw": "His commentary is grandiose and plainly biased during his heats.",
      "relationships": "Terry: racing and commentary feuds; Richard: grammar and terminology debates; Jake: appreciative audience; Simon: documentary collaborator."
    },
    {
      "id": "val",
      "name": "Valerie Chen",
      "nickname": "Neil’s Wife",
      "age": 48,
      "team": "Technical adviser · Noncompeting",
      "role": "Engineer · Neil’s spouse",
      "backstory": "Accomplished mechanical engineer who attends the league with her husband Neil, but is still introduced as ‘Neil's wife’ despite repeated corrections. Has no interest in being a mascot for the league’s tokenistic inclusion initiatives.",
      "goal": "Be treated as an engineer and by her actual name.",
      "flaw": "Impatient, brutally direct, and knows exactly how technically confused this community is.",
      "relationships": "Neil: husband; Elaine: friend; Jake: treats her as an equal; Richard and Gordon: dismissive; Gary: constantly seeks validation."
    },
    {
      "id": "simon",
      "name": "Simon Beck",
      "nickname": "",
      "age": 43,
      "team": "Production crew",
      "role": "Presenter · Documentary director",
      "backstory": "Former regional television reporter convinced a documentary about slot cars will become a prestige investigative breakthrough. Frames every disagreement as a battle for the soul of motorsport.",
      "goal": "Deliver an acclaimed series and land season two.",
      "flaw": "Mistakes drama for evidence; susceptible to manufactured intrigue.",
      "relationships": "Pam: producer and skeptical counterpart; Gary: enthusiastic source; Gordon: reluctant interviewee; Jake: camera-friendly subject."
    },
    {
      "id": "pam",
      "name": "Pamela Rourke",
      "nickname": "Pam",
      "age": 56,
      "team": "Production crew",
      "role": "Investigative documentary producer",
      "backstory": "Former local journalist now working alongside Simon, obtaining minutes, conducting interviews and checking claims. Initially expects eccentric hobbyists; discovers genuine administrative manipulation around 2017.",
      "goal": "Uncover a defensible story without letting Simon invent one.",
      "flaw": "More invested in this tiny league than she admits.",
      "relationships": "Simon: reporting partner and foil; Elaine and Stanley: sources; Gary: occasionally useful but unreliable; Val: trusted technical perspective."
    },
    {
      "id": "al",
      "name": "Albert Morris",
      "nickname": "Big Al",
      "age": 67,
      "team": "Sponsor",
      "role": "Owner · Morris Heating & Air",
      "backstory": "Long-time HVAC business owner whose annual $200 sponsorship has become his claim to kingmaker status. Proud, generous and quick to interpret logo placement as disrespect.",
      "goal": "Retain top-sponsor status and naming rights to an invitational.",
      "flaw": "Contribution is modest; sense of ownership is not.",
      "relationships": "Gordon: negotiates sponsorship; Frank: provides venue access; Terry: loyal admirer; Brent: rival funder."
    },
    {
      "id": "deborah",
      "name": "Deborah Whitmore",
      "nickname": "",
      "age": 53,
      "team": "Sponsor",
      "role": "Business owner · Mercer Racing sponsor",
      "backstory": "Brent’s astute ex-wife and business rival who supports Jake, partly because it irritates Brent. Clever and quietly ruthless about commercial strategy.",
      "goal": "Outmaneuver Brent while demonstrating better judgment and business instincts.",
      "flaw": "Claims not to care about racing, yet knows all the standings.",
      "relationships": "Brent: ex-husband; Jake: sponsored racer; Linda: friend; Elaine: ally."
    },
    {
      "id": "linda",
      "name": "Linda Mercer",
      "nickname": "",
      "age": 47,
      "team": "Family",
      "role": "Jake’s wife · Healthcare administrator",
      "backstory": "Warm, grounded and dryly funny. Loved Jake’s enthusiasm until racing consumed the spare room and his vocabulary. Knows the 46-year-old ‘young star’ behind the narrative.",
      "goal": "Keep a functional marriage and protect Jake from his own obsession.",
      "flaw": "Her patience sometimes enables his escalating commitments.",
      "relationships": "Jake: husband; Deborah: friend; Richard: finds exhausting; Elaine: sympathizes."
    },
    {
      "id": "susan",
      "name": "Susan Keller",
      "nickname": "",
      "age": 54,
      "team": "Family",
      "role": "Martin’s wife · School administrator",
      "backstory": "For years believes Martin is renovating the garage. Notices tiny screwdrivers, costly deliveries and that the shelving she requested never appears. More observant than he thinks.",
      "goal": "Recover the garage and get an honest account of the household spending.",
      "flaw": "Waits for Martin to explain instead of confronting him outright.",
      "relationships": "Martin: husband; Linda: acquaintance; Dale: mysterious deliveries."
    }
  ],
  "manufacturers": [
    {
      "name": "Speedster US",
      "origin": "United States · Iowa",
      "profile": "Midwestern mom-and-pop workshop; limited handmade batches, loyal traditionalists and frequent quality complaints.",
      "people": "Walt and Donna Puckett",
      "connections": "Richard and Gary defend it, even when components arrive misaligned."
    },
    {
      "name": "MRZ",
      "origin": "Germany · Stuttgart",
      "profile": "Precision-engineering company with former F1 and NASA personnel; publishes absurdly detailed technical papers.",
      "people": "Dr. Matthias Reuter",
      "connections": "Jake, Martin and Brent use MRZ hardware; arguments about ‘factory spec’ are constant."
    },
    {
      "name": "SlotTime",
      "origin": "Italy · Bologna",
      "profile": "Distinctive model selection and pioneering tire design adopted widely throughout slot racing.",
      "people": "Enzo Bellandi",
      "connections": "Terry treats brand loyalty as a moral principle; Dennis races an old discontinued model."
    },
    {
      "name": "Speed Slot",
      "origin": "Spain · Barcelona",
      "profile": "Internationally known maker and World Championship host; annually sponsors Spain’s national team.",
      "people": "Javier Salcedo",
      "connections": "Gary questions the fairness of events hosted by the company."
    }
  ],
  "events": [
    {
      "year": "1987",
      "title": "Founding race",
      "details": "Frank’s parents’ basement hosts the inaugural informal races; NSRC formed soon afterward."
    },
    {
      "year": "1991",
      "title": "Basement circuit rebuilt",
      "details": "Four-lane routed track becomes the sacred original D’Amato Circuit."
    },
    {
      "year": "1998",
      "title": "Strip mall relocation",
      "details": "D’Amato Raceway opens in a small suburban retail unit; the league becomes a paying tenant."
    },
    {
      "year": "2002",
      "title": "Tire revolution",
      "details": "SlotTime’s tire innovations intensify equipment arguments."
    },
    {
      "year": "2004",
      "title": "Chair dispute",
      "details": "Terry and Gordon stop speaking over a moved folding chair."
    },
    {
      "year": "2008",
      "title": "Disputed presidential election",
      "details": "Gordon wins 14–13 amid contradictory membership lists."
    },
    {
      "year": "2010",
      "title": "Electronic controller vote",
      "details": "Modern controllers approved despite Richard’s opposition."
    },
    {
      "year": "2012",
      "title": "Jake joins",
      "details": "32-year-old newcomer shows immediate pace and gets lectured about respect."
    },
    {
      "year": "2014",
      "title": "Magnet referendum",
      "details": "Gary’s accusations inspire a rule clarification and a grudge."
    },
    {
      "year": "2016",
      "title": "Reno fallout",
      "details": "Dennis leaves a regional invitational after Richard shares his setup."
    },
    {
      "year": "2017",
      "title": "Championship protest",
      "details": "Martin’s timely protest is misfiled; Stanley changes the minutes; Richard retains title."
    },
    {
      "year": "2018",
      "title": "Missing trophy",
      "details": "Richard misplaces his own trophy; Martin is blamed."
    },
    {
      "year": "2019",
      "title": "MRZ equipment debate",
      "details": "An attempted spending cap fails; controversial hardware wording is revised."
    },
    {
      "year": "2021",
      "title": "Cooper International opens",
      "details": "Dale’s six-lane venue threatens Frank’s monopoly."
    },
    {
      "year": "2022",
      "title": "Martin’s renovation",
      "details": "The secret six-lane practice circuit begins; Martin starts runner-up streak."
    },
    {
      "year": "2023",
      "title": "Jake’s first title",
      "details": "Jake wins his first drivers’ championship."
    },
    {
      "year": "2024",
      "title": "Team competition launched",
      "details": "Voss Competition and Mercer Racing formalize their rivalry; Jake repeats."
    },
    {
      "year": "2025",
      "title": "Third Mercer title",
      "details": "Jake wins again; Gary gathers evidence of an alleged screw violation."
    },
    {
      "year": "2026",
      "title": "The breaking point",
      "details": "Dennis returns; documentary crew arrives; committee impartiality, recruitment and hardware scandals erupt."
    }
  ],
  "scandals": [
    {
      "id": "case-1",
      "title": "2017 Championship Protest",
      "period": "2017–2026",
      "involved": "Richard / Martin / Stanley / Gordon / Elaine",
      "truth": "Martin’s lane sensor failed to record a lap; his protest arrived on time but Gordon misfiled it, Stanley changed the minutes and Richard kept title seven.",
      "claims": "Martin alleges a stolen championship; Gordon maintains procedures were followed; Richard cites certified results.",
      "evidence": "Elaine’s timestamped copy; missing minutes; lane sheet; Stanley resignation.",
      "arc": "Central season-one mystery"
    },
    {
      "id": "case-2",
      "title": "Reno Incident",
      "period": "2016–2026",
      "involved": "Dennis / Richard",
      "truth": "Richard passed Dennis’s setup to a competitor in exchange for chassis access. A hotel-room argument ended the friendship; $89 motel charge remains disputed.",
      "claims": "Richard says Dennis couldn’t handle losing; Dennis calls it a betrayal.",
      "evidence": "Entry sheet; emails; hotel receipt.",
      "arc": "Season-two reveal"
    },
    {
      "id": "case-3",
      "title": "Mercer Screw Affair",
      "period": "2025–2026",
      "involved": "Jake / Gary / Richard / Neil / Val",
      "truth": "Jake’s off-the-shelf MRZ chassis screws were legal; Gary measured the wrong part in a distorted photo. 2019 wording becomes the new grievance.",
      "claims": "Gary alleges illegal hardware and preferential MRZ parts; Jake denies cheating.",
      "evidence": "Forum accusation; caliper photos; MRZ bulletin; 2019 regulation revision.",
      "arc": "Season-one flashpoint"
    },
    {
      "id": "case-4",
      "title": "Race Director Self-Inspection",
      "period": "2026",
      "involved": "Neil / Gary / Val",
      "truth": "Neil inspected his own winning car and certified it compliant while competing in that race.",
      "claims": "Neil insists he held himself to the same standard; Gary calls it corrupt.",
      "evidence": "Race results and inspection signature.",
      "arc": "Institutional hypocrisy"
    },
    {
      "id": "case-5",
      "title": "Lane Two Draw",
      "period": "2026",
      "involved": "Gordon / Jake / Martin",
      "truth": "Race director Gordon drew his own lane slip by hand and got a favored lane.",
      "claims": "Gordon insists draws are randomized; Jake questions independence.",
      "evidence": "Heat sheet and meeting minutes.",
      "arc": "Recurring race-day controversy"
    },
    {
      "id": "case-6",
      "title": "Race Restart Protest",
      "period": "2026",
      "involved": "Gordon / Terry / Elliot / Jake",
      "truth": "Gordon restarted a race after teammate Terry deslotted; his own result also improved.",
      "claims": "Gordon claims a safety issue; Jake alleges team favoritism.",
      "evidence": "Race video and steward notes.",
      "arc": "Season-one episode"
    },
    {
      "id": "case-7",
      "title": "2008 Leadership Election",
      "period": "2008–2026",
      "involved": "Gordon / Stanley / Elaine / Brent",
      "truth": "Absentee vote counted under one legitimate membership roster; later unilateral bylaw change was not authorized.",
      "claims": "Gordon claims unquestionable mandate; Brent challenges legitimacy.",
      "evidence": "Three membership lists; amended bylaws.",
      "arc": "Future coup storyline"
    },
    {
      "id": "case-8",
      "title": "Speedster Quality Crisis",
      "period": "2015–2026",
      "involved": "Richard / Gary / Walt Puckett",
      "truth": "Inconsistent handmade chassis tolerances caused equipment problems; maker called some defects features.",
      "claims": "Racers defend American craftsmanship while demanding refunds.",
      "evidence": "Complaints and technical bulletins.",
      "arc": "Manufacturer feud"
    },
    {
      "id": "case-9",
      "title": "Women’s Participation Committee",
      "period": "2026",
      "involved": "Gordon / Richard / Val / Elaine",
      "truth": "An all-male recruitment committee excluded Val and used outdated ideas about women’s participation.",
      "claims": "Officials claim to be welcoming; Val and Elaine describe repeated condescension.",
      "evidence": "Meeting minutes and recruitment materials.",
      "arc": "Ongoing cultural storyline"
    },
    {
      "id": "case-10",
      "title": "New Blood Initiative",
      "period": "2024–2026",
      "involved": "Richard / Gordon / Jake / Frank",
      "truth": "League blames gaming and youth culture for declining membership while turning beginners away over equipment rules.",
      "claims": "Jake wants loaners and open nights; Richard demands respect for tradition.",
      "evidence": "Forum recruitment thread; clinic attendance.",
      "arc": "Ongoing cultural storyline"
    }
  ],
  "threads": [
    {
      "id": "hardware",
      "title": "Question Regarding Mercer's 2025 Chassis",
      "category": "Technical Regulations",
      "date": "2026-10-12",
      "locked": true,
      "posts": [
        {
          "author": "Gary · TheTruth58",
          "body": "I’m not accusing anyone of anything. I’m simply asking why certain individuals appear to be permitted to run hardware others were told was illegal."
        },
        {
          "author": "Jake · JakeM46",
          "body": "Gary, they’re the stock screws that came with the car. You watched me open the package. You can inspect them Thursday."
        },
        {
          "author": "Gary · TheTruth58",
          "body": "Interesting response."
        },
        {
          "author": "Richard · ColonelVoss",
          "body": "It is an entirely legitimate question. These rules exist for a reason."
        },
        {
          "author": "Val · NeilsWife",
          "body": "The head diameter and the thread diameter are not the same measurement."
        },
        {
          "author": "Gordon · PresidentPritchard",
          "body": "Thread locked pending technical review. Members are reminded of the Code of Conduct."
        }
      ]
    },
    {
      "id": "recruitment",
      "title": "Why Aren’t We Getting New Members?",
      "category": "Membership & Outreach",
      "date": "2026-10-18",
      "locked": true,
      "posts": [
        {
          "author": "Richard · ColonelVoss",
          "body": "Young people are all video games and instant gratification. Nobody wants to learn a craft."
        },
        {
          "author": "Jake · JakeM46",
          "body": "We had three visitors Thursday and they weren't allowed to try a race because they didn't bring approved controllers."
        },
        {
          "author": "Richard · ColonelVoss",
          "body": "Rules are rules, Jake. We can't compromise the sport to make people feel welcome."
        },
        {
          "author": "Martin · Speedy62",
          "body": "There are loaner controllers in the back cabinet."
        },
        {
          "author": "Gordon · PresidentPritchard",
          "body": "The loaner controllers are pending committee approval."
        },
        {
          "author": "Elaine · TreasurerElaine",
          "body": "The committee hasn't met since June."
        }
      ]
    },
    {
      "id": "women",
      "title": "Women's Development Committee — Member Feedback",
      "category": "Membership & Outreach",
      "date": "2026-09-24",
      "locked": true,
      "posts": [
        {
          "author": "Gordon · PresidentPritchard",
          "body": "We are proud to announce the formation of a committee to address women's participation."
        },
        {
          "author": "Val · NeilsWife",
          "body": "Why was I not asked to participate? I'm an engineer and I've been here eleven years."
        },
        {
          "author": "Richard · ColonelVoss",
          "body": "It wasn't intended as a slight, dear. We wanted you focused on supporting Neil."
        },
        {
          "author": "Elaine · TreasurerElaine",
          "body": "I am both a woman and a competing driver. Nobody asked me either."
        },
        {
          "author": "Gordon · PresidentPritchard",
          "body": "This has become unnecessarily divisive. Comments are now closed."
        }
      ]
    },
    {
      "id": "2017",
      "title": "2017 Championship Results Archive",
      "category": "History & Records",
      "date": "2017-11-13",
      "locked": true,
      "posts": [
        {
          "author": "Martin · Speedy62",
          "body": "I filed within fifteen minutes. I have the original timing slip."
        },
        {
          "author": "Richard · ColonelVoss",
          "body": "The results were certified. I wish Martin would finally accept that."
        },
        {
          "author": "Stanley · S_Voss",
          "body": "Thread closed. The committee's decision is final."
        }
      ]
    },
    {
      "id": "officials",
      "title": "Who Inspects the Inspector?",
      "category": "Rules & Race Control",
      "date": "2026-10-26",
      "locked": false,
      "posts": [
        {
          "author": "Gary · TheTruth58",
          "body": "Can someone explain how the winning driver was allowed to inspect his own car?"
        },
        {
          "author": "Neil · ChiefStewardNeil",
          "body": "My vehicle underwent the same comprehensive inspection as all other entrants."
        },
        {
          "author": "Val · NeilsWife",
          "body": "Neil. You conducted it yourself."
        },
        {
          "author": "Neil · ChiefStewardNeil",
          "body": "I don't consider my wife an independent party to this discussion."
        },
        {
          "author": "Jake · JakeM46",
          "body": "This is incredible."
        }
      ]
    },
    {
      "id": "venue",
      "title": "Venue for the Championship Finale",
      "category": "Club Business",
      "date": "2026-11-01",
      "locked": false,
      "posts": [
        {
          "author": "Frank · FrankD",
          "body": "This race has always belonged at D'Amato Raceway. We built this sport in my parents' basement."
        },
        {
          "author": "Dale · BigDale",
          "body": "We have six lanes, reliable timing and adequate parking. That's not an attack on history."
        },
        {
          "author": "Richard · ColonelVoss",
          "body": "Some of us believe history matters."
        },
        {
          "author": "Elaine · TreasurerElaine",
          "body": "We still haven't paid Frank for the last two events."
        }
      ]
    },
    {
      "id": "chairs",
      "title": "Reserved Pit Tables — Clarification",
      "category": "Club Business",
      "date": "2026-08-09",
      "locked": true,
      "posts": [
        {
          "author": "Terry · TBone",
          "body": "I want it in writing that my assigned chair was moved without my consent."
        },
        {
          "author": "Brent · FastHands",
          "body": "It is a folding chair, Terry."
        },
        {
          "author": "Terry · TBone",
          "body": "You don't get to decide what this is about."
        },
        {
          "author": "Gordon · PresidentPritchard",
          "body": "This thread is locked. Seating will be addressed at the next general meeting."
        }
      ]
    }
  ]
};
