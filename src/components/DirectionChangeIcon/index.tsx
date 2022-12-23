import { Switch, Group,Text } from '@mantine/core';
import React from "react";

const SwitchDirectionButton: React.FC<{rtl:any, changeHandler: () => void}> = ({rtl, changeHandler}) => {
    return (
        <Group position="center" mb={20}>
            <Switch
                checked={rtl}
                onChange={() => changeHandler()}
                size="lg"
                onLabel={<Text size={14} >Sağ</Text>}
                offLabel={<Text size={14} >Sol</Text>}
            />
        </Group>
    );
}
export default SwitchDirectionButton