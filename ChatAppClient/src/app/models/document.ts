export class Document {
  id: string;
  users: string[];
  doc: Doc[];
}
export interface Doc {
  sender: string;
  receiver: string;
  content: string;
  time: string;
  date: string;
}
