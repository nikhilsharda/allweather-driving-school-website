export const SITE = "https://allweatherdrivingschool.com";
export const REGISTER = "/student-registration";
export const PHONE = "250-763-6562";
export const EMAIL = "info@allweatherdrivingschool.com";
export const ADDRESS = "1931 Kent Rd, Kelowna BC V1Y 7S6";

export const NAV = [
  { label: "About", items: [
    { label: "About Us", to: "/about-us" }, { label: "What We Offer", to: "/what-we-offer" }, { label: "Student Comments", to: "/what-past-student-have-to-say" } ] },
  { label: "Courses", items: [
    { label: "Course Outline", to: "/course-outline" }, { label: "Course Packages", to: "/course-packages" },
    { label: "Motorcycle Training", to: "/motorcycle-training" }, { label: "Our Competitors", to: "/our-competitors" } ] },
  { label: "Resources", items: [
    { label: "License Classes in B.C.", to: "/license-classes-in-b-c" }, { label: "GLP Info", to: "/glp-info" }, { label: "Testing Advice", to: "/testing-advice" },
    { label: "GLP Theory Calendar", to: "/glp-theory-calendar" },
    { label: "Driving Advice", to: "/driving-advice" }, { label: "FAQ", to: "/faq" }, { label: "Road Safety Myths", to: "/faq/road-safety-myths" },
    { label: "Fun Driving & Car Facts", to: "/faq/fun-driving-car-facts" }, { label: "Blogs & News", to: "/brush-up-on-motorcycle-safety-before-hitting-the-road" } ] },
  { label: "Contact Us", to: "/contact-us" },
];

export const PACKAGES = [
  { lessons: 1, hours: 1.5, price: 170 },
  { lessons: 2, hours: 3, price: 340 },
  { lessons: 3, hours: 4.5, price: 495 },
  { lessons: 4, hours: 6, price: 660 },
  { lessons: 6, hours: 9, price: 975 },
  { lessons: 9, hours: 13.5, price: 1455 },
  { lessons: 10, hours: 15, price: 1600 },
];

export const WEATHER = [
  {
    id: "sun",
    label: "Sun",
    title: "Glare, heat and busy lakeside traffic",
    tip: "Low sun on Harvey Avenue hides signals and brake lights. We teach you to scan early, keep sunglasses in reach and leave extra following distance.",
  },
  {
    id: "rain",
    label: "Rain",
    title: "Wet roads and long stopping distances",
    tip: "Braking takes longer on wet pavement and the first minutes of rain are the slickest. You practise smooth inputs, wipers, lights and a calm, wider gap.",
  },
  {
    id: "snow",
    label: "Snow",
    title: "Ice, slush and winter hills",
    tip: "Kelowna winters mean hills and black ice. You learn gentle throttle, early braking, how to read traction and when the smartest move is not to drive.",
  },
  {
    id: "fog",
    label: "Fog",
    title: "Low visibility on the way in",
    tip: "Fog and smoke cut your sight distance fast. We cover low beams, slowing before you need to, and using lane lines and the edge of the road as guides.",
  },
];

