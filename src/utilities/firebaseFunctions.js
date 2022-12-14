import { collection, doc, getDocs, orderBy, query, setDoc, updateDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

// saving new products
export const saveProduct = async (data) => {
    await setDoc(doc(firestore, 'produceSelection', `${Date.now()}`), data, { merge: true, });
};

// loadall products
export const getAllProducts = async () => {
    const items = await getDocs(
        query(collection(firestore, 'produceSelection'), orderBy("category", "desc"))
    );

    return items.docs.map((doc) => doc.data());
};

// saving new reservation
export const saveReservation = async (data) => {
    await setDoc(doc(firestore, 'reservationList', `${Date.now()}`), data, { merge: true, });
};

// updating a reservation
export const updateReservation = async (id, status, adminMessage) => {    
    const newFields = {accepted: status, adminComment: adminMessage}
    await updateDoc(doc(firestore, 'reservationList', id), newFields)
};

// load all reservations
export const getAllReservations = async () => {
    const reservationsList = await getDocs(
        query(collection(firestore, 'reservationList'), orderBy("id", "desc"))
    );

    return reservationsList.docs.map((doc) => doc.data());
};