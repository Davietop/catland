import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Story from './story';
import Executives from './executives';
import AwardsSection from './awards';

interface InfoTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}


const Info = ({activeTab}:InfoTabsProps) => {
  return (
    <div>
      {activeTab === "story" && (
       
         <Story/>
       
      )}

      {activeTab === "executives" && (
       <Executives/>
      )}

    

      {activeTab === "awards" && (
       <AwardsSection/>
      )}
    </div>
  )
}

export default Info