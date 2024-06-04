import { FC } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { ICartPhone } from '../../types';
import {
  decrementPhoneQauntity,
  incrementPhoneQauntity,
  removePhoneFromCart,
} from '../../features/cartSlices/cartSlice';
import { formatter } from '../../helper';
import { DeleteIcon, MinusIcon, PlusIcon } from '../../icons';

import './CartItem.scss';
import { BASE_URL_PHOTO } from '../../helper/BASE_URL';

type Props = {
  phone: ICartPhone;
};

export const CartItem: FC<Props> = ({ phone }) => {
  const {
    name,
    image,
    itemId,
    quantity,
    price,
  } = phone;

  const dispatch = useAppDispatch();

  const handleIncrementQuantity = () => {
    dispatch(incrementPhoneQauntity(phone));
  };

  const handleDecrementQuantity = () => {
    dispatch(decrementPhoneQauntity(itemId));
  };

  const handleRemovePhoneFromCart = () => {
    dispatch(removePhoneFromCart(itemId));
  };

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__wrapper">
          <button
            className="cartItem__remove"
            data-cy="cartDeleteButton"
            onClick={handleRemovePhoneFromCart}
            type="button"
          >
            <DeleteIcon />
          </button>
          <div className="cartItem__imgWrapper">
            <img
              src={`${BASE_URL_PHOTO}/${image}`}
              alt="Phone"
              className="cartItem__image"
            />
          </div>
          <p className="cartItem__title">{`${name} (iMT9G2FS/A)`}</p>
        </div>
        <div className="cartItem__wrapper cartItem__wrapper--bottom">
          <div className="cartItem__buttons">
            <button
              data-cy="productQauntity"
              className="cartItem__button"
              onClick={handleDecrementQuantity}
              type="button"
            >
              <MinusIcon />
            </button>
            <p className="cartItem__quantity">{quantity}</p>
            <button
              data-cy="productQauntity"
              className="cartItem__button cartItem__button--right"
              onClick={handleIncrementQuantity}
              type="button"
            >
              <PlusIcon />
            </button>
          </div>
          <p className="cartItem__price">{formatter.format(price)}</p>
        </div>
      </div>
    </>
  );
};
