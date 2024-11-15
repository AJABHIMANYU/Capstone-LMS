import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ModuleSelect = ({ selectedModules, onChange, modules }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModule = (module) => {
    const newSelection = selectedModules.includes(module)
      ? selectedModules.filter((m) => m !== module)
      : [...selectedModules, module];
    onChange(newSelection);
  };

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
      >
        {selectedModules.length === 0 ? (
          <span className="text-gray-500">Select modules...</span>
        ) : (
          <span className="text-gray-900">
            {selectedModules.length} module{selectedModules.length !== 1 ? 's' : ''} selected
          </span>
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="px-4 py-2 text-sm text-gray-600">Select Modules:</div>
          {modules.map((module) => (
            <div
              key={module}
              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => toggleModule(module)}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="mr-3"
                checked={selectedModules.includes(module)}
                onChange={() => toggleModule(module)}
              />
              <span className="text-gray-900">{module}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleSelect;
