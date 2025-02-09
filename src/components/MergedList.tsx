import React from 'react';
import { MergedPdf } from '../types/pdfTypes';
import formatDate from '../common/DateFormat';
import frameIcon from '../assets/Frame.png';
import svgCalender from '../assets/Icon calender.png';
import svgDoc from '../assets/Icon doc.png';

interface MergedListProps {
    mergedPdfs: MergedPdf[];
}

const MergedList: React.FC<MergedListProps> = ({ mergedPdfs }) => {

    return (
        <div className='w-[650px]'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-blue-500 font-semibold text-lg'>
                    Merges <span className='bg-gray-300 px-2 py-1 rounded-full text-xs'>{mergedPdfs.length}</span>
                </h2>
                <div className='bg-white px-4 py-2 rounded-lg shadow text-gray-600 text-sm'>
                    Filtro: <span className='text-blue-500 font-medium'>01/09/2024 - 30/09/2024</span> |
                    <span className='text-blue-500 cursor-pointer ml-2'>Hoje</span> -
                    <span className='text-blue-500 cursor-pointer ml-1'>7 dias</span> -
                    <span className='text-blue-500 cursor-pointer ml-1'>30 dias</span>
                </div>
            </div>


            {mergedPdfs.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-16'>
                    <div className='border-2 w-160 text-gray-300'></div>
                    <img src={frameIcon} alt='Nenhum merge encontrado' className='w-16 h-16 mb-4' />
                    <p className='text-lg font-semibold text-gray-700'>Nenhum merge encontrado</p>
                    <p className='text-gray-500 text-sm'>Junte seus PDF's em um único documento</p>
                </div>
            ) : (
                <div className='space-y-3 h-80 overflow-auto'>
                    {mergedPdfs.map((pdf, index) => (
                        <div key={index} className='flex w-full items-center bg-gray-300 p-3 rounded-lg mb-2'>
                            <div className='flex items-center space-x-3'>
                                <img src={svgCalender} alt='Calendar' className='w-6 h-6' />
                                <span className='text-gray-700 w-35'>{formatDate(pdf.createdAt)}</span>
                                <img src={svgDoc} alt='Document' className='w-6 h-6' />
                                <span className='text-gray-700 truncate w-60'>{pdf.name}</span>
                            </div>
                            {pdf.status === 'PENDING' ? (
                                <span className='px-10 text-center text-blue-600 border border-blue-600 border-dashed py-1 rounded-md text-sm'>
                                    Pendente
                                </span>
                            ) : (
                                <button className='bg-blue-500 text-white px-10 py-1 rounded-2xl'>
                                    Download
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MergedList;