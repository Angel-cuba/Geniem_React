export interface IList {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

export interface ReadAll {
	ReadList: (list: IList) => void;
}
