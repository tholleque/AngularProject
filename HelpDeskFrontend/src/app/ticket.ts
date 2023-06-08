// To parse this data:
//
//   import { Convert, Ticket } from "./file";
//
//   const ticket = Convert.toTicket(json);

import { Bookmark } from "./bookmark";

export interface Ticket {
    id:          number;
    description: string;
    resolution:  string;
    isClosed:    boolean;
    bookmarks:   any[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toTicket(json: string): Ticket {
        return JSON.parse(json);
    }

    public static ticketToJson(value: Ticket): string {
        return JSON.stringify(value);
    }
}