export const TEAM = [
  {
    name: "Daryle Greenizan", photo: "/team/daryle.jpg", role: "Manager and instructor, manual transmission",
    licences: "Cars 5 and 7, motorcycles 6 and 8, trucks 1 to 4",
    bio: "Daryle has taught driving and theory classes since 2000. Born in Hope, BC, he moved to Kelowna in 1992. He believes a teacher should be patient, understanding and relaxed, applauds each student's strengths and works with them to improve their weaknesses. His goal is for students to pass their road test and to learn the defensive driving skills that will benefit them for years.",
  },
  {
    name: "Joe Bistricky", photo: "/team/joe.jpg", role: "Instructor, manual transmission",
    licences: "Cars 5 and 7",
    bio: "Joe has taught people to drive for over 25 years and has been with All Weather since 2013. He started with Young Drivers, grew up in Ontario and later owned his own driving school. Outgoing, funny and positive, he gives students the confidence they need to succeed behind the wheel.",
  },
  {
    name: "Leahann Cassidy", photo: "/team/leahann.jpg", role: "Instructor, manual transmission",
    licences: "Cars 5 and 7",
    bio: "Leahann joined in September 2015 and has been with us since the start of her career. Born and raised in Edmonton, she moved to Kelowna in 2007. Her biggest joy is helping students with fear or anxiety learn to trust their own abilities and watching their confidence grow.",
  },
  {
    name: "Chelsea Werry", photo: "/team/chelsea.jpg", role: "Instructor",
    licences: "Cars 5 and 7, Class 1 commercial",
    bio: "Chelsea grew up in Prince George and moved to Kelowna in 2011, finishing her Class 1 commercial licence in 2014. Having driven some of the largest vehicles on the road, she teaches the reality of the road, not just the rules. Calm, clear and fun, she builds confidence in every lesson.",
  },
  {
    name: "Gerry Stiglic", photo: "/team/gerry.jpg", role: "Instructor",
    licences: "Cars 5 and 7",
    bio: "Gerry was born in Surrey and has lived in Kelowna since 1992. He has driven personally and professionally for many years and finds instructing came naturally. His patience and calm manner build student confidence, and he takes real pride in every road test passed.",
  },
  {
    name: "Blake Kam", photo: "/team/blake.jpg", role: "Instructor",
    licences: "Cars 5 and 7",
    bio: "Blake is our newest instructor, born and raised in Kelowna. He grew up riding along with his grandfather, a Class 1 driver who taught him that road rules exist to keep everyone safe, and he passes that on to his students. Outside work he loves road trips and the outdoors.",
  },
];

export const INCLUDED = [
  { icon: "car", title: "Road test car included", text: "With the GLP course, the school vehicle for your road test is free." },
  { icon: "users", title: "Classes capped at 15", text: "A small room, so every student gets time with the instructor." },
  { icon: "pin", title: "Pick-up and drop-off", text: "We can collect you for lessons, and a co-pilot ride-along is available." },
  { icon: "wallet", title: "Payment plans", text: "Spread the cost, and your package price adjusts if you add lessons later." },
  { icon: "gear", title: "Manual transmission lessons", text: "Learn stick with an instructor who specialises in it." },
  { icon: "moto", title: "One-on-one motorcycle training", text: "Instructor-to-rider radio during on-road practice." },
  { icon: "senior", title: "Senior and evaluation lessons", text: "Refreshers and driving assessments at an unhurried pace." },
  { icon: "gift", title: "Gift certificates", text: "Lessons make a lasting gift for a new driver." },
];

export const REVIEWS = [
  { quote: "They were so patient and gave lots of good tips to help me increase my confidence!", name: "Mackenzie" },
  { quote: "I had Leahann as an instructor, and passed my N first try. She is awesome!!", name: "Lily" },
  { quote: "AWDS has been a cool experience for me, as a person with social anxiety they made it easier.", name: "Rayna" },
  { quote: "Thank you to all the employees at All Weather for your help in teaching my grandchildren to drive safely.", name: "Chris Nicholls" },
  { quote: "I took two lessons before my road test and the instructors were super motivating and encouraging.", name: "Kelly Lee" },
  { quote: "My experience with All Weather has been great. All of the instructors have so much knowledge.", name: "Aubrey" },
];

export const RESOURCES = [
  { q: "Which licence class do I need?", a: "Cars are Class 5 and 7, motorcycles Class 6 and 8. The licence classes guide explains each class and what ICBC expects.", href: "/license-classes-in-b-c", cta: "License classes in B.C." },
  { q: "How does the Graduated Licensing Program work?", a: "The GLP takes new drivers from L to N in stages. Our GLP course also earns two high school credits and can shorten your N stage by six months.", href: "/glp-info", cta: "GLP info" },
  { q: "How do I get ready for my road test?", a: "Practise the manoeuvres the examiner looks for, book a lesson before test day and learn what to expect on the day.", href: "/testing-advice", cta: "Testing advice" },
  { q: "Any tips for safer everyday driving?", a: "Defensive driving habits, weather advice and myths worth dropping, all written by working instructors.", href: "/driving-advice", cta: "Driving advice" },
  { q: "Where can I read more?", a: "The FAQ covers common questions. Our blog has motorcycle safety and local news.", href: "/faq", cta: "Read the FAQ" },
];

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/all-weather-driving-school-bc/",
  instagram: "https://www.instagram.com/allweatherdrivingschool/",
};
export const PAY_EMAIL = "ap@allweatherdrivingschool.com";
export const THEORY_2026 = "/docs/glp-theory-dates-2026.pdf";
export const THEORY_2027 = "/docs/glp-theory-dates-2027.pdf";

