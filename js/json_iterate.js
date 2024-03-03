const resume =[
    {
        "personal_information":{
            "first_name": "srinath",
            "last_name": "gunasekaran",
            "email": "hellosri7@gmail.com",
            "phone_number": "9876543210",
            "address": "housing board, Tirupattur"
        },
        "profile_summary": "An experienced UX/UI designer & developer with a strong interest in projects that require good research, conceptual, and analytical thinking. Fully committed to UX designing and developing innovative web-based materials that users will interact with. Always eager to absorb and learn more new things about design.",
        "overall_year_experience": "6.6 years",
        "work_experience": [
            {
                "position": "Frontend Developer",
                "company": "DCKAP",
                "location": "Chennai, Tamil Nadu",
                "start_date": "2021-05-15",
                "end_date": "2023-09-30",
                "company_profile": "DCKAP is a Software as a Service & Product company that provides managed enterprise eCommerce storefronts effectively Enterprise."
            },
            {
                "position": "UX/UI Developer",
                "company": "Contus",
                "location": "Chennai, Tamil Nadu",
                "start_date": "2017-02-13",
                "end_date": "2021-04-30",
                "company_profile": "Contus is a Software as a Product company that provides Digital Engineering services for a Scalable, Agile & Connected Enterprise."
            }
        ],
        "education": [
            {
                "degree": "MCA",
                "college_name": "SSN COLLEGE OF ENGINEERING",
                "location": "Chennai",
                "year": "2014 - 2016"
            },
            {
                "degree": "BCA",
                "college_name": "SACRED HEART COLLEGE",
                "location": "Tirupattur",
                "year": "2011 - 2014"
            }
        ],
        "software_skills": ["AdobeXd", "Photoshop", "Illustrator", "InVision", "After Effects"],
        "technical_skills": ["HTML5", "CSS3", "SASS/LESS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "UX Design", "UI Design"],
        "interests": ["cycling", "badminton", "surfing internet", "reading books"]
    }
];



console.log("----// for loop iterate //----")
for (let i = 0; i < resume.length;i++){     //for loop iterate
    const resume_data = resume[i]
    console.log(resume_data)
}

console.log("----// for in iterate //----")
for (let key in resume) {     //for in loop iterate
    console.log(resume[key])
}

console.log("----// for of iterate //----")
for (let value of resume){   //for of loop iterate
    console.log(value)
}

console.log("----// for each iterate //----")
resume.forEach(element => {console.log(element)});   //for each loop iterate