import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

// saving new products
export const saveProduct = async (data) => {
    await setDoc(doc(firestore, 'produceSelection', `${Date.now()}`), data, { merge: true });
};

// loadall products
export const loadAllProducts = async () => {
    const items = await getDocs(
        query(collection(firestore, 'produceSelection'), orderBy("id", "desc"))
    );

    return items.docs.map((doc) => doc.data());
};