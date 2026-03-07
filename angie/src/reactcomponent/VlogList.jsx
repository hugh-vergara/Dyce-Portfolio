import { useState } from "react";

const videoIds = [
    "Pc3DUCNdGZU","PvdL0Q2N5IU","Z5DL-asMO6U","qD9WENmg41o",
    "WW7nxfObbYA","wLLwgvFPcCk","FWtjHAnzC0Q","BUMo5IEkUXw",
    "dkrIkmSJs84","lqvkubpyiGM","DkC5YXIIL-0"
];

const videos = {
    "Pc3DUCNdGZU": {
        title: "Vlog 1 - Inclusion Training",
        description: `In this vlog, I shared my experience during the inclusion training. I recorded some parts of the activity, such as the discussions, the environment, and the participation of my friends. I focused on filming the important moments of the training and how everyone was involved in learning about inclusive education.\n\nThrough this experience, I realized how important it is for teachers to understand and support learners with different needs. The activity helped me reflect on my role as a future teacher in creating a classroom where every learner feels accepted and supported. This experience is connected to the Philippine Professional Standards for Teachers (PPST), particularly Domain 3: Diversity of Learners, because it highlights the importance of recognizing and respecting the differences among learners. It also relates to Domain 7: Personal Growth and Professional Development, since participating in and documenting this training helped me learn and grow as an aspiring educator.`
    },
    "PvdL0Q2N5IU": {
        title: "Vlog 2 - Pinning Ceremony",
        description: `In this vlog, I documented my pinning ceremony, which marked the beginning of my journey as a student teacher. It was a special and meaningful moment for me because it symbolized the start of my practice in the teaching profession. During the vlog, I shared some highlights of the ceremony and the emotions I felt as I was officially pinned and prepared to begin my student teaching experience.\n\nI also reflected on my college journey and the many experiences that helped shape who I am today. Throughout my years in college, I experienced both challenges and achievements. I was grateful to have balanced my responsibilities as a student-athlete while also maintaining my goal of being a consistent honor student. These experiences taught me discipline, perseverance, and dedication. More importantly, my college journey helped me grow not only academically but also personally, as I slowly discovered more about myself and the kind of person I want to become.\n\nThis experience connects with the Philippine Professional Standards for Teachers (PPST), particularly Domain 7: Personal Growth and Professional Development, because it reflects my journey of learning, self-reflection, and preparation for my future role as a teacher. The pinning ceremony served as a reminder of how far I have come and motivated me to continue striving to become a responsible and committed educator.`
    },
    "Z5DL-asMO6U": {
        title: "Vlog 3 - My Soul Training",
        description: `I attended a training on learning MYSoul, and it was a very enriching experience. During the training, I learned how to navigate and use the MYSoul platform effectively, exploring its features for lesson planning, class management, and communication with students. The facilitators guided us through step-by-step demonstrations, and I was able to try hands-on activities to practice using the system.\n\nThe training also gave me a chance to reflect on how technology can support teaching and learning. I realized that platforms like MYSoul can help me organize lessons better, monitor student progress, and make learning more interactive and engaging. Overall, the training strengthened my confidence in using digital tools for education and encouraged me to explore more ways to integrate technology into my teaching practice.\n\nThis experience relates to the Philippine Professional Standards for Teachers (PPST), particularly Domain 4: Curriculum and Planning and Domain 5: Assessment and Reporting, as it enhanced my skills in designing learning experiences and monitoring student outcomes using technology.`
    },
    "qD9WENmg41o": {
        title: "Vlog 4 - My Hibalag Experience",
        description: `In the vlog, I was walking with the crowd during the Parada Sillimaniana, enjoying the colorful floats, lively music, and the excitement of students cheering around me. I watched Miss Silliman walk gracefully down the parade route, full of confidence and poise. I felt proud and inspired, realizing that creating a positive and engaging environment is not just for classrooms but also in our community, which connects to PPST Domain 4 – Learning Environment.\n\nAfter the parade, I attended a seminar about leadership, teamwork, and student involvement. It made me think about how everyone has something unique to offer, which reminded me of Domain 5 – Diversity of Learners. During the wall blessing, I took a quiet moment to reflect on our university's traditions and values, feeling grateful for the opportunities I have. This connects to Domain 6 – Personal Growth and Professional Development. Exploring the booths for the Hiballag Experience, I saw so much creativity, dedication, and passion from my fellow students. It reminded me that learning is not only about academics, but also about appreciating others, working together, and celebrating everyone's talents.`
    },
    "WW7nxfObbYA": {
        title: "Vlog 5 - My Teaching Internship",
        description: `In the vlog, I was preparing my classroom, arranging materials, and greeting my students for the first time. I felt both nervous and excited, knowing that each moment could impact their learning. Guiding my students through lessons helped me apply PPST Domain 1 – Content Knowledge and Pedagogy, as I used my subject knowledge to make lessons meaningful and interesting.\n\nI noticed that each student learned in their own way, which made me think about Domain 3 – Diversity of Learners. I had to adjust my teaching so everyone could understand and participate. Keeping the classroom organized and supportive reflected Domain 4 – Learning Environment, and seeing students succeed, even in small steps, reminded me why I chose to become a teacher: to guide, encourage, and nurture every learner with care.`
    },
    "wLLwgvFPcCk": {
        title: "Vlog 2.1 - Khan Academy",
        description: `In the vlog, I was sitting in the seminar, exploring Khan Academy on my laptop, trying out interactive lessons and adaptive exercises. I felt excited seeing how technology can make learning more personal and fun. This relates to PPST Domain 1 – Content Knowledge and Pedagogy, because I learned how to use digital tools while still focusing on teaching effectively.\n\nI also thought about Domain 7 – Community Linkages and Professional Engagement, realizing that connecting with global platforms can give students new ways to learn and grow. The seminar made me look forward to designing lessons that help every student feel capable, confident, and motivated to learn at their own pace.`
    },
    "FWtjHAnzC0Q": {
        title: "Vlog 2.2 - Red Cross Training",
        description: `In the vlog, I was practicing first aid, CPR, and emergency response with the Red Cross trainers. I felt nervous at first but then empowered, knowing that these skills could one day save someone's life. This reminds me of PPST Domain 4 – Learning Environment, because keeping students safe is part of being a responsible teacher.\n\nThe trainers taught me to stay calm, think quickly, and be compassionate, which connects to Domain 7 – Community Linkages and Professional Engagement. I left the training feeling prepared and more aware of my responsibility—not only to teach, but also to protect and care for my students in emergencies.`
    },
    "BUMo5IEkUXw": {
        title: "Vlog 2.3 - Inclusion Training",
        description: `In the vlog, I was joining activities during the Inclusion Training, learning how to adapt lessons and help students with different abilities. I felt a deep sense of responsibility as I realized that every child deserves the chance to succeed. This reflects PPST Domain 3 – Diversity of Learners, because it's important to understand each student's strengths and challenges.\n\nI also reflected on Domain 4 – Learning Environment, because creating an inclusive classroom means making every student feel safe, supported, and valued. The training reminded me that teaching is not just about sharing knowledge—it's about patience, empathy, and believing that every student can grow when given the right support.`
    },
    "dkrIkmSJs84": {
        title: "Vlog 2.4 - UCLEM Worship",
        description: `In the vlog, I was sitting quietly with my classmates during the UCLEM worship, listening to prayers, songs, and messages about patience and gratitude. I felt calm and encouraged, knowing that every step of my journey is meaningful. This connects to PPST Domain 6 – Personal Growth and Professional Development, because it reminded me to pause, reflect, and be thankful for what I have.\n\nThe worship encouraged me to trust God's timing, to be patient with myself, and to appreciate the people, experiences, and resources in my life. It was a spiritual reset that helped me stay motivated and reminded me that personal growth is as important as professional skills in becoming a caring and effective teacher.`
    },
    "lqvkubpyiGM": {
        title: "Vlog 2.5 - Teaching Like a Champion",
        description: `In the vlog, I was taking notes and practicing techniques shared in the Teaching Like a Champion seminar. I felt inspired as I learned strategies for engaging students, keeping discipline, and making lessons more interesting. This reflects PPST Domain 1 – Content Knowledge and Pedagogy, because I learned practical ways to improve my teaching.\n\nThe seminar also reminded me of Domain 4 – Learning Environment, because a structured and positive classroom helps students feel safe and motivated. I also reflected on Domain 5 – Assessment and Reporting, learning how to track students' progress and adjust lessons to help them succeed. I left feeling more confident in my ability to guide, encourage, and inspire students to do their best.`
    },
    "DkC5YXIIL-0": {
        title: "Vlog 2.6 - DepEd Orientation",
        description: `In the vlog, I was listening closely during the DepEd orientation, learning about policies, ethics, and the responsibilities of teachers in the Philippines. I felt a renewed sense of purpose as I thought about PPST Domain 2 – Professional Knowledge and Ethics, understanding how important it is to be responsible, honest, and professional in shaping young minds.\n\nI also thought about Domain 7 – Community Linkages and Professional Engagement, because teachers are part of a bigger community, and engaging with other professionals helps us grow. I left the orientation feeling ready and inspired to be the best teacher I can be, committed to integrity, dedication, and care for my future students.`
    }
};

export default function VlogList() {
    const [active, setActive] = useState(null);

    return (
        <div className="space-y-6">
            {videoIds.map((id, i) => (
                <div
                    key={id}
                    className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
                    onClick={() => setActive(active === i ? null : i)}
                >
                    <h2 className="font-bold text-xl mb-2">
                        {videos[id]?.title || `ST Vlog ${i + 1}`}
                    </h2>

                    {active === i && (
                        <>
                            <div className="aspect-video mb-3">
                                <iframe
                                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                    title={videos[id]?.title || `ST Vlog ${i + 1}`}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="w-full h-full rounded"
                                />
                            </div>

                            <p className="text-sm text-gray-700 whitespace-pre-wrap">
                                {videos[id]?.description || "No description available."}
                            </p>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}