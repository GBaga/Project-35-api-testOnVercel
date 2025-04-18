// QuantityControl.jsx
export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        -
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease} className="px-2 py-1 bg-gray-200 rounded">
        +
      </button>
    </div>
  );
}
