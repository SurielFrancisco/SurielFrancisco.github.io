export class WorkExperienceModel {
    id?: string;
    startDate?: string = 'mm-yyyy';
    endDate?: string = 'mm-yyyy';
    location?: string = 'City, Country';
    position?: string = 'my position';
    company?: string = 'my company';
    acomplishments?: string = 'item 1, item 2, item n';
    acomplishmentsArray?: string[] = [];
}
