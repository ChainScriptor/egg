
export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}
