import { useLoaderData } from "react-router-dom";
import { Product } from "../../Types/product";

const Productsdescription = () => {
    const {title, price, image, description}  = useLoaderData() as Product;
    return (
        <section className="flex justify-center items-baseline mt-10">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className=" w-full rounded-t-lg h-96  md:w-80 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$ {price}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
        </div>
        </section>
    );
};

export default Productsdescription;