export const COURSES = [
  { id: "glp", title: "GLP driving course", price: "$1,750", sub: "tax exempt", text: "18 hours of theory, 14 hours in the car, road test car included. Two high school credits.", icon: "steering" },
  { id: "incar", title: "In-car lessons only", price: "From $170", sub: "per 90 minutes", text: "Packages of 1 to 10 lessons. Automatic or manual, beginner to brush-up.", icon: "car" },
  { id: "msa", title: "Motorcycle Skills Assessment", price: "$1,000", sub: "GST included", text: "ICBC MSA course: group theory, one-on-one parking lot training and the assessment.", icon: "moto" },
  { id: "moto1", title: "One-on-one motorcycle", price: "$1,640", sub: "12 hours, GST included", text: "Private parking lot and road training with bike-to-bike Bluetooth, bikes included for both tests.", icon: "moto" },
];

export const OFFER = [
  "Automatic and standard lessons", "GLP ICBC approved course", "Drive for high school credits", "Licensed under the Motor Vehicle Act",
  "Bonded, with defensive techniques taught", "All ages: beginner, brush-up and seniors", "Single lessons available", "Evaluation lesson available",
  "One on one with a patient, understanding instructor", "L and N road test preparation", "City and highway, day and night, and all weather", "Class 5 and 7",
  "Co-pilot ride-along available", "Pickup and drop off service", "Gift certificates", "Payment plans available",
];

export const OUTLINE = [
  { lesson: 1, topics: ["Introduction", "Risk avoidance", "Risk perception factors", "Driver psychology", "Road rage", "Mental factors", "Defensive driving", "The Smith System", "ICBC road test", "Tire change"] },
  { lesson: 2, topics: ["Blind spots", "Traffic signs, lines and road markings", "Traffic control devices", "Restraint systems", "Intersections", "Right of ways", "Licensing requirements"] },
  { lesson: 3, topics: ["Emergency vehicles", "Reaction time", "Weather and road conditions", "Sharing the road: bikes, children, pedestrians and bad drivers", "Collisions", "Vehicle maintenance", "Advertising", "Self control", "Peer pressure", "Social factors", "Thinking for yourself", "Regulations", "Parking"] },
  { lesson: 4, topics: ["Impairments", "Driver fatigue", "Night driving"] },
  { lesson: 5, topics: ["Sharing the road", "Communicating with other drivers", "Stopping distances", "Traction", "Laws of physics", "Highway driving"] },
  { lesson: 6, topics: ["ICBC competency", "Test, verbal and written"] },
];

export const MOTO_PRICES = [
  { name: "ICBC Motorcycle Skills Assessment course", price: "$1,000", note: "$952.38 + GST. Bike included for the skills assessment." },
  { name: "Full program, one on one", price: "$1,640", note: "$1,561.90 + GST. 12 hours, parking lot and road, bikes included for both tests." },
  { name: "Single lesson", price: "$300", note: "$285.71 + GST. 2 hours, customised from basic to advanced." },
  { name: "Motorcycle rental for your test", price: "$300", note: "$285.71 + GST. Parking lot skills test and/or road test, includes a 45 minute warm-up." },
];
export const MSA_PARTS = [
  { h: "7.5 hours of theory", p: "Mandatory, in a fun and interactive group classroom." },
  { h: "7.5 hours in the parking lot", p: "One on one, at your own skill level, with the skills assessment directly after." },
  { h: "2 hours of road training", p: "One on one with Bluetooth communication, about two weeks after the assessment." },
];
export const RIDE_SKILLS = [
  { h: "Know the bike", items: ["Clutch and friction point", "Front and rear brakes", "Instruments, kill switch, beams, signals", "Gearing up, gearing down, neutral"] },
  { h: "Feel the ride", items: ["Starting and stopping", "Shifting up and down", "Leaning and turning", "Low speed: straight line, circles, slalom, figure 8s"] },
  { h: "On the road", items: ["Scanning and mirrors", "Lane position", "Intersections", "Hills, stopping and starting", "Being seen by the other guy"] },
];

