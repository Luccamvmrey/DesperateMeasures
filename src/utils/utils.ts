export const getFormattedValue = (value: number) => {
    if (value < 1000) {
        return value.toFixed(1);
    } else if (value < 1000000) {
        return (value / 1000).toFixed(1) + "K";
    } else if (value < 1000000000) {
        return (value / 1000000).toFixed(1) + "M";
    } else if (value < 1000000000000) {
        return (value / 1000000000).toFixed(1) + "B";
    }
}