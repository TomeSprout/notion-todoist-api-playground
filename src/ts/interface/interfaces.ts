import {
  PageObjectResponse,
  PartialPageObjectResponse,
  GetPagePropertyResponse
} from "../type/types";

interface NotionTasksPayload {
  [index: number]: {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: { object: string; id: string; };
    last_edited_by: { object: string; id: string; };
    cover?: { type: string; external: { url: string; } } | null;
    icon?: { type: string; external: { url: string; } } | null;
    parent: { type: string; database_id: string; };
    archived: boolean;
    properties: { Desc: { id: string; }; Date: { id: string; }; Task: { id: string; } };
    url: string;
    is_inline?: boolean;
  }
}

interface PropertyItem {
  object: string;
  type: string;
  id: string;
  rich_text: {
    type: string;
    text: {};
    annotations?: {};
    plain_text: string;
    href?: null
  }
}

export interface Cursor {
  cursor: string | null | undefined;
}

export interface NotionQuery {
  results: (PageObjectResponse | PartialPageObjectResponse)[];
  next_cursor: string | null | undefined;
}

interface PromiseComplete {
  notion(): Promise<
    Array<{ pageId: string; task: string; description: string; dueDate: object | string }>
  >;
}

export interface PropertyValue {
  pageId: string;
  propertyId: string;
}

export interface GetPagePropertyResponseInterface {
  propertyItem: GetPagePropertyResponse;
}

// interface PromisePayload {
//   getPropertyValue({
//     pageId,
//     propertyId,
//   }: PropertyValue): Promise<PropertyItemObject | Array<PropertyItemObject>>;
// }