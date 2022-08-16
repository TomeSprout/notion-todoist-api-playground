type IdRequest = string | string

type TextRequest = string

type PartialUserObjectResponse = { id: IdRequest; object: "user" }

export type PageObjectResponse = {
  parent:
    | { type: "database_id"; database_id: string }
    | { type: "page_id"; page_id: string }
    | { type: "block_id"; block_id: string }
    | { type: "workspace"; workspace: true }
  properties: Record<string, { id: string }>
  icon:
    | { type: "external"; external: { url: TextRequest } }
    | null
    | { type: "file"; file: { url: string; expiry_time: string } }
    | null
  cover:
    | { type: "external"; external: { url: TextRequest } }
    | null
    | { type: "file"; file: { url: string; expiry_time: string } }
    | null
  created_by: PartialUserObjectResponse
  last_edited_by: PartialUserObjectResponse
  object: "page"
  id: string
  created_time: string
  last_edited_time: string
  archived: boolean
  url: string
}

export type PartialPageObjectResponse = { object: "page"; id: string }