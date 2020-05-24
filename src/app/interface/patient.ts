import { DiseaseLevel } from '../enum/diseaseLevel';

export interface Patient {
    name: string;
    age: number;
    diseaseLevel: DiseaseLevel;
    colorIssue: number;
}
