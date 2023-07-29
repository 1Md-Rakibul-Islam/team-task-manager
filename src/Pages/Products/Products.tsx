import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../API/requestPropducts';
import { Product } from '../../Types/product';
import TableRow from '../../Components/TableRow';

const Products = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await getProducts()
            return data;
        },
    });

    // Function to handle refetch without returning anything (void)
    const handleRefetch = async () => {
        await refetch();
    };

    if (isLoading) {
        return <div>Loading.....</div>
    }

    return (
        <section className='px-5'>
            <div className="shadow-md sm:rounded-lg my-10">
                <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                    <div className="overflow-x-auto">
                        <table className=" md:max-w-6xl w-full text-xs mx-auto">
                            <thead className="bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Invoice </th>
                                    <th className="p-3">Product Name</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3 text-right">Price</th>
                                    <th className="p-3 text-right">Details</th>
                                    <th className="p-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.map((product: Product) => <TableRow
                                        key={product?.id}
                                        product={product}
                                        refetch={handleRefetch}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;