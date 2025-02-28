import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

export default function ClientFacts() {
  return (
    <SectionWrapper>
      <div className="relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 items-center justify-between gap-6 rounded-lg pt-4 sm:pt-8 md:pt-12">
        {clientFacts.map((fact) => (
          <ClientFactCard
            key={fact.id}
            id={fact.id}
            title={fact.title}
            description={fact.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ClientFactCard = ({
  id,
  title,
  description,
}: ClientFactCardProps) => {
  return (
    <div className="overflow-hidden relative flex flex-col gap-2 rounded-lg p-6 border-[0.5px] border-[#4b4d1e] z-20">
      <div className="relative flex flex-col items-start justify-center z-20">
        <p className="text-lg sm:text-xl custom-text-yellow font-semibold uppercase text-start">
          {title}
        </p>
        <p className="text-xl font-light text-[#ffffff] text-center pt-4 z-40">
          {description}
        </p>
      </div>
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[130px] pointer-events-none"></div>
    </div>
  );
};

export type ClientFactCardProps = {
  id: number;
  title: string;
  description: string;
};

export const clientFacts = [
  {
    id: 1,
    title: "Client",
    description: "DJ David Mash",
  },
  {
    id: 2,
    title: "Timeframe",
    description: "2 months",
  },
  {
    id: 3,
    title: "Year",
    description: "2024",
  },
  {
    id: 4,
    title: "Client",
    description: "Something",
  },
];