export const MYTHS = [
  ["The car is insured, I do not need to worry so much about my driving.", "Insurance or not, nothing can replace a lost limb or rescue a crash victim from a wheelchair."],
  ["Crashes happen to speeding maniacs or real old drivers.", "The most common crash is by an average driver who makes an error of judgment. Bad drivers simply get noticed more."],
  ["Every new driver has to have a crash, that is how they learn.", "Many responsible people have driven accident-free for 20, 30 or more years by adopting healthy attitudes about life, which show in their driving."],
  ["Accidents will always happen, there is not much one can do.", "All drivers are human, so accidents can happen, but fatalism sheds responsibility. Learning safe driving techniques and practising them is a recipe for crash-free motoring."],
  ["After two years you get the hang of it. I am pretty safe now.", "Statistically the first major crash happens just after coming off the probationary licence, at around age 19. Low risk driving is a lifelong commitment."],
  ["Driving is basically all common sense.", "In an emergency there is little time to weigh options. Safety principles must be studied and stored, like the two-second safety gap when following another vehicle."],
  ["Our roads would be safer with harsher penalties.", "There will always be lawbreakers, and heavier fines may create more angry drivers, not necessarily safer ones."],
  ["Getting trucks and cyclists off the road would make traffic safer.", "It would make traffic faster, not safer. Tolerance for slower road users and giving them space is the hallmark of a low-risk driver."],
  ["If government spent more on roads there would be fewer crashes.", "The main cause of road crashes is human error, over 90 percent. The human operating the vehicle must ultimately take responsibility."],
  ["If every learner practised skidding they would handle emergencies better.", "Studies in Sweden found new drivers with skid training had more crashes afterwards. Over-confidence took its toll."],
];
export const SKID_RULES = [
  "If the wheels lock from heavy braking and the car skids, come off the brakes and reapply more gently.",
  "In a skid, whatever your right foot is doing, stop doing it.",
  "Do not over-correct the steering wheel when running off the road, especially on a loose or wet surface.",
];
export const FACTS = [
  "The average person spends two weeks of their life waiting at red lights.",
  "The first speeding ticket was issued in 1902, when most cars could barely reach 45 mph.",
  "The Ford GT is so strong that in the roof crush test it broke the crushing machine.",
  "Ferrari makes about 14 cars a day. Ford makes 8,000 to 10,000.",
  "The first car radio was invented in 1929.",
  "53 percent of car owners wash their car once a month, and 16 percent never do.",
  "It would take more than 150 years for a car to drive to the sun.",
  "Drivers kill more deer than hunters do.",
  "A car has been fuelled by coffee grounds. It takes 56 espressos to go one mile.",
  "One in every four cars produced in the world comes from China.",
  "90 percent of drivers sing behind the wheel. The others are too embarrassed to admit it.",
  "Roads were first made for bicyclists, not cars.",
  "Most American car horns beep in the key of F.",
];

export const FAQ = [
  { q: "Does ICBC give you a break on your car insurance if you take a driving course?", a: "At the moment, no. ICBC is collecting data on crashes and infractions among drivers who have and have not taken lessons." },
  { q: "How long do I have to have my N?", a: "Two years, unless you take the ICBC approved Graduated Licensing Program. After the course you are eligible for a 6 month reduction in this stage, provided you are violation free." },
  { q: "Do you teach defensive driving?", a: "Yes, and it is a big part of what we teach, from risk avoidance to getting out of a skid. Every time we take students out we talk and show them defensive techniques to keep them safer." },
];

