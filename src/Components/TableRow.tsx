import { Link } from 'react-router-dom';
import { Product } from '../Types/product';
import { deleteProduct } from '../API/requestPropducts';

type TableRowProps = {
  product: Product;
  refetch: () => Promise<void> | null;
};

const TableRow = ({product}: TableRowProps) => {
  const { id, title, category, price, image } = product;
  // console.log(product);
  const handleDelete = async (id: number) => {
  const shouldDelete = window.confirm(`Are you want to delete?(Ok/Cancel) ${title}?`);
  
  if (shouldDelete) {
    try {
      await deleteProduct(id);
      console.log('Deleted:', id);
    } catch (error) {
      console.error('Error while deleting:', error);
    }
  }
  }

  return (
    <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
      <td className="p-3">
        <img className='w-[50px] h-[50px]' src={image} alt='' />
      </td>
      <td className="p-3">
        <p>{title}</p>
      </td>
      <td className="p-3">
        <p className="text-gray-400">{category}</p>
      </td>
      <td className="p-3 text-right">
        <p>${price}</p>
      </td>
      <td className="p-3 text-right">
        <Link to={`/${id}`}>
          View
        </Link>
      </td>
      <td className="p-3 text-right">
        <span onClick={() => handleDelete(id)} className="px-3 py-1 font-semibold rounded-md bg-red-400 text-gray-900">
          <span className="capitalize">Delete</span>
        </span>
      </td>
    </tr>
  );
};

export default TableRow;