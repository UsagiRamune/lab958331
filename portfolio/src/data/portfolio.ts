// src/data/portfolio.ts
export interface Project {
  id: string
  year: string
  title: string
  subtitle: string
  type: string
  engine: string[]
  tools: string[]
  role: string[]
  description: string
  details: string[]
  images: string[]
  qrCode?: string
  link?: string
}

export interface Activity {
  year: string
  title: string
  image: string
}

export interface Certificate {
  title: string
  issuer: string
  year: string
  image: string
}

export interface Skill {
  category: 'hard' | 'soft'
  name: string
}

export const personal = {
  name: 'อติคุณ ชินบุตร',
  nameEn: 'Atikun Chinnabud',
  nickname: 'ยอร์ช',
  role: 'Digital Game Developer',
  tagline: "Game is not just entertainment — it's science, art, and experience.",
  bio: 'นักพัฒนาเกมจาก CAMT มหาวิทยาลัยเชียงใหม่ ที่หลงใหลในการสร้างประสบการณ์ที่น่าจดจำให้ผู้เล่น ผ่านการออกแบบเกม งานศิลป์ 2D และการพัฒนาเว็บ',
  photo: '/images/profile/photo-main.png',
  contact: {
    phone: '065-434-3213',
    email: 'atikun_c@cmu.ac.th',
    facebook: 'Atikun Chinnabud',
    address: '119/13 หมู่ที่ 1, ตำบลช้างเผือก, อำเภอเมืองเชียงใหม่, จังหวัดเชียงใหม่ 50300',
  },
  education: [
    {
      year: '2021 – 2023',
      institution: 'โรงเรียนบุญวาทย์วิทยาลัย',
      program: 'แผนการเรียนศิลป์-ภาษาญี่ปุ่น',
    },
    {
      year: '2023 – ปัจจุบัน',
      institution: 'มหาวิทยาลัยเชียงใหม่',
      program: 'College of Arts, Media and Technology — Digital Game Development',
    },
  ],
}

export const skills: Skill[] = [
  { category: 'hard', name: 'UE Programming' },
  { category: 'hard', name: 'Unity Programming' },
  { category: 'hard', name: 'Game Design' },
  { category: 'hard', name: '2D Artist' },
  { category: 'hard', name: 'Web Design' },
  { category: 'soft', name: 'English Communication' },
  { category: 'soft', name: 'Japanese (Basic)' },
  { category: 'soft', name: 'Presentation Skills' },
  { category: 'soft', name: 'Teamwork' },
]

export const projects: Project[] = [
  {
    id: 'shaman',
    year: '2567',
    title: 'Shaman The Mantra World',
    subtitle: '2D Top-down RPG Bullet Hell',
    type: '2D RPG / Bullet Hell',
    engine: ['MonoGame'],
    tools: ['MonoGame (VS 2022)', 'Tiled', 'Aseprite'],
    role: ['Project Manager', 'Game Designer', '2D Artist'],
    description: 'เกม 2D Top-down RPG Bullet Hell ที่ผู้เล่นรับบทหมอผีผู้หลุดเข้าสู่โลกมนตรา ต้องกำจัดหมอผีชั่วร้ายที่จองทำลายโลก ได้รับแรงบันดาลใจจาก J-RPG และ Bullet Hell แบบ Undertale',
    details: [
      'ออกแบบระบบการเล่นทั้ง RPG top-down section และ Bullet Hell section gameplay',
      'ทำ UI Assets และ Sprite Assets ทั้ง Static และ Animated',
      'ใช้ Aseprite วาด Pixel Art โดย reference ดวงไฟจาก Pinterest แปลงเป็นดวงวิญญาณลูกไฟ',
      'วาง concept โครงสร้าง Layer 3 ชั้น: ตัวละคร, แขน, และคทา',
    ],
    images: [
      '/images/projects/shaman/cover.png',
      '/images/projects/shaman/gameplay-1.png',
      '/images/projects/shaman/gameplay-2.png',
      '/images/projects/shaman/gameplay-3.png',
      '/images/projects/shaman/gameplay-4.png',
      '/images/projects/shaman/gameplay-5.png',
      '/images/projects/shaman/art-1.png',
    ],
    qrCode: '/images/projects/shaman/qr.png',
    link: 'https://drive.google.com/drive/folders/1SM_5LSrBYEeDTd2LAaE-a6aeQ1CESVoK',
  },
  {
    id: 'stardust',
    year: '2567',
    title: 'Stardust Little Witch',
    subtitle: '2D Top-down Roguelite',
    type: '2D Roguelite / Casual',
    engine: ['Unity'],
    tools: ['Unity', 'Aseprite', 'Procreate'],
    role: ['Project Manager', 'Game Designer', '2D Concept Artist', '2D Pixel Artist'],
    description: 'เกม 2D Top-down Roguelite ที่ได้รับแรงบันดาลใจจาก Vampire Survivors และ HoloCure ผู้เล่นควบคุมแม่มดสาวสู้กับมอนสเตอร์ เก็บเงิน อัพเกรดตัวละคร กับระบบ boss ที่ยิ่งเวลาผ่านยิ่งยาก',
    details: [
      'Brainstorm ระบบ Core game loop ร่วมกับทีมก่อนลงมือออกแบบ',
      'ออกแบบ Movement, Action Mechanics และ UI layout',
      'วาดตัวละครหลัก (Witch) สองเวอร์ชันด้วย Procreate โดยใช้ AI เป็น reference แล้วแก้ด้วยมือ',
      'ออกแบบ Boss ตัวที่ 1 (Slime girl) และ Boss ตัวที่ 2 (ไม่ได้ใช้ในเกมจริง)',
      'วาง concept Animation Frame ให้กับ 2D Artist: Slime 4 ประเภท (Melee, Ranged, Big, Boss)',
    ],
    images: [
      '/images/projects/stardust/cover.png',
      '/images/projects/stardust/gameplay-1.png',
      '/images/projects/stardust/char-v1.png',
      '/images/projects/stardust/char-v2.png',
      '/images/projects/stardust/boss-1.png',
      '/images/projects/stardust/boss-2.png',
    ],
    qrCode: '/images/projects/stardust/qr.png',
    link: 'https://ikqfang.itch.io/stardust-little-witch',
  },
  {
    id: 'merge-td',
    year: '2568',
    title: 'Merge Tower Defense',
    subtitle: 'Web Game + Firebase Dashboard',
    type: 'Web Game / Tower Defense',
    engine: ['Phaser 3'],
    tools: ['HTML5', 'CSS', 'JavaScript', 'Phaser 3', 'Firebase'],
    role: ['Full Stack Developer', 'Game Designer'],
    description: 'โปรเจกต์บูรณาการ 2 วิชา — Data & Network for Game Dev และ Playable Ads สร้างเว็บไซต์ที่มีเกม Tower Defense แบบ Merge ฝังอยู่พร้อม Real-time Leaderboard ผ่าน Firebase',
    details: [
      'รับผิดชอบทั้ง Frontend และ Backend ของเว็บไซต์',
      'ออกแบบ Interactive Dashboard สำหรับ Game Information',
      'ระบบ Merge: ผู้เล่น Summon tower แบบสุ่ม รวม tower ระดับเดียวกันเพื่อ upgrade',
      'Tower 6 ประเภท: ไฟ, น้ำแข็ง, สายฟ้า, พิษ, ธนูกายภาพ, มานา (inspired by Rush Royale)',
      'Enemy 4 แบบ: ขนาดปกติ, ขนาดกลาง, วิ่งเร็ว, ทึก + Boss ที่มี special ability',
    ],
    images: [
      '/images/projects/merge-td/cover.png',
      '/images/projects/merge-td/gameplay-1.png',
      '/images/projects/merge-td/leaderboard.png',
      '/images/projects/merge-td/dashboard.png',
    ],
    qrCode: '/images/projects/merge-td/qr.png',
    link: 'https://mergetd-by-bignigamedev.netlify.app',
  },
  {
    id: 'farmisekai',
    year: '2568',
    title: 'FarmIsekai',
    subtitle: '3D Farming Simulation Survival',
    type: '3D Farming / Survival',
    engine: ['Unity'],
    tools: ['Unity', 'Procreate', 'Figma'],
    role: ['Game Designer', '2D Concept Artist', 'UX/UI Designer'],
    description: 'เกม 3D Farming Simulation Survival เกมแรกของทีม ผู้เล่นถูกส่งไปโลกอื่นในฐานะพนักงาน Black Company ต้องปลูกผักขายบริษัทท่ามกลางอันตรายในมิตินั้น — "ปกป้องฟาร์มของคุณเท่าชีวิต"',
    details: [
      'ออกแบบ Concept Level Design แบ่งโซน Easy/Difficult/Restriction Area',
      'ออกแบบ Sketch UI: Gameplay HUD, Main Menu, Inventory system',
      'วาด Character Sheet 2D สำหรับส่ง 3D Artist ทำ model (ครั้งแรกที่ทำ Character Sheet จริงๆ)',
      'ออกแบบตัวละครหลักสไตล์ cute anime ชุดเป็นทางการ-เดินป่า',
    ],
    images: [
      '/images/projects/farmisekai/cover.png',
      '/images/projects/farmisekai/level-design.png',
      '/images/projects/farmisekai/ui-sketch.jpg',
      '/images/projects/farmisekai/char-sheet.jpg',
    ],
    // ไม่มี link และ qrCode
  },
  {
    id: 'faceless',
    year: '2569',
    title: 'FACELESS',
    subtitle: '2D Point & Click Puzzle',
    type: '2D Puzzle / Mystery',
    engine: ['Unity'],
    tools: ['Unity', 'Procreate'],
    role: ['2D Artist'],
    description: 'Prototype สำหรับ Global Game Jam 2026 Chiang Mai — โลกที่ทุกคนสวมหน้ากากแสดงอารมณ์ แต่มีไวรัสทำให้หน้ากากไม่ทำงาน ผู้เล่นต้องวินิจฉัยอารมณ์และรักษาผู้ป่วยก่อนที่พวกเขาจะตาย',
    details: [
      'ออกแบบและวาดตัวละครทั้งหมดในเกม',
      'ใช้ AI เฉพาะส่วนท่าทาง+เสื้อผ้าเป็น reference แก้ทรงผม สี แสงเงาด้วยมือเอง',
      "Inspired by \"That's Not My Neighbor\" และ \"No, I'm Not a Human\"",
      'ด้วยเวลาจำกัด copy-paste เปลี่ยนสีผมและเสื้อเพื่อสร้างตัวละครหลายแบบ',
    ],
    images: [
      '/images/projects/faceless/cover.png',
      '/images/projects/faceless/gameplay-1.png',
      '/images/projects/faceless/gameplay-2.png',
      '/images/projects/faceless/char-1.PNG',
      '/images/projects/faceless/char-2.PNG',
      '/images/projects/faceless/char-3.PNG',
    ],
    qrCode: '/images/projects/faceless/qr.png',
    link: 'https://ikqfang.itch.io/faceless',
  },
]

export const activities: Activity[] = [
  {
    year: '2026',
    title: 'Global Game Jam 2026 — Chiang Mai',
    image: '/images/activities/ggj2026.jpg',
  },
  {
    year: '2025',
    title: 'Gamescom Asia × Thailand Game Show 2025',
    image: '/images/activities/tgs2025.png',
  },
]

export const certificates: Certificate[] = [
  {
    title: 'Certificate of Participation — Global Game Jam 2026',
    issuer: 'Global Game Jam',
    year: '2026',
    image: '/images/certificates/ggj2026.png',
  },
]