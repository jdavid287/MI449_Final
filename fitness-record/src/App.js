import {useState, useEffect} from 'react';
import {supabase} from './supabaseClient';
import './App.css';

const FitnessData = () => {
  const [fitnessData, setFitnessData] = useState([]);

  useEffect(() => {
    async function fetchFitnessData() {
      try {
        let { data: fitnessData, error } = await supabase
          .from('fitness_data')
          .select('*');

        if (error) {
          console.error('Error fetching fitness data:', error.message);
          return;
        }

        setFitnessData(fitnessData);
      } catch (error) {
        console.error('Error fetching fitness data:', error.message);
      }
    }

    fetchFitnessData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Fitness Data</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Exercise Type</th>
            <th className="px-4 py-2">Weight</th>
            <th className="px-4 py-2">Reps</th>
          </tr>
        </thead>
        <tbody>
          {fitnessData.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2">{item.exercise_type}</td>
              <td className="px-4 py-2">{item.weight}</td>
              <td className="px-4 py-2">{item.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default FitnessData;
