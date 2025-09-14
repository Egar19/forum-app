/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ path, tooltip, icon, label = '', onClick }) => {
  return (
    <li className="hover:bg-transparent">
      {path ? (
        <Link
          to={path}
          className="tooltip tooltip-right text-base w-full flex items-center gap-2"
          data-tip={tooltip}
        >
          <p>{icon}</p>
          <p className="hidden md:block">{label}</p>
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="tooltip tooltip-right text-base w-full flex items-center gap-2"
          data-tip={tooltip}
        >
          <p>{icon}</p>
          <p className="hidden md:block">{label}</p>
        </button>
      )}
    </li>
  );
};

export default MenuItem;
