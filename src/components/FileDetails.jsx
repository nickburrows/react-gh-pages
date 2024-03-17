import React from "react";

const FileDetails = props => {
  const { name, size, onClick } = props;

  const fileSize = sizeInBytes => {
    if (sizeInBytes < 1024 * 1024) {
      return (sizeInBytes / 1024).toFixed(2) + " KB"; // 轉換成KB
    } else {
      return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB"; // 轉換成MB
    }
  };

  const currentSize = fileSize(size);
  return (
    <>
      <div className="relative mx-auto w-full max-w-[400px] rounded-xl border border-cyan-50 dark:border-teal-50 bg-white dark:bg-gray-700 p-4 text-sm shadow-lg">
        <button
          type="button"
          className="top-7 absolute right-4 ml-auto text-red-500 dark:text-red-600 hover:text-red-600 dark:hover:text-red-500"
          onClick={onClick}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex space-x-4">
          <div className="flex">
            <span className="material-symbols-outlined text-3xl">draft</span>
          </div>
          <div className="flex-1">
            <div className="pr-3 mb-2">{name}</div>
            <div className="text-gray-600 dark:text-gray-500">
              {currentSize}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileDetails;
