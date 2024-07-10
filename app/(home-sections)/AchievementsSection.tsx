import React from "react";
import '../../public/test.css'
import SectionWrapper from "../components/SectionWrapper";

export default function AchievementsSection() {
  return (
    <SectionWrapper>
      <h2 className="text-4xl text-[#ffffff]">
        Our Achievements
      </h2>

      {/* Achievements cards container */}
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
  );
}

export const AchievementCard = ({ stat, description, colorClasses } : AchievementCardProps) => {
    return (
        <div className={`flex flex-col items-center text-center rounded-lg p-16 ${colorClasses.container}`}>
            <h3 className={`font-bold text-5xl text-${colorClasses.statText}`}>{stat}</h3>
            <p className="w-full text-lg text-[#ffffff] font-semibold pt-2">{description}</p>
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
        description: 'Reduction on onboarding',
        colorClasses: {
            statText: 'primary-blue',
            container: 'bg-gradient-to-r from-[#292929] to-[#ED1AFF]'
        }
    },
    {
        id: 2,
        stat: '7x faster',
        description: 'Vulnerability fixes on GitHub',
        colorClasses: {
            statText: 'primary-purple',
            container: 'bg-gradient-to-r from-[#292929] to-[#FF7A1A]'
        }
    },
    {
        id: 3,
        stat: '22%',
        description: 'Increased development productivity',
        colorClasses: {
            statText: 'primary-green',
            container: 'bg-gradient-to-r from-[#292929] to-[#9FFF1A]'
        }
    },
]