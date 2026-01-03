
export type TEducation = {
    institution: string,
    abbreviation?: string | null,
    degree: string,
    result: string,
    status: string,
    location: string,
    year?: string | null,
}

export const educationData: TEducation[] = [
    {
        institution: "Northern University Bangladesh",
        abbreviation: "NUB",
        degree: "Bachelor of Science in Computer Science & Engineering (Evening)",
        result: "Result: Appeared",
        status: "Running",
        location: "Dhaka, Bangladesh",
        year: null,
    },
    {
        institution: "BGIFT Institute of Science Technology",
        abbreviation: "BIST",
        degree: "Diploma in Computer Engineering",
        result: "Graduated with CGPA: 3.56/4.00",
        status: "Completed",
        location: "Gazipur, Bangladesh",
        year: "2023",
    },
    {
        institution: "Shahaj Uddin Sarker Model School and College",
        abbreviation: null,
        degree: "S.S.C",
        result: "Graduated with CGPA: 2.72/5.00",
        status: "Completed",
        location: "Gazipur, Bangladesh",
        year: "2018",
    },
]