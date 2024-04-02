export type TLayout = {
  children: React.ReactNode;
}


export enum DEMO_ENUM {
  "text",
  "image",
  "code",
  "combination",
}

export enum CATEGORY_ENUM {
  "Text & Language",
  "Code-based",
  "Computer Vision",
  "Audio & Speech",
  "Generative Models",
}

export type TModelData= {
  id: number;
  name: string;
  description: string;
  placeholder: string;
  category: CATEGORY_ENUM;
  demo_type: DEMO_ENUM;
}