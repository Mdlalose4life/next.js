import { prisma } from "@/lib/db/prisma"
import { redirect } from "next/navigation";

export const metadata = {
    title: "Add Product - nextcommerce"
  }

  async function AddProduct(formdata: FormData) {
    "use server"
    
    const name = formdata.get("name")?.toString();
    const description = formdata.get("description")?.toString();
    const imageUrl = formdata.get("imageUrl")?.toString();
    const price= Number(formdata.get("price") || 0);


    if (!name || !description || !imageUrl || !price){
        throw Error("Missing required field");
    }

    await prisma.product.create({
        data:{name, description , imageUrl, price}
    })

    redirect("/")
  }
  
export default function AddProductsPage(){
    return(
        <div>
            <h1 className="text-lg mb-3 font-bold"> Add Products </h1>
            <form action={AddProduct}>
                <input
                    required
                    name="name"
                    placeholder="Name"
                    className="mb-3 w-full input input-bordered"
                />
                <textarea
                    required
                    name="description"
                    placeholder="Description"
                    className="textarea textarea-bordered mb-3 w-full"
                />
                <input
                    required
                    name="imageUrl"
                    placeholder="Image URL"
                    type="url"
                    className="mb-3 w-full input input-bordered"
                />
                <input
                    required
                    name="price"
                    placeholder="Price"
                    type="number"
                    className="mb-3 w-full input input-bordered"
                />
                <button type="submit" className="btn btn-primary btn-block"> Add Product </button>
            </form>
        </div>
    )
}