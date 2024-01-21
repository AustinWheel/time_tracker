import axios from 'axios';
import { useAuth, useSession } from '@clerk/clerk-expo'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


async function fetchActivities() {
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const authToken = await getToken();
    console.log(authToken);
    const apiUrl = 'http://localhost:8000/api/activities/';

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        // Handle the response data here
        console.log(response.data);
    } catch (error) {
        // Handle any errors here
        console.error(error);
    }
}

export default fetchActivities;
