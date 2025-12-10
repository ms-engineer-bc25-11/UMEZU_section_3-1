export type TransactionType = '入金' | '出金';
export type PaymentMethod = '現金' | 'クレジットカード' | 'バーコード決済' | 'A銀行';

export interface Transaction {
    id: number; //ID
    date: string; //日付※ISO文字列にする
    title: string; //内容
    amount: number; //金額　正の整数
    paymentMethod: PaymentMethod; //保有金融機関　型付けしたもの
    type: TransactionType; //入出金　型付けしたもの
    category?: string;
    memo?: string
}