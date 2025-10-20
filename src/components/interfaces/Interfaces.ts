
export interface IPlan {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  priceRange: string;
  isActive: boolean;
  createdBy?: { id: string; name: string };
};

export interface IUser {
  id: string,
  name: string;
  email: string;
  role:string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string
}


export interface ICreateInquiry {
  name: string;
  email: string;
  phone?: string;
  message: string;
  selectedPlan: string,
  
}

export interface IInquiry extends ICreateInquiry {
  id: string;
  responded: boolean;
  createdAt: string;
}

export interface ICreateProject {
  title: string;
  description: string;
  category: string;
}

export interface IProject extends ICreateProject {
  id: string;
  isVisible: boolean;
  images?: IImage[];
  videos?: IVideo[];
  createdBy: {
    id: string;
    name: string;
  }
}
export interface IImage {
  id: string;
  url: string;
  isActive: boolean
}
export interface IVideo {
  id: string;
  url: string;
  isActive: boolean
}
