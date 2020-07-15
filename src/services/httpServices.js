import firebase from '../firebaseConfig/firebase';

export const makeHttpRequest = async (requestType, collectionName, payload='', currentEmail='') => {
    const database = firebase.firestore();

    if(requestType === 'get') {
        const fetchedData = [];

        await database
            .collection(`${collectionName}`)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                fetchedData.push(...data); // array of fetched data
            });

        return fetchedData;
    };

    if(requestType === 'post') {
        await database
            .collection(`${collectionName}`)
            .add(payload)
    };

    if(requestType === 'put') {
        await database
        .collection(`${collectionName}`).where("email", "==", currentEmail)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                doc.ref.update({...payload});
            });
        });
    };
};