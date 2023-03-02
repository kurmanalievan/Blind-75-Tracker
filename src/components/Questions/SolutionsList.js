import {db} from '../../firebase'
import {collection, getDocs} from 'firebase/firestore'

export const plist = []

const fetchPost = async() => {
  await getDocs(collection(db, "sol_list")).then((querySnapshot)=>{
    const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
    plist.push(...newData)
  }
  )
}
fetchPost()
    