import QuantityControl from "./QuantityControl";

export default function CartItem({ item, onUpdate, onRemove }) {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h4 className="font-medium">{item.product.name}</h4>
        <p className="text-sm text-gray-500">
          ${item.product.price} x {item.quantity}
        </p>
      </div>
      <QuantityControl
        quantity={item.quantity}
        onIncrease={() => onUpdate(item.product._id, item.quantity + 1)}
        onDecrease={() => onUpdate(item.product._id, item.quantity - 1)}
      />
      <button
        onClick={() => onRemove(item.product._id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
}
