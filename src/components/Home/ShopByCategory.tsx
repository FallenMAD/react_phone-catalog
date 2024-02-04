import { FC } from 'react';
import { Link } from 'react-router-dom';
import { categoryImages } from '../../helper';
import './ShopByCategory.scss';

type Props = {
  phonesLength: number
};

export const ShopByCategory: FC<Props> = ({ phonesLength }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <section className="shopcategory">
      <div>
        <h1>Shop by category</h1>
      </div>
      <div className="shopcategory__models">
        <Link to="/phones" className="shopcategory__link" onClick={handleClick}>
          <div className="shopcategory__model shopcategory__model--beige">
            <img
              className="shopcategory__img"
              src={categoryImages[0].img}
              alt={categoryImages[0].alt}
            />
          </div>
          <p className="shopcategory__title">Modile phones</p>
          <p className="shopcategory__count">{`${phonesLength} models`}</p>
        </Link>
        <Link to="/tablets" className="shopcategory__link">
          <div className="shopcategory__model shopcategory__model--black">
            <img
              className="shopcategory__img"
              src={categoryImages[1].img}
              alt={categoryImages[1].alt}
            />
          </div>
          <p className="shopcategory__title">Tablets</p>
          <p className="shopcategory__count">0 models</p>
        </Link>
        <Link to="/accesories" className="shopcategory__link">
          <div className="shopcategory__model shopcategory__model--red">
            <img
              className="shopcategory__img shopcategory__img--accessories"
              src={categoryImages[2].img}
              alt={categoryImages[2].alt}
            />
          </div>
          <p className="shopcategory__title">Accessories</p>
          <p className="shopcategory__count">0 models</p>
        </Link>
      </div>
    </section>
  );
};
