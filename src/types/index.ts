// export types
export interface Project {
	id: string;
	name: string;
	fields: [{ src: string; id: string }];
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
	theme: string;
	imgTheme: string;
}

export enum ProjectFilter {
	ShowAll = 'SHOW_ALL',
	ShowCompleted = 'SHOW_COMPLETED',
	ShowActive = 'SHOW_ACTIVE'
}

export interface SetSection {
	handleSection: (section: string) => void
}