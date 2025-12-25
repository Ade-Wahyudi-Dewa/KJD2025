
export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string;
  difficulty: 'Pemula' | 'Menengah' | 'Lanjut';
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
  groundingLinks?: { title: string; uri: string }[];
  isThinking?: boolean;
}

export interface BusinessInsight {
  title: string;
  summary: string;
  links: { title: string; uri: string }[];
}
