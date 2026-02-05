'use client';

import dynamic from 'next/dynamic';

const InquiryForm = dynamic(() => import('./InquiryForm'), { ssr: false });

export default InquiryForm;
