
import React from 'react';

interface RememberMeToggleProps {
  rememberMe: boolean;
  setRememberMe: (remember: boolean) => void;
}

const RememberMeToggle = ({ rememberMe, setRememberMe }: RememberMeToggleProps) => {
  return (
    <div className="flex items-center">
      <div className="relative inline-block w-9 mr-2 align-middle select-none">
        <input
          id="remember-me"
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          className="absolute opacity-0 w-0 h-0"
        />
        <div className="block bg-gray-200 w-9 h-5 rounded-full cursor-pointer"></div>
        <div className={`absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 ease-in-out ${rememberMe ? 'transform translate-x-4 bg-[#ff4747]' : ''}`}></div>
      </div>
      <label htmlFor="remember-me" className="text-xs text-gray-600 cursor-pointer">
        Remember me
      </label>
    </div>
  );
};

export default RememberMeToggle;
