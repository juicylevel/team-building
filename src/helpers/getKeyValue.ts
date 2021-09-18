const getKeyValue = (item: any, field: string) =>
    item[field as keyof typeof item];

export default getKeyValue;
