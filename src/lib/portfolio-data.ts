// ─── Clap Cut Universe — Centralized Brand Portfolio Data ───

export type ProjectCategory = 'Anthem' | 'Film' | 'Documentary' | 'Ad' | 'Event' | 'Web' | 'App' | 'Branding' | 'Digital Media';

export interface PortfolioProject {
    id: string;
    title: string;
    category: ProjectCategory;
    youtubeId?: string;
    description: string;
    year?: number;
    client?: string;
    type?: string;
    awards?: boolean;
    status?: string;
    collaboration?: string;
    impact?: string;
}

export interface BrandAd {
    brand: string;
    description: string;
    youtubeId?: string;
}

export interface MajorEvent {
    title: string;
    description: string;
    scale?: string;
    client?: string;
}

export interface WebProject {
    title: string;
    industry: string;
    services: string[];
    techStack: string[];
    outcome: string;
    description: string;
}

// ─── YouTube Video IDs ───
// Space Antham:    sdRSNHfu8dI
// Student Anthem:  X57vnqWbzPI
// Say No To Drugs: gx4HRjRWT28
// Veeravanam:      GYlpQDrQt2Y

export const anthemProjects: PortfolioProject[] = [
    {
        id: 'space-antham',
        title: 'Space Antham',
        category: 'Anthem',
        youtubeId: 'sdRSNHfu8dI',
        description: 'A tribute to India\u2019s space pioneers \u2014 celebrating scientific excellence and national pride through cinematic orchestration.',
        year: 2024,
        type: 'ISRO Scientist Tribute Anthem',
        client: 'Independent Production',
        awards: true,
        impact: '1M+ Views',
    },
    {
        id: 'student-anthem',
        title: 'Student Anthem',
        category: 'Anthem',
        youtubeId: 'X57vnqWbzPI',
        description: 'Motivational anthem empowering students with vision, ambition, and leadership \u2014 a call to the next generation.',
        year: 2024,
        type: 'Educational / Youth Motivation',
        client: 'Independent Production',
        impact: '500K+ Reach',
    },
    {
        id: 'say-no-to-drugs',
        title: 'Say No To Drugs',
        category: 'Anthem',
        youtubeId: 'gx4HRjRWT28',
        description: 'A powerful social awareness anthem addressing youth empowerment and substance prevention through music.',
        year: 2024,
        type: 'Anti-Drug Campaign Anthem',
        client: 'Social Awareness Initiative',
        awards: true,
        impact: '2M+ Reach',
    },
    {
        id: 'veeravanam',
        title: 'Veeravanam',
        category: 'Anthem',
        youtubeId: 'GYlpQDrQt2Y',
        description: 'High-energy sports anthem igniting competitive spirit, resilience, and athletic pride.',
        year: 2024,
        type: 'Sports / Athletic Motivation',
        client: 'Independent Production',
        impact: '800K+ Reach',
    },
    {
        id: 'vendum-viduthalai',
        title: 'Vendum Viduthalai',
        category: 'Anthem',
        description: 'Freedom-themed anthem inspired by social empowerment, liberation values, and cultural identity.',
        year: 2023,
        type: 'Cultural & Social Message',
        client: 'Independent Production',
    },
    {
        id: 'mother-anthem',
        title: 'Mother Anthem',
        category: 'Anthem',
        description: 'Emotional tribute celebrating motherhood, sacrifice, and resilience \u2014 in collaboration with Vcom Vijayalakshami.',
        status: 'Upcoming',
        collaboration: 'Vcom Vijayalakshami',
        type: 'Tribute Anthem',
    },
];

export const filmProjects: PortfolioProject[] = [
    {
        id: 'deepavali-bonus',
        title: 'Deepavali Bonus',
        category: 'Film',
        description: 'A Tamil-language drama feature film written and directed by J. Jeyabal. Starring Vikranth as Ravi, Riythvika as Geetha, and Sachin Chandraboss as Sachin. Produced by Deepak Kumar Tala under Sri Ankali Parameswari Productions. Music composed by Maria Jerald, cinematography by Gautham Sethuram, and editing by Parthiv Murugan. A commercial theatrical release with integrated marketing campaigns and nationwide distribution strategy.',
        type: 'Feature Film — Tamil Drama',
        year: 2024,
        client: 'Sri Ankali Parameswari Productions',
        impact: 'Theatrical Release',
    },
];

