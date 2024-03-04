import { type Timestamp } from 'firebase/firestore';

export type DocId = string;

export interface PostFeeds {
  id: string;
  caption?: string;
  displayName?: string;
  comment_count: number;
  comment?: DocId;
  created_at: Timestamp;
  heart_count?: number;
  main_photo: string;
  pet_id: DocId;
  share_count?: number;
  user_name: string;
}