export const LICENCES = [
  { cls: "Class 5 and 7", age: "16", group: "Private", can: ["Two-axle motor vehicles", "Motor homes", "Mopeds (limited speed motorcycles)", "ATVs and all-terrain cycles", "Construction vehicles", "Towing up to 4,600 kg"], not: "Motorcycles, buses, school buses, taxis and ambulances (a passenger bus seating 10 or fewer is permitted)." },
  { cls: "Class 6 and 8", age: "16", group: "Private", can: ["Motorcycles", "All-terrain cycles", "All-terrain vehicles"], not: "" },
  { cls: "Class 1", age: "19", group: "Professional", can: ["Any motor vehicle or combination except a motorcycle"], not: "" },
  { cls: "Class 2", age: "19", group: "Professional", can: ["Buses and school buses", "Special activity buses", "Combinations towing over 4,600 kg without air brakes", "All Class 4 and 5 vehicles"], not: "" },
  { cls: "Class 3", age: "18", group: "Professional", can: ["Mobile truck cranes", "Tow cars and recovered vehicles", "Vehicles with three or more axles (not buses)", "All Class 5 vehicles"], not: "" },
  { cls: "Class 4", age: "19", group: "Professional", can: ["Ambulances and taxis", "School buses and special activity buses", "Buses seating up to 25 including the driver", "All Class 5 vehicles"], not: "" },
];

export const GLP_STAGES = [
  { stage: "Learn", title: "Learner stage, Class 7L", points: ["At least 12 months before the Level 1 road test", "A licensed adult 25 or older with a full Class 5 or Class 1 to 4 licence must be with you", "Display the magnetic L sign", "Zero blood alcohol", "One passenger plus your supervisor", "Drive only between 5 AM and midnight"] },
  { stage: "Novice", title: "Intermediate stage, Class 7N", points: ["Minimum 24 months, or 18 with an ICBC approved course", "May drive unaccompanied, display the N sign", "One passenger unless a supervisor 25 or older is with you (immediate family excepted)", "Zero blood alcohol, ticket and at-fault accident free"] },
  { stage: "Full", title: "Full licence, Class 5", points: ["Level 2 road test checks you share the road safely and courteously", "Includes hazard recognition", "Brush-up lessons available before the test"] },
];
export const GLP_FEES = [
  ["Knowledge, vision and road signs test", "$15"], ["Class 7L photo learner licence", "$10"], ["Level 1 road test (7N)", "$35"],
  ["5-year Class 7 photo novice licence", "$75"], ["Level 2 road test (Class 5)", "$50"], ["Class 5 upgrade, expiry over 6 months", "$17"],
  ["Class 5 upgrade, expiry under 6 months", "$75"], ["Replacement L or N sign", "$5"],
];

export const TESTING = [
  { h: "Getting a learner's licence", p: "You must be 16 or older. Bring acceptable identification, take the knowledge test, the road signs test and a vision screening. If you are under 19, a parent or legal guardian should attend to sign. The pass mark is 80 percent and questions come from the Learn to Drive Smart guide, available at any Driver Services Centre. No appointment is needed." },
  { h: "Vision screening", p: "They test sharpness, colour vision, depth perception and field of vision. If you need glasses or contact lenses to drive, wear them when you go in." },
  { h: "Medical examination", p: "If there is any question about your physical ability to drive, you may be asked to see a doctor. Ask your nearest Driver Services Centre." },
  { h: "The Tuning Up manual", p: "ICBC's Tuning Up workbook is written for new drivers and their co-pilots, with 20 practice sessions from the basics to passing. It is free with your learner's licence." },
  { h: "Identification", p: "Bring one primary and one secondary piece of ID. Primary includes a BC driver's licence, birth certificate or certain immigration documents. Secondary includes a Canadian or US driver's licence, passport, BC ID card or Canadian Forces ID. Photocopies are not accepted unless certified, and a name change needs a certificate." },
];

export const ADVICE = [
  { h: "Defensive driving", items: ["Do a pre-trip inspection: tires, lights and fluids", "Be fully awake, and not under the influence of drugs or medication", "Plan your route and check for construction", "Keep a cushion of space around your vehicle", "Watch for pedestrians and motorcycles, which are easily missed", "Look ahead and signal your intentions clearly", "Leave 2 seconds in the city and 4 on the highway", "Pull over to use your phone"] },
  { h: "Lowering stress", items: ["Listen to traffic reports before you leave", "Plan your route and leave early", "Be courteous to avoid confrontation", "Slow down and drive smoothly", "If you feel unsure, get training or practise", "Keep books and toys in the car for kids"] },
  { h: "Adverse conditions", items: ["If conditions are bad, do not travel unless necessary", "In a whiteout, pull far off the road and use emergency flashers", "Adjust your speed to the road and weather", "Obey construction signs", "Slow down", "Book a confidence-building lesson if you feel unsure"] },
];

