import { formatPrice } from "@/lib/format";

interface PriceTagProp{
    price: number,
    className?: string,
}

export default function PriceTag({price, className}: PriceTagProp) {
    return <span className={`badge ${className}`}>{formatPrice(price)}</span>
}