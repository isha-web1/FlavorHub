
import { Link } from 'react-router-dom';
import Cover from '.././shared/Cover';
import MenuItem from '.././shared/MenuItems';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mb-12">
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;