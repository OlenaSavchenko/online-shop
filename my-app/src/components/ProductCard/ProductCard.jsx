import Button from "../Button/Button";
import PropTypes from 'prop-types';
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { product, favourites, onAddBtnClick, onSelectBtnClick, onDeleteBtnClick, status } = props
  const { name, item, color, price, url, id } = product;
  const selected = favourites.some(item => item === id)
  
  return (
    <li className="products-item">
      {status === "inCart"
        ? <Button
          className="products-item__btn"
          text={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          }
          backgroundColor="#b93b3b"
          onClick={() => onDeleteBtnClick(id)}
          type="button"
        />
        : <Button
          className="products-item__btn"
          text={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          }
          backgroundColor="#4CAF50"
          onClick={() => onAddBtnClick(id)}
          type="button"
        />
      }

      <div className="products-item__img-box">
        <img
          src={url}
          alt={`${name} ${item}`}
          title={`${name} ${item}`}
          aria-label={`${name} ${item}`}
          className="products-item__img"
        />
      </div>
      <h3>{`${name} ${item}`}</h3>
      <p className="products-item__tag products-item__tag--color">
        Color: {color}
      </p>
      <p className="products-item__tag">Price: {price} UAH</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        onClick={() => onSelectBtnClick(id)}
        fill={selected || status === 'favourite' ? "red" : "currentColor"}
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
      </svg>
    </li>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    item: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
  onAddBtnClick: PropTypes.func,
  onSelectBtnClick: PropTypes.func,
  onDeleteBtnClick: PropTypes.func,
  status: PropTypes.string,
  favourites: PropTypes.array
}

ProductCard.defaultProps = {
  item: "ask information in the shop",
  color: "ask information in the shop",
  url: "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
  status: null,
  favourites: [],
  onClick: () => { },
  onAddBtnClick: () => { },
  onDeleteBtnClick: () => { }

}

export default ProductCard