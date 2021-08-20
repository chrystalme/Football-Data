import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const League = () => {
  const { symbol } = useParams();
  const stock = useSelector((state) => state.stockReducer.stocks
    .filter((stock) => stock.symbol === symbol));

  console.log(stock);
  const {
    image, ceo, description, companyName, mktCap, website,
  } = stock;

  // const dispatch = useDispatch();
  const fetchStock = async () => {

  };
  useEffect(() => {
    fetchStock();
  }, []);
  return (
    <div>
      <img src={image} alt={companyName} />
      <h2>{companyName}</h2>
      <h3>{ceo}</h3>
      <h3>{mktCap}</h3>
      <span>{website}</span>
      <span>{description}</span>
    </div>
  );
};
// League.propTypes = {
//   stock: PropTypes.objectOf.isRequired,
// };

export default League;
