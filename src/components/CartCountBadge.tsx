// CartCountBadge.tsx

interface CartCountBadgeProps {
  size: string;
  count: number;
}

const CartCountBadge = ({ size, count }: CartCountBadgeProps) => {
  return (
    <span className={`absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs font-semibold px-2 py-1 ${size}`}>
      {count}
    </span>
  );
};

export default CartCountBadge;
