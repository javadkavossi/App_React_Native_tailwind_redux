export const lightTheme = {
    colors: {
        primary: '#0095F6',
        secondary: '#262626',
        background: '#FAFAFA',
        surface: '#FFFFFF',
        error: '#ED4956',
        success: '#2ECC71',
        warning: '#F39C12',
        text: {
            primary: '#262626',
            secondary: '#8E8E93',
            disabled: '#C7C7CC'
        },
        border: '#E5E5E5',
        card: '#FFFFFF',
        input: '#F0F0F0'
    }
};

export const darkTheme = {
    colors: {
        primary: '#0095F6',
        secondary: '#FFFFFF',
        background: '#000000',
        surface: '#1C1C1E',
        error: '#FF453A',
        success: '#30D158',
        warning: '#FF9F0A',
        text: {
            primary: '#FFFFFF',
            secondary: '#8E8E93',
            disabled: '#3A3A3C'
        },
        border: '#38383A',
        card: '#1C1C1E',
        input: '#2C2C2E'
    }
};

export const getTheme = (isDark = false) => {
    return isDark ? darkTheme : lightTheme;
}; 