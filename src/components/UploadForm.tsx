import React, { useState, ChangeEvent, FormEvent } from 'react';
import { mergePdfs } from '../services/api';

interface UploadProps {
  onUploadSuccess: () => void;
}

const UploadForm: React.FC<UploadProps> = ({ onUploadSuccess }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [pdfName, setPdfName] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!files || !pdfName) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    formData.append('outputFileName', pdfName);

    try {
      const response = await mergePdfs(formData);
      onUploadSuccess();
      setFiles(null);
      setPdfName("");
      console.log(response.data);
    } catch (error) {
      console.error('Error merging PDFs:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center'>
      <div className='absolute top-[180px] w-full max-w-2xl flex flex-col gap-4'>
        
          <div className='border border-white shadow-lg bg-white rounded-lg p-3'>
            <div className='w-full h-[120px] border-2 border-dashed border-blue-200 rounded-lg flex items-center justify-center text-gray-500 text-lg bg-white shadow-lg'>
              <label className='w-full h-[150px] flex items-center justify-center cursor-pointer text-gray-500'>
                  <input
                    type='file'
                    accept='application/pdf,application'
                    multiple
                    onChange={handleFileChange}
                    className='hidden'
                  />
                  {files && files.length > 0 ? (
                  <ul className='text-black text-sm'>
                    {Array.from(files).map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                ) : (
                  'Selecione os PDF’s'
                )}
              </label>
            </div>
          </div>

          <input
            type='text'
            placeholder='Nome do pdf'
            value={pdfName}
            required
            onChange={(e) => setPdfName(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-lg'
          />

          <button className='w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition shadow-lg'>
            Realizar o merge
          </button>
      </div>
    </form>
  );
};

export default UploadForm;