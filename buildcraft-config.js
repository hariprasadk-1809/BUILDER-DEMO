/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║           BUILDCRAFT — EDITABLE CONTENT CONFIG FILE             ║
 * ║  Edit anything here. Save & push to see changes on your site.   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * HOW TO USE:
 *  - Change any value below
 *  - git add buildcraft-config.js
 *  - git commit -m "your message"
 *  - git push
 *  Vercel will deploy automatically.
 *
 * EVERY visible text on the site is controlled from this file.
 */

window.BC_CONFIG = {

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 1. COMPANY INFO
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  company: {
    name:       "BuildCraft",
    tagline:    "Building Your Dream House in South India",
    founded:    "2004",
    phone1:     "+91 98400 00000",
    phone2:     "+91 44 2222 3333",
    email1:     "hello@buildcraft.in",
    email2:     "projects@buildcraft.in",
    address:    "14, Anna Salai, Teynampet",
    city:       "Chennai",
    state:      "Tamil Nadu",
    pincode:    "600 018",
    whatsapp:   "919840000000",
    hours:      "Mon \u2013 Sat\u00a0\u00b7\u00a09:00 AM \u2013 6:30 PM IST",
    legalName:  "BuildCraft Construction Pvt. Ltd.",
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 2. HERO SECTION
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  hero: {
    headline:  ["Building Your", "Dream House", "with Precision", "& Trust"],
    goldLine:  1,
    subtext:   "We craft exceptional residential & commercial spaces that families cherish for generations. Your vision, our expertise \u2014 built to last a lifetime.",
    badges: [
      { label: "Trusted Since 2004", gold: true  },
      { label: "10-Year Warranty",   gold: false },
      { label: "120+ Happy Families",gold: false },
    ],
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=95&fit=crop&crop=center",
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 3. STATS BAR
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  stats: [
    { target: 20,  suffix: "+",  label: "Years Experience" },
    { target: 150, suffix: "+",  label: "Projects Built" },
    { target: 120, suffix: "+",  label: "Happy Families" },
    { target: 500, suffix: "K+", label: "Sq.Ft Built" },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 4. ABOUT SECTION
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  about: {
    para1: "Founded in 2004, BuildCraft has been at the forefront of residential and commercial construction in South India. What started as a small team has grown into a 120-strong company built on one belief: every family deserves a home that truly feels like theirs.",
    para2: "Our architects, engineers, and craftsmen pour their heart into every project \u2014 from the first blueprint to the final coat of paint. We don\u2019t just hand over keys. We hand over memories waiting to happen.",
    features: [
      { title: "Award-Winning Design",  desc: "National quality & innovation awards" },
      { title: "Premium Materials",     desc: "Only certified, grade-A materials" },
      { title: "On-Time Delivery",      desc: "97% on-time project completion" },
      { title: "10-Year Warranty",      desc: "Full structural warranty on all builds" },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 5. SERVICES
   *    You can optionally add an img field to
   *    any service to override the default photo:
   *    { title: "...", desc: "...", img: "https://..." }
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  services: [
    { title: "Residential Construction", desc: "Custom homes, villas, and apartments built to match your lifestyle with uncompromising quality." },
    { title: "Commercial Buildings",     desc: "Office complexes, retail spaces, and industrial facilities built for function, aesthetics, and longevity." },
    { title: "Interior Design",          desc: "Transforming spaces into expressions of personality \u2014 luxurious, functional, and timeless." },
    { title: "Home Renovation",          desc: "Breathe new life into existing spaces with expert renovation \u2014 complete transformation, zero disruption." },
    { title: "Architecture Planning",    desc: "Innovative designs balancing beauty, structure, and sustainable living for tomorrow\u2019s world." },
    { title: "Project Management",       desc: "End-to-end oversight ensuring timelines, budgets, and quality benchmarks are consistently exceeded." },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 6. FEATURED PROJECTS (cards + modals)
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  featuredProjects: [
    {
      id: "p1", cat: "res", span: 8,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90",
      tag: "Residential \u00b7 2024", title: "Sunset Villa, Adyar", sub: "Chennai \u00b7 4,800 sq.ft",
      modal: {
        heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
        year: "2024", type: "Residential Villa", size: "4,800 sq.ft",
        location: "Adyar, Chennai", duration: "14 months", budget: "\u20b92.4 Crore",
        overview: "Sunset Villa is a 4-bedroom luxury home nestled in the green lanes of Adyar, Chennai. The brief was clear \u2014 a modern, warm family home that blends contemporary architecture with the comfort of a traditional South Indian lifestyle.",
        howWeGotClient: "Mr. Ravi Kumar found us through a referral from his colleague, whose home we built in 2021. He reached out after seeing our Oakwood Residence project on Instagram and loved our attention to natural light and open spaces.",
        challenge: "The plot had an irregular shape with a large rain tree at the northern corner. The client wanted to preserve the tree. Our design team created an internal courtyard that wraps around the tree \u2014 turning a constraint into the home\u2019s signature feature.",
        clientStory: "\u201cWhen BuildCraft showed us the design with the courtyard around our tree, we cried. They didn\u2019t just solve a problem \u2014 they made the tree the heart of our home.\u201d",
        clientName: "Ravi Kumar & Family", clientRole: "Homeowner \u00b7 Adyar, Chennai",
        gallery: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=85",
        ],
        features: [
          "Courtyard wrapped around 40-year-old rain tree",
          "Italian marble flooring throughout",
          "Smart home automation system",
          "Energy-efficient double-glazed windows",
          "Rooftop terrace garden",
        ],
      }
    },
    {
      id: "p2", cat: "com", span: 4,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
      tag: "Commercial \u00b7 2024", title: "Nexus Tower, Chennai", sub: "22 Floors \u00b7 CBD",
      modal: {
        heroImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90",
        year: "2024", type: "Commercial Office Tower", size: "1,60,000 sq.ft",
        location: "CBD, Chennai", duration: "36 months", budget: "\u20b942 Crore",
        overview: "Nexus Tower is a 22-floor premium Grade-A office complex in the heart of Chennai\u2019s CBD.",
        howWeGotClient: "We were shortlisted from an RFQ process involving 8 contractors. Nexus Developers chose us after visiting our earlier Prestige Courtyard commercial project.",
        challenge: "The site required a 4-storey underground parking structure below the water table. Our engineering team designed a dewatering system and waterproof raft foundation that achieved zero seepage.",
        clientStory: "\u201cBuildCraft delivered Nexus Tower 3 weeks ahead of schedule, saving us \u20b91.2 Crore in penalty clauses. The quality speaks for itself.\u201d",
        clientName: "Arvind Rajan", clientRole: "MD, Nexus Developers Pvt. Ltd.",
        gallery: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=85",
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=85",
        ],
        features: [
          "22 floors, column-free floor plates",
          "4-level underground parking (280 cars)",
          "LEED Gold certified design",
          "Sky lounge on Level 22",
          "100% DG backup power",
        ],
      }
    },
    {
      id: "p3", cat: "ren", span: 4,
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
      tag: "Renovation \u00b7 2023", title: "Heritage Bungalow", sub: "Mylapore, Chennai",
      modal: {
        heroImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90",
        year: "2023", type: "Heritage Renovation", size: "3,200 sq.ft",
        location: "Mylapore, Chennai", duration: "11 months", budget: "\u20b998 Lakhs",
        overview: "A 45-year-old bungalow in Mylapore\u2019s heritage precinct received a sensitive renovation that retained its soul while modernising its systems and interiors.",
        howWeGotClient: "The Nair family discovered us at the Chennai Home & Design Expo 2022. We were the only contractors who said we could save the original structure.",
        challenge: "The original 1978 building had load-bearing walls with no seismic reinforcement. We threaded a modern RCC frame inside the heritage shell without demolishing the original lime-plaster walls or Athangudi tile floors.",
        clientStory: "\u201cBuildCraft preserved every tile, every beam, every stained-glass window. They even matched the original Athangudi tile pattern with hand-made replacements.\u201d",
        clientName: "Lakshmi Nair", clientRole: "Third-generation homeowner \u00b7 Mylapore",
        gallery: [
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
        ],
        features: [
          "Internal RCC frame without disturbing facade",
          "Original Athangudi tile restored & replicated",
          "Heritage teak beams preserved and treated",
          "Stained-glass windows professionally restored",
          "Modern kitchen & bathrooms behind traditional finishes",
        ],
      }
    },
    {
      id: "p4", cat: "res", span: 4,
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=85",
      tag: "Residential \u00b7 2023", title: "Oakwood Residence", sub: "Coimbatore",
      modal: {
        heroImg: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=90",
        year: "2023", type: "Residential Home", size: "3,600 sq.ft",
        location: "Race Course, Coimbatore", duration: "12 months", budget: "\u20b91.6 Crore",
        overview: "A passive-cooling 4BHK home in Coimbatore that stays 4\u20135\u00b0C cooler than ambient temperature without air conditioning.",
        howWeGotClient: "Mr. Pradeep Shankar was referred by his architect who had collaborated with BuildCraft on three previous projects.",
        challenge: "Coimbatore\u2019s dry heat required maximising shade, mass cooling, and wind channelling while meeting the client\u2019s requirement for large, light-filled open spaces.",
        clientStory: "\u201cMy electricity bill for the entire last year was \u20b98,200. My neighbours pay that every month. BuildCraft designed a home that breathes.\u201d",
        clientName: "Pradeep Shankar", clientRole: "Homeowner \u00b7 Race Course, Coimbatore",
        gallery: [
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=85",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=85",
        ],
        features: [
          "Passive cooling \u2014 no AC required 9 of 12 months",
          "Central atrium with operable skylight",
          "Rainwater harvesting \u2014 40,000 litre tank",
          "3kW rooftop solar array",
          "Deep overhangs (1.2m) on all sun-facing facades",
        ],
      }
    },
    {
      id: "p5", cat: "res", span: 4,
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
      tag: "Residential \u00b7 2022", title: "Horizon Apartments", sub: "OMR \u00b7 48 Units",
      modal: {
        heroImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=90",
        year: "2022", type: "Residential Apartments", size: "48 Units \u00b7 72,000 sq.ft",
        location: "OMR, Chennai", duration: "26 months", budget: "\u20b918 Crore",
        overview: "A boutique 48-unit community-first apartment complex on OMR with rooftop amenity deck, co-working lounge, and EV charging bays.",
        howWeGotClient: "Green Horizon Developers chose BuildCraft after evaluating 12 contractors. Our transparent cost management system gave them confidence for their flagship first project.",
        challenge: "As a first-time developer, Green Horizon had limited experience managing timelines. We introduced our Client Transparency Portal \u2014 a live dashboard with real-time cost tracking.",
        clientStory: "\u201cI could check progress from Dubai at midnight. We sold all 48 units before the building was complete \u2014 because of the quality BuildCraft delivered.\u201d",
        clientName: "Suresh Krishnamurthy", clientRole: "Managing Partner, Green Horizon Developers",
        gallery: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
        ],
        features: [
          "48 units \u2014 2BHK, 3BHK & penthouse mix",
          "Rooftop pool & sky lounge",
          "EV charging for all car parks",
          "100% sold before possession",
          "GRIHA 3-Star green building rating",
        ],
      }
    },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 7. PROCESS STEPS
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  process: [
    { label: "Consultation",      desc: "We listen, understand requirements, and carefully assess your site and vision." },
    { label: "Design & Planning", desc: "Architects craft blueprints. You approve before a single brick is laid." },
    { label: "Construction",      desc: "Skilled crews build with premium materials; weekly updates always shared." },
    { label: "Quality Check",     desc: "Multi-point inspections ensure zero compromise on safety or finish quality." },
    { label: "Delivery",          desc: "We hand over your home with full documentation, keys, and lifetime aftercare." },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 8. ACHIEVEMENTS (big stat section)
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  achievements: [
    { id: "a1", target: 20,  suffix: "+",  label: "Years of Experience" },
    { id: "a2", target: 150, suffix: "+",  label: "Projects Completed" },
    { id: "a3", target: 120, suffix: "+",  label: "Happy Families" },
    { id: "a4", target: 500, suffix: "K+", label: "Sq. Ft. Built" },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 9. TESTIMONIALS
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  testimonials: [
    { id: "t1", init: "RK", name: "Ravi Kumar",        role: "Villa Owner \u00b7 Adyar, Chennai",    quote: "BuildCraft turned our decade-long dream into reality. The attention to detail and transparent communication made us feel we were in absolutely the best hands." },
    { id: "t2", init: "PM", name: "Priya & Mohan S.",  role: "Home Owners \u00b7 Coimbatore",         quote: "Delivered 3 weeks ahead of schedule with exceptional quality. They put us at ease from day one. Best construction decision we ever made." },
    { id: "t3", init: "AS", name: "Arun Sharma",       role: "Business Owner \u00b7 Chennai CBD",     quote: "Project management was flawless \u2014 zero cost overruns, clear milestones, beautiful result. I\u2019ve already referred three colleagues. Truly world-class." },
    { id: "t4", init: "LN", name: "Lakshmi Nair",      role: "Heritage Home \u00b7 Mylapore",         quote: "They preserved the soul of our 40-year-old home while making it modern and beautiful. These people are not just builders \u2014 they are true artists." },
    { id: "t5", init: "VR", name: "Vikram Reddy",      role: "Apartment Owner \u00b7 OMR",            quote: "From architecture to interior design, one cohesive team. A seamless build that produced a stunning home we are genuinely proud of every single day." },
    { id: "t6", init: "SK", name: "Sunita & Kiran P.", role: "Dream Villa \u00b7 Perumbakkam",        quote: "Rock-solid craftsmanship from an extraordinary team. The 10-year warranty gave us complete confidence \u2014 though from day one we knew we\u2019d never need it." },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 10. GALLERY
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  gallery: [
    { id: "g1", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85", tall: true,  wide: false, alt: "Luxury villa exterior with pool",        modal: { title: "Sunset Villa \u2014 Adyar",        year: "2024", type: "Residential Villa",    story: "The Sunset Villa project redefined luxury living in South Chennai. Built around a century-old rain tree, this 4,800 sq.ft home features an internal courtyard that brings nature into every room.", quote: "\u201cBuildCraft turned our decade-long dream into reality.\u201d", client: "Ravi Kumar, Homeowner" }},
    { id: "g2", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=85", tall: false, wide: false, alt: "Modern home exterior at dusk",           modal: { title: "Oakwood Residence \u2014 Coimbatore", year: "2023", type: "Residential Home",    story: "Our proudest passive-cooling achievement. Deep overhangs, a central atrium and cross-ventilation reduce indoor temperatures by 4\u20135\u00b0C naturally.",           quote: "\u201cMy electricity bill for the year was \u20b98,200. My neighbours pay that every month.\u201d", client: "Pradeep Shankar, Homeowner" }},
    { id: "g3", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85", tall: false, wide: false, alt: "Commercial office tower",               modal: { title: "Nexus Tower \u2014 Chennai CBD",    year: "2024", type: "Commercial Tower",    story: "22 floors of Grade-A office space delivered 3 weeks ahead of schedule. LEED Gold certified, column-free floor plates, rooftop sky lounge.",                     quote: "\u201cBuildCraft delivered ahead of schedule and saved us \u20b91.2 Crore in penalty clauses.\u201d", client: "Arvind Rajan, MD \u2014 Nexus Developers" }},
    { id: "g4", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85", tall: true,  wide: false, alt: "Contemporary residential building",     modal: { title: "Horizon Apartments \u2014 OMR",    year: "2022", type: "Residential Apartments", story: "A 48-unit community-first apartment complex on OMR. Every unit sold before possession \u2014 testimony to the BuildCraft name.",                               quote: "\u201cI could check progress from Dubai at midnight. We sold all 48 units before completion.\u201d", client: "Suresh Krishnamurthy, Green Horizon Developers" }},
    { id: "g5", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85", tall: false, wide: true,  alt: "Construction team at work",            modal: { title: "Our People \u2014 The BuildCraft Team", year: "2024", type: "Behind the Scenes",  story: "Behind every project is a team of 120+ skilled engineers, architects, site managers and craftsmen. Our retention rate is 94% \u2014 people stay at BuildCraft because they are treated like family.", quote: "\u201cThe site team was respectful, disciplined and genuinely passionate.\u201d", client: "Priya Mohan, Homeowner \u2014 Coimbatore" }},
    { id: "g6", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=85",    tall: false, wide: false, alt: "Skilled workers on scaffolding",        modal: { title: "Craftsmanship in Action",          year: "2023", type: "Construction Process", story: "Precision at every level. Every RCC column, door frame, and tile joint is checked against our zero-defect snag protocol before the client sets foot in the building.", quote: "\u201cNot a single major snag in our final walkthrough across 22 floors.\u201d", client: "Nexus Tower Client" }},
    { id: "g7", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85", tall: false, wide: false, alt: "Elegant interior living space",         modal: { title: "Heritage Bungalow \u2014 Mylapore", year: "2023", type: "Heritage Renovation",  story: "The Heritage Bungalow renovation proved the best way to honour the past is to give it a future. Original Athangudi tiles, teak beams and stained-glass windows were preserved, restored and celebrated.", quote: "\u201cThey matched the original Athangudi tile pattern with hand-made replacements. We are overwhelmed with gratitude.\u201d", client: "Lakshmi Nair, Homeowner \u2014 Mylapore" }},
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 11. CTA SECTION
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  cta: {
    subtext: "Thousands of families have trusted us with their most important project.",
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 12. FOOTER
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  footer: {
    copyright: "\u00a9 2025 BuildCraft Construction Pvt. Ltd. All rights reserved.",
    navLinks: [
      ["About Us",  "#about"],
      ["Services",  "#services"],
      ["Projects",  "#projects"],
      ["Gallery",   "#gallery"],
      ["Contact",   "#contact"],
    ],
    serviceLinks: [
      ["Residential",    "#services"],
      ["Commercial",     "#services"],
      ["Renovation",     "#services"],
      ["Architecture",   "#services"],
      ["Interior Design","#services"],
    ],
  },

};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * INTERNAL — derives _BC from BC_CONFIG for the HTML to read
 * DO NOT EDIT BELOW THIS LINE
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function() {
  var c = window.BC_CONFIG;
  var co = c.company;
  var h  = c.hero;
  var ab = c.about;
  var ct = c.cta;
  var ft = c.footer;

  // Brand name split: "BuildCraft" -> nameMain="Build", nameAccent="Craft"
  // Change splitAt if your brand name split point is different
  var fullName = co.name;
  var splitAt  = Math.ceil(fullName.length / 2);
  // Try to split at a capital letter after the first character
  var splitMatch = fullName.slice(1).search(/[A-Z]/);
  if (splitMatch >= 0) splitAt = splitMatch + 1;

  window._BC = {
    // Company
    companyName:        fullName,
    nameMain:           fullName.slice(0, splitAt),
    nameAccent:         fullName.slice(splitAt),
    phone1:             co.phone1,
    phone2:             co.phone2,
    email1:             co.email1,
    email2:             co.email2,
    address:            co.address,
    cityLine:           co.city + " \u2014 " + co.pincode + ", " + co.state,
    hours:              "Open " + co.hours,
    whatsapp:           co.whatsapp,
    legalName:          co.legalName,

    // Hero
    heroLines:          h.headline,
    heroGoldLine:       h.goldLine,
    heroSubtext:        h.subtext,
    heroBadges:         h.badges.map(function(b){
                          return {label: b.label, gold: b.gold ? true : false};
                        }),

    // About
    aboutPara1:         ab.para1,
    aboutPara2:         ab.para2,
    aboutFeatures:      ab.features.map(function(f, i) {
                          var icons = ["award","shield","check","home"];
                          return {iconKey: icons[i % icons.length], title: f.title, desc: f.desc};
                        }),

    // Data arrays (passed directly to React variables)
    stats:              c.stats,
    services:           c.services.map(function(s, i) {
                          var num = (i+1);
                          var imgs = [
                            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
                            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
                            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
                            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
                            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
                            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
                          ];
                          return {
                            id:    "svc" + num,
                            n:     num < 10 ? "0" + num : "" + num,
                            img:   s.img || imgs[i] || imgs[0],
                            title: s.title,
                            desc:  s.desc
                          };
                        }),
    projectCards:       c.featuredProjects.map(function(p) {
                          return {id:p.id, cat:p.cat, span:p.span, img:p.img,
                                  tag:p.tag, title:p.title, sub:p.sub};
                        }),
    process:            c.process.map(function(s, i) {
                          return {id:"st"+(i+1), label:s.label, desc:s.desc};
                        }),
    achievements:       c.achievements,
    testimonials:       c.testimonials,
    galleryStatic:      c.gallery.map(function(g) {
                          return {id:g.id, img:g.img, tall:g.tall, wide:g.wide, alt:g.alt};
                        }),

    // CTA
    ctaSubtext:         ct.subtext,

    // Footer
    footerCopyright:    ft.copyright,
    footerNavLinks:     ft.navLinks,
    footerServiceLinks: ft.serviceLinks,

    // Page meta
    pageTitle:          fullName + " \u2014 " + co.tagline,
    metaDesc:           "Premium residential and commercial construction in South India. " + co.founded + "+ years, 150+ projects, 10-year structural warranty.",
  };

  console.log("Builder JS Loaded Successfully");
})();