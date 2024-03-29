export interface Project {
  id: number;
  name: string;
  fields: string[];
  type: string[];
  client: string;
  timeline: string;
  website: string;
  thumb: string[];
  images: {src: string; id: string}[];
  icons: {src: string; id: string}[];
  intro: string;
  desc: string;
  url: string;
  git: string;
  gitUrl: string;
  filtered?: boolean;
  onClick?: () => { payload: Project; type: string; };
}

export interface Loading {
  isLoading: boolean;
  isError: boolean;
}

export interface Theme {
  appTheme: string;
  imgTheme: string;
}

export interface Navigation {
  currentSection: string;
  currentProject: number;
}

export enum ProjectFilter {
  ShowAll = 'SHOW_ALL',
  ShowApps = 'APP',
  ShowBranding = 'BRANDING',
  ShowGraphic = 'GRAPHIC',
  ShowMarketing = 'MARKETING',
  ShowWebsites = 'WEBSITE'
}
