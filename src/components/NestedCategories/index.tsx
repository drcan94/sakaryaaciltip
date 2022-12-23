import React, {useEffect, useRef, useState} from 'react';
import {CategoryType} from "./types";
import {Breadcrumbs,Anchor, Badge, Container, ScrollArea, useMantineTheme} from "@mantine/core";
import {ArrowDownIcon, ArrowUpIcon} from "@radix-ui/react-icons";
import {findChildren} from "./helper";

interface NestedCatProps {
    defaultCategories: CategoryType[],
}

const NestedCategories: React.FC<NestedCatProps> = ({defaultCategories}) => {
    const theme = useMantineTheme()
    const [categories, setCategories] = useState<CategoryType[]>(defaultCategories);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(0);
    const [breadCrumbList, setBreadCrumbList] = useState<Array<number>>([]);
    const [toggledIds, setToggledIds] = useState<Array<number>>([])


    const renderBreadCrumbsList = (parentId) => {
        const parentCategory = categories.find(category => category.id === parentId);
        if (!parentCategory) return [];

        return [...renderBreadCrumbsList(categories.find(category => category.id === parentCategory.parentId)?.id), parentId]
    }

    const items = breadCrumbList.map((currentParentId, index) => {
        const currentParent = categories.find(category => category.parentId === currentParentId)
        const parentCategory = categories.find(category => category.id === currentParent?.parentId);
        return (
            <Anchor
                key={index}
                sx={{
                    color: theme.colorScheme === "dark" ? theme.colors.blue[2] : theme.colors.dark[5],
                    textDecoration: parentCategory?.parentId === selectedCategoryId ? "underline" : "none",
                    cursor: parentCategory?.parentId === selectedCategoryId ? "default" : "pointer"
                }}
                onClick={() => {
                    if (parentCategory?.parentId === selectedCategoryId) return
                    setSelectedCategoryId(parentCategory?.parentId as number);
                    setBreadCrumbList(renderBreadCrumbsList(parentCategory?.parentId))
                    categories.forEach(c => {
                        if (toggledIds.includes(c.id)) {
                            c.isOpen = false
                        }
                    })
                }}>
                {parentCategory?.parentId === 0 ? "Organizmalar" : categories.find(category => category.id === parentCategory?.parentId)?.title}
            </Anchor>
        )

    });




    const toggleCategory = (id: number) => {
        const newCategories = [...categories];
        const category = newCategories.find(category => category.id === id) as CategoryType;
        if (!category) return
        newCategories.forEach(cat => {
            if (cat.parentId === category.parentId && cat.id !== category.id) {
                cat.isOpen = false;
            }
        });
        category.isOpen = !category.isOpen;
        setCategories(newCategories);
    }


    const renderCategories = (parentId: number) => {
        const children = findChildren(parentId, categories);
        if (children.length > 0) {
            return (
                <ul>
                    {children.map(category => {
                        return (
                            <li key={category.id}>
                                <Badge
                                    styles={(theme) => ({
                                        root: {
                                            width: "fit-content",
                                            background: "none",
                                            color: theme.colorScheme === "dark" ? theme.colors.blue[2] : theme.colors.dark[5],
                                            padding: 0,
                                            cursor: findChildren(category.id as number, categories).length !== 0 ? "pointer" : "default",
                                        },
                                        rightSection: {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "flex-start",
                                            paddingBottom: 2,
                                            marginLeft: 3
                                        }
                                    })}
                                    rightSection={
                                        findChildren(category.id as number, categories).length !== 0 && (
                                            !category.isOpen ? <ArrowDownIcon width={12} style={{fontWeight: 500}}/> :
                                                <ArrowUpIcon width={12} style={{fontWeight: 500}}/>
                                        )
                                    }
                                    onClick={() => {
                                        if (findChildren(category.id as number, categories).length === 0) return
                                        setSelectedCategoryId(category.parentId);
                                        setBreadCrumbList([...renderBreadCrumbsList(category.parentId), category.id])
                                        !category.isOpen && !(toggledIds.includes(category.id)) && category.parentId !== 0 && setToggledIds([...toggledIds, category.id])
                                        toggleCategory(category.id)

                                    }}
                                >
                                    {category.title}
                                </Badge>
                                {
                                    category.isOpen && (
                                        <span style={{textIndent: 10}}>
                                            {renderCategories(category.id)}
                                        </span>
                                    )
                                }

                            </li>
                        )
                    })}
                </ul>
            );
        }
    };

    const breadCrumbRef = useRef<HTMLDivElement>(null)

    const scrollToEnd = () => breadCrumbRef.current?.scrollTo({
        left: breadCrumbRef.current.scrollWidth,
        behavior: 'smooth'
    })

    useEffect(() => {
        scrollToEnd()
        console.log("hello")
    }, [breadCrumbList])

    return (
        <Container sx={{marginLeft: 0, width: "90%", marginRight: 0}}>
            <ScrollArea style={{width: "100%", height: 30}} viewportRef={breadCrumbRef}>
                <Breadcrumbs>
                    {items.length !== 0 ? items : (
                        <Anchor sx={{
                            cursor: "default",
                            textDecoration: "underline",
                            color: theme.colorScheme === "dark" ? theme.colors.blue[2] : theme.colors.dark[5]

                        }}

                                component={"span"}
                        >
                            Organizmalar
                        </Anchor>)}
                </Breadcrumbs>
            </ScrollArea>
            {renderCategories(selectedCategoryId as number)}
        </Container>
    );
};

export default NestedCategories;

