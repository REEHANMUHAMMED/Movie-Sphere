import 'lucide-react';

const Recommendation = ({ recommendations }) => {
  return (
    <div className="px-6 py-8">
      <h2 className="text-white text-xl font-bold mb-6">You may also like</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {recommendations.map((item, index) => (
          <div key={index} className="relative group cursor-pointer"  style={{ backgroundImage: item.poster ? `url(${item.poster})` : undefined }}> 
            <div className="relative overflow-hidden rounded-lg">
              <div className="h-64 flex items-center justify-center">
                <div className="text-red-400 text-center">
                  <div className="text-xl font-bold mb-2">{item.title}</div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
             
              </div>
              
              <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                {item.imdbRating}
              </div>
              
              <div className="absolute top-2 right-2 bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                {item.year}
              </div>
            </div>
            
            <div className="mt-2">
              <h3 className="text-white font-medium text-sm">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Recommendation
