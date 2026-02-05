export interface InquiryPayload {
  name: string;
  country: string;
  telephone_code: string;
  phone: string;
  email: string;
  message: string;
}

export interface InquiryFormState extends InquiryPayload {
  agreement: boolean;
  captchaToken: string;
}

export interface ConsultationPayload {
  name: string;
  phone: string;
  email: string;
}

export interface AuthorPayload {
  name: string;
  interest:
    | 'Formation (GmbH/AG)'
    | 'Crypto/FinTech'
    | 'Tax Consultation'
    | 'Other';
  phone: string;
  email: string;
  message: string;
}

// форма для сторінки VerifyCompanyName

export interface VerifyCompanyNameFormType {
  companyName1: string;
  companyName2?: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
}

// форма для сторінки TaxCalculator

export interface TaxCalculatorFormType {
  country: string;
  taxableAmount?: string;
  name: string;
  phone: string;
  email: string;
}

// форма для сторінки CompanyFormationOnline

export type ContactPersonData = {
  fullName: string;
  company: string;
  street: string;
  zip: string;
  city: string;
  phone: string;
  fax: string;
  mobile: string;
  email: string;
  website: string;
  iFound: string[];
  other: string;
  documents: Record<string, boolean>;
};

export type CompanyDomicileData = {
  desiredCompanyName: string;
  addressText: string;
  street: string;
  zip: string;
  city: string;
  needBusinessAddress: boolean;
  objective: string;
};

export type ShareholderData = {
  companyName: string;
  firstName: string;
  lastName: string;
  street: string;
  zip: string;
  country: string;
  dateShare: string;
  nationality: string;
  profession: string;
  shareAmount: string;
  commercialRegister: string;
  commercialRegisterNo: string;
};

export type ManagingDirectorData = {
  firstName: string;
  lastName: string;
  street: string;
  zip: string;
  country: string;
  managingDate: string;
  nationality: string;
  profession: string;
  additionalInfo: string;
};

export type AppointmentInfoData = {
  notary: string;
  time: string;
  office: string;
  street: string;
  zip: string;
  phone: string;
  fax: string;
  email?: string;
  file?: File | null;
};

export type FormData = {
  contactPerson: ContactPersonData;
  companyDomicile: CompanyDomicileData;
  shareholder: ShareholderData;
  managingDirector: ManagingDirectorData;
  appointmentInfo: AppointmentInfoData;
};
