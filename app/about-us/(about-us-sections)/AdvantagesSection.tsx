import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'
import AdvantageTestIcon from '../../../public/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg'

export default function AdvantagesSection() {
    return (
        <SectionWrapper>
            <h2 className="text-5xl text-primary-brown font-semibold">
                <span className="linear-gradient-purple-text font-black">
                    Advantages {" "}
                </span>
                that we offer
            </h2>
            <div className="w-full flex flex-col gap-4">
            {/* Achievement card */}
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
        </SectionWrapper>
    )
}

export const AchievementCard = ({ stat, description, colorClasses } : AchievementCardProps) => {
    return (
        <div className={`flex flex-col items-center text-center rounded-lg p-16 ${colorClasses.container}`}>
            <Image src={AdvantageTestIcon} alt="advantage_test_icon" />
            <h3 className={`font-bold text-5xl text-${colorClasses.statText}`}>{stat}</h3>
            <p className="text-base text-primary-brown font-normal text-center">{description}</p>
        </div>
    )
}

export type AchievementCardProps = {
    id: number;
    stat: string;
    description: string;
    colorClasses: { statText: string, container: string } 
}

export const achievements = [
    {
        id: 1,
        stat: '80%',
        description: 'reduction on onboarding',
        colorClasses: {
            statText: 'primary-blue',
            container: 'bg-gradient-to-r from-[#d1ecff] to-[#f6ecfd]'
        }
    },
    {
        id: 2,
        stat: '7x faster',
        description: 'vulnerability fixes on GitHub',
        colorClasses: {
            statText: 'primary-purple',
            container: 'bg-gradient-to-r from-[#f2e6fb] to-[#defbeb]'
        }
    },
    {
        id: 3,
        stat: '80%',
        description: 'reduction on onboarding',
        colorClasses: {
            statText: 'primary-blue',
            container: 'bg-gradient-to-r from-[#d1ecff] to-[#f6ecfd]'
        }
    },
    {
        id: 4,
        stat: '7x faster',
        description: 'vulnerability fixes on GitHub',
        colorClasses: {
            statText: 'primary-purple',
            container: 'bg-gradient-to-r from-[#f2e6fb] to-[#defbeb]'
        }
    },
]