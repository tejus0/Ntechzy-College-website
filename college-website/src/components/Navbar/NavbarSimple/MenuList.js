import FollowUp from "../../../pages/FollowUP/FollowUp";

export const MenuList = [
    {
        label:"Home",
        link:"/"
    },
    {
        label:"ABOUT US",
        link:"/about",
        content:FollowUp,
        children:[
            {
                label: "About College",
                link: "about-college",
                // content: AboutCollege,
                //content: () => (

                // ),
            },
            {
                label: "Mission & Vision",
                link: "mission-vision",
                //content: MissionVision,

                // //content: () => (
                //   <p>
                //     We, at The Dr Shakuntala Ayurvedic Medical College canvas, local
                //     colours—that is what we, at The Dr Shakuntala Ayurvedic Medical
                //     College , simply believe in.
                //   </p>
                // ),
            },
            {
                label: "Chairman's Message",
                // img: "/chairman.png",
                link: "chairman",
                // content: Chairman,
                // //content: () => (
                //   <p>
                //     With the growing institutionalization of education in Ayurveda there
                //     is an increased demand to study Ayurveda amongst young students.
                //     Under the Aegis of Krishna Sudama Group of Institutions, Dr
                //     Shakuntala Ayurvedic Medical College is committed to give quality
                //     education and health care facilities to the society. In the field of
                //     academics, our focus is to impart quality education and tap the
                //     hidden potentials of the young minds by inculcating theoretical
                //     knowledge, practical skills and unconventional techniques backed
                //     with relentless efforts and persuasion. The college aims at
                //     elevating the standards of Ayurveda education through quality
                //     teaching.
                //   </p>
                // ),
            },
            {
                label: "Vice Chancellor's Message",
                link: "director",
                //content: Director,
                // //content: () => <AboutCollege />,

                // //content: () => (
                //   <p>
                //     The globalization of society has placed the entire world under one
                //     roof, and the improvement of the education system is the main
                //     concern due to global technological growth. Veer Bahadur Singh
                //     Purvanchal University, Jaunpur district U.P., situated on the banks
                //     of the River Gomati and Taposthali of Maharshi Yamdagni, has endured
                //     the test of time and developed rapidly to provide students with all
                //     the facilities they need to cope with the changing world. “Teachers
                //     are the builders of the society” keeping up with the statement, the
                //     University has highly trained teachers with extensive experience in
                //     their fields of specialization, which assists in mentoring students
                //     in an efficient Student-Mentor relationship. This kind of
                //     development of institutions/organizations with the help of strong
                //     teaching hands will help in strengthening the education system,
                //     which in turn will empower our country. A large number of national
                //     and international conferences, seminars, and workshops organized by
                //     the university provide an enriched experience for the students and
                //     also help them in developing key skills like Leadership and Team
                //     Building. Also, time-to-time faculty development programs help
                //     teachers stay updated with the new methodologies and technologies of
                //     teaching-learning process. The University has been keen on giving
                //     its budding talents a new path and attitude in order to make them
                //     capable of facing real time challenges.
                //   </p>
                // ),
            },
            {
                label: "Principal's Message",
                link: "principal",
                //content: Principal,
                // //content: () => <AboutCollege />,

                // //content: () => (
                //   <p>
                //     Ayurveda is a 5,000-year-old system of natural healing that has its
                //     origins in the Vedic culture of India. Although suppressed during
                //     years of foreign occupation, Ayurveda has been enjoying a major
                //     resurgence in both its native land and throughout the world. Tibetan
                //     medicine and Traditional Chinese Medicine both have their roots in
                //     Ayurveda. Early Greek medicine also embraced many concepts
                //     originally described in the classical Ayurvedic medical texts dating
                //     back several thousands of years. More than a mere system of treating
                //     illness, Ayurveda is a science of life Ayur = life, Veda = science
                //     or knowledge. It offers a body of wisdom designed to help people
                //     stay vital while realizing their full human potential. Providing
                //     guidelines on ideal daily and seasonal routines, diet, behavior and
                //     the proper use of our senses, Ayurveda reminds us that health is the
                //     balanced and dynamic integration between our environment, body,
                //     mind, and spirit.
                //   </p>
                // ),
            },
            {
                label: "Awards & Achievements",
                link: "awards",
                // //content: "<h1 className='heading1'>Hello in H1</h1>",
                //content: Awards,
                // //content: () => <AboutCollege />,
            },
        ]
    },
    {
        label: "Student",
        link: "/student",
        children: [
            {
                label: "Courses & Fees",
                link: "courses-fees",
                //content: CoursesFees,
            },

            {
                label: "Admission Inquiry",
                link: "admission-inquiry",
                //content: AdmissionInquiry,
            },
            {
                label: "Student List",
                link: "student-list",
                //content: StudentList,
            },
            {
                label: "E-Brochure",
                link: "e-brochure",
                //content: EBrochure,
            },
            {
                label: "Result",
                link: "/result",
                //content: EBrochure,
                children: [
                    {
                        label: "BAMS (UG) Result",
                        link: "bams-ug-result",
                    },
                    {
                        label: "PG Medical AU Result",
                        link: "pg-medical-au-result",
                        children: [
                            {
                                label: "MD First Year",
                                link: "md-first-year",
                            },
                            {
                                label: "MD Final Year",
                                link: "md-final-year",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: "NCISM Mandate",
        link: "/ncism-mandate",
        children: [
            {
                label: "Principal and Medical Superintendent",
                link: "principal-medical-superintendent",
                //content: PrincipalMedicalSuperintendent,
            },

            {
                label: "Intake Capacity",
                link: "intake-capacity",
                //content: IntakeCapacity,
            },
            {
                label: "Staff List",
                link: "staff-list",
                //content: StaffList,
                children: [
                    {
                        label: "Teaching Staff",
                        link: "Teaching Staff",
                    },
                    {
                        label: "Non-Teaching Staff",
                        link: "non-teaching-staff",
                    },
                    {
                        label: "Clinical Staff",
                        link: "clinical-staff",
                    },
                    {
                        label: "Hospital Staff",
                        link: "hospital-staff",
                    },
                ],
            },
            {
                label: "Student Details",
                link: "student-details",
                //content: StudentDetails,
            },
            {
                label: "Research Publications",
                link: "research-publications",
                //content: ResearchPublications,
            },
            {
                label: "Conferences and Academic Activities",
                link: "conference-activities",
                //content: ConferenceActivities,
            },
            {
                label: "Attendance Report",
                link: "attendance-report",
                //content: AttendanceReport,
                children: [
                    {
                        label: "BAMS Students Attendance",
                        link: "bams-students-attendance",
                    },
                    {
                        label: "Hospital Non-Teaching Staff Attendance",
                        link: "hospital-non-teaching-staff-attendance",
                    },
                    {
                        label: "College Non-Teaching Staff Attendance",
                        link: "college-non-teaching-staff-attendance",
                    },
                    {
                        label: "Teaching Staff Attendance",
                        link: "teaching-staff-attendance",
                    },
                ],
            },
            {
                label: "Affiliations",
                link: "affiliations",
                //content: Affiliations,
            },
            {
                label: "Clinical Material in Hospital",
                link: "clinical-material-in-hospital",
                //content: ClinicalMaterial,
            },
            {
                label: "Hospital Month wise OP/IP Statistics",
                link: "hospital-month-wise-opip-statistics",
                //content: HospitalMonthwiseOPIPStats,
            },
        ],
    },
    {
        label: "Facilities",
        link: "/facilities",
        children: [
            {
                label: "Hospital Facilities",
                link: "hospital-facilities",
                //content: HospitalFacilities,
            },
            {
                label: "College & Other Facilities",
                link: "college-facilities",
                //content: CollegeFacilities,
            },
            {
                label: "Hostel",
                link: "hostel",
                //content: Hostel,
            },
            {
                label: "Gym",
                link: "gym",
                //content: Gym,
            },
        ],
    },
    {
        label: "Media",
        link: "/media",
        children: [
            {
                label: "Image Gallery",
                link: "image-gallery",
                //content: ImageGallery,
            },
            {
                label: "Video Gallery",
                link: "video-gallery",
                //content: VideoGallery,
            },
            {
                label: "Events",
                link: "/events",
                //content: EBrochure,
                children: [
                    {
                        label: "Conference and Academic Activities",
                        link: "conference-activities",
                    },
                ],
            },
        ],
    },
    {
        label: "Hospital Clinical Data",
        link: "/hospital-clinical-data",
        children: [
            {
                label: "Hospital OPD/IPD Data",
                link: "hospital-opd-ipd-data",
                //content: HospitalOpdIpdData,
            },
            {
                label: "Other Hospital Data",
                link: "other-hospital-data",
                //content: OtherHospitaldata,
            },
        ],
    },
    {
        label: "Contact",
        link: "/contact",
    },
];