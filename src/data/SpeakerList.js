const speakerList = [
    {
        slug: "kanishka",
        name: "Kanishka Swarnaprabath",
        title: "Associate Lead Machine Learning Engineer",
        company: "Zone24x7",
        image: "/images/summit/speakers/kanishka.jpg",
        linkedin: "https://www.linkedin.com/in/kanishkawijayasekara/",
    },
    {
        slug: "jayasanka",
        name: "Jayasanka Weerasinghe",
        title: "Technical Lead at OpenMRS | Org Admin",
        company: "Google Summer of Code",
        image: "/images/summit/speakers/jayasanka.jpg",
        linkedin: "https://www.linkedin.com/in/jayasanka-sack/",
    },
    {
        slug: "anuradha",
        name: "Anuradha Weeraman",
        title: "Co-Founder & CTO",
        company: "Verdentra",
        image: "/images/summit/speakers/anuradha.jpg",
        linkedin: "https://www.linkedin.com/in/anuradhaweeraman/",
    },
    {
        slug: "sashika",
        name: "Sashika Suren",
        title: "Head of Systems Security, SRE Architect",
        company: "Axiata Digital Labs",
        image: "/images/summit/speakers/sashika.jpg",
        linkedin: "https://www.linkedin.com/in/jayasanka-sack/",
    },
    {
        slug: "sahan",
        name: "Sahan Rathnayake",
        title: "DevOps Engineer",
        company: "Fortude",
        image: "/images/summit/speakers/sahan.jpg",
        linkedin: "https://www.linkedin.com/in/sahan-rathnayake/",
    },
    {
        slug: "ruwanthi",
        name: "Ruwanthi Abeywickrama",
        title: "Co-Founder & Director",
        company: "Xeynergy",
        image: "/images/summit/speakers/ruwanthi.jpg",
        linkedin: "https://www.linkedin.com/in/ruwanthia/",
    },
    {
        slug: "haritha",
        name: "Haritha Thilakarathne",
        title: "Microsoft MVP - AI",
        image: "/images/summit/speakers/haritha.jpg",
        linkedin: "https://www.linkedin.com/in/hthilakarathne/",
    },
    {
        slug: "sanjaya",
        name: "Sanjaya Bentotage",
        title: "CEO",
        company: "Xeynergy",
        image: "/images/summit/speakers/sanjaya.jpg",
        linkedin: "https://www.linkedin.com/in/sanjaya-bentotage-28337589/",
    },
    {
        slug: "nikila",
        name: "Nikila Fernando",
        title: "Site Reliability Engineer",
        company: "Fortude",
        image: "/images/summit/speakers/nikila.jpg",
        linkedin: "https://www.linkedin.com/in/nikila-fernando99/",
        twitter: "https://twitter.com/NikilaFernando",
    },
    {
        slug: "krishan",
        name: "Krishan Shamod",
        title: "DevOps Engineer",
        company: "Insighture",
        image: "/images/summit/speakers/krishan.jpg",
        linkedin: "https://www.linkedin.com/in/krishanshamod/",
    },
    {
        slug: "sachithra",
        name: "Sachithra Manamperi",
        title: "Associate Cloud Security Engineer",
        company: "GTN",
        image: "/images/summit/speakers/sachithra.jpg",
        linkedin: "https://www.linkedin.com/in/sachithra-manamperi-4a93851a5",
    },
    {
        slug: "pasan",
        name: "Pasan Devin",
        title: "Former Associate Software Engineer",
        company: "Tech Venturas",
        image: "/images/summit/speakers/pasan.jpg",
        linkedin: "https://www.linkedin.com/in/pasandevin",
        twitter: "https://www.facebook.com/pasandevin",
    },
    {
        slug: "aloka",
        name: "Aloka Abesirigunawardana",
        title: "Senior Data Scientist",
        company: "Dialog Axiata PLC",
        image: "/images/summit/speakers/aloka.jpg",
        linkedin: "https://www.linkedin.com/in/aloka-abeysirigunawardana-338a9b185/",
    },
    {
        slug: "suvin",
        name: "Suvin Kodituwakku",
        title: "GitHub Campus Expert - Alumni | Software Engineer",
        company: "WSO2",
        image: "/images/summit/speakers/suvin.jpg",
        linkedin: "https://www.linkedin.com/in/suvink",
    },
    {
        slug: "meesha",
        name: "Meesha Mervyn",
        title: "BSc (Hons.) in Computer Science specialised in AI",
        image: "/images/summit/speakers/meesha.jpg",
        linkedin: "https://www.linkedin.com/in/meesha-mervyn-911687226",
    },
    {
        slug: "tharaka",
        name: "Tharaka Mahabage",
        title: "Cybersecurity Architect",
        company: "Virtusa (Threat and Vulnerability Management)",
        image: "/images/summit/speakers/tharaka.jpg",
        linkedin: "https://www.linkedin.com/in/tharaka-mahabage-bbb14935",
    },

];


const findSpeaker = (speakerSlugList) => {
    if (!speakerSlugList) {
        return speakerList;
    }
    return speakerList.filter(speaker => speakerSlugList.includes(speaker.slug));
}

export default findSpeaker;