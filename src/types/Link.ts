export type Link = {
    displayName: string;
    smc:string;
} & (LinkWithEmail | LinkWithUrl)

export type LinkWithUrl = {
    isUrl: true;
    url: string;
}

export type LinkWithEmail= {
    isUrl: false;
    email: string;
}