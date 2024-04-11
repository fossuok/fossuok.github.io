const imageCDNPath = (slug)=>"https://fossuok.sirv.com/members/"+slug+".jpg";

const members = [
    {
      id: 1,
      name: "Madusha Sandaruwan",
      slug: "madusha-sandaruwan",
      position: "Community Lead",
      bio: "Madusha Sandaruwan is a FOSS advocate passionate about Open Source Software, Cloud Computing, and Web Development. He is the Founder of FOSS Community UOK and a Computer Science undergraduate at the University of Kelaniya. He is a tech enthusiast who loves to explore new technologies and share knowledge with others.",
      socialMediaProfiles: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/madushasandaruwan/"
        },
        {
          name: "twitter",
          url: "https://twitter.com/_Madushas"
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/kv.madusha/"
        }
      ]
    },
    {
      id: 2,
      name: "Ayisha Ilyas",
      slug: "ayisha-ilyas",
      position: "Member",
      bio: "Ayisha Ilyas is a Computer Science undergraduate at the University of Kelaniya. She is a passionate tech enthusiast who loves to explore new technologies. She is one of the founding member of the FOSS Community UOK.",
      socialMediaProfiles: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/ayisha-ilyas/"
        },
        {
          name: "twitter",
          url: "https://twitter.com/AyishaIlyas"
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/ayisha.ilyas/"
        }
      ]
    },
    {
      id: 3,
      name: "Dewmini Thakshila",
      slug: "dewmini-thakshila",
      position: "Member",
      bio: "Dewmini Thakshila is a Computer Science undergraduate at the University of Kelaniya. She is a passionate tech enthusiast who loves to explore new technologies. She is one of the founding member of the FOSS Community UOK.",
      socialMediaProfiles: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/dewminithakshila"
        },
        {
          name: "twitter",
          url: "https://x.com/_KavindiADT"
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/dewminithakshila.kavindi"
        }
      ]
    },
    {
      id: 4,
      name: "Imesha Dilshani",
      slug: "imesha-dilshani",
      position: "Member",
      bio: "Imesha Dilshani is a Computer Science undergraduate at the University of Kelaniya. She is a passionate tech enthusiast who loves to explore new technologies. She is one of the founding member of the FOSS Community UOK.",
      socialMediaProfiles: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/imesha-dilshani-61862422b/"
        },
        {
          name: "twitter",
          url: "https://twitter.com/ImeshaDilshani"
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/imesha.dilshani/"
        }
      ]
    },
    
  ];

export default members;
export { imageCDNPath, members };