export const documentaryProjects: PortfolioProject[] = [
    {
        id: 'save-water',
        title: 'Save Water',
        category: 'Documentary',
        description: 'Environmental documentary highlighting water conservation, sustainable practices, and community action.',
        type: 'Environmental Documentary',
        awards: true,
    },
    {
        id: 'women-empowerment',
        title: 'Women Empowerment',
        category: 'Documentary',
        description: 'Award-winning visual narrative advocating gender equality, community transformation, and breaking barriers.',
        type: 'Social Documentary',
        awards: true,
    },
    {
        id: 'child-labour',
        title: 'Child Labour',
        category: 'Documentary',
        description: 'Social reform documentary exposing child labor issues and advocating for education and protection of minors.',
        type: 'Social Reform Documentary',
        awards: true,
    },
];

export const brandAds: BrandAd[] = [
    { brand: 'Madhaven Jewellery', description: 'Luxury bridal campaign blending tradition and modern elegance.' },
    { brand: 'Gabriel Automobiles', description: 'Performance-focused automotive brand commercial with high-impact visuals.' },
    { brand: 'Anand Group of Companies', description: 'Automobile division corporate identity and promotional campaigns.' },
    { brand: 'Youvathi Cookies', description: 'FMCG product launch campaign with vibrant lifestyle storytelling.' },
    { brand: 'JK Hair & Skin Care', description: 'Beauty and personal care brand film with cinematic product reveals.' },
    { brand: 'Queen Mira International School', description: 'Educational institution branding, admissions campaigning, and trust building.' },
    { brand: 'Rafithub Fitness Studio', description: 'Dynamic fitness brand identity with high-energy motion graphics.' },
    { brand: 'Ganesh Brand Food Products', description: 'Traditional food brand positioning with authentic cultural storytelling.' },
];

export const majorEvents: MajorEvent[] = [
    { title: 'Madurai Radio Mirchi Events', description: 'Large-scale radio brand activations with live performances and audience engagement.', scale: '5000+ Audience' },
    { title: 'TN Pongal Festival \u2014 Pothys Presented Gramiya Thiruvila', description: 'Cultural celebration integrating brand sponsorship, traditional performances, and live audience engagement.', scale: '10000+ Audience', client: 'Pothys' },
    { title: 'CM Events', description: 'Official government event production with protocol-grade execution and media coverage.', scale: 'State Level' },
    { title: 'Book Release \u2014 Vairamuthu', description: 'Literary event production including stage design, media coordination, and live broadcast.', client: 'Publisher' },
    { title: 'Book Release \u2014 Kabilan Vairamuthu', description: 'Premium book launch event with celebrity guest management and branding.', client: 'Publisher' },
    { title: 'Book Release \u2014 Madhan Karky', description: 'Author event with immersive stage design and digital media integration.', client: 'Publisher' },
];

export const eventCategories = [
    'Elite Weddings', 'Road Shows', 'Stage Shows', 'Government Events', 'Cultural Festivals',
];

export const webProjects: WebProject[] = [
    {
        title: 'Queen Mira International School \u2014 A to Z Digital Ecosystem',
        industry: 'Education',
        services: ['Social Media Strategy', 'Campaign Execution', 'Website Development', 'Web Application Development', 'Digital Branding', 'Content Production', 'Admissions Campaign Funnels', 'Online Reputation Management'],
        techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'REST API'],
        outcome: 'Complete digital transformation with 300% enrollment inquiry growth.',
        description: 'End-to-end digital transformation including social media strategy, admissions funnel automation, website development, and full web application system.',
    },
];

export const digitalMediaClients = [
    'Sathis Deepa', 'Kennet', 'Chren Academy', 'MP Su Venkadeshen',
    'MMBA Digital Media', 'Thamba Tamil Authority Digital Media',
];

export const brandingFormats = [
    'Newspaper Ads', 'Theatre Branding', 'Hoarding Boards', 'Wall Branding',
    'Roadside Side Panels', 'Bus Branding', 'Train Branding', 'Event Backdrop Branding',
];

// ─── Aggregate Stats ───
export const impactStats = {
    campaigns: 50,
    reach: '10M+',
    awards: 6,
    brands: 20,
    events: 30,
};

// ─── Helper ───
export function getYouTubeThumbnail(youtubeId: string): string {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export const allProjects: PortfolioProject[] = [
    ...anthemProjects,
    ...filmProjects,
    ...documentaryProjects,
];
