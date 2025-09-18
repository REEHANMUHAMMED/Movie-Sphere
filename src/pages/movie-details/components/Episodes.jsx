/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Play,ChevronDown, ChevronUp } from 'lucide-react';


// Episodes Section
const Episodes = ({ episodes }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [isSeasonDropdownOpen, setIsSeasonDropdownOpen] = useState(false);

  return (
    <div className="px-6 py-8">
      {/* Season Selector */}
      <div className="mb-6">
        <div className="relative inline-block">
          <button
            onClick={() => setIsSeasonDropdownOpen(!isSeasonDropdownOpen)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center"
          >
            Season {selectedSeason}
            {isSeasonDropdownOpen ? (
              <ChevronUp className="h-4 w-4 ml-2" />
            ) : (
              <ChevronDown className="h-4 w-4 ml-2" />
            )}
          </button>
          
          {isSeasonDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-gray-800 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  setSelectedSeason(1);
                  setIsSeasonDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
              >
                Season 1
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Episodes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {episodes.map((episode, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer transition-colors ${
              episode.isActive ? 'bg-red-600' : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center">
              <Play className="h-4 w-4 text-white mr-3" />
              <span className="text-white font-medium">{episode.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes
