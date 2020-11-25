/**
 * CHANNELS
 */

export interface ChannelsListModel {
  [index: number]: {
    update_time: number | null;
    code: string | null;
    description: string | null;
    webhook: string | null;
    webhook_for_puppeteer: string | null;
    key: string | null;
    id: number | null;
    name: string | null;
    channel_name: string | null;
    mid: string | null;
    channel_id: string | null;
    secret: string | null;
    token: string | null;
  };
}

export interface GetChannelsResponseModel {
  data: ChannelsModel | null | [];
  message: string | null;
  code: number | null;
  error: string | null;
}

export interface ChannelsModel {
  puppeteer_channels: ChannelsListModel | [];
  pagination: object | null;
}

/**
 * CHANNEL TYPES
 */

export interface ChannelsTypeListModel {
  [index: number]: {
    update_time: number | null;
    code: string | null;
    id: number | null;
    name: string | null;
  };
}

export interface GetChannelsTypeResponseModel {
  data: ChannelsModel | null | [];
  message: string | null;
  code: number | null;
  error: string | null;
}

export interface ChannelsTypeModel {
  channels: ChannelsTypeListModel | [];
  pagination: object | null;
}