export const POST = {
  title: "Brush up on motorcycle safety before hitting the road",
  source: "Castanet Kelowna",
  sourceUrl: "https://www.castanet.net/news/Kelowna/485252/Brush-up-on-motorcycle-safety-before-hitting-the-road",
  paras: [
    "Riding season is here and motorcycles are starting to fill the streets of the Okanagan. All Weather Driving School instructor Dean Clark has been riding for over 40 years, and the school's first round of motorcycle training sold out in 24 hours.",
    "“We start out with a theory course where they spend some evenings at the school going over theory, motorcycle safety, gear, all the stuff they need to be safe. After that I do the parking lot, where we spend 7.5 hours getting them ready for the Motorcycle Skills Assessment.”",
    "Clark says whether you are brand new or a seasoned rider, go over the fundamentals before getting back out, especially low speed skills. Check tire and shock pressure when you take the bike out for the first time.",
    "ICBC says motorcycle crashes rise from May to September, with 212 people injured in rider crashes each month. Their tips: refresh your skills after a long break, stay focused and at a safe speed, wear protective gear every ride, never assume a driver has seen you, stay out of blind spots and use your signals.",
  ],
};

export const COMMENTS = [
  { name: "Tabitha", date: "August 2026", text: "I had Blake for most of my lessons and I can’t express enough how grateful I am for such a great teacher but also role model. Going into my first lesson I was terrified, almost tearing up but after 10 mins behind the wheel with Blake I felt very comfortable and relaxed. Blake made me believe in myself and I feel very safe on the roads as an N driver, that did pass first try thanks to my instructor!" },
  { name: "Kelly Lee", date: "March 2026", text: "I took two lessons before my road test and the instructors were super motivating and encouraging. Passed the road test on my first try!" },
  { name: "Rayna", date: "January 2026", text: "AWDS has been a cool experience for me, as a person with social anxiety they made it easier. I’d like to thank everyone who’s taught me how to become a better safer, confident driver in a quick time span." },
  { name: "Chelsea", date: "January 2026", text: "I’d like to thank Blake for making the lessons fun and preparing me so well for my road test." },
  { name: "Aubrey", date: "July 2025", text: "My experience with All Weather has been great. All of the instructors have so much knowledge. I’ve really learned a lot, thanks everyone." },
  { name: "Emma", date: "June 2025", text: "Thank you so much Leahann, Meg, and Blake for teaching me all there is to know about driving. I passed my N first try with no demerits thanks to their help and support!" },
  { name: "Chris Nicholls", date: "February 2025", text: "Thank you to all the employees at All Weather for your help in teaching my grandchildren to drive safely." },
  { name: "Mackenzie", date: "February 2025", text: "They were so patient and gave lots of good tips to help me increase my confidence! I passed my test on the first try! I highly recommend this school!" },
  { name: "Paula", date: "January 2025", text: "All Weather Driving School ROCKS!" },
  { name: "Sarah", date: "January 2025", text: "I had a great experience with All Weather Driving School." },
  { name: "Corinne Karius", date: "January 2025", text: "All Weather Driving School has been a huge help in my learning to drive." },
  { name: "Lauren Munro", date: "January 2025", text: "I just wanted to thank Meghan for all her help in preparing for my N test! I passed first try and I really enjoyed my lessons because she made them so fun." },
  { name: "Lily", date: "October 2024", text: "I had Leahann as an instructor, and passed my N first try. She is awesome!!" },
];

export const COMPARE = [
  { label: "GLP course price", us: "$1,750, tax exempt", them: "$1,800 at Young Drivers" },
  { label: "In-car hours", us: "14 hours across 8 lessons plus a 2-hour highway lesson", them: "Varies by school" },
  { label: "Classroom hours", us: "18 hours, capped at 15 students", them: "Class size often not stated" },
  { label: "Car for your road test", us: "Included with the GLP course", them: "Often an extra $150 to $200" },
  { label: "Motorcycle training", us: "One on one with bike-to-bike Bluetooth", them: "Group lessons are common" },
  { label: "Manual transmission", us: "Specialist instructors", them: "Not offered everywhere" },
];

