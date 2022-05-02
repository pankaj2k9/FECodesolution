export interface Country {
   name: CountryName;
   flags: CountryFlags;
   capital: string[];
   population: number;
   region: string;
   subregion: string;
   tld: string[];
   cioc: string;
   languages: {
       [key: string]: string;
   }
   currencies: {
       [key: string]: {
           name: string;
           symbol: string;
       }
   }
   borders?: string[];

}

export interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [key:string]: {
            official: string;
            common: string;
        }
    }
 }
 export interface CountryFlags {
    png: string;
    svg: string;
 }