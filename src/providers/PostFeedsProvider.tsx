import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { firebaseDb } from '../config';
import { collection, onSnapshot } from 'firebase/firestore';
import { PostFeeds } from '@utils/models/PostFeed';

interface PostFeedContextValue {
  postFeeds: PostFeeds[] | null;
  setPostFeeds: (postFeeds: PostFeeds[] | null) => void;
}

export const PostFeedContext = createContext<PostFeedContextValue>({
  postFeeds: null,
  setPostFeeds: () => {},
});

interface PostFeedProviderProps {
  children: ReactNode;
}

export const PostFeedProvider: React.FC<PostFeedProviderProps> = ({ children }) => {
  const [postFeeds, setPostFeeds] = useState<PostFeeds[] | null>(null);

  useEffect(() => {
    console.log('running Home----------------1', postFeeds);
    const unsubscribe = onSnapshot(collection(firebaseDb, 'post'), querySnapshot => {
      const fetchedPostFeeds: PostFeeds[] = [];
      querySnapshot.forEach(doc => {
        fetchedPostFeeds.push({ ...doc.data(), id: doc.id } as PostFeeds);
      });
      setPostFeeds(fetchedPostFeeds);
    });
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <PostFeedContext.Provider value={{ postFeeds, setPostFeeds }}>
      {children}
    </PostFeedContext.Provider>
  );
};
