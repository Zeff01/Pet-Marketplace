import { type Timestamp } from 'firebase/firestore';

export type DocId = string;

export interface PostFeeds {
  user_name: string;
  pet_id: DocId;
  heart_count?: number;
  share_count?: number;
  main_photo: string;
  created_at: Timestamp;
  comment?: DocId;
  comment_count: number;
}
