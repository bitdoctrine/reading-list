import { useState, useEffect } from 'react';

import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);
  useEffect(() => {
    const ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) =>
        result.push({ id: doc.id, ...doc.data() })
      );

      setDocuments(result);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};
