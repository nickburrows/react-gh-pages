import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import FileDetails from "./components/FileDetails";

function App() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = newFiles => {
    setFiles([...files, ...newFiles]);
  };

  const handleRemoveFile = index => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className="min-h-screen w-full dark:bg-gray-800 dark:text-white">
      <h1 className="font-semibold text-3xl leading-6 mb-4 text-center pt-8">
        React Upload File
      </h1>

      <div className="max-w-[550px] mx-auto mt-8">
        <FileUpload onFileUpload={handleFileUpload} />
        {files.length > 0 && (
          <div>
            <h2>已上傳的檔案:</h2>
            <ul className="w-full space-y-2">
              <li className="flex w-full">
                <FileDetails name={`This is name.`} size={`4.8 MB`} />
              </li>
              {files.map((file, index) => (
                <li key={index}>
                  <FileDetails
                    name={file.name}
                    size={file.size}
                    onClick={() => handleRemoveFile(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
