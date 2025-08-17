export default function orderByProps(obj, sort) {
    const order = [];
    for (const key of sort) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            order.push({ key, value: obj[key] });
        }
    }
    const remainingKeys = [];
    for (const key in obj) {
        if (!sort.includes(key)) {
            remainingKeys.push(key);
        }
    }
    remainingKeys.sort();

    for (const key of remainingKeys) {
        order.push({ key, value: obj[key] });
    }
    return order;
}