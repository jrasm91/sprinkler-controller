export interface Zone {
	id: string;
	enabled: boolean;
	running: boolean;
	name: string;
	color: string;
	pin: number;
	relay: number;
	schedule: ZoneSchedule[];
}

export type ZoneCreateDto = Omit<Zone, 'id'>;

export interface ZoneSchedule {
	id: string;
	zoneId: string;
	weekNumber: number;
	wateringDuration: number;
	startTimes: Date[];
}
