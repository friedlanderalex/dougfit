/* PROGRAM 2 — "Enter The Drop Set". Weeks 1–11. */

const P2 = [
{
  id: "p2w1a", program: 2, week: 1, slot: 1, title: "Chest 1", focus: ["chest","triceps","shoulders","core"],
  source: "Program 2 Week 1 V1.pdf", warmup: "cardio5",
  sched: "Day 1 5 min cardio + Chest 1 | Day 2 20 min cardio | Day 3 5 min cardio + Legs & Back with PT | Day 4 20 min cardio | Day 5 5 min cardio + Chest 2 | Day 6 Rest or arms pump | Day 7 Rest",
  note: "All sets are working sets — warm up first, then count the challenging sets.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Smith Machine Bench", sr: "3 working sets / 10, 10, 8", no: "Or any press machine. After the set of 8, do the same weight as many times as you can, then drop the weight 30% and go again, then drop another 30% and go to failure. For safety this must be on a machine or smith bench." }
    ]},
    { name: "Group 2", ex: [
      { n: "Hex Press", sr: "3 / 10", no: "Last set drop set. Holding weights together.", v: "https://youtu.be/ittAU7mSvdY" },
      { n: "Tricep Kick Back", sr: "3 / 12", no: "Last set drop set. Rotate palm to face ceiling.", v: "https://youtu.be/za2oCVuMgYw" }
    ]},
    { name: "Group 3", ex: [
      { n: "Chest Flye (cable)", sr: "3 / 10", no: "Slow on the return. Then go immediately to criss cross flye with the same weight.", v: "https://youtu.be/nUcSr0l7y8o" },
      { n: "Criss Cross Flye", sr: "3 / failure", no: "Wrist over wrist to activate mid chest; alternate which hand goes over each set.", v: "https://youtube.com/shorts/GIfQjtlkbng" },
      { n: "External Rotation with Dumbbell", sr: "3 / 10", no: "Palms up.", v: "https://youtube.com/shorts/Am_eMDenbME" }
    ]},
    { name: "Group 4", ex: [
      { n: "Triceps Extension (rope)", sr: "3 / 10", no: "Drop set last set.", v: "https://youtube.com/shorts/9h-8KUq7pYk" },
      { n: "Close Grip Push Ups", sr: "3 / 10", no: "Keep elbows at side.", v: "https://youtu.be/uP9tQRgjkac" },
      { n: "Spider Man Planks", sr: "3 / 20", v: "https://youtube.com/shorts/CP_EhlWL3MM" },
      { n: "Weighted Abs", sr: "3 / 20", no: "Go heavy on the last set and drop set.", v: "https://youtu.be/HVBM8TzFGMA" }
    ]}
  ]
},
{
  id: "p2w1b", program: 2, week: 1, slot: 2, title: "Chest 2", focus: ["chest","triceps","back","shoulders","core"],
  source: "Program 2 Week 1 V2.pdf", warmup: "cardio5",
  note: "All sets are working sets — warm up first, then count the challenging sets.",
  flags: ["The PDF's internal heading labels this 'Workout 3'. Filename (V2) confirms it's the week's second written workout — the real workout 2 was the in-person PT session."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Heavy 35° Incline Bench Press", sr: "3 working sets / 10, 10, 8", no: "First notch up on the bench. After the 8, same weight to failure, drop 30% and go again, drop another 30% and go to failure. Must be a machine or smith bench for safety." }
    ]},
    { name: "Group 2", ex: [
      { n: "Triceps Pump Set", sr: "3 / 1:1, 2:2, 3:3, 4:4", no: "1 rep tate press + 1 rep skull crusher, then 2 and 2, then 3 and 3, etc.", v: "https://youtube.com/shorts/n0krU9BdJn0" },
      { n: "Tricep Dips", sr: "3 / failure", v: "https://youtu.be/gkzcO0sT7XE" }
    ]},
    { name: "Group 3", ex: [
      { n: "Chin Ups", sr: "3 / failure" },
      { n: "Super Man Push Ups", sr: "3 / failure", no: "Go 90%.", v: "https://youtu.be/rwJDRHKnVjk" },
      { n: "External Rotation with Band", sr: "3 / 10", v: "https://youtube.com/shorts/dQi-YRQC4cE" }
    ]},
    { name: "Group 4", ex: [
      { n: "Lateral Flye Shoulders (cable)", sr: "3 / 10", v: "https://youtube.com/shorts/xUKbPse22wE" },
      { n: "Wood Chops", sr: "3 / 15 each", v: "https://youtube.com/shorts/dvSQau3WlWc" },
      { n: "Hanging Leg Raises", sr: "3 / failure", v: "https://youtu.be/1CLWEzKUkY0" }
    ]}
  ]
},
{
  id: "p2w2a", program: 2, week: 2, slot: 1, title: "Back 1", focus: ["back","shoulders","biceps","core"],
  source: "Program 2 Week 2 V1.pdf", warmup: "cardio5",
  sched: "Tuesday Back workout 1 | Thursday Push & Pull with PT | Friday/Weekend Back 2.0",
  note: "Add Scorpion to the stretches this week — 3 each side.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Straight Arm Pull Down with Lat Bar", sr: "4 / 10, 8, 8, 8 + drop set", no: "1st set 10, 2nd–3rd 8 heavier, 4th 8 + drop set. Take the wide lat pulldown bar and use it on the cable machine.", v: "https://youtu.be/e9nG2TzEkOY" }
    ]},
    { name: "Group 2", ex: [
      { n: "Leaned Back Row w/ Lat Pulldown Machine (reverse grip)", sr: "4 / 12, 10, 8, 8 + drop", no: "Drop set the last set 2 times. Switch to the bigger long bar, not the one in the video.", v: "https://youtu.be/kN5GReCxUZg" }
    ]},
    { name: "Group 3", ex: [
      { n: "Rear Delt Flyes", sr: "3 / 12", v: "https://youtu.be/KTGO7MN8NFw" },
      { n: "Bicep Curl + Half Arnold", sr: "3 / 10", no: "After 10, do as many bicep curls as possible. Your shoulders should be dead by the end of 10 reps.", v: "https://youtube.com/shorts/CFDLEmnVubY" }
    ]},
    { name: "Group 4", ex: [
      { n: "Hanging Knee Tucks", sr: "3 / failure", no: "Knees bent + tuck.", v: "https://youtu.be/KNzJ3GuIpB8" },
      { n: "External Rotation, Elbow Away From Body", sr: "3 / 10", no: "Normally we keep the elbow close to the body, but today we focus on the bigger muscles supporting the shoulder. You can go slightly heavier with the elbow out.", v: "https://youtube.com/shorts/uCdEOu7cysk" }
    ]},
    { name: "Group 5", ex: [
      { n: "Face Pulls", sr: "3 / 12", v: "https://youtube.com/shorts/YIDwZ0wX_a0" },
      { n: "Weighted Abs", sr: "3 / 15", v: "https://youtu.be/HVBM8TzFGMA" }
    ]}
  ]
},
{
  id: "p2w2b", program: 2, week: 2, slot: 2, title: "Back 2.0", focus: ["back","shoulders","chest","core"],
  source: "Program 2 Week 2 V2.pdf", warmup: "cardio5",
  note: "Add Scorpion to the stretches this week — 3 each side.",
  flags: ["The PDF's internal heading reads 'Workout 1 Back' — a copy-paste leftover from the V1 file. The filename (V2) and the week's schedule line ('Friday/Weekend Back 2.0') confirm this is the second session."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Single Arm Pull Down", sr: "4 / 10, 8, 8, 8 + drop set", no: "1st set 10, 2nd–3rd 8 heavier, 4th 8 + drop set. Bring hand past pocket.", v: "https://youtu.be/ZjgVM2wjvHI" }
    ]},
    { name: "Group 2", ex: [
      { n: "Leaned Over Row (cable)", sr: "4 / 12, 10, 8, 8 + drop", no: "Drop set the last set 2 times. Use the lat pulldown bar.", v: "https://youtube.com/shorts/N6W9yeM2gv0" }
    ]},
    { name: "Group 3", ex: [
      { n: "Pull Ups", sr: "5 / failure", no: "Wide grip. Keep rest time short — 1 min max." }
    ]},
    { name: "Group 4", ex: [
      { n: "Lateral Flye (cable)", sr: "3 / 12", v: "https://youtube.com/shorts/xUKbPse22wE" },
      { n: "Close Grip Pull Ups", sr: "3 / failure", no: "Hands facing each other or facing you." }
    ]},
    { name: "Group 5", ex: [
      { n: "Slow Negative Push Press", sr: "3 / 12", no: "Focus on controlling the negative.", v: "https://youtube.com/shorts/LjgGpi8lMgg" },
      { n: "Rear Flyes", sr: "3 / 15", no: "Unsupported — find a mirror and make sure your lower back stays straight.", v: "https://youtube.com/shorts/auLpKfmeFrI" },
      { n: "Wood Chops", sr: "3 / 15 each", v: "https://youtube.com/shorts/dvSQau3WlWc" }
    ]}
  ]
},
{
  id: "p2w3a", program: 2, week: 3, slot: 1, title: "Back and Legs (Maintain)", focus: ["back","legs","shoulders","biceps","core"],
  source: "Program 2 Week 3.pdf", warmup: "cardio5",
  groups: [
    { name: "Group 1", ex: [
      { n: "Standing Cable Row", sr: "2 / 10 + 1 drop set", no: "Drop set from a heavier 8 reps on the last set.", v: "https://youtu.be/PA2ZgQpxkPE", flags: ["PDF reads '2*/10 + 1* drop set from heavier 8 reps last set' — ambiguous whether that's 2 or 3 total sets."] },
      { n: "Hammer Rotation Dumbbell Curl", sr: "3 / 12", v: "https://youtu.be/YwsynDFW0p8" }
    ]},
    { name: "Group 2", ex: [
      { n: "Push Press", sr: "3 / 10", no: "Slow on the way down.", v: "https://youtube.com/shorts/LjgGpi8lMgg" },
      { n: "Lateral Flye", sr: "3 / 10", v: "https://youtu.be/CDtxVVQy_EE" }
    ]},
    { name: "Group 3", ex: [
      { n: "Leaned Back Row", sr: "3 / 8", no: "Last set drop set — make the weight 30% lighter and immediately go again.", v: "https://youtu.be/VyZZIp5KVbU" }
    ]},
    { name: "Group 4", ex: [
      { n: "SDL + Retraction", sr: "3 / 12", no: "Make sure your back stays straight and your shoulders pull back at the top.", v: "https://youtube.com/shorts/_X_R2kHuvVY" },
      { n: "Quad Extension", sr: "3 / 12" }
    ]},
    { name: "Finisher", ex: [
      { n: "Push Up Pyramid", sr: "3 rounds", no: "Push up, knee, push up, knee, push up, reverse crunch. Repeat 3 rounds.", kind: "text" }
    ]}
  ]
},
{
  id: "p2w3b", program: 2, week: 3, slot: 2, title: "Chest 2", focus: ["chest","triceps","core"],
  source: "Program 2 Week 3.pdf", warmup: "cardio5",
  groups: [
    { name: "Group 1 (warm up)", ex: [
      { n: "Chest Flye (dumbbell)", sr: "2 / 10", v: "https://youtube.com/shorts/hr9TBcFSHps" },
      { n: "Push Ups", sr: "2 / 10", no: "From the ground.", v: "https://youtube.com/shorts/ivuLEsDFmlQ" }
    ]},
    { name: "Group 2", ex: [
      { n: "Smith Bench Press", sr: "3 / 8", no: "Use a small incline. Drop set the last 2 sets.", v: "https://youtu.be/Moqoo0x3QU4" }
    ]},
    { name: "Group 3", ex: [
      { n: "Body Weight Dips", sr: "3 / failure", v: "https://youtu.be/HlCzwMRSuHE" },
      { n: "Tricep Extensions", sr: "3 / 12", no: "Drop set the last 2 sets.", v: "https://youtube.com/shorts/9h-8KUq7pYk" }
    ]},
    { name: "Group 4", ex: [
      { n: "Chest Press Machine", sr: "3 / 5 + 1 drop set", no: "Slow reps, 4 seconds each way, weight is not heavy. Last set go heavy, rock out as many as you can and drop set." },
      { n: "Tricep Dips", sr: "3 / failure", v: "https://youtu.be/gYtDJQwtGQQ" }
    ]},
    { name: "Group 5", ex: [
      { n: "Weighted Crunches", sr: "3 / 20", v: "https://youtube.com/shorts/aqQy_flp11A" },
      { n: "Russian Twists with 5lb Weight", sr: "3 / 20", no: "Elbows touch ground." }
    ]}
  ]
},
{
  id: "p2w4a", program: 2, week: 4, slot: 1, title: "Chest and Legs", focus: ["chest","legs","shoulders","core"],
  source: "Program 2 Week 4.pdf", warmup: "cardio5",
  groups: [
    { name: "Group 1", ex: [
      { n: "Incline Chest Press Dumbbells", sr: "3 / 6", no: "Drop set last set. 2–3 warm-up sets needed." }
    ]},
    { name: "Group 2", ex: [
      { n: "Chest Flye (cable)", sr: "3 / 10", v: "https://youtu.be/nUcSr0l7y8o" },
      { n: "Criss Cross Flyes", sr: "3 / 10", v: "https://youtube.com/shorts/GIfQjtlkbng" },
      { n: "Push Ups", sr: "3 / failure" }
    ]},
    { name: "Group 3", ex: [
      { n: "Standing Shoulder Press (dumbbells)", sr: "3 / 10", no: "Make sure you don't arch your back, but use a challenging weight." }
    ]},
    { name: "Group 4", ex: [
      { n: "Leg Press", sr: "3 / 15", no: "Drop set last set." },
      { n: "Lateral Band Walk", sr: "3 / 20", no: "Band on ankles.", v: "https://youtube.com/shorts/auKTwWhWhK4" }
    ]},
    { name: "Group 5", ex: [
      { n: "Weighted Abs", sr: "3 / failure", no: "With rope.", v: "https://youtu.be/HVBM8TzFGMA" }
    ]}
  ]
},
{
  id: "p2w4b", program: 2, week: 4, slot: 2, title: "Back", focus: ["back","biceps","shoulders","core"],
  source: "Program 2 Week 4.pdf", warmup: "cardio5",
  groups: [
    { name: "Group 1", ex: [
      { n: "Straight Arm Pull Down", sr: "3 / 8", v: "https://youtube.com/shorts/p0RAZ5fSiTA" },
      { n: "Pull Ups Chest To Bar", sr: "3 / failure", no: "Get all the way up, as high as you can go (may only be 1 or a few reps)." }
    ]},
    { name: "Group 2", ex: [
      { n: "Single Arm Pull Over with Rope or Cable", sr: "3 / 8", v: "https://youtu.be/ZjgVM2wjvHI" },
      { n: "Tres Row with Rope", sr: "3 / 10", v: "https://youtu.be/XdcEVJZxJDY" },
      { n: "Close Grip Pull Ups (finisher)", sr: "AMRAP", no: "Once finished with this group, do as many close grip pull ups as possible, then try again with 10lbs (on waist or held by feet).", kind: "text" }
    ]},
    { name: "Group 3", ex: [
      { n: "Leaned Back Row, Reverse Grip (Lat Pulldown Machine)", sr: "4 / 12, 10, 8, 8 + drop", no: "Drop set the last set 2 times. Switch to the bigger long bar, not the one in the video.", v: "https://youtu.be/kN5GReCxUZg" }
    ]},
    { name: "Group 4", ex: [
      { n: "Rear Delt Flyes", sr: "3 / 12", v: "https://youtu.be/KTGO7MN8NFw" },
      { n: "Bicep Curl + Half Arnold", sr: "3 / 10", no: "After 10 reps, do as many bicep curls as possible.", v: "https://youtube.com/shorts/CFDLEmnVubY" }
    ]},
    { name: "Group 5", ex: [
      { n: "Hanging Knee Tucks", sr: "3 / failure", v: "https://youtu.be/KNzJ3GuIpB8" }
    ]}
  ]
},
{
  id: "p2w5a", program: 2, week: 5, slot: 1, title: "Chest & Back (Maintain)", focus: ["chest","back","shoulders","biceps","core"],
  source: "Program 2 Week 5.pdf", warmup: "cardio5",
  flags: ["Only one written workout exists for Program 2 Week 5. The second was the in-person PT session."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Lat Pulldown", sr: "3 / 10 + 1 heavy set of 8 + drop set", no: "Drop set the last set by 30%, 2 times.", v: "https://youtu.be/fwd19XRoNAA" },
      { n: "Lateral Dumbbell Flye", sr: "3 / 15", v: "https://youtu.be/CDtxVVQy_EE" }
    ]},
    { name: "Group 2", ex: [
      { n: "Y Flyes (cable)", sr: "3 / 10", no: "If this bothers your shoulder, do regular flyes.", v: "https://youtube.com/shorts/i37NsAd-nnc" },
      { n: "Chin Ups", sr: "3 / failure" }
    ]},
    { name: "Group 3", ex: [
      { n: "Cable Wood Chops", sr: "3 / 15 each", v: "https://youtube.com/shorts/dvSQau3WlWc" },
      { n: "Side to Side Weighted Swings", sr: "3 / 20", no: "Like we did Tuesday with the 25lb weight." }
    ]},
    { name: "Group 4", ex: [
      { n: "Leaned Back Row", sr: "3 / 10", no: "Last set drop set 2× at 30%.", v: "https://youtu.be/kN5GReCxUZg" },
      { n: "Push Ups on Bosu", sr: "3 / failure", no: "3 seconds down, 1 second fast up.", v: "https://youtube.com/shorts/RJauioByRPU" },
      { n: "Alternating Bicep Curls", sr: "3 / 20 (10 each arm)" }
    ]},
    { name: "Finisher", ex: [
      { n: "Body Weight Rows + Half/Full Rep Push Ups", sr: "4 rounds", no: "Body weight rows on the smith machine supersetted with half-rep full-rep push ups to failure. Non stop, all 4 rounds, no breaks — just endurance.", v: "https://youtube.com/shorts/mrNgPFxyIgc", kind: "text" }
    ]}
  ]
},
{
  id: "p2w6a", program: 2, week: 6, slot: 1, title: "Chest & Pull", focus: ["chest","back","triceps","core"],
  source: "Program 2 Week 6.pdf", warmup: "none",
  sched: "Monday Chest | Wednesday Back & Legs with Trainer | Weekend Chest 2.0",
  note: "Warm up with 2 sets of body weight rows and push ups to failure.",
  flags: ["This workout has no title in the PDF. Named from its contents."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Pull Ups, Close Grip", sr: "3 / failure", no: "Light weight, controlled motion, full ROM. Look up and pull your chest toward the bar." },
      { n: "Incline Bench Press", sr: "3 / 7", no: "Strength focus." }
    ]},
    { name: "Group 2", ex: [
      { n: "Smith or Chest Press Machine Pyramid Pump Set", sr: "3 / 1:1, 1:2, 1:3, 1:4, 1:5", no: "Half reps — increase a half rep for every full rep. So rep 1 is 1 half + 1 full, then 2 half + 1 full, 3 half + 1 full, etc." },
      { n: "External Rotation (dumbbells)", sr: "3 / 10", v: "https://youtu.be/gW9b-zS-Z0s" }
    ]},
    { name: "Group 3", ex: [
      { n: "Hex Press", sr: "3 / 10", v: "https://youtu.be/ittAU7mSvdY" },
      { n: "Triceps Kick Back Pyramid Pump Set", sr: "3 / 1:1, 1:2, 1:3, 1:4, 1:5", no: "Just like we did with the bench.", v: "https://youtu.be/za2oCVuMgYw" }
    ]},
    { name: "Group 4", ex: [
      { n: "Far to Close Triceps Extension", sr: "3 / 10 + 10", no: "10 triceps extensions far away and leaned over, then 10 close to the machine standing straight up." },
      { n: "Slow to Fast Push Ups on Upside Down Bosu", sr: "3 / failure", no: "4 sec down, 1 sec pause, 1 sec fast up." }
    ]},
    { name: "Group 5", ex: [
      { n: "Hanging Leg Raise", sr: "3 / failure", no: "Hold the bar, bring knees up, stabilize the core, small lower-ab crunch." }
    ]}
  ]
},
{
  id: "p2w6b", program: 2, week: 6, slot: 2, title: "Chest & Shoulders 2", focus: ["chest","shoulders","triceps","biceps","core"],
  source: "Program 2 Week 6.pdf", warmup: "none",
  note: "Warm up with 3 rounds of tricep dips to failure.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Closer Grip Smith Machine Bench", sr: "3 working sets / 8", no: "Or any press machine. Tempo: 3 sec controlled down, pause when arms are at 95°. Hands shoulder width." }
    ]},
    { name: "Group 2", ex: [
      { n: "Wide Grip Smith Machine Bench", sr: "2 working sets / 8", no: "Or any press machine. Same tempo. Hands wider than normal — lighter weight, felt in the outer chest." }
    ]},
    { name: "Group 3", ex: [
      { n: "Cable Chest Flye", sr: "3 / 10" },
      { n: "Body Weight Dips", sr: "3 / failure", no: "Wide grip, leaning forward, chest faces the ground. Add weight if you get more than 10." }
    ]},
    { name: "Group 4", ex: [
      { n: "Upward Chest Flyes (cable or dumbbells)", sr: "3 / 10", no: "Slow on the return, don't let hands pass your pockets.", v: "https://youtu.be/At-RZyoy7H0" },
      { n: "Bicep Curls with the 30lbs", sr: "3 / failure" }
    ]},
    { name: "Group 5", ex: [
      { n: "Lateral Shoulder Flye (cable)", sr: "3 / 10", no: "Drop set last set.", v: "https://youtu.be/xUKbPse22wE" }
    ]},
    { name: "Group 6", ex: [
      { n: "Reverse Crunch", sr: "3 / 10", v: "https://youtu.be/Xxq9t5AFZk4" },
      { n: "Sit Ups and Punch Boxing Bag", sr: "3 / 10" }
    ]}
  ]
},
{
  id: "p2w7a", program: 2, week: 7, slot: 1, title: "Back 1", focus: ["back","biceps","core"],
  source: "Program 2 Week 7 V1.pdf", warmup: "none",
  sched: "Day 1 Back 1 PT | Day 2 rest | Day 3 cardio | Day 4 Chest / Back with PT | Day 5 rest | Day 6 Back 2 | Day 7 Rest or arms pump",
  flags: ["PDF heading reads 'WEEK 3 Workout 1 Back 1' — a copy-paste leftover. Filename confirms Week 7, workout 1."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Lat Pull Down", sr: "1 / 10", no: "Normal grip (pull-up grip), just to warm up." },
      { n: "Archer Lat Pulldown", sr: "3 / 10 each side", no: "One side at a time — pull the bar down to one side focusing more on that arm. Basically a single arm lat pulldown but still holding the bar." }
    ]},
    { name: "Group 2", ex: [
      { n: "Chin Ups", sr: "4 / 6", no: "Only 10 seconds rest between sets. Failure each time — by the end you should only be able to do 1–2.", flags: ["PDF reads '4/ 6 sets only 10 seconds rest' — the set count is ambiguous (4 sets or 6?)."] }
    ]},
    { name: "Group 3", ex: [
      { n: "Dead Stop Row", sr: "3 / 8", no: "Weight rests on the ground for 1 second.", v: "https://youtu.be/m_TqdfH39q8" }
    ]},
    { name: "Group 4 (3 sets)", ex: [
      { n: "Assisted Child's Pose", sr: "As needed", no: "Use a big physio ball or wall. Just to stretch.", v: "https://www.youtube.com/watch?v=pqaxaQ5_FmM" },
      { n: "Over Head Bicep Curls", sr: "3 / 10 + drop set last set", v: "https://youtube.com/shorts/ZFbozvy7kAI" },
      { n: "External Rotation (cable)", sr: "3 / 10 each", v: "https://youtube.com/shorts/uCdEOu7cysk" },
      { n: "Chops with Rope", sr: "3 / 15 each side", v: "https://youtu.be/v2xZA1a3ghU" }
    ]},
    { name: "Group 5", ex: [
      { n: "Zottman Curls", sr: "3 / 15", v: "https://youtu.be/BM742r4qYCI" },
      { n: "Hammer Curls", sr: "3 / 8", no: "Heavy." }
    ]}
  ]
},
{
  id: "p2w7b", program: 2, week: 7, slot: 2, title: "Back 2", focus: ["back","biceps","triceps","core"],
  source: "Program 2 Week 7 V2.pdf", warmup: "none",
  flags: ["The PDF's internal heading also reads 'WEEK 3 Workout 1 Back 1' — same copy-paste leftover. Filename (V2) confirms this is Week 7, workout 2."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Straight Arm Pull Down", sr: "1 / 10", no: "Drop set last set.", v: "https://youtube.com/shorts/p0RAZ5fSiTA", flags: ["'1 set' with a 'last set' drop-set instruction is contradictory — likely meant to be 3 sets."] },
      { n: "Single Arm Bicep Curl (cable)", sr: "3 / 10 each side", v: "https://youtube.com/shorts/ZFbozvy7kAI" }
    ]},
    { name: "Group 2", ex: [
      { n: "Chin Ups / Pull Ups, various forms", sr: "25 total reps", no: "However many sets it takes." }
    ]},
    { name: "Group 3", ex: [
      { n: "Row (machine)", sr: "3 / 8", no: "Drop set last set." }
    ]},
    { name: "Group 4", ex: [
      { n: "Body Weight Row", sr: "3 / 12", v: "https://youtube.com/shorts/DovqbRLUzHI" },
      { n: "Bent Over Rear Flye, Single Arm", sr: "3 / 10", no: "Do it by a mirror to make sure your back is straight.", v: "https://youtu.be/BIH45Mz4r-o" }
    ]},
    { name: "Group 5", ex: [
      { n: "Over Head Tricep Extensions", sr: "3 / 15", v: "https://youtube.com/shorts/8z2Ha0wLlsQ" },
      { n: "Weighted Abs (rope)", sr: "3 / 20" }
    ]}
  ]
},
{
  id: "p2w8a", program: 2, week: 8, slot: 1, title: "Legs 1", focus: ["legs","glutes","calves","core"],
  source: "Program 2 Week 8.pdf", warmup: "none",
  sched: "Day 1 Legs 1 | Day 2 Push / Pull with PT | Day 3 Legs 2",
  note: "Theme of the week: Legs. Next week Chest, then Back.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Calf Raises on Leg Press, Full ROM", sr: "3 / 15", no: "Light." },
      { n: "Calf Raises on Leg Press, Half ROM", sr: "3 / 10", no: "From bottom to neutral." }
    ]},
    { name: "Group 2", ex: [
      { n: "Wide Leg Press", sr: "3 / 10", no: "Grab one of those rugs folded up and drop it on the seat to boost you up a few inches, then legs high on the press pad, toes slightly out, drop the seat forward as much as possible.", flags: ["PDF says '10 reps each' but this is a two-leg movement."] }
    ]},
    { name: "Group 3", ex: [
      { n: "Single Leg Hamstring Curl", sr: "3 / 20", flags: ["PDF says '3/20 steps' — 'steps' looks copied from the band-walk line. Reps assumed."] },
      { n: "Standing Abduction", sr: "3 / 10 each", no: "Focus on balance, go light and don't hold on to the machine.", v: "https://youtu.be/q8wF4P6jzAc" }
    ]},
    { name: "Group 4", ex: [
      { n: "Quad Extension + Pulses", sr: "3 / 10 + 10 pulses", no: "Pulse reps at the top immediately after the last rep.", v: "https://youtube.com/shorts/mVOVPc9nGgA" }
    ], flags: ["PDF labels this 'Group 3' a second time."]},
    { name: "Group 5", ex: [
      { n: "Weighted Hanging Leg Raises", sr: "3 / failure", no: "Use a 5lb weight or small inflated ball." },
      { n: "Reverse Crunches", sr: "3 / 12", v: "https://youtu.be/-jQk8j0svHg" },
      { n: "Side Plank Dips", sr: "3 / 15", v: "https://youtube.com/shorts/jexjI1kYy8I" }
    ]}
  ]
},
{
  id: "p2w8b", program: 2, week: 8, slot: 2, title: "Legs 2", focus: ["legs","glutes","core","conditioning"],
  source: "Program 2 Week 8.pdf", warmup: "none",
  flags: ["PDF labels this 'Workout 3'."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Weighted Walking Lunges", sr: "3 / 20", no: "Light, medium, heavy." },
      { n: "Lateral Band Walk", sr: "3 / 20", no: "Heavy band.", v: "https://youtu.be/rlg56k19up4" }
    ]},
    { name: "Group 2", ex: [
      { n: "Weighted Side Lunges", sr: "3 / 10 each", v: "https://youtube.com/shorts/Jl7XFKVu-F4" }
    ]},
    { name: "Group 3", ex: [
      { n: "Single Leg SDL", sr: "3 / 20", no: "Go heavy.", v: "https://youtube.com/shorts/Estp1CaPOQ4", flags: ["PDF says '3/20 steps' — reps assumed."] }
    ]},
    { name: "Group 4", ex: [
      { n: "Incline Sprints", sr: "4 sprints", no: "15 seconds each, 10% incline.", v: "https://youtu.be/0PcnYMHZg8g" },
      { n: "Plank Rocks", sr: "3 / 20", no: "Feet on an upside-down bosu.", v: "https://youtu.be/-jQk8j0svHg" }
    ]},
    { name: "Group 5", ex: [
      { n: "Box Jumps", sr: "3 / 10", no: "Land light.", v: "https://youtube.com/shorts/BaOYQK00or8" }
    ]}
  ]
},
{
  id: "p2w9a", program: 2, week: 9, slot: 1, title: "Chest 1", focus: ["chest","triceps","biceps","back","core"],
  source: "Program 2 Week 9.pdf", warmup: "cardio5",
  sched: "Day 1 5 min cardio + Chest 1 | Day 2 20 min cardio | Day 3 5 min cardio + Legs & Back with PT | Day 4 20 min cardio | Day 5 5 min cardio + Chest 2 | Day 6 Rest or arms pump | Day 7 Rest",
  note: "Final phase of Chest. All sets are working sets.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Smith Machine Bench", sr: "3 working sets / 10, 8, then 2 sets of heavy 5", no: "Or any press machine. Drop set last set. Use the safety bars if on the smith. For safety this must be on a machine or smith bench." }
    ]},
    { name: "Group 2", ex: [
      { n: "Weighted Dips", sr: "4 / failure", no: "Last 2 sets add 10lbs (in feet or using a chain)." },
      { n: "Skull Crusher (dumbbells)", sr: "3 / 12", v: "https://youtu.be/1BDGIcMTSXc" }
    ]},
    { name: "Group 3", ex: [
      { n: "Decline Chest Flye", sr: "3 / 10", no: "Lean forward and punch down.", v: "https://youtube.com/shorts/kp42MApNVE0" },
      { n: "Hammer Curl + External Rotation", sr: "3 / 8", v: "https://youtu.be/RbHUf626EeM" }
    ]},
    { name: "Group 4", ex: [
      { n: "Tricep Dips", sr: "3 / failure", no: "25lb weight." },
      { n: "Chin Ups", sr: "As many as you can until 40", no: "3 sets listed but the target is 40 total reps.", flags: ["PDF reads '3/- as many as you can until 40' — set count vs. rep target is unclear."] },
      { n: "Explosive Push Ups on the Bosu", sr: "3 / 10", v: "https://youtube.com/shorts/RJauioByRPU" }
    ]},
    { name: "Group 5", ex: [
      { n: "Weighted Abs", sr: "3 / 20", no: "Go heavy on the last set and drop set.", v: "https://youtu.be/HVBM8TzFGMA" }
    ]}
  ]
},
{
  id: "p2w9b", program: 2, week: 9, slot: 2, title: "Chest 2", focus: ["chest","shoulders","triceps","back"],
  source: "Program 2 Week 9.pdf", warmup: "cardio5",
  note: "All sets are working sets.",
  flags: ["PDF labels this 'Workout 3'."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Incline Bench Dumbbells", sr: "3 working sets / 10, 8, 5 + drop set" }
    ]},
    { name: "Group 2", ex: [
      { n: "Hex Press", sr: "3 / 10", no: "Last set drop set. Holding weights together.", v: "https://youtu.be/ittAU7mSvdY" },
      { n: "Close Grip Bicep Curl to Shoulder Press", sr: "3 / 10", v: "https://youtu.be/LVYRS0cA79o" }
    ]},
    { name: "Group 3", ex: [
      { n: "Half Rep Full Rep Press", sr: "3 / 8", no: "All the way up, half way down, all the way up, all the way down = 1 rep." },
      { n: "Lateral Shoulder Flyes", sr: "3 / 10", v: "https://youtu.be/CDtxVVQy_EE" }
    ], flags: ["This group's two lines are interleaved in the PDF text layer; sets/reps pairing (3/8 and 3/10) is a best reading."]},
    { name: "Group 4", ex: [
      { n: "Triceps Extension (rope)", sr: "3 / 10", no: "Drop set last set.", v: "https://youtube.com/shorts/9h-8KUq7pYk" },
      { n: "Rear Flyes (cable or dumbbell)", sr: "3 / 10", v: "https://youtu.be/xSTtvElSiqY" }
    ]},
    { name: "Group 5", ex: [
      { n: "SPUS", sr: "20 rounds", no: "However many attempts it takes.", v: "https://youtube.com/shorts/YPn33RoqHcw" }
    ]}
  ]
},
{
  id: "p2w10a", program: 2, week: 10, slot: 1, title: "Legs & Back", focus: ["legs","back","glutes"],
  source: "Program 2 Week 10.pdf", warmup: "none",
  sched: "Day 1 Back 1 | Day 2 Chest & Shoulder with PT | Day 3 Legs & back 2",
  note: "Do this every other week.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Hamstring Machine", sr: "3 / 15", no: "Light." },
      { n: "Toes Out Ham Curl Machine", sr: "3 / 15", no: "Turn toes out." },
      { n: "Angel Raises", sr: "3 / 15", no: "Increase weight each set.", v: "https://youtu.be/1B6DtQYZFgA" }
    ]},
    { name: "Group 2", ex: [
      { n: "Staggered Leg Press, Half Rep Full Rep", sr: "3 / 10", no: "All the way down, halfway up, all the way up = 1.", v: "https://youtube.com/shorts/WonlCXJOf6U" },
      { n: "Close Stance Leg Press", sr: "3 / 70% effort to failure", no: "Bang out a bunch of reps with both legs, feet closer together to work the quads. Weight is light for two legs so it shouldn't be tough on the knees." }
    ]},
    { name: "Group 3", ex: [
      { n: "Straight Arm Pulldowns", sr: "3 / 15", v: "https://youtube.com/shorts/p0RAZ5fSiTA" },
      { n: "Abduction (cable machine)", sr: "3 / 10 each", no: "Sweep outward a bit.", v: "https://youtu.be/q8wF4P6jzAc" }
    ]},
    { name: "Group 4", ex: [
      { n: "Deadlifts for Speed", sr: "3 / 15", no: "Light weight (50–60% of your usual 10 rep) and rapid-fire movement. Use the hex bar." }
    ]}
  ]
},
{
  id: "p2w10b", program: 2, week: 10, slot: 2, title: "Back", focus: ["back","biceps","shoulders","chest","core"],
  source: "Program 2 Week 10.pdf", warmup: "none",
  groups: [
    { name: "Group 1", ex: [
      { n: "Body Weight Row on Squat Bar", sr: "4 / 10", no: "No rest.", v: "https://youtube.com/shorts/DovqbRLUzHI" },
      { n: "Push Ups", sr: "4 / 10 to failure", no: "No rest." }
    ]},
    { name: "Group 2", ex: [
      { n: "Single Arm Lat Pulldown", sr: "3 / 10 each side", no: "Gradually increase weight each set. Bring elbow to hip.", v: "https://youtu.be/XLhbMVDVV5U" },
      { n: "External Rotation with Cable", sr: "3 / 10 each", no: "Keep arm close to body.", v: "https://youtube.com/shorts/uCdEOu7cysk" }
    ]},
    { name: "Group 3", ex: [
      { n: "Chin Ups with 10lb Weight Belt", sr: "3 / failure", no: "Hands inside facing each other — V grip." },
      { n: "Regular Pull Ups, Wide Grip", sr: "3 / failure" },
      { n: "Rear Flye with Cable", sr: "3 / 10", v: "https://youtu.be/xSTtvElSiqY" }
    ]},
    { name: "Group 4", ex: [
      { n: "Iso Bicep Curl on Bench", sr: "3 / 10", no: "Go heavy and spot yourself with the opposite hand.", v: "https://youtu.be/XRcqY5dQGk0" },
      { n: "Wall Angels", sr: "3 / 10", v: "https://youtube.com/shorts/SPVwKXNtfZI" },
      { n: "Hanging Leg Raises", sr: "3 / 10", v: "https://youtu.be/1CLWEzKUkY0" }
    ]}
  ]
},
{
  id: "p2w11a", program: 2, week: 11, slot: 1, title: "Legs 1", focus: ["legs","glutes","calves","core"],
  source: "Program 2 Week 11.pdf", warmup: "none",
  sched: "Day 1 Legs 1 | Day 2 Push / Pull with trainer | Day 3 Legs 2",
  note: "Theme of the week: Legs. Next week Chest, then Back.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Calf Raises on Leg Press, Full ROM, Multi-directional", sr: "3 / 15", no: "Each set turn the foot a different direction — forward, toes out, toes in." },
      { n: "Calf Raises on Leg Press, Half ROM", sr: "3 / 10", no: "Regular stance." }
    ]},
    { name: "Group 2", ex: [
      { n: "Single Leg, Leg Press", sr: "3 / 10 each side", no: "Grab a folded rug on the seat to boost you up a few inches, legs high on the press pad, toes slightly out, drop the seat forward as much as possible." }
    ]},
    { name: "Group 3", ex: [
      { n: "Single Leg Straight Leg Deadlift", sr: "3 / 10 each", no: "Heavy.", v: "https://youtube.com/shorts/Estp1CaPOQ4" }
    ]},
    { name: "Group 4", ex: [
      { n: "Single Leg Quad Extension + Pulses", sr: "3 / 10 + 10 pulses", no: "Pulse reps at the top immediately after the last rep." }
    ], flags: ["PDF labels this 'Group 3' a second time."]},
    { name: "Group 5", ex: [
      { n: "Weighted Hanging Leg Raises", sr: "3 / failure", no: "Use a 5lb weight or small inflated ball." },
      { n: "Reverse Crunches", sr: "3 / 12", v: "https://youtu.be/-jQk8j0svHg" },
      { n: "Side Plank Dips", sr: "3 / 15", v: "https://youtube.com/shorts/jexjI1kYy8I" }
    ]}
  ]
},
{
  id: "p2w11b", program: 2, week: 11, slot: 2, title: "Legs 2", focus: ["legs","glutes","core"],
  source: "Program 2 Week 11.pdf", warmup: "none",
  flags: ["PDF labels this 'Workout 3'."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Weighted Walking Lunges", sr: "3 / 20", no: "Light, medium, heavy." },
      { n: "Lateral Band Walk", sr: "3 / 20", no: "Heavy band.", v: "https://youtu.be/rlg56k19up4" }
    ]},
    { name: "Group 2", ex: [
      { n: "Weighted Side Lunges", sr: "3 / 10 each", no: "Use one weight this time, hold it horizontal in front of you.", v: "https://youtube.com/shorts/Jl7XFKVu-F4" }
    ]},
    { name: "Group 3", ex: [
      { n: "Cable Abduction", sr: "3 / 15 each side", v: "https://youtu.be/q8wF4P6jzAc" }
    ]},
    { name: "Group 4", ex: [
      { n: "Weighted Plank Rocks", sr: "3 / 20", no: "See if you can do it with the big 25lb plate.", v: "https://youtu.be/-jQk8j0svHg" }
    ]},
    { name: "Group 5", ex: [
      { n: "Single Leg Box Jumps", sr: "3 / 5 each side", no: "Land light, small box, one leg at a time.", v: "https://youtube.com/shorts/BaOYQK00or8" }
    ]}
  ]
}
];

