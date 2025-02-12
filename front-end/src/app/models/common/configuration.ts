export interface Configuration {
    ApiSettings: ApiSetting
}

export interface ApiSetting {
    BaseUrl?: string
    Resources?: Resource[]
}

export interface Resource{
    Id?: string,
    Route?: string,
    ResourceName?: string,
    Actions?: Action[]
}

export interface Action{
    Id?: string,
    Route?: string,
    Method?: string,
    IsAuthorize?: boolean,
    HasPayload?: boolean
}