/* GLP in-class theory courses. t: "d" = three full days (9:45 AM to 4:30 PM), "e" = six evenings (5:30 to 9:00 PM).
   d: class dates in order, full: course is full. Source: school schedules sent October 2026 (2026) and 2027. */
const D = (t, d, full = false) => ({ t, d, full });
export const THEORY = {
  2026: [
    D("d", ["2025-12-30", "2026-01-02", "2026-01-03"], true), D("d", ["2026-01-10", "2026-01-17", "2026-01-24"], true),
    D("d", ["2026-02-21", "2026-02-28", "2026-03-07"], true), D("d", ["2026-03-17", "2026-03-18", "2026-03-19"], true),
    D("d", ["2026-03-24", "2026-03-25", "2026-03-26"], true), D("d", ["2026-04-11", "2026-04-18", "2026-04-25"], true),
    D("e", ["2026-04-01", "2026-04-08", "2026-04-15", "2026-04-22", "2026-04-29", "2026-05-06"], true),
    D("d", ["2026-05-30", "2026-06-06", "2026-06-13"], true), D("d", ["2026-07-07", "2026-07-08", "2026-07-09"], true),
    D("d", ["2026-07-21", "2026-07-22", "2026-07-23"], true), D("d", ["2026-08-04", "2026-08-05", "2026-08-06"], true),
    D("d", ["2026-08-18", "2026-08-19", "2026-08-20"], true), D("d", ["2026-09-12", "2026-09-19", "2026-09-26"], true),
    D("e", ["2026-09-16", "2026-09-23", "2026-10-07", "2026-10-14", "2026-10-21", "2026-10-28"], true),
    D("d", ["2026-11-07", "2026-11-14", "2026-11-21"], true),
    D("e", ["2026-11-10", "2026-11-18", "2026-11-25", "2026-12-02", "2026-12-09", "2026-12-16"]),
    D("d", ["2026-12-28", "2026-12-29", "2026-12-30"]),
  ],
  2027: [
    D("d", ["2027-01-10", "2027-01-17", "2027-01-24"]), D("d", ["2027-02-21", "2027-02-28", "2027-03-07"]),
    D("d", ["2027-03-16", "2027-03-17", "2027-03-18"]), D("d", ["2027-03-23", "2027-03-24", "2027-03-25"]),
    D("d", ["2027-04-04", "2027-04-11", "2027-04-18"]),
    D("e", ["2027-04-07", "2027-04-14", "2027-04-21", "2027-04-28", "2027-05-05", "2027-05-12"]),
    D("d", ["2027-05-30", "2027-06-06", "2027-06-13"]), D("d", ["2027-07-06", "2027-07-07", "2027-07-08"]),
    D("d", ["2027-07-20", "2027-07-21", "2027-07-22"]), D("d", ["2027-08-10", "2027-08-11", "2027-08-12"]),
    D("d", ["2027-08-24", "2027-08-25", "2027-08-26"]), D("d", ["2027-09-12", "2027-09-19", "2027-09-26"]),
    D("e", ["2027-09-15", "2027-09-22", "2027-09-29", "2027-10-06", "2027-10-13", "2027-10-20"]),
    D("d", ["2027-10-17", "2027-10-24", "2027-10-31"]), D("d", ["2027-11-14", "2027-11-21", "2027-11-28"]),
    D("d", ["2027-12-05", "2027-12-12", "2027-12-19"]), D("d", ["2027-12-28", "2027-12-29", "2027-12-30"]),
  ],
};
export const THEORY_TIMES = { d: "9:45 AM to 4:30 PM", e: "5:30 PM to 9:00 PM" };
/* Next course with seats that has not started yet. */
export function nextOpenCourse(today = new Date()) {
  const iso = today.toISOString().slice(0, 10);
  return Object.values(THEORY).flat().filter((c) => !c.full && c.d[0] >= iso).sort((a, b) => a.d[0].localeCompare(b.d[0]))[0] || null;
}
