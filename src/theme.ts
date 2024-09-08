export const generateTheme = (mode: string) => ({
    color: {
        blue: '#0096FF',
        font1: mode === 'light' ? 'black' : 'white',
        font2: mode === 'light' ? '#808080' : 'gray',
        base1: mode === 'light' ? '#F7F8F9' : '#121212',
        base2: mode === 'light' ? '#DCDFE4' : '#2D2D2D',
        base3: mode === 'light' ? '#091E4208' : '#272727',
        base4: mode === 'light' ? '#F1F2F4' : '#343434',
        base5: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
        base6: mode === 'light' ? '#091E420F' : '#222222',
        base7: mode === 'light' ? '#091E4224' : '#1F1F1F',
    },
});
  