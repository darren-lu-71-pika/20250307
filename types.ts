
export interface GiftCode {
  id: string;
  code: string;
  description: string;
}

export interface Game {
  id: string;
  name: string;
  banner: string;
  description: string;
  codes: GiftCode[];
  accentColor: string;
}

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error';
}
