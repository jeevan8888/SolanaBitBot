import FilterForm from "@/components/FilterForm";
import InfoCard from "@/components/InfoCard";
import MemberShipCard from "@/components/MemberShipCard";
import PendingPoolTable from "@/components/PendingPoolTable";
import Questions from "@/components/Questions";
import TermsCondition from "@/components/TermsCondition";
import React from "react";

const Page = () => {
  return (
    <>
      <div>
        <TermsCondition />
        <Questions />
        <FilterForm />
        <InfoCard />
        <MemberShipCard />
      </div>
    </>
  );
};

export default Page;
