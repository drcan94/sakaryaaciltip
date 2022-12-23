
export interface StaffLabelProps {
    label: string;
    image: string;
    description: string;
}

export interface StaffDataProps extends StaffLabelProps {
    id: number,
    content: string,
}