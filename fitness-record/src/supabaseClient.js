import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zquxlcxmdsuijzrafgkr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdXhsY3htZHN1aWp6cmFmZ2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MTcxMTYsImV4cCI6MjAyOTI5MzExNn0.bo8vdKntIytMdo_RryCpOV_ebW_nPqSUma6VAlO9UOo'

export const supabase = createClient(supabaseUrl, supabaseKey)

const FitnessData = () => {
    const [fitnessData, setFitnessData] = useState([]);
  
    useEffect(() => {
      async function fetchFitnessData() {
        try {
          let { data: fitnessData, error } = await supabase
            .from('mi449final') // Adjusted table name here
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
      <div>
        <h2>Fitness Data</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Exercise Type</th>
              <th>Weight</th>
              <th>Reps</th>
            </tr>
          </thead>
          <tbody>
            {fitnessData.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.exercise_type}</td>
                <td>{item.weight}</td>
                <td>{item.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default FitnessData;