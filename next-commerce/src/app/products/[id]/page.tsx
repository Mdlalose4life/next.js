import PriceTag from "@/components/priceTag"
import { prisma } from "@/lib/db/prisma"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { title } from "process"
import { cache } from "react"
import AddToCartButton from "./AddToCartButton"

interface ProductsPageProps{
    params: {
        id: string,
    }
}

const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({where: {id}})
    if (!product) notFound();
    return product
})

export async function generateMetadata(
    {params: {id}} : ProductsPageProps
): Promise<Metadata> {
    const product = await getProduct(id);

    return {
        title: product.name + " - NextCommerce",
        description: product.description,
        openGraph: {
            images: [{ url: product.imageUrl }]
        }
    }
}

export default async function ProductPage(
    {params: {id}} : ProductsPageProps
) {
    const product = await getProduct(id);
    return(
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
                priority
            />
            <div>
                <h1 className="text-5xl font-bold">{product.name}</h1>
                    <PriceTag price={product.price} className="mt-4"/>
                    <p className="py-6" >{product.description}</p>
                    <AddToCartButton productId={product.id}/>
            </div>
        </div>
    )
}