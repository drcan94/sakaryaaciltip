import React, {Dispatch, SetStateAction} from "react";
import {CategoryType} from "../NestedCategories/types";
import {Text, useMantineTheme} from "@mantine/core";
import {findChildren} from "../NestedCategories/helper";


type CustomBreadCrumbsProps = {
    selectedCategoryId: number,
    setSelectedCategoryId: Dispatch<SetStateAction<number | null>>,
    parentId?: number,
    categories: CategoryType[]
}
const BreadCrumbComponent: React.FC<CustomBreadCrumbsProps> = ({
                                                                   selectedCategoryId,
                                                                   setSelectedCategoryId,
                                                                   parentId,
                                                                   categories
                                                               }) => {
    // ParentId'sine göre parent kategoriyi bulun
    const parentCategory = categories.find(category => category.id === parentId);
    const theme = useMantineTheme()
    // Eğer parent kategori yoksa, breadcrumb'ı render etme
    if (!parentCategory) return null



    return (
        <React.Fragment>
            <BreadCrumbComponent
                selectedCategoryId={selectedCategoryId}
                setSelectedCategoryId={setSelectedCategoryId}
                parentId={parentCategory.parentId}
                categories={categories}
            />
            <Text sx={{
                display: "inline",
                margin: parentCategory.parentId === 0 ? "0 5px 0 0" : "5px",
                width: "fit-content",
                color: theme.colors.blue[6],
                cursor: "pointer"
            }} onClick={() => {
                setSelectedCategoryId(parentCategory.parentId);
                findChildren(parentCategory.id, categories).forEach((c) => {
                    c.isOpen = false
                })
            }}>
                {parentCategory.parentId === 0 ? "Ana Dizin" : categories.find(category => category.id === parentCategory.parentId)?.title}
            </Text>
            <Text
                sx={{
                    display: "inline",
                    minWidth: "fit-content",
                    color: theme.colors.blue[6],
                }}
            >
                {"→"}
            </Text>
            {selectedCategoryId === parentId && (
                <Text sx={{
                    display: "inline",
                    margin: "0 0 0 5px",
                    color: theme.colors.blue[6],
                    textDecoration: "underline",

                }}>{categories.find(category => category.id === selectedCategoryId)?.title}</Text>
            )}
        </React.Fragment>
    )
};

export default BreadCrumbComponent