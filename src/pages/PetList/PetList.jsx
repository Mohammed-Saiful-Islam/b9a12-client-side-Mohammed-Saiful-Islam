import { useState } from "react";
import { Helmet } from "react-helmet-async";
import usePetList from "../../hooks/usePetList";
import PetDetails from "./PetDetails";

const PetList = () => {
  const [pets] = usePetList(); // Assuming usePetList returns an array of pets
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filtering logic based on search term and selected category
  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || pet.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 lg:py-32 flex flex-col items-center text-center">
      <Helmet>
        <title>Pet Adoption | Pet List</title>
      </Helmet>
      <div className="mb-4 flex items-center flex-col-reverse gap-6  sm:flex-row">
        <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md mr-2"
        />
        </div>
        <div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="rabbit">Rabbit</option>
          <option value="fish">Fish</option>
          {/* Add more options for other categories */}
        </select>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Total Pets in the List by the Search or the Category: {filteredPets.length}</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredPets.map((pet) => (
          <PetDetails key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;



