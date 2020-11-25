/**
 * Audiences
 */

export interface AudiencesListModel {
  [index: number]: {
    province: string | null;
    city: number | null;
    puppeteer_id: number | null;
    ses: string | null;
    name: string | null;
    area: string | null;
    subdistrict: string | null;
    instagram_profile: string | null;
    birthdate: string | null;
    email: string | null;
    twitter_profile: string | null;
    line_id: string | null;
    postal_code: string | null;
    mobile_no: string | null;
    facebook_profile: string | null;
    address: string | null;
    telegram_id: string | null;
    update_time: string | null;
    sex: string | null;
    id: string | null;
  };
}

export interface AudiencesListPaginationModel {
  total: number;
  total_page: number;
  current_page: number;
}

export interface GetAudiencesResponseModel {
  data: AudiencesModel | null | [];
  message: string | null;
  code: number | null;
  error: string | null;
}

export interface AudiencesModel {
  audiences: AudiencesListModel | [];
  pagination: AudiencesListPaginationModel | null;
  fields: [];
}
