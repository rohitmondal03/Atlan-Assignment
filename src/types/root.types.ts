export type TLayout = {
  children: React.ReactNode;
}


export enum DEMO_TYPE_ENUM {
  "text",
  "image",
  "code",
  "combination",
  "audio",
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
  placeholder_text: string;
  rating: number,
  category: CATEGORY_ENUM;
  demo_type: DEMO_TYPE_ENUM;
}