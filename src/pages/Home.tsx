import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UploadForm from '../components/UploadForm';
import MergedList from '../components/MergedList';
import { getMergedPdfs } from '../services/api';
import { MergedPdf } from '../types/pdfTypes';

const Home: React.FC = () => {
    const [mergedPdfs, setMergedPdfs] = useState<MergedPdf[]>([]);

    const fetchMergedPdfs = async () => {
        try {
            const response = await getMergedPdfs();
            setMergedPdfs(response.data);
        } catch (error) {
            console.error('Error fetching merged PDFs:', error);
        }
    };
    useEffect(() => {

        fetchMergedPdfs();
    }, []);

    return (
        <div className='min-h-screen bg-gray-200 flex flex-col items-center relative'>
            <Header />
            <UploadForm onUploadSuccess={fetchMergedPdfs}/>
            <div className='absolute top-120 '>
                <MergedList mergedPdfs={mergedPdfs} />
            </div>
        </div>

    );
};

export default Home;