/* PROGRAM 3 — "Train Like An Athlete". Week 1 only. */
const P3 = [
{
  id: "p3w1a", program: 3, week: 1, slot: 1, title: "Posterior", focus: ["back","hamstrings","glutes","shoulders","core"],
  source: "Program 3 Week 1.pdf", warmup: "none",
  sched: "Day 1 Posterior | Day 2 Chest / Shoulder / Quad with [PT]",
  note: "This phase incorporates more complex movements, improving mobility & strength.",
  flags: ["Only one written workout exists for Program 3. The weekly schedule line is cut off in the PDF."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Single Arm Lat Pulldown", sr: "3 / 12", v: "https://youtube.com/shorts/TV1XM2Nkxcs", flags: ["The note printed here ('each set turn foot in a different direction') belongs to a calf-raise exercise — copy-paste error in the PDF. Ignored."] },
      { n: "Wall Angels", sr: "3 / 10", v: "https://youtube.com/shorts/SPVwKXNtfZI" }
    ]},
    { name: "Group 2", ex: [
      { n: "Pull Ups, Multi Grip", sr: "6 / failure", no: "Sets 1 & 6 outer, sets 2 & 4 middle, sets 3 & 5 inner." }
    ]},
    { name: "Group 3", ex: [
      { n: "Rear Delt Flye on Cable Machine", sr: "3 / 10 each", v: "https://youtube.com/shorts/bkejPHrPkmA" },
      { n: "Hanging Leg Raises", sr: "3 / failure" }
    ]},
    { name: "Group 4", ex: [
      { n: "Hamstring Curl Machine", sr: "2 / 10" },
      { n: "Hip Stretch", sr: "2", v: "https://youtube.com/shorts/75U6ocKzAGg" }
    ], flags: ["PDF labels this 'Group 3' a second time."]},
    { name: "Group 5", ex: [
      { n: "Deadlift with Hex Bar", sr: "3 / 10", no: "7/10 on intensity. Focus on form and controlling both the positive and the negative." },
      { n: "Weighted Side Lunge (light)", sr: "3 / 10 each side", no: "Focus on form and activating the glute. You'll probably do this best barefoot.", v: "https://youtube.com/shorts/Jl7XFKVu-F4" }
    ]},
    { name: "Group 6", ex: [
      { n: "Wood Chops with Rope", sr: "2 / 15 each side", v: "https://youtu.be/v2xZA1a3ghU" }
    ]}
  ]
}
];
