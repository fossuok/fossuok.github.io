const speakerList = [
    {
        slug: "rajitha",
        name: "Dr. Rajitha Thennekoon",
        title: "Senior Lecturer (Grade II) in Computer Science PhD(Keio, Japan), MSc(SHU, UK), BSc(SHU, UK)",
        image: "/images/summit/speakers/rajitha.png",
        linkedin: "https://www.linkedin.com/in/rajitha-tennekoon-1275b118/",
    },
    {
        slug: "kanishka",
        name: "Kanishka Swarnaprabath",
        title: "Associate Lead Machine Learning Engineer",
        company: "Zone24x7",
        image: "/images/summit/speakers/kanishka.png",
        linkedin: "https://www.linkedin.com/in/kanishkawijayasekara/",
    },
    {
        slug: "jayasanka",
        name: "Jayasanka Weerasinghe",
        title: "Product Quality Engineering Lead",
        company: "OpenMRS",
        image: "/images/summit/speakers/jayasanka.png",
        linkedin: "https://www.linkedin.com/in/jayasanka-sack/",
    },
    {
        slug: "anuradha",
        name: "Anuradha Weeraman",
        title: "Co-Founder & CTO",
        company: "Verdentra",
        image: "/images/summit/speakers/anuradha.png",
        linkedin: "hhttps://www.linkedin.com/in/anuradhaweeraman/",
    },
    {
        slug: "sashika",
        name: "Sashika Suren",
        title: "Head of Systems Security",
        company: "Axiata Digital Labs",
        image: "/images/summit/speakers/sashika.png",
        linkedin: "https://www.linkedin.com/in/jayasanka-sack/",
    },
    {
        slug: "sahan",
        name: "Sahan Rathnayake",
        title: "DevOps Engineer",
        company: "Fortude",
        image: "/images/summit/speakers/sahan.png",
        linkedin: "https://www.linkedin.com/in/sahan-rathnayake/",
    },
    {
        slug: "ruwanthi",
        name: "Ruwanthi Abeywickrama",
        title: "Co-Founder, Head of Products & Operations",
        company: "Xeynergy",
        image: "/images/summit/speakers/ruwanthi.png",
        linkedin: "https://www.linkedin.com/in/ruwanthia/",
    },
    {
        slug: "hansamali",
        name: "Hansamali Gamage",
        title: "Senior Technical Lead",
        company: "Xeynergy",
        image: "/images/summit/speakers/hansamali.png",
        linkedin: "https://www.linkedin.com/in/hansamali-gamage/",
    },
    {
        slug: "sanjaya",
        name: "Sanjaya Bentotage",
        title: "CEO",
        company: "Xeynergy",
        image: "/images/summit/speakers/sanjaya.png",
        linkedin: "https://www.linkedin.com/in/sanjaya-bentotage-28337589/",
    },
    {
        slug: "nikila",
        name: "Nikila Fernando",
        title: "Site Reliability Engineer",
        company: "Fortude",
        image: "/images/summit/speakers/nikila.png",
        linkedin: "https://www.linkedin.com/in/nikila-fernando99/",
        twitter: "https://twitter.com/NikilaFernando",
    },
    {
        slug: "krishan",
        name: "Krishan Shamod",
        title: "DevOps Engineer",
        company: "Insighture",
        image: "/images/summit/speakers/krishan.png",
        linkedin: "https://www.linkedin.com/in/krishanshamod/",
    },
    {
        slug: "sachithra",
        name: "Sachithra Manamperi",
        title: "Associate Cloud Security Engineer",
        company: "GTN",
        image: "/images/summit/speakers/sachithra.png",
        linkedin: "https://www.linkedin.com/in/sachithra-manamperi-4a93851a5",
    },
    {
        slug: "pasan",
        name: "Pasan Devin",
        title: "Former Associate Software Engineer",
        company: "Tech Venturas",
        image: "/images/summit/speakers/pasan.png",
        linkedin: "https://www.linkedin.com/in/pasandevin",
        twitter: "https://www.facebook.com/pasandevin",
    },
    {
        slug: "aloka",
        name: "Aloka Abesirigunawardana",
        title: "Senior Data Scientist",
        company: "Dialog Axiata PLC",
        image: "/images/summit/speakers/aloka.png",
        linkedin: "https://www.linkedin.com/in/aloka-abeysirigunawardana-338a9b185/",
    },
    {
        slug: "suvin",
        name: "Suvin Kodituwakku",
        title: "GitHub Campus Expert - Alumni | Software Engineer",
        company: "WSO2",
        image: "/images/summit/speakers/suvin.png",
        linkedin: "https://www.linkedin.com/in/suvink",
    },
    {
        slug: "meesha",
        name: "Meesha Mervyn",
        title: "BSc (Hons.) in Computer Science specialised in AI",
        image: "/images/summit/speakers/meesha.png",
        linkedin: "https://www.linkedin.com/in/meesha-mervyn-911687226",
    },
    {
        slug: "tharaka",
        name: "Tharaka Mahabage",
        title: "Cybersecurity Architect",
        company: "Virtusa (Threat and Vulnerability Management)",
        image: "/images/summit/speakers/tharaka.png",
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