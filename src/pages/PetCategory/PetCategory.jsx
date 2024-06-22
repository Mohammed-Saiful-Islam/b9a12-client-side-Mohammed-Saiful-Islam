import { useParams } from "react-router-dom";
import usePetList from "../../hooks/usePetList";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import PetCategoryTab from "../PetCategoryTab/PetCategoryTab";

const PetCategory = () => {
    const categories=['cat','dog','rabbit','fish'];
    const{category}=useParams();
    const initialIndex=categories.indexOf(category);
    const[tabIndex,setTabIndex]=useState(initialIndex)
    const[pets]=usePetList();


    const cat=pets.filter(pet=>pet.category==='cat');
    const dog=pets.filter(pet=>pet.category==='dog');
    const rabbit=pets.filter(pet=>pet.category==='rabbit');
    const fish=pets.filter(pet=>pet.category==='fish');
   
    return (
        <div className="text-center my-9 min-h-96">
          <p className="text-2xl">Please choose any category to see</p>
<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Cats</Tab>
    <Tab>Dogs</Tab>
    <Tab>Rabbits</Tab>
    <Tab>Fish</Tab>
  </TabList>
  <TabPanel>
    <PetCategoryTab pets={cat}></PetCategoryTab>
  </TabPanel>
  <TabPanel>
    <PetCategoryTab pets={dog}></PetCategoryTab>
  </TabPanel>
  <TabPanel>
    <PetCategoryTab pets={rabbit}></PetCategoryTab>
  </TabPanel>
  <TabPanel>
    <PetCategoryTab pets={fish}></PetCategoryTab>
  </TabPanel>
</Tabs>            
        </div>
    );
};

export default PetCategory;