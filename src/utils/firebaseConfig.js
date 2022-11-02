import axios from "axios";

const getFirebaseConfig = async () => {
    try {
        const firebaseConfig = await axios.get("https://portfolio-backend-apis.herokuapp.com/firebase-config");
        return firebaseConfig;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getFirebaseConfig;