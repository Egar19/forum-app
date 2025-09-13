/* eslint-disable react/prop-types */
import React from 'react';

const colors = [
  'bg-red-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
];

function getColorForName(name) {
  if (!name) return colors[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

const Avatar = ({ username = 'Anonymous' }) => {
  const safeName = String(username || 'Anonymous');
  const initial = safeName.charAt(0).toUpperCase();
  const bgColor = getColorForName(safeName);

  return (
    <div className="flex justify-center">
      <div className="avatar avatar-placeholder">
        <div className={`${bgColor} text-neutral-content w-8 h-8 rounded-full flex items-center justify-center`}>
          <span className="font-bold">{initial}</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
