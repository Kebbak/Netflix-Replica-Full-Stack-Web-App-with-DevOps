// src/components/QuickLinkCard.js
import { Link } from 'react-router-dom';

export default function QuickLinkCard({ to, label, tag }) {
  return (
    <Link
      to={to}
      className="flex justify-between items-center p-4 bg-[#1f1f1f] hover:bg-[#2c2c2c] rounded text-white"
    >
      <span>{label}</span>
      {tag && (
        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
          {tag}
        </span>
      )}
    </Link>
  );
}