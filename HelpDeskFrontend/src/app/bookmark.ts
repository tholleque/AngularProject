// To parse this data:
//
//   import { Convert, Bookmark } from "./file";
//
//   const bookmark = Convert.toBookmark(json);

export interface Bookmark {
    id:       number;
    userId:   number;
    ticketId: number;
    ticket:   null;
    user:     null;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toBookmark(json: string): Bookmark {
        return JSON.parse(json);
    }

    public static bookmarkToJson(value: Bookmark): string {
        return JSON.stringify(value);
    }
}