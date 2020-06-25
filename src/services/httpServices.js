import firebase from '../firebaseConfig/firebase';

export const makeHttpRequest = async (requestType, collectionName, payload='') => {
    const database = firebase.firestore();

    if(requestType === 'get') {

        return await database
            .collection(`${collectionName}`)
            .get() 
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        data: doc.data(),
                        id: doc.id
                    };
                });
                return data;
            });
    };

    if(requestType === 'post') {
        return await database
            .collection(`${collectionName}`)
            .add(payload)
    };
};