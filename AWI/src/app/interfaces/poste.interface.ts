import { Espace } from "./espace.interface";
import { PlanningItem } from "./planning-item.interface";


export interface Poste extends PlanningItem {
    espaces: Espace[];
  }