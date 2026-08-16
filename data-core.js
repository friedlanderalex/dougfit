/* DougFit core data: stretches, warmups, exercise library metadata.
   All content transcribed from Doug's PDFs in the DougFit Drive folder. */

const STRETCHES = [
  { name: "Inch Worms", notes: "Stretch back of legs and calves; bring heels down toward ground.", video: "https://youtube.com/shorts/T8EsgnHEHjM" },
  { name: "Pigeon", notes: "For outer glute.", video: "https://youtube.com/shorts/r4UzABGnlgM" },
  { name: "IT Band", notes: "", video: "https://youtube.com/shorts/NV-iLEGw0DI" },
  { name: "Inner Thigh", notes: "", video: "https://youtube.com/shorts/VYj1Jvx-NXI" },
  { name: "Hip Stretch", notes: "Forearms down on ground on the inside of front leg. (Or use the stretch station in the gym.)", video: "https://youtube.com/shorts/U7KL58SiQfk" },
  { name: "Chest Stretch", notes: "", video: "https://youtube.com/shorts/G0Fv55NQmO8" }
];

const SCORPION = { name: "Scorpion", notes: "3 each side.", video: "https://youtu.be/XQxzzzk6c4M" };

const STRETCH_RULE =
  "Do each briefly (4 reps or 20 seconds) to check for over-tight areas. If a pose feels stiff or tight, spend more time there (+30 sec to 1 min).";

const WARMUPS = {
  run: { label: "0.25 mile run", detail: "Easy quarter-mile to raise heart rate before stretching." },
  cardio5: { label: "5 min cardio", detail: "Five minutes on the elliptical/bike/treadmill." },
  none: { label: "General warm-up", detail: "Warm up until your first working set feels challenging, not fresh." }
};

const CARDIO_RULE =
  "Minimum 2 × 20-minute cardio sessions per week, ideally elliptical. Heart rate above 110 bpm for ~20 min counts. Best done first thing in the morning, or 15 min after weights.";

const SCHEDULE_RULE =
  "Rest days, cardio days and workout days are interchangeable, but workout days should be spread through the week rather than bunched. Don't take more than 2 rest days in a row.";
