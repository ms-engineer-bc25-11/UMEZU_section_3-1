import { Transaction } from '../types';

type Props = {
    transaction: Transaction;
};

export const TransactionRow = ({ transaction }: Props) => {
    return (
        <div>
            <span>{transaction.id}</span> |{' '}
            <span>{transaction.date}</span> |{' '}
            <span>{transaction.title}</span> |{' '}
            <span>{transaction.amount}円</span> |{' '}
            <span>{transaction.paymentMethod}</span> |{' '}
            <span>{transaction.type}</span>
        </div>
    );
};