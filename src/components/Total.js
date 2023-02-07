import { useSelector } from "react-redux";

function Total() {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalAmount = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalAmount += item.amount;
      totalPrice += item.price * item.amount;
    });
    return { totalAmount, totalPrice };
  };

  return (
    <div className="total">
      <div>Your basket:</div>
      <div className="info">
        <div>
          total ({getTotal().totalAmount} items) : {getTotal().totalPrice}
        </div>
      </div>
    </div>
  );
}

export default Total;
