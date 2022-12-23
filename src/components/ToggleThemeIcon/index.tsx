import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import React from "react";

const SwitchThemeButton: React.FC<{disabled?: boolean}> = ({disabled}) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    return (
        <Group position="center" mb={20}>
            <Switch
                disabled={disabled}
                checked={colorScheme === 'dark'}
                onChange={() => toggleColorScheme()}
                size="lg"
                onLabel={<IconSun color={theme.white} size={20} stroke={2} />}
                offLabel={<IconMoonStars color={theme.colors.gray[7]} size={20} stroke={2} />}
            />
        </Group>
    );
}

export default SwitchThemeButton