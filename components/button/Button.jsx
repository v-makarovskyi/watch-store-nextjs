export default function Button({ children, className, onClick, isActive }) {
  return (
    <button className={className} onClick={onClick} isActive={isActive}>
      {children}
    </button>
  );
}
