/* PROGRAM 1 — "Alex F." foundation block. Weeks 1–10.
   Schema per workout:
     id, program, week, slot (order within week), title, focus[], source (PDF),
     sched (that week's schedule line), warmup, groups[{name, ex[{n,sr,no,v,flags[]}]}],
     flags[] = data-quality notes surfaced in the app.
   ex.n=name  ex.sr=sets/reps  ex.no=notes  ex.v=video  ex.flags=[issue strings]
   ex.kind: "text" for free-form / circuit style blocks. */

const P1 = [
{
  id: "p1w1a", program: 1, week: 1, slot: 1, title: "Chest", focus: ["chest","triceps","biceps","core"],
  source: "Program 1 Week 1.pdf", warmup: "run",
  sched: "Day 1 .25 mile run + Chest | Day 2 20 min cardio or rest | Day 3 .25 mile run + Back | Day 4 Rest | Day 5 Trainer | Day 6 Rest or arms pump | Day 7 20 min cardio",
  note: "All sets are working sets — warm up first, then count the sets that are challenging.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Smith Machine Bench", sr: "3 working sets / 8", no: "Tempo: 3 seconds controlled on the way down. Pause when arms are at 95°." }
    ]},
    { name: "Group 2", ex: [
      { n: "Hex Press", sr: "3 / 10", no: "Holding weights together.", v: "https://youtu.be/ittAU7mSvdY" },
      { n: "Tricep Kick Back", sr: "3 / 12", no: "Rotate palm to face ceiling.", v: "https://youtu.be/za2oCVuMgYw" }
    ]},
    { name: "Group 3", ex: [
      { n: "Chest Flye (cable)", sr: "3 / 10", no: "Slow on the return.", v: "https://youtu.be/nUcSr0l7y8o" },
      { n: "Wall Angels", sr: "3 / 10", no: "Keep hands on the wall. Stretches the chest and works the rear shoulder.", v: "https://youtu.be/SPVwKXNtfZI" },
      { n: "Criss Cross Flye", sr: "3 / 12", no: "Wrist over wrist to activate mid chest; alternate which hand is on top each set.", v: "https://youtube.com/shorts/GIfQjtlkbng" }
    ]},
    { name: "Group 4", ex: [
      { n: "Triceps Extension (rope)", sr: "3 / 10", v: "https://youtube.com/shorts/9h-8KUq7pYk" },
      { n: "Hammer Curl w/ Rope", sr: "3 / 10", no: "Keep elbows at side.", v: "https://youtu.be/Lyd_x0zGykw" }
    ]},
    { name: "Group 5", ex: [
      { n: "Sit Up + Press", sr: "2 / 15", v: "https://youtu.be/4bWJIwkKJMU" },
      { n: "Hammer Curl + External Rotation", sr: "2 / 10", no: "Keep elbows at sides.", v: "https://youtu.be/RbHUf626EeM" }
    ]}
  ]
},
{
  id: "p1w1b", program: 1, week: 1, slot: 2, title: "Back", focus: ["back","biceps","core"],
  source: "Program 1 Week 1.pdf", warmup: "run",
  note: "Do 1–2 light sets of this before the heavy pull down: https://youtu.be/IsWuvC7KQ9E",
  flags: ["PDF heading reads 'WEEK 2: Workout 2 Back' inside the Week 1 template. Filed here as Week 1 workout 2."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Lat Pull Down", sr: "3 / 8 heavy", no: "Normal grip (pull-up grip)." },
      { n: "Straight Arm Pull Over w/ Rope", sr: "3 / 10", no: "Keep arms straight, bring rope to hips — this activates the lats.", v: "https://www.youtube.com/shorts/p0RAZ5fSiTA" }
    ]},
    { name: "Group 2", ex: [
      { n: "Iso Hold Chin Up", sr: "3 / failure or 20 sec hold", v: "https://youtu.be/9D0SqFCWQA4" }
    ]},
    { name: "Group 3", ex: [
      { n: "Single Arm Retraction Row", sr: "2 / 10 each", no: "Bring elbow toward hip, let shoulder go all the way down. Lighter weight, controlled speed and a good squeeze at the top beats heavier weight here.", v: "https://youtube.com/shorts/gh7WDui5gWA" }
    ]},
    { name: "Group 4 (3 sets)", ex: [
      { n: "Assisted Child's Pose", sr: "As needed", no: "Use a big physio ball or wall. Just to stretch.", v: "https://www.youtube.com/watch?v=pqaxaQ5_FmM" },
      { n: "Over Head Bicep Curls", sr: "3 / 10", v: "https://youtube.com/shorts/ZFbozvy7kAI" },
      { n: "External Rotation (cable)", sr: "3 / 10 each", v: "https://youtube.com/shorts/uCdEOu7cysk" }
    ]},
    { name: "Group 5 (3 sets)", ex: [
      { n: "Chops with Rope", sr: "3 / 15 each side", v: "https://youtu.be/v2xZA1a3ghU" }
    ]}
  ]
},
{
  id: "p1w2a", program: 1, week: 2, slot: 1, title: "Chest 2", focus: ["chest","triceps","back"],
  source: "Program 1 Week 2.pdf", warmup: "run",
  sched: "Day 1 .25 mile run + Chest | Day 2 20 min cardio or rest | Day 3 Trainer | Day 4 Rest | Day 5 Thai Legs Workout | Day 6 Rest or arms pump | Day 7 20 min cardio",
  flags: ["PDF heading reads 'Week 1: Workout 3 Chest 2' but the file is Week 2. Filed as Week 2."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Chest Flye (dumbbell)", sr: "3 / 10", v: "https://youtube.com/shorts/hr9TBcFSHps" },
      { n: "Close Grip Lat Pull Downs", sr: "3 / 12", no: "Arch back slightly, chest toward the ceiling. Imagine pulling your hands to your upper chest.", v: "https://youtu.be/UAiHL8Lj62U" }
    ]},
    { name: "Group 2", ex: [
      { n: "Incline Dumbbell Bench Press", sr: "3 / 8 heavy", no: "Use a small incline.", v: "https://youtu.be/Moqoo0x3QU4" },
      { n: "Upward Chest Flye", sr: "3 / 12", no: "Keep tension — don't let your hands pass your front pockets.", v: "https://youtu.be/At-RZyoy7H0" }
    ]},
    { name: "Group 3", ex: [
      { n: "Assisted Dips", sr: "3 / 15", no: "Using the assisted pull-up machine. If no dip machine, do 'treadmill dips'.", v: "https://youtu.be/FfXV4lAipSg" },
      { n: "Tricep Extensions", sr: "3 / 15", v: "https://youtube.com/shorts/9h-8KUq7pYk" }
    ]},
    { name: "Group 4", ex: [
      { n: "Push Ups", sr: "1 / 40", no: "As many as you can with a 10-second break as needed until you hit 40. Chest hits the ground each rep." }
    ]}
  ]
},
{
  id: "p1w2b", program: 1, week: 2, slot: 2, title: "Thai Leg Workout", focus: ["legs","glutes","core","conditioning"],
  source: "Program 1 Week 2.pdf", warmup: "none",
  note: "Text-format circuit workout. Work top to bottom.",
  groups: [
    { name: "1. Warm Up", ex: [
      { n: "Jump rope or jog", sr: "5 min", kind: "text" }
    ]},
    { name: "2. Ankle Mobility Walk", ex: [
      { n: "Heel walk", sr: "20 steps", no: "Toes up.", v: "https://youtube.com/shorts/gkxqatjlpwo" },
      { n: "Outer ankle walk", sr: "20 steps", no: "Ideally barefoot, unless the gym floor is icky — then keep shoes on." }
    ]},
    { name: "3. Walking Lunge Pyramid", ex: [
      { n: "Walking Lunges — pyramid", sr: "Several sets to failure", no: "Start body weight, 20 alternating lunges. Press through the heel of the front foot to push UP not forward. Increase weight each set until you can't do more than 12–16 reps, then drop the weights and do 10 more body-weight lunges. E.g. set 1 body weight, set 2 20lb, set 3 35lb, set 4 50lb fail at 12 → drop to body weight.", v: "https://youtube.com/shorts/NY9WwLJAG7A" }
    ]},
    { name: "4. Angel Raises + SDL (superset)", ex: [
      { n: "Angel Raises", sr: "3 / 15 each side", v: "https://youtu.be/1B6DtQYZFgA" },
      { n: "Dumbbell SDL", sr: "15 reps", v: "https://youtu.be/oscR8iGcKy0" }
    ], flags: ["PDF numbers this section '3' a second time — the numbering skips. Sequence preserved as printed."]},
    { name: "5. Offset Squat + Side Lunge (superset)", ex: [
      { n: "Offset Squat", sr: "2 / 12 each side", v: "https://youtu.be/pIuLIll23f4" },
      { n: "Side Lunge Stability Drill", sr: "2 / 10", no: "Pause 1 second, then propel to the other side.", v: "https://youtube.com/shorts/k9B943a_m-0" }
    ]},
    { name: "6. Ab Circuit (3 rounds)", ex: [
      { n: "Mountain Climbers", sr: "20 reps" },
      { n: "Starfish Hold", sr: "20 sec each side", v: "https://youtu.be/cwqRIRnWUaU" },
      { n: "Hip Dips", sr: "20", v: "https://youtube.com/shorts/YW7kWs-HMA0" },
      { n: "Leg Raises", sr: "15", v: "https://youtu.be/4WlQTKwaAt8" }
    ]},
    { name: "7. Finisher", ex: [
      { n: "Incline Treadmill Sprints", sr: "4 sprints", no: "10% incline, 15 second sprint.", v: "https://youtu.be/0PcnYMHZg8g" }
    ]}
  ]
},
{
  id: "p1w3a", program: 1, week: 3, slot: 1, title: "Back & Legs", focus: ["back","legs","core","conditioning"],
  source: "Program 1 Week 3.pdf", warmup: "run",
  sched: "Day 1 .25 mile run + Trainer Chest | Day 2 20 min cardio or rest | Day 3 .25 mile run + Back & Legs | Day 4 Rest | Day 5 .25 run + Back | Day 6 Rest or arms pump | Day 7 20 min cardio",
  note: "All sets are working sets — warm up first, then count the challenging sets.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Seal Row", sr: "3 / 10", no: "Using a bench to stabilize, slight incline.", v: "https://youtube.com/shorts/B4x5bRVQSh8" },
      { n: "Hamstring Curl Machine", sr: "3 / 10", no: "Or walking lunges for 20 reps." }
    ]},
    { name: "Group 2", ex: [
      { n: "J Squats (cable)", sr: "3 / 10", no: "Or front squat with dumbbell + medium band if no cable. Don't worry about the mat under my heels in the video; a small band is nice but optional.", v: "https://youtu.be/Ga9X25qzA74" },
      { n: "Quad Extension", sr: "3 / 10", no: "Video shows one leg, but this week use two. 4 seconds down, fast up.", v: "https://youtu.be/l5o4X6AWyig", flags: ["PDF says '10 reps each' but also says use both legs — 'each' is likely a leftover from the single-leg version."] }
    ]},
    { name: "Group 3", ex: [
      { n: "Chin Ups", sr: "3 / failure", no: "Palms face you." },
      { n: "Wood Chops (cable)", sr: "3 / 15 each", v: "https://youtube.com/shorts/dvSQau3WlWc" },
      { n: "Hanging Leg Raise", sr: "3 / failure", no: "Hold the pull-up bar and bring knees up, stabilize your core, small lower-ab crunch as the knees come up.", v: "https://youtu.be/LD2BMyScxBU" }
    ]},
    { name: "Group 4", ex: [
      { n: "Moderate Incline Sprints", sr: "1 warm-up + 3 × 75% sprints", no: "Treadmill at 10% incline, about 2 mph faster than jogging. You should be able to hold it 15 seconds. Brisk walk on the incline 30 sec–1 min between sprints.", v: "https://youtu.be/0PcnYMHZg8g" }
    ]}
  ]
},
{
  id: "p1w3b", program: 1, week: 3, slot: 2, title: "Back", focus: ["back","biceps","triceps","core"],
  source: "Program 1 Week 3.pdf", warmup: "run",
  note: "Warm up: 3 sets of straight arm pullovers — https://youtube.com/shorts/p0RAZ5fSiTA",
  groups: [
    { name: "Group 1", ex: [
      { n: "Assisted Pull Ups", sr: "3 / failure", no: "With 40lb assistance." }
    ]},
    { name: "Group 2", ex: [
      { n: "Standing Single Arm Twisting Row (lats)", sr: "3 / 12", v: "https://youtube.com/shorts/jxDebVIefQQ" },
      { n: "Leaned Over Row (dumbbell)", sr: "3 / 15", no: "Work that grip!", v: "https://youtu.be/4FzWKTvqoN0" }
    ]},
    { name: "Group 3", ex: [
      { n: "Leaned Back Row", sr: "3 / 12 + drop set last set", no: "Palms face you.", v: "https://youtu.be/VyZZIp5KVbU" },
      { n: "Lateral Flye", sr: "3 / 15", v: "https://youtu.be/CDtxVVQy_EE" },
      { n: "Cross Body Curls", sr: "3 / 20 alternating", v: "https://youtu.be/QuVjVZcHve4" }
    ]},
    { name: "Group 4", ex: [
      { n: "Push Ups", sr: "3 / failure" },
      { n: "Tricep Dips", sr: "3 / failure", v: "https://youtu.be/gkzcO0sT7XE" },
      { n: "Weighted Sit Up Press", sr: "3 / 15", no: "Sit up and push the weight overhead.", v: "https://youtube.com/shorts/FitYXE9-sBE" },
      { n: "High Knee Burpee Sprints", sr: "3 / 5", no: "10 high knees + 10 mountain climbers = 1.", v: "https://youtu.be/aE2obhK2vkE" }
    ]}
  ]
},
{
  id: "p1w4a", program: 1, week: 4, slot: 1, title: "Legs", focus: ["legs","glutes","conditioning"],
  source: "Program 1 Week 4.pdf", warmup: "run",
  sched: "Day 1 .25 mile run + Trainer Chest | Day 2 20 min cardio or rest | Day 3 .25 mile run + Back & Legs | Day 4 Rest | Day 5 .25 run + Back | Day 6 Rest or arms pump | Day 7 20 min cardio",
  note: "Warm up with 1 set of 20 body weight walking lunges.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Leg Press", sr: "3 / 10" },
      { n: "Hamstring Curl Machine", sr: "3 / 10", v: "https://youtu.be/f6tcT02ye8s" }
    ]},
    { name: "Group 2", ex: [
      { n: "J Squats", sr: "3 / 10", no: "Don't worry about the mat under my heels in the video.", v: "https://youtu.be/Ga9X25qzA74" },
      { n: "Quad Extension", sr: "3 / 10", no: "Video shows one leg, but this week use both. 4 seconds down, fast up.", v: "https://youtu.be/l5o4X6AWyig" }
    ]},
    { name: "Group 3", ex: [
      { n: "Monster Walks", sr: "3 / 10", no: "Medium band above the knees and a light band on the ankles.", v: "https://youtu.be/hRzHgC3HqWw" },
      { n: "SDL for Posture", sr: "3 / 10", v: "https://youtu.be/oscR8iGcKy0", flags: ["No sets/reps printed in the PDF — 3/10 assumed from the Week 5 version of this exercise."] },
      { n: "Squat on Bosu", sr: "3 / 12", v: "https://youtube.com/shorts/RWfhiQeaAXA" },
      { n: "Bike Sprint", sr: "3 / 30 sec", no: "Highest level." }
    ]},
    { name: "Group 4", ex: [
      { n: "Moderate Incline Sprints", sr: "1 warm-up + 3 × 75% sprints", no: "Treadmill at 10% incline, ~2 mph faster than jogging, 15 seconds. Brisk walk 30 sec–1 min between.", v: "https://youtu.be/0PcnYMHZg8g" }
    ]}
  ]
},
{
  id: "p1w4b", program: 1, week: 4, slot: 2, title: "Back", focus: ["back","biceps","shoulders","core"],
  source: "Program 1 Week 4.pdf", warmup: "run",
  groups: [
    { name: "Group 1", ex: [
      { n: "Lat Pull Down", sr: "3 / 8 heavy", no: "Normal grip (pull-up grip)." },
      { n: "Straight Arm Pull Over w/ Rope", sr: "3 / 10", no: "Keep arms straight, bring rope to hips — activates the lats.", v: "https://www.youtube.com/shorts/p0RAZ5fSiTA" }
    ]},
    { name: "Group 2", ex: [
      { n: "Iso Hold Chin Up", sr: "3 / failure or 20 sec hold", v: "https://youtu.be/9D0SqFCWQA4" }
    ]},
    { name: "Group 3", ex: [
      { n: "Single Arm Retraction Row", sr: "2 / 10 each", no: "Bring elbow toward hip, let the shoulder go all the way down. Lighter weight, controlled speed, good squeeze at the top.", v: "https://youtube.com/shorts/gh7WDui5gWA" }
    ]},
    { name: "Group 4 (3 sets)", ex: [
      { n: "Assisted Child's Pose", sr: "As needed", no: "Use a big physio ball or wall. Just to stretch.", v: "https://www.youtube.com/watch?v=pqaxaQ5_FmM" },
      { n: "Over Head Bicep Curls", sr: "3 / 10", v: "https://youtube.com/shorts/ZFbozvy7kAI" },
      { n: "External Rotation (cable)", sr: "3 / 10 each", v: "https://youtube.com/shorts/uCdEOu7cysk" },
      { n: "Chops with Rope", sr: "3 / 15 each side", v: "https://youtu.be/v2xZA1a3ghU" }
    ]}
  ]
},
{
  id: "p1w5a", program: 1, week: 5, slot: 1, title: "Back", focus: ["back","biceps","shoulders","core"],
  source: "Program 1 Week 5.pdf", warmup: "run",
  sched: "Day 1 .25 mile run + Back | Day 2 20 min cardio or rest | Day 3 .25 mile run + Push & Pull w/ PT | Day 4 Rest | Day 5 Legs | Day 6 Rest or arms pump | Day 7 20 min cardio",
  groups: [
    { name: "Group 1", ex: [
      { n: "Straight Arm Pulldown, Wide Grip", sr: "3 / 10", no: "Pull your shoulder blades back and down.", v: "https://youtu.be/e9nG2TzEkOY", flags: ["PDF says '3/10 each' but this is a two-arm bar movement — 'each' appears to be a typo."] },
      { n: "Face Pulls", sr: "3 / 10", no: "Elbows out, pull the shoulders back, then like the straight arm pulldowns — shoulders back and down.", v: "https://youtube.com/shorts/YIDwZ0wX_a0" }
    ]},
    { name: "Group 2", ex: [
      { n: "Seated Row", sr: "3 / 10, 8, 8", no: "Drop set the last set 3 times. Use your gym's machine." }
    ]},
    { name: "Group 3", ex: [
      { n: "Body Weight Row", sr: "3 / failure", no: "Alternate your grip each set: 1 normal, 1 wide, 1 reverse.", v: "https://youtu.be/X_8g1uzqBRM" },
      { n: "Over Head Pull Overs", sr: "3 / 10", v: "https://youtu.be/rUZOx_9ohMc" }
    ]},
    { name: "Group 4", ex: [
      { n: "Hanging Knee Tucks", sr: "4 / failure", no: "Hold close grip.", v: "https://youtu.be/LD2BMyScxBU" },
      { n: "External Rotation", sr: "3 / 10", v: "https://youtube.com/shorts/uCdEOu7cysk" },
      { n: "Bicep Curl with Rope", sr: "3 / 15, 10, 8 + drop set", v: "https://youtu.be/Lyd_x0zGykw" }
    ]}
  ]
},
{
  id: "p1w5b", program: 1, week: 5, slot: 2, title: "Legs", focus: ["legs","glutes"],
  source: "Program 1 Week 5.pdf", warmup: "run",
  groups: [
    { name: "Group 1", ex: [
      { n: "Single Leg, Leg Press Machine", sr: "3 / 10 each", no: "One leg presses; the other rests on the plate or floor." }
    ]},
    { name: "Group 2", ex: [
      { n: "Squat on Bosu", sr: "3 / 12", v: "https://youtube.com/shorts/RWfhiQeaAXA" },
      { n: "Single Leg Quad Extension", sr: "3 / 15 each", v: "https://youtu.be/l5o4X6AWyig" },
      { n: "Lateral Band Walks", sr: "3 / 20 steps (10 each way)", no: "Medium above knee, light on ankle — or just a heavy band on the ankles.", v: "https://youtu.be/tq2ewKb4jJQ" }
    ]},
    { name: "Group 3", ex: [
      { n: "SDL for Posture", sr: "3 / 10 each", no: "Pull shoulders back at the top, rotate the weights to behind you.", v: "https://youtu.be/oscR8iGcKy0" },
      { n: "Chest Stretch", sr: "3 / as needed", v: "https://youtube.com/shorts/G0Fv55NQmO8" }
    ]},
    { name: "Group 4", ex: [
      { n: "Weighted Side Lunges", sr: "3 / 10 one side at a time", no: "Toes and knee stay forward; move sideways with lateral hip movement, launch back in place from the outer glute.", v: "https://youtube.com/shorts/Jl7XFKVu-F4" },
      { n: "Box Jumps", sr: "3 / 10", no: "Step down — don't jump down.", v: "https://youtube.com/shorts/BaOYQK00or8" }
    ]}
  ]
},
{
  id: "p1w6a", program: 1, week: 6, slot: 1, title: "Back & Legs (Lvl 2)", focus: ["back","legs","core"],
  source: "Program 1 Week 6.pdf", warmup: "run",
  note: "All sets are working sets — warm up first, then count the challenging sets.",
  flags: ["This workout has no title in the PDF. Named 'Back & Legs' from its contents."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Assisted Pull Ups, Close Grip", sr: "3 / 10", no: "Light weight, controlled motion, full range. Look up and pull your chest toward the bar." },
      { n: "Chest Stretch", sr: "3", v: "https://youtube.com/shorts/CMp4mNj6lDQ" }
    ]},
    { name: "Group 2", ex: [
      { n: "Standing Row", sr: "3 / 10", no: "Pull the shoulder blades back and down as you pull back.", v: "https://youtu.be/PA2ZgQpxkPE" },
      { n: "Hamstring Curl Machine", sr: "3 / 10", no: "If the gym is crowded, just do this separately." }
    ]},
    { name: "Group 3", ex: [
      { n: "J Squats", sr: "3 / 10", no: "Don't worry about the mat under my heels; a small band is nice but optional.", v: "https://youtu.be/Ga9X25qzA74" },
      { n: "Quad Extension", sr: "3 / 10", no: "Video shows one leg, but this week use two. 4 seconds down, fast up. If the gym is crowded, do separately.", v: "https://youtu.be/l5o4X6AWyig" }
    ]},
    { name: "Group 4", ex: [
      { n: "Romanian Deadlift", sr: "3 / 15", no: "Light weight with a barbell. Shoulder blades back and down as you come up. If unavailable, do SDL with dumbbells.", v: "https://youtu.be/TUgXkpr3gdc" }
    ]},
    { name: "Group 5", ex: [
      { n: "Hanging Leg Raise", sr: "3 / failure", no: "Hold the bar and bring the knees up, stabilize the core, small lower-ab crunch as the knees rise." }
    ]}
  ]
},
{
  id: "p1w6b", program: 1, week: 6, slot: 2, title: "Chest & Shoulders 2", focus: ["chest","shoulders","triceps","core"],
  source: "Program 1 Week 6.pdf", warmup: "run",
  groups: [
    { name: "Group 1", ex: [
      { n: "Closer Grip Smith Machine Bench", sr: "3 working sets / 10", no: "Or any press machine. Tempo: 3 sec controlled down, pause when arms are at 95°. Hands shoulder width." }
    ]},
    { name: "Group 2", ex: [
      { n: "Wide Grip Smith Machine Bench", sr: "2 working sets / 10", no: "Or any press machine. Same tempo. Hands wider than normal — weight will be lighter, you'll feel it in the outer chest." }
    ]},
    { name: "Group 3", ex: [
      { n: "Hex Press", sr: "3 / 10", no: "Holding weights together.", v: "https://youtu.be/ittAU7mSvdY" },
      { n: "Tricep Kick Back", sr: "3 / 12", no: "Rotate palm to face ceiling.", v: "https://youtu.be/za2oCVuMgYw" }
    ]},
    { name: "Group 4", ex: [
      { n: "Chest Flye (cable)", sr: "3 / 10", no: "Slow on the return.", v: "https://youtu.be/nUcSr0l7y8o" },
      { n: "Pull Up Bar Negative", sr: "3 / 4", no: "Hold yourself up on the bar, 6-second negative descent, jump back up. Palms facing you or facing each other." }
    ]},
    { name: "Group 5", ex: [
      { n: "Lateral Shoulder Flye (cable)", sr: "3 / 10", v: "https://youtu.be/xUKbPse22wE" },
      { n: "Single Arm Lateral Shoulder Flye (dumbbell)", sr: "3 / 10", no: "One arm at a time." },
      { n: "External Rotation w/ Dumbbells", sr: "3 / 10", no: "Keep elbows at side.", v: "https://youtu.be/gW9b-zS-Z0s" }
    ]},
    { name: "Group 6", ex: [
      { n: "Reverse Crunch", sr: "3 / 10", v: "https://youtu.be/Xxq9t5AFZk4" }
    ]}
  ]
},
{
  id: "p1w7a", program: 1, week: 7, slot: 1, title: "Chest & Legs", focus: ["chest","legs","shoulders","core"],
  source: "Program 1 Week 7.pdf", warmup: "none",
  sched: "Day 1 Back 1 + PT | Day 2 cardio | Day 3 Chest & Legs | Day 4 Cardio | Day 5 Back 2 | Day 6 Rest or pump | Day 7 Rest",
  note: "Each week has a theme (focus group). This week: Back. Next week Legs, then Chest.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Incline Smith Bench Press", sr: "4 / 10, 8, 6, 6" }
    ]},
    { name: "Group 2", ex: [
      { n: "Negative Push Press", sr: "3 / 10", no: "Slow and controlled down, use the legs for help on the way up. Do close grip. Doesn't have to be heavy — the negative builds stability.", v: "https://youtube.com/shorts/LjgGpi8lMgg" }
    ]},
    { name: "Group 3", ex: [
      { n: "Leg Press Machine", sr: "4 / 15, 10, 8, 8" },
      { n: "Body Weight Side To Side Lunges", sr: "3 / 20 alternating", no: "No weight.", v: "https://youtu.be/b3ERkFYy1kU" }
    ]},
    { name: "Group 4", ex: [
      { n: "Cable Flyes", sr: "3 / 12", v: "https://youtu.be/nUcSr0l7y8o" },
      { n: "Criss Cross Flyes", sr: "3 / failure", no: "Same weight you used for the flyes.", v: "https://youtube.com/shorts/GIfQjtlkbng" }
    ]},
    { name: "Group 5", ex: [
      { n: "Quad Extensions", sr: "4 / 16" },
      { n: "Hanging Leg Raises", sr: "4 / failure" }
    ]}
  ]
},
{
  id: "p1w7b", program: 1, week: 7, slot: 2, title: "Back 1", focus: ["back","biceps","core"],
  source: "Program 1 Week 7.pdf", warmup: "none",
  flags: ["PDF heading reads 'WEEK 3 Workout 1 Back 1' inside the Week 7 file — a copy-paste leftover. Filed as Week 7."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Lat Pull Down", sr: "3 / 8 heavy", no: "Normal grip (pull-up grip)." },
      { n: "Straight Arm Pull Over w/ Rope", sr: "3 / 10", no: "Keep arms straight, bring rope to hips.", v: "https://www.youtube.com/shorts/p0RAZ5fSiTA" }
    ]},
    { name: "Group 2", ex: [
      { n: "Assisted Chin Ups", sr: "4 / 10, 8, 5, 5", no: "ALL THE WAY DOWN." }
    ]},
    { name: "Group 3", ex: [
      { n: "Single Arm Retraction Row", sr: "3 / 10 each", no: "Bring elbow toward hip, let the shoulder go all the way down. Lighter weight, controlled, good squeeze at the top.", v: "https://youtube.com/shorts/gh7WDui5gWA" }
    ]},
    { name: "Group 4 (3 sets)", ex: [
      { n: "Assisted Child's Pose", sr: "As needed", no: "Use a big physio ball or wall. Just to stretch.", v: "https://www.youtube.com/watch?v=pqaxaQ5_FmM" },
      { n: "Over Head Bicep Curls", sr: "3 / 10", v: "https://youtube.com/shorts/ZFbozvy7kAI" },
      { n: "External Rotation (cable)", sr: "3 / 10 each", v: "https://youtube.com/shorts/uCdEOu7cysk" },
      { n: "Chops with Rope", sr: "3 / 15 each side", v: "https://youtu.be/v2xZA1a3ghU" }
    ]},
    { name: "Group 5", ex: [
      { n: "Zottman Curls", sr: "3 / 15", no: "Controlled movement.", v: "https://youtu.be/BM742r4qYCI" }
    ]}
  ]
},
{
  id: "p1w8a", program: 1, week: 8, slot: 1, title: "Legs", focus: ["legs","glutes","core","conditioning"],
  source: "Program 1 Week 8.pdf", warmup: "none",
  sched: "Day 1 Legs 1 | Day 2 Push Pull with PT | Day 3 Legs 2",
  note: "Theme of the week: Legs. Next week Chest, then Back.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Walking Lunges", sr: "2 / 20", no: "Just body weight." },
      { n: "Hamstring Curl Machine", sr: "2 / 10 + 1 heavy set of 8", no: "3 second negative on the heavy set." }
    ]},
    { name: "Group 2", ex: [
      { n: "J Squats", sr: "3 / 10", no: "Don't worry about the mat under my heels; small band optional.", v: "https://youtu.be/Ga9X25qzA74" }
    ]},
    { name: "Group 3", ex: [
      { n: "Monster Walks", sr: "3 / 20", no: "Very important for health, longevity and future safety with strength training. Medium band above the knees, light on the ankles — or one heavier band on the ankles.", v: "https://youtu.be/hRzHgC3HqWw" },
      { n: "Single Leg Quad Extension", sr: "3 / 10 each", v: "https://youtu.be/l5o4X6AWyig" },
      { n: "Bike Sprint", sr: "3 / 1 min", no: "Level 14." },
      { n: "Rocking Plank", sr: "3 / failure", v: "https://youtu.be/1WSNOpDf-x8" },
      { n: "Hanging Leg Raises", sr: "3 / failure", v: "https://youtu.be/1CLWEzKUkY0" }
    ]}
  ]
},
{
  id: "p1w8b", program: 1, week: 8, slot: 2, title: "Push + Pull", focus: ["chest","back","shoulders","biceps","triceps","core"],
  source: "Program 1 Week 8.pdf", warmup: "none",
  groups: [
    { name: "Group 1", ex: [
      { n: "Incline Dumbbell Press", sr: "3 working sets / 8", no: "Tempo: 3 sec controlled down, pause 1 second when arms are at 105°. Weight is heavy — you're in control and not going all the way down." },
      { n: "Any Back / Row Machine", sr: "3 / 15", no: "Weight is light." }
    ]},
    { name: "Group 2", ex: [
      { n: "Half Rep Full Rep Chest Press", sr: "3 / 10", no: "Machine or close grip dumbbells. Go all the way down, come up 1/3 to 1/2 way, back down, then all the way up. 1 half + 1 full = 1 rep.", v: "https://youtu.be/gaMi8U2gC4A" },
      { n: "Crucifix Flye", sr: "3 / 12", v: "https://youtube.com/shorts/ICnNRVnNBH8" }
    ]},
    { name: "Group 3", ex: [
      { n: "Bicep Curl to Half Arnold", sr: "3 / 10", v: "https://youtu.be/7DqTBaG6uK4" },
      { n: "Leaned Back Row", sr: "3 / 10", no: "Wide reverse grip. If it feels weird on the wrists, use the smaller straight bar or normal grip.", v: "https://youtu.be/DBidu5nvyCk" }
    ]},
    { name: "Group 4", ex: [
      { n: "Standing Shoulder Press", sr: "3 / 10", no: "Watch the video for form — lighter weight, more concentrated.", v: "https://www.youtube.com/watch?v=CXLtu4VhL78" },
      { n: "Tricep Extensions", sr: "3 / 15", no: "Cable & rope." },
      { n: "Weighted Abs", sr: "3 / 20", v: "https://youtu.be/HVBM8TzFGMA" }
    ]}
  ]
},
{
  id: "p1w9a", program: 1, week: 9, slot: 1, title: "Legs", focus: ["legs","glutes","core","conditioning"],
  source: "Program 1 Week 9.pdf", warmup: "none",
  sched: "Day 1 Legs 2.0 | Day 2 Back with PT | Day 3 Push / Pull",
  note: "Theme of the week: Legs. Next week Chest, then Back.",
  groups: [
    { name: "Group 1", ex: [
      { n: "Hamstring Machine", sr: "3 / 15", no: "Light." },
      { n: "Angel Raises", sr: "3 / 15", no: "Increase weight each set.", v: "https://youtu.be/1B6DtQYZFgA", flags: ["PDF spells this 'Angle Raises'. Doug's video shows Angel Raises."] }
    ]},
    { name: "Group 2", ex: [
      { n: "Staggered Leg Press", sr: "3 / 10 each", v: "https://youtube.com/shorts/WonlCXJOf6U" }
    ]},
    { name: "Group 3", ex: [
      { n: "2× Band Lateral Band Walk", sr: "3 / 20 steps", v: "https://youtube.com/shorts/mVOVPc9nGgA", flags: ["Video link in the PDF points to a quad-extension clip, not band walks."] },
      { n: "Multi Directional Quad Extension", sr: "3 / 10 each", no: "Regular, toes out, toes in." }
    ]},
    { name: "Group 4", ex: [
      { n: "Incline Sprints", sr: "4 sprints", v: "https://youtu.be/0PcnYMHZg8g" },
      { n: "Plank Rocks", sr: "3 / 20", no: "Feet on an upside-down bosu.", v: "https://youtu.be/-jQk8j0svHg" }
    ]}
  ]
},
{
  id: "p1w9b", program: 1, week: 9, slot: 2, title: "Push + Pull", focus: ["chest","back","shoulders","biceps","triceps","core"],
  source: "Program 1 Week 9.pdf", warmup: "none",
  flags: ["Identical to the Week 8 Push + Pull workout — Doug appears to have repeated the block."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Incline Dumbbell Press", sr: "3 working sets / 8", no: "Tempo: 3 sec down, pause 1 sec at 105°. Heavy, controlled, not all the way down." },
      { n: "Any Back / Row Machine", sr: "3 / 15", no: "Weight is light." }
    ]},
    { name: "Group 2", ex: [
      { n: "Half Rep Full Rep Chest Press", sr: "3 / 10", no: "Machine or close grip dumbbells. 1 half + 1 full = 1 rep.", v: "https://youtu.be/gaMi8U2gC4A" },
      { n: "Crucifix Flye", sr: "3 / 12", v: "https://youtube.com/shorts/ICnNRVnNBH8" }
    ]},
    { name: "Group 3", ex: [
      { n: "Bicep Curl to Half Arnold", sr: "3 / 10", v: "https://youtu.be/7DqTBaG6uK4" },
      { n: "Leaned Back Row", sr: "3 / 10", no: "Wide reverse grip.", v: "https://youtu.be/DBidu5nvyCk" }
    ]},
    { name: "Group 4", ex: [
      { n: "Standing Shoulder Press", sr: "3 / 10", no: "Lighter weight, more concentrated.", v: "https://www.youtube.com/watch?v=CXLtu4VhL78" },
      { n: "Tricep Extensions", sr: "3 / 15", no: "Cable & rope." },
      { n: "Weighted Abs", sr: "3 / 20", v: "https://youtu.be/HVBM8TzFGMA" }
    ]}
  ]
},
{
  id: "p1w10a", program: 1, week: 10, slot: 1, title: "Legs", focus: ["legs","glutes","core","conditioning"],
  source: "Program 1 Week 10.pdf", warmup: "none",
  sched: "Day 1 Back 2 | Day 2 Chest & Shoulder with PT | Day 3 Legs 1",
  flags: ["Identical to the Week 9 Legs workout."],
  groups: [
    { name: "Group 1", ex: [
      { n: "Hamstring Machine", sr: "3 / 15", no: "Light." },
      { n: "Angel Raises", sr: "3 / 15", no: "Increase weight each set.", v: "https://youtu.be/1B6DtQYZFgA" }
    ]},
    { name: "Group 2", ex: [
      { n: "Staggered Leg Press", sr: "3 / 10 each", v: "https://youtube.com/shorts/WonlCXJOf6U" }
    ]},
    { name: "Group 3", ex: [
      { n: "2× Band Lateral Band Walk", sr: "3 / 20 steps" },
      { n: "Multi Directional Quad Extension", sr: "3 / 10 each", no: "Regular, toes out, toes in." }
    ]},
    { name: "Group 4", ex: [
      { n: "Incline Sprints", sr: "4 sprints", v: "https://youtu.be/0PcnYMHZg8g" },
      { n: "Plank Rocks", sr: "3 / 20", no: "Feet on an upside-down bosu.", v: "https://youtu.be/-jQk8j0svHg" }
    ]}
  ]
},
{
  id: "p1w10b", program: 1, week: 10, slot: 2, title: "Back", focus: ["back","biceps","chest","core"],
  source: "Program 1 Week 10.pdf", warmup: "none",
  groups: [
    { name: "Group 1", ex: [
      { n: "Body Weight Row on Squat Bar", sr: "3 / 15", v: "https://youtube.com/shorts/DovqbRLUzHI" },
      { n: "Half Rep Full Rep Push Ups", sr: "3 / failure", no: "All the way down, half way up, all the way down, all the way up.", v: "https://youtu.be/K-m_aJ8EChw" }
    ]},
    { name: "Group 2", ex: [
      { n: "Single Arm Lat Pulldown", sr: "3 / 10 each side", no: "Gradually increase weight each set. Bring elbow to hip.", v: "https://youtu.be/XLhbMVDVV5U" },
      { n: "Single Arm Straight Arm Pulldown", sr: "3 / 12 each", no: "Bring arm past the body. Can hold the cable ball or a handle.", v: "https://youtu.be/ZjgVM2wjvHI" }
    ]},
    { name: "Group 3", ex: [
      { n: "Chin Ups", sr: "3 / failure", no: "Hands inside facing each other — V grip." },
      { n: "Leaned Over Cable Row", sr: "3 / 10", no: "Go heavy but keep good form, back straight, don't arch. Drop set the last set 2×.", v: "https://youtu.be/VqO-SwOrhgI" }
    ]},
    { name: "Group 4", ex: [
      { n: "Hammer Curl with Rope", sr: "3 / 10", no: "Gradually rotate the rope apart as you come up. Drop set last set.", v: "https://youtu.be/Lyd_x0zGykw" },
      { n: "Supinating Bicep Curl", sr: "3 / 15", v: "https://youtu.be/D4EPGkb0n58" },
      { n: "Weighted Abs", sr: "3 / 20", v: "https://youtu.be/HVBM8TzFGMA" }
    ]}
  ]
}
];
