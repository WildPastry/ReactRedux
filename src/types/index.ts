// export types
export interface ProjectItem {
	id: number;
	name: string;
	fields: any[];
	type: any[];
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
  onClick: () => any;
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

export interface SetSection {
	handleSection: (section: string) => void;
}

interface Set<T> {
	add(value: T): Set<T>;
	clear(): void;
	delete(value: T): boolean;
	entries(): Array<[T, T]>;
	forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;
	has(value: T): boolean;
	keys(): Array<T>;
	size: number;
}

interface SetConstructor {
	new <T>(): Set<T>;
	new <T>(iterable: Array<T>): Set<T>;
	prototype: Set<any>;
}

declare var Set: SetConstructor;
