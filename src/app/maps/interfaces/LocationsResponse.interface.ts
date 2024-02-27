
export interface LocationsResponse {
	_id?:         string;
	title:       string;
	lngLat:      number[];
	provincia:   string;
	description: string;
	agente:      string;
	telefono: number;
	email: string;
	image: string
	whatsApp?: string;
	facebook?: string;
	twitter?: string;
	instagram?: string;
	driveToLocation?: string;
	webPage?: string;
	__v?:         number;
}
