import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import AdvantageTestIcon from '../../../public/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg'

export default function AboutUsSection() {
    return (
        <SectionWrapper>
            <div className="w-full text-center text-[#ffffff] z-20">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-medium xs:font-normal mb-8">
                    About <span className="text-primary-blue font-black">BitLyte Studios</span>
                </h2>
                <p className="text-xl sm:text-2xl font-light mb-12">
                    At BitLyte Studios, we're passionate about creating innovative digital solutions that empower businesses to thrive in the digital landscape. Our mission is to deliver cutting-edge web and mobile applications that drive growth and success for our clients.
                </p>

                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal mb-8">Our Values</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {valueCardData.map((value) => (
                        <ValueCard
                            key={value.id}
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </div>

                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-medium xs:font-normal mb-8">Our Achievements</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map(achievement =>
                        <AchievementCard 
                            key={achievement.id}
                            id={achievement.id}
                            stat={achievement.stat} 
                            description={achievement.description} 
                            colorClasses={achievement.colorClasses}
                        />
                    )}
                </div>
            </div>
        </SectionWrapper>
    )
}

const ValueCard = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="relative overflow-hidden flex-1 p-8 rounded-lg border-[0.5px] border-[#252525]">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#ffffff] uppercase z-30 mb-4">
                {title}
            </h4>
            <p className="text-lg font-light text-[#ffffff] z-20">
                {description}
            </p>
        </div>
    );
};

const AchievementCard = ({ stat, description, colorClasses } : AchievementCardProps) => {
    return (
        <div className={`flex flex-col items-center text-center rounded-lg p-8 ${colorClasses.container}`}>
            <Image src={AdvantageTestIcon} alt="achievement_icon" width={64} height={64} />
            <h3 className={`font-bold text-3xl sm:text-4xl text-${colorClasses.statText} mt-4 mb-2`}>{stat}</h3>
            <p className="text-base text-primary-brown font-normal text-center">{description}</p>
        </div>
    )
}

type AchievementCardProps = {
    id: number;
    stat: string;
    description: string;
    colorClasses: { statText: string, container: string } 
}

const valueCardData = [
    {
        id: 1,
        title: "Innovation",
        description: "We constantly push the boundaries of technology to deliver cutting-edge solutions for our clients.",
    },
    {
        id: 2,
        title: "Collaboration",
        description: "We believe in the power of teamwork and foster a collaborative environment with our clients and partners.",
    },
    {
        id: 3,
        title: "Excellence",
        description: "We strive for excellence in everything we do, ensuring the highest quality in our products and services.",
    },
    {
        id: 4,
        title: "Client-Centric",
        description: "Our clients' success is our top priority, and we tailor our solutions to meet their unique needs and goals.",
    },
];

const achievements = [
    {
        id: 1,
        stat: '100+',
        description: 'Successful Projects',
        colorClasses: {
            statText: 'primary-blue',
            container: 'bg-gradient-to-r from-[#d1ecff] to-[#f6ecfd]'
        }
    },
    {
        id: 2,
        stat: '95%',
        description: 'Client Satisfaction',
        colorClasses: {
            statText: 'primary-purple',
            container: 'bg-gradient-to-r from-[#f2e6fb] to-[#defbeb]'
        }
    },
    {
        id: 3,
        stat: '50+',
        description: 'Expert Team Members',
        colorClasses: {
            statText: 'primary-blue',
            container: 'bg-gradient-to-r from-[#d1ecff] to-[#f6ecfd]'
        }
    },
    {
        id: 4,
        stat: '24/7',
        description: 'Client Support',
        colorClasses: {
            statText: 'primary-purple',
            container: 'bg-gradient-to-r from-[#f2e6fb] to-[#defbeb]'
        }
    },
];