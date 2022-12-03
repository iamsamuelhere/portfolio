import axios from "axios";

const getFirebaseConfig = async () => {
    try {
        const firebaseConfig = await axios.get("https://portfolio-service-apis.vercel.app/firebase-config");
        return firebaseConfig;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getFirebaseConfig;
