interface WeatherCondition {
  location: string;
  temperature: number;
  condition: string;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  humidity: number;
}

interface LakeCondition {
  lake: string;
  waterTemp: number;
  waterLevel: string;
  clarity: string;
  fishActivity: string;
  bestBait: string;
}

interface FishingConditionsProps {
  weather: WeatherCondition[];
  lakeConditions: LakeCondition[];
}

export default function FishingConditions({ weather, lakeConditions }: FishingConditionsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
          <span className="text-2xl">🌡️</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 font-heading">Fishing Conditions</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weather Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">🌤️</span>
            Weather Report
          </h4>
          <div className="space-y-3">
            {weather.map((condition, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-medium text-gray-900">{condition.location}</h5>
                  <span className="text-2xl font-bold text-deep-blue">{condition.temperature}°F</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Condition:</span>
                    <span className="font-medium">{condition.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wind:</span>
                    <span className="font-medium">{condition.windSpeed} mph {condition.windDirection}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pressure:</span>
                    <span className="font-medium">{condition.pressure} inHg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Humidity:</span>
                    <span className="font-medium">{condition.humidity}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lake Conditions Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">🏞️</span>
            Lake Conditions
          </h4>
          <div className="space-y-3">
            {lakeConditions.map((lake, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-medium text-gray-900">{lake.lake}</h5>
                  <span className="text-2xl font-bold text-lake-green">{lake.waterTemp}°F</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Water Level:</span>
                    <span className="font-medium">{lake.waterLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Clarity:</span>
                    <span className="font-medium">{lake.clarity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Activity:</span>
                    <span className="font-medium text-success-green">{lake.fishActivity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Best Bait:</span>
                    <span className="font-medium text-sunset-orange">{lake.bestBait}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fishing Tip */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border border-gray-200">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-lg">💡</span>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-1">Today&apos;s Fishing Tip</h5>
            <p className="text-sm text-gray-700">
              With stable pressure and moderate winds, focus on shallow cover early morning. 
              Try topwater lures in the first two hours after sunrise for the best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
