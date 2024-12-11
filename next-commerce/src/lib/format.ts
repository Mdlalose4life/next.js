export function formatPrice(price: number) {
    return (price / 100).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
    });
}
