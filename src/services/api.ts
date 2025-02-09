import axios from 'axios';
import { MergedPdf } from '../types/pdfTypes';

const api = axios.create({
    baseURL: 'http://localhost:8080', // ENV
});

export const mergePdfs = (formData: FormData) => api.post<MergedPdf>('/api/pdf/merge', formData);
export const getMergedPdfs = () => api.get<MergedPdf[]>('/api/pdf/history');

export default api;