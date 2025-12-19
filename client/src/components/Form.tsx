import { useState } from "react";
//以下でフォームに入力する項目の型を設定する
type FormData = {
    date: string;
    title: string;
    amount: number;
    paymentMethod: string;
    type: "income" | "expense";
};

type Props = {
    onAdd: (data: FormData) => void;
};

export const Form: React.FC<Props> = ({ onAdd }) => {
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [PaymentMethod, setPaymentMethod] = useState("");
    const [type, setType] = useState<"income" | "expense">("expense");
    
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
        date,
        title,
        amount: Number(amount),
        PaymentMethod,
        type,
    });

    // リセット
    setDate("");
    setTitle("");
    setAmount("");
    setPaymentMethod("");
    setType("expense");
    };
    
    return (
    <form onSubmit={handleSubmit}>
      {/* 日付 */}
    <div>
        <label>日付</label>
        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        />
    </div>

      {/* 内容 */}
    <div>
        <label>内容</label>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
    </div>

      {/* 金額 */}
    <div>
        <label>金額</label>
        <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        required
        />
    </div>

      {/* 金融機関 */}
    <div>
        <label>支払い元</label>
        <select
        value={PaymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        required
        >
            <option value="">選択してください</option>
            <option value="mitsubishi">三菱UFJ</option>
            <option value="mizuho">みずほ</option>
            <option value="smbc">三井住友</option>
            <option value="rakuten">楽天銀行</option>
        </select>
    </div>

      {/* 入出金 */}
    <div>
        <label>入出金</label>
        <select
        value={type}
        onChange={(e) =>
            setType(e.target.value as "income" | "expense")
        }
        >
            <option value="expense">支出</option>
            <option value="income">収入</option>
        </select>
    </div>
    
    <button type="submit">追加</button>
    </form>
    );
};



