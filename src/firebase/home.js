import { database } from './firebaseConfig';

import { collection, onSnapshot, getDocs, query, orderBy } from 'firebase/firestore';

async function handleGetAllImage(setAllImg, setIsFetchAllImgLoading) {
	const colRef = collection(database, 'picture_links');

	const getDataQuery = query(colRef, orderBy('updatedOn', 'desc')); // orderBy('name', 'desc || ase')
	setIsFetchAllImgLoading(true);
	onSnapshot(
		colRef,
		async () => {
			await getDocs(getDataQuery)
				.then((snapshot) => {
					let allImgData = [];
					snapshot.docs.forEach((doc) => {
						allImgData.push({
							imgId: doc.id,
							updatedOn: doc.data().updatedOn,
							img_url: doc.data()?.img_url,
							filename: doc.data().filename,
						});
					});
					setIsFetchAllImgLoading(false);
					setAllImg(allImgData);
				})
				.catch((err) => {
					setIsFetchAllImgLoading(false);
					console.log(err.message);
					// handleMsgShown(err.code);
				});
		},
		(err) => {
			setIsFetchAllImgLoading(false);
			console.log(err);
			// handleMsgShown(err.code);
		}
	);
}

export { handleGetAllImage };
