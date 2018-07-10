export interface AmiiboResponse {
    amiibo: Amiibo[];
}

export interface Amiibo {
    amiiboSeries: string; // The series the amiibo belongs to.
    character: string; // The character of the amiibo, multiple character have different amiibo design.
    gameSeries: string; // The game series of the amiibo.
    head: string; // The 1st 8 value of the hexadecimal to recognize the amiibo. Note: 0-7 value in the hexadecimal
    image: string; // The image link of the amiibo.
    name: string; // The name of the amiibo.
    release?: ReleaseDates; // The release date for North America, Japan, Europe and Australia. Date Format: yyyy-mm-dd
    tail: string; // The next 8 value of the hexadecimal to recognize the amiibo. Note: 8-15 value in the hexadecimal
    type: AmiiboType; // The type it belongs to. Example: card, figure and yarn
}

export interface ReleaseDates {
    au?: string;
    eu?: string;
    jp?: string;
    na?: string;
}

enum AmiiboType {
    Card = 'card',
    Figure = 'figure',
    Yarn = 'yarn'
}

export function getId(amiibo: Amiibo): string {
    return amiibo.head + '-' + amiibo.tail;
}


