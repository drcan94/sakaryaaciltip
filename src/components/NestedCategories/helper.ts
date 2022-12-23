import {CategoryType} from "./types";

export const findChildren = (parentId: number, defaultCategories: CategoryType[]) => {
    return defaultCategories.filter(category => category.parentId === parentId);
}