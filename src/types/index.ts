// export types
export interface Project {
	id: number;
	name: string;
	fields: any[];
	client: string;
	timeline: string;
	website: string;
	thumb: any[];
	images: [{ src: string; id: string }];
	icons: [{ src: string; id: string }];
	intro: string;
	desc: string;
	url: string;
	git: string;
	gitUrl: string;
	filtered: boolean;
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
	ShowCompleted = 'SHOW_COMPLETED',
	ShowActive = 'SHOW_ACTIVE'
}

export interface SetSection {
	handleSection: (section: string) => void
}