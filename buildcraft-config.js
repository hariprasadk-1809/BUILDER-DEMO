console.log("Builder JS Loaded Successfully");
/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║           BUILDCRAFT — EDITABLE CONTENT CONFIG FILE             ║
 * ║  Edit anything here. Save & refresh to see changes instantly.   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * HOW TO USE:
 *  - Change any value below
 *  - Save this file
 *  - Refresh buildcraft-main.html in your browser
 *
 * SECTIONS:
 *  1. COMPANY INFO       — Name, phone, email, address
 *  2. HERO SECTION       — Headline, subtext, badges
 *  3. STATS              — Counter numbers
 *  4. FEATURED PROJECTS  — Cards + full modal detail pages
 *  5. GALLERY            — Gallery images + modal stories
 *  6. SERVICES           — Service cards
 *  7. PROCESS STEPS      — How We Work steps
 *  8. TESTIMONIALS       — Client reviews
 *  9. PLANS / PACKAGES   — Service packages (if shown)
 * 10. FOOTER LINKS       — Navigation links in footer
 */

window.BC_CONFIG = {

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 1. COMPANY INFO
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  company: {
    name:         "BuildCraft",
    tagline:      "Building Your Dream Home in South India",
    founded:      "2004",
    phone1:       "+91 98400 00000",
    phone2:       "+91 44 2222 3333",
    email1:       "hello@buildcraft.in",
    email2:       "projects@buildcraft.in",
    address:      "14, Anna Salai, Teynampet",
    city:         "Chennai",
    state:        "Tamil Nadu",
    pincode:      "600 018",
    whatsapp:     "919840000000",    // WhatsApp number (no + or spaces)
    hours:        "Mon – Sat  ·  9:00 AM – 6:30 PM IST",
    legalName:    "BuildCraft Construction Pvt. Ltd.",
    privacyUrl:   "#",
    termsUrl:     "#",
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 2. HERO SECTION
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  hero: {
    headline: ["Building Your", "Dream House", "with Precision", "& Trust"],
    goldLine:     1,   // which line (0-based) gets the gold gradient
    subtext:      "We craft exceptional residential & commercial spaces that families cherish for generations. Your vision, our expertise — built to last a lifetime.",
    badges: [
      { label: "Trusted Since 2004", gold: true },
      { label: "10-Year Warranty",   gold: false },
      { label: "120+ Happy Families",gold: false },
    ],
    bgImage:      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=95&fit=crop&crop=center",
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 3. STATS BAR (animated counters)
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  stats: [
    { target: 20,  suffix: "+",  label: "Years Experience" },
    { target: 150, suffix: "+",  label: "Projects Built" },
    { target: 120, suffix: "+",  label: "Happy Families" },
    { target: 500, suffix: "K+", label: "Sq.Ft Built" },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 4. FEATURED PROJECTS
   *    Each project card opens a FULL DETAIL MODAL
   *    when clicked. Fill in the modal fields below.
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  featuredProjects: [
    {
      id:       "p1",
      cat:      "res",   // res | com | ren
      span:     8,       // grid column span (4 or 8)
      img:      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90",
      tag:      "Residential · 2024",
      title:    "Sunset Villa, Adyar",
      sub:      "Chennai · 4,800 sq.ft",

      /* ── MODAL CONTENT (shown when card is clicked) ── */
      modal: {
        heroImg:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
        year:     "2024",
        type:     "Residential Villa",
        size:     "4,800 sq.ft",
        location: "Adyar, Chennai",
        duration: "14 months",
        budget:   "₹2.4 Crore",

        overview: "Sunset Villa is a 4-bedroom luxury home nestled in the green lanes of Adyar, Chennai. The brief was clear — a modern, warm family home that blends contemporary architecture with the comfort of a traditional South Indian lifestyle.",

        howWeGotClient: "Mr. Ravi Kumar found us through a referral from his colleague, whose home we built in 2021. He reached out after seeing our Oakwood Residence project on Instagram and loved our attention to natural light and open spaces.",

        challenge: "The plot had an irregular shape with a large rain tree at the northern corner. The client wanted to preserve the tree. Our design team created an internal courtyard that wraps around the tree — turning a constraint into the home's signature feature.",

        clientStory: "\"When BuildCraft showed us the design with the courtyard around our tree, we cried. They didn't just solve a problem — they made the tree the heart of our home. Every morning, we have breakfast under its branches.\"",
        clientName:  "Ravi Kumar & Family",
        clientRole:  "Homeowner · Adyar, Chennai",

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
      id:    "p2",
      cat:   "com",
      span:  4,
      img:   "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
      tag:   "Commercial · 2024",
      title: "Nexus Tower, Chennai",
      sub:   "22 Floors · CBD",

      modal: {
        heroImg:  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90",
        year:     "2024",
        type:     "Commercial Office Tower",
        size:     "1,60,000 sq.ft",
        location: "CBD, Chennai",
        duration: "36 months",
        budget:   "₹42 Crore",

        overview: "Nexus Tower is a 22-floor premium Grade-A office complex in the heart of Chennai's Central Business District. Designed to attract global IT and financial services tenants, it features column-free floor plates, sky bridges, and a rooftop sky lounge.",

        howWeGotClient: "We were shortlisted from an RFQ process involving 8 contractors. Nexus Developers chose us after visiting our earlier Prestige Courtyard commercial project and being impressed by our zero-defect delivery track record.",

        challenge: "The site required a 4-storey underground parking structure below the water table. Our engineering team designed a dewatering system and waterproof raft foundation that achieved zero seepage — a significant achievement in Chennai's coastal geology.",

        clientStory: "\"BuildCraft delivered Nexus Tower 3 weeks ahead of the scheduled date, which saved us ₹1.2 Crore in penalty clauses. More importantly, the quality speaks for itself — not a single major snag in our final walkthrough.\"",
        clientName:  "Arvind Rajan",
        clientRole:  "MD, Nexus Developers Pvt. Ltd.",

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
      id:    "p3",
      cat:   "ren",
      span:  4,
      img:   "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
      tag:   "Renovation · 2023",
      title: "Heritage Bungalow",
      sub:   "Mylapore, Chennai",

      modal: {
        heroImg:  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90",
        year:     "2023",
        type:     "Heritage Renovation",
        size:     "3,200 sq.ft",
        location: "Mylapore, Chennai",
        duration: "11 months",
        budget:   "₹98 Lakhs",

        overview: "A 45-year-old bungalow in Mylapore's heritage precinct received a sensitive, award-winning renovation that retained its soul while modernising its systems, structure, and interiors for the next generation of the family.",

        howWeGotClient: "The Nair family discovered us at the Chennai Home & Design Expo 2022, where we showcased our heritage restoration portfolio. They had approached two other contractors who suggested demolishing the old bungalow entirely — we were the only ones who said we could save it.",

        challenge: "The original 1978 building had load-bearing walls with no seismic reinforcement. We had to thread a modern reinforced concrete frame inside the heritage shell without demolishing the original lime-plaster walls, Athangudi tile floors, or teak ceiling beams.",

        clientStory: "\"This home carries 40 years of our family's memories. BuildCraft preserved every tile, every beam, every stained-glass window. They even matched the original Athangudi tile pattern with hand-made replacements. We are overwhelmed with gratitude.\"",
        clientName:  "Lakshmi Nair",
        clientRole:  "Third-generation homeowner · Mylapore",

        gallery: [
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
        ],

        features: [
          "Internal RCC frame added without disturbing facade",
          "Original Athangudi tile restored & replicated",
          "Heritage teak beams preserved and treated",
          "Stained-glass windows professionally restored",
          "Modern kitchen & bathrooms behind traditional finishes",
        ],
      }
    },
    {
      id:    "p4",
      cat:   "res",
      span:  4,
      img:   "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=85",
      tag:   "Residential · 2023",
      title: "Oakwood Residence",
      sub:   "Coimbatore",

      modal: {
        heroImg:  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=90",
        year:     "2023",
        type:     "Residential Home",
        size:     "3,600 sq.ft",
        location: "Race Course, Coimbatore",
        duration: "12 months",
        budget:   "₹1.6 Crore",

        overview: "Oakwood Residence is a contemporary 4BHK home in Coimbatore's premium Race Course area. Designed around passive cooling principles, it features deep overhangs, a central atrium and cross-ventilation corridors that keep the home 4–5°C cooler than the ambient temperature — without air conditioning.",

        howWeGotClient: "Mr. Pradeep Shankar, a textile entrepreneur, was referred to us by his architect, who had collaborated with BuildCraft on three previous projects. He specifically wanted a sustainable home after visiting the Net Zero Homes exhibition in Coimbatore.",

        challenge: "Coimbatore's dry heat required a design approach radically different from our Chennai coastal projects. We had to maximise shade, mass cooling, and wind channelling while meeting the client's requirement for large, open, light-filled spaces — typically opposed to shading strategies.",

        clientStory: "\"My electricity bill for the entire last year was ₹8,200. My neighbours pay that every month. BuildCraft designed a home that breathes. Their team's knowledge of passive architecture is extraordinary — they live and breathe sustainable construction.\"",
        clientName:  "Pradeep Shankar",
        clientRole:  "Homeowner · Race Course, Coimbatore",

        gallery: [
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=85",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=85",
        ],

        features: [
          "Passive cooling — no AC required in 9 of 12 months",
          "Central atrium with operable skylight",
          "Rainwater harvesting — 40,000 litre tank",
          "3kW rooftop solar array",
          "Deep overhangs (1.2m) on all sun-facing facades",
        ],
      }
    },
    {
      id:    "p5",
      cat:   "res",
      span:  4,
      img:   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
      tag:   "Residential · 2022",
      title: "Horizon Apartments",
      sub:   "OMR · 48 Units",

      modal: {
        heroImg:  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=90",
        year:     "2022",
        type:     "Residential Apartments",
        size:     "48 Units · 72,000 sq.ft",
        location: "OMR, Chennai",
        duration: "26 months",
        budget:   "₹18 Crore",

        overview: "Horizon Apartments is a boutique 48-unit residential project on the Old Mahabalipuram Road corridor. Designed as a community-first development, it features a landscaped central garden, rooftop amenity deck, co-working lounge, and EV charging bays.",

        howWeGotClient: "Green Horizon Developers, a first-time developer, chose BuildCraft after an extensive evaluation of 12 contractors. Our transparent cost management system and quality track record for on-time delivery gave them the confidence to award us their flagship first project.",

        challenge: "As a first-time developer, Green Horizon had limited experience managing construction timelines. We introduced our Client Transparency Portal — a live dashboard giving them real-time access to cost tracking, milestone completion, and photo updates — which eliminated delays caused by delayed approvals.",

        clientStory: "\"We were nervous first-time developers. BuildCraft became our partners, not just contractors. Their transparency portal meant I could check progress from Dubai at midnight. We sold all 48 units before the building was complete — and that's because of the quality BuildCraft delivered.\"",
        clientName:  "Suresh Krishnamurthy",
        clientRole:  "Managing Partner, Green Horizon Developers",

        gallery: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
        ],

        features: [
          "48 units — 2BHK, 3BHK & penthouse mix",
          "Rooftop pool & sky lounge",
          "EV charging for all car parks",
          "100% sold before possession",
          "GRIHA 3-Star green building rating",
        ],
      }
    },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 5. GALLERY ITEMS
   *    Each gallery image opens a modal with
   *    a project story when clicked.
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  gallery: [
    {
      id:   "g1",
      img:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
      tall: true,
      wide: false,
      alt:  "Luxury villa exterior with pool",
      modal: {
        title:   "Sunset Villa — Adyar",
        year:    "2024",
        type:    "Residential Villa",
        story:   "The Sunset Villa project redefined what luxury living means in South Chennai. Built around a century-old rain tree, this 4,800 sq.ft home features an internal courtyard that brings nature into every room. The pool terrace glows gold each evening — earning the project its name.",
        quote:   "\"BuildCraft turned our decade-long dream into reality. The attention to detail made us feel we were in the best hands.\"",
        client:  "Ravi Kumar, Homeowner",
      }
    },
    {
      id:   "g2",
      img:  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=85",
      tall: false,
      wide: false,
      alt:  "Modern home exterior at dusk",
      modal: {
        title:   "Oakwood Residence — Coimbatore",
        year:    "2023",
        type:    "Residential Home",
        story:   "Oakwood Residence is our proudest passive-cooling achievement. Deep overhangs, a central atrium and precisely calculated cross-ventilation reduce indoor temperatures by 4–5°C naturally. The homeowner's annual electricity bill is less than most families pay in a single month.",
        quote:   "\"My electricity bill for the entire year was ₹8,200. My neighbours pay that every month.\"",
        client:  "Pradeep Shankar, Homeowner",
      }
    },
    {
      id:   "g3",
      img:  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
      tall: false,
      wide: false,
      alt:  "Commercial office tower",
      modal: {
        title:   "Nexus Tower — Chennai CBD",
        year:    "2024",
        type:    "Commercial Office Tower",
        story:   "22 floors of Grade-A office space delivered 3 weeks ahead of schedule. The tower's column-free floor plates and sky lounge have made it the most sought-after commercial address in Chennai's CBD. LEED Gold certified — sustainable from basement to rooftop.",
        quote:   "\"BuildCraft delivered ahead of schedule and saved us ₹1.2 Crore in penalty clauses.\"",
        client:  "Arvind Rajan, MD — Nexus Developers",
      }
    },
    {
      id:   "g4",
      img:  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
      tall: true,
      wide: false,
      alt:  "Contemporary residential building",
      modal: {
        title:   "Horizon Apartments — OMR",
        year:    "2022",
        type:    "Residential Apartments",
        story:   "Horizon is a 48-unit community-first apartment complex on OMR. Its rooftop sky lounge, EV charging infrastructure, and co-working lounge were years ahead of the market. Every unit sold before possession — testimony to the BuildCraft name.",
        quote:   "\"I could check progress from Dubai at midnight. We sold all 48 units before completion.\"",
        client:  "Suresh Krishnamurthy, Green Horizon Developers",
      }
    },
    {
      id:   "g5",
      img:  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85",
      tall: false,
      wide: true,
      alt:  "Construction team at work",
      modal: {
        title:   "Our People — The BuildCraft Team",
        year:    "2024",
        type:    "Behind the Scenes",
        story:   "Behind every project is a team of 120+ skilled engineers, architects, site managers and craftsmen who bring your vision to life. Our retention rate is 94% — people stay at BuildCraft because they are treated like family. Happy teams build beautiful homes.",
        quote:   "\"The site team was respectful, disciplined and genuinely passionate. I visited every week and always felt proud to watch them work.\"",
        client:  "Priya Mohan, Homeowner — Coimbatore",
      }
    },
    {
      id:   "g6",
      img:  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=85",
      tall: false,
      wide: false,
      alt:  "Skilled workers on scaffolding",
      modal: {
        title:   "Craftmanship in Action",
        year:    "2023",
        type:    "Construction Process",
        story:   "Precision at every level. Our skilled workforce trains continuously in quality control, safety, and new construction methods. Every RCC column, every door frame, every tile joint is checked against our zero-defect snag protocol before the client sets foot in the building.",
        quote:   "\"Not a single major snag in our final walkthrough across 22 floors.\"",
        client:  "Nexus Tower Client",
      }
    },
    {
      id:   "g7",
      img:  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
      tall: false,
      wide: false,
      alt:  "Elegant interior living space",
      modal: {
        title:   "Heritage Bungalow — Mylapore",
        year:    "2023",
        type:    "Heritage Renovation",
        story:   "The Heritage Bungalow renovation proved that the best way to honour the past is to give it a future. Original Athangudi tiles, teak beams and stained-glass windows were preserved, restored and celebrated — wrapped in a modern structure invisible to the eye.",
        quote:   "\"They matched the original Athangudi tile pattern with hand-made replacements. We are overwhelmed with gratitude.\"",
        client:  "Lakshmi Nair, Homeowner — Mylapore",
      }
    },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 6. SERVICES
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  services: [
    { title: "Residential Construction", desc: "Custom homes, villas, and apartments built to match your lifestyle with uncompromising quality." },
    { title: "Commercial Buildings",     desc: "Office complexes, retail spaces, and industrial facilities built for function, aesthetics, and longevity." },
    { title: "Interior Design",          desc: "Transforming spaces into expressions of personality — luxurious, functional, and timeless." },
    { title: "Home Renovation",          desc: "Breathe new life into existing spaces with expert renovation — complete transformation, zero disruption." },
    { title: "Architecture Planning",    desc: "Innovative designs balancing beauty, structure, and sustainable living for tomorrow's world." },
    { title: "Project Management",       desc: "End-to-end oversight ensuring timelines, budgets, and quality benchmarks are consistently exceeded." },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 7. PROCESS STEPS
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  process: [
    { label: "Consultation",      desc: "We listen, understand requirements, and carefully assess your site and vision." },
    { label: "Design & Planning", desc: "Architects craft blueprints. You approve before a single brick is laid." },
    { label: "Construction",      desc: "Skilled crews build with premium materials; weekly updates always shared." },
    { label: "Quality Check",     desc: "Multi-point inspections ensure zero compromise on safety or finish quality." },
    { label: "Delivery",          desc: "We hand over your home with full documentation, keys, and lifetime aftercare." },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 8. TESTIMONIALS
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  testimonials: [
    { init: "RK", name: "Ravi Kumar",         role: "Villa Owner · Adyar, Chennai",      quote: "BuildCraft turned our decade-long dream into reality. The attention to detail and transparent communication made us feel we were in absolutely the best hands." },
    { init: "PM", name: "Priya & Mohan S.",   role: "Home Owners · Coimbatore",           quote: "Delivered 3 weeks ahead of schedule with exceptional quality. They put us at ease from day one. Best construction decision we ever made." },
    { init: "AS", name: "Arun Sharma",        role: "Business Owner · Chennai CBD",       quote: "Project management was flawless — zero cost overruns, clear milestones, beautiful result. I've already referred three colleagues. Truly world-class." },
    { init: "LN", name: "Lakshmi Nair",       role: "Heritage Home · Mylapore",           quote: "They preserved the soul of our 40-year-old home while making it modern and beautiful. These people are not just builders — they are true artists." },
    { init: "VR", name: "Vikram Reddy",       role: "Apartment Owner · OMR",              quote: "From architecture to interior design, one cohesive team. A seamless build that produced a stunning home we are genuinely proud of every single day." },
    { init: "SK", name: "Sunita & Kiran P.", role: "Dream Villa · Perumbakkam",          quote: "Rock-solid craftsmanship from an extraordinary team. The 10-year warranty gave us complete confidence — though from day one we knew we'd never need it." },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 9. SERVICE PLANS / PACKAGES
   *    Add or remove plans here.
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  plans: [
    {
      name:       "Essential",
      price:      "₹1,850",
      unit:       "per sq.ft",
      highlight:  false,
      desc:       "Solid construction with quality-certified materials. Ideal for budget-conscious builds without compromising safety.",
      features: [
        "ISI-certified materials",
        "Structural engineer oversight",
        "Basic interior finishes",
        "1-year defect liability",
        "Site supervisor assigned",
      ],
    },
    {
      name:       "Premium",
      price:      "₹2,800",
      unit:       "per sq.ft",
      highlight:  true,  // ← set true for the highlighted/recommended plan
      desc:       "Our most popular package — premium materials, full design support, and on-time delivery guarantee.",
      features: [
        "Everything in Essential",
        "Architect-designed interiors",
        "Smart home pre-wiring",
        "Premium imported fixtures",
        "5-year structural warranty",
        "Weekly site video updates",
        "On-time delivery guarantee",
      ],
    },
    {
      name:       "Luxury",
      price:      "₹4,500",
      unit:       "per sq.ft",
      highlight:  false,
      desc:       "Bespoke, white-glove construction for discerning clients. No compromises, no constraints.",
      features: [
        "Everything in Premium",
        "Custom Italian / imported materials",
        "Dedicated project director",
        "10-year full structural warranty",
        "Interior design team included",
        "VIP client dashboard",
        "Priority after-sales care",
      ],
    },
  ],

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   * 10. FOOTER NAVIGATION
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  footerNav: {
    navigation: [
      { label: "About Us",  href: "#about" },
      { label: "Services",  href: "#services" },
      { label: "Projects",  href: "#projects" },
      { label: "Gallery",   href: "#gallery" },
      { label: "Contact",   href: "#contact" },
    ],
    services: [
      { label: "Residential",   href: "#services" },
      { label: "Commercial",    href: "#services" },
      { label: "Renovation",    href: "#services" },
      { label: "Architecture",  href: "#services" },
      { label: "Interior Design", href: "#services" },
    ],
  },

};
/* ═══════════════════════════════════════════
   END OF CONFIG — Don't edit below this line
   ═══════════════════════════════════════════ */