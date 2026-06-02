import React, { useEffect, useMemo, useState } from 'react';

const Icons = {
  Dashboard: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Transactions: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  Analytics: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Goals: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Bell: () => (
    <svg className="w-6 h-6 text-[#78dc77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Wallet: () => (
    <svg className="w-16 h-16 text-[#353534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  ChevronRight: () => (
    <svg className="w-5 h-5 text-[#becab9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  ),
  Trash: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  Edit: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-6 h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v12m6-6H6" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5 text-[#becab9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
};

const categoryEmojis: Record<string, string> = {
  Food: '🍔',
  Transport: '🚌',
  Shopping: '🛒',
  College: '📚',
  Entertainment: '🎬',
  Gadgets: '💻',
  Swiggy: '🛵',
  Salary: '💼',
  Freelance: '💵',
  Investment: '📈',
  Other: '🏷️',
};

const chartColors = ['#78dc77', '#ff6b67', '#becab9', '#ffd966', '#a4c2f4', '#c5a5fd', '#f9cb9c'];
const tabItems = [
  { id: 'dashboard', Icon: Icons.Dashboard, label: 'Dashboard' },
  { id: 'transactions', Icon: Icons.Transactions, label: 'Transactions' },
  { id: 'analytics', Icon: Icons.Analytics, label: 'Analytics' },
  { id: 'goals', Icon: Icons.Goals, label: 'Goals' },
  { id: 'settings', Icon: Icons.Settings, label: 'Settings' },
];
const txGroups = [
  { name: 'Expenses', type: 'expense' },
  { name: 'Incomes', type: 'income' },
];
const fmt = (value: number | string) => `₹${Number(value || 0).toLocaleString()}`;

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [transactions, setTransactions] = useState<Array<Record<string, any>>>([]);
  const [goals, setGoals] = useState<Array<Record<string, any>>>([]);
  const [budgetLimit, setBudgetLimit] = useState(5000);
  const [categories, setCategories] = useState(['Food', 'Transport', 'Shopping', 'College', 'Entertainment', 'Gadgets', 'Swiggy']);
  const [startingBalance, setStartingBalance] = useState(0);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [newBalanceInput, setNewBalanceInput] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [addModalType, setAddModalType] = useState('expense');
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTx, setSelectedTx] = useState<Record<string, any> | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [selectedDayIndex, setSelectedDayIndex] = useState(Math.min(29, new Date().getDate() - 1));
  const [selectedDonutCategory, setSelectedDonutCategory] = useState('');
  const [txForm, setTxForm] = useState({
    id: '',
    title: '',
    category: 'Food',
    amount: '',
    type: 'expense',
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
  });
  const [goalForm, setGoalForm] = useState({ id: '', name: '', category: 'General', target: '', current: '' });
  const [fundingAmount, setFundingAmount] = useState('');
  const [fundingGoalId, setFundingGoalId] = useState<string | null>(null);
  const glassClass = 'bg-[#1e1e1e]/60 backdrop-blur-lg border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.55)]';

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const metrics = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const categoryTotals: Record<string, number> = {};
    const totals = transactions.reduce(
      (acc, { type, amount, category, date }) => {
        const amt = Number(amount) || 0;
        if (type === 'income') acc.income += amt;
        else {
          acc.expense += amt;
          if (date === today) acc.today += amt;
          categoryTotals[category] = (categoryTotals[category] || 0) + amt;
        }
        return acc;
      },
      { income: 0, expense: 0, today: 0 }
    );

    return {
      balance: startingBalance + totals.income - totals.expense,
      todaySpending: totals.today,
      incomeSum: totals.income,
      expenseSum: totals.expense,
      categoryTotals,
      totalExpenseAggregate: Object.values(categoryTotals).reduce((a, b) => a + b, 0),
    };
  }, [transactions, startingBalance]);

  const juneDailyExpenses = useMemo(() => {
    const daily = Array.from({ length: 30 }, () => 0);
    transactions.forEach(({ type, date, amount }) => {
      if (type === 'expense' && date?.startsWith('2026-06-')) {
        daily[Number(date.slice(8, 10)) - 1] += Number(amount) || 0;
      }
    });
    return daily;
  }, [transactions]);

  useEffect(() => {
    const keys = Object.keys(metrics.categoryTotals);
    if (!keys.includes(selectedDonutCategory)) setSelectedDonutCategory(keys[0] || '');
  }, [metrics.categoryTotals, selectedDonutCategory]);

  const resetTxForm = () => {
    setTxForm({ id: '', title: '', category: 'Food', amount: '', type: 'expense', date: new Date().toISOString().split('T')[0], time: '12:00 PM' });
  };

  const handleSaveTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!txForm.title || !txForm.amount) {
      triggerToast('Please fill out all fields.');
      return;
    }
    const payload = {
      id: txForm.id || `tx-${Date.now()}`,
      title: txForm.title,
      category: txForm.category,
      amount: parseFloat(txForm.amount),
      type: txForm.type,
      date: txForm.date || new Date().toISOString().split('T')[0],
      time: txForm.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    if (txForm.id) {
      setTransactions((prev) => prev.map((t) => (t.id === txForm.id ? payload : t)));
      triggerToast('Transaction updated successfully');
    } else {
      setTransactions((prev) => [payload, ...prev]);
      triggerToast('Transaction added successfully');
    }
    setShowAddModal(false);
    resetTxForm();
  };

  const handleEditTransaction = (tx: Record<string, any>) => {
    setTxForm(tx);
    setAddModalType(tx.type);
    setShowDetailModal(false);
    setShowAddModal(true);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    setShowDetailModal(false);
    triggerToast('Transaction removed');
  };

  const handleSaveGoal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!goalForm.name || !goalForm.target) {
      triggerToast('Please fill out all goal fields.');
      return;
    }
    const payload = {
      id: goalForm.id || `goal-${Date.now()}`,
      name: goalForm.name,
      category: goalForm.category || 'General',
      target: parseFloat(goalForm.target),
      current: parseFloat(goalForm.current || 0),
    };
    setGoals((prev) => [...prev, payload]);
    setShowGoalModal(false);
    setGoalForm({ id: '', name: '', category: 'General', target: '', current: '' });
    triggerToast('Savings goal created!');
  };

  const handleAddFunds = (goalId: string) => {
    const amount = parseFloat(fundingAmount);
    if (isNaN(amount) || amount <= 0) {
      triggerToast('Please enter a valid amount');
      return;
    }
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === goalId) {
          const nextAmt = Math.min(g.target, g.current + amount);
          triggerToast(`Added ₹${amount} to ${g.name}!`);
          return { ...g, current: nextAmt };
        }
        return g;
      })
    );
    setFundingAmount('');
    setFundingGoalId(null);
  };

  const handleUpdateBalance = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = parseFloat(newBalanceInput);
    if (isNaN(val)) {
      triggerToast('Invalid balance value');
      return;
    }
    setStartingBalance(val);
    setShowBalanceModal(false);
    triggerToast(`Wallet initialized to ₹${val.toLocaleString()}`);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-sans flex flex-col items-center justify-start py-0 md:py-8 antialiased">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {toastMessage && (
        <div className="fixed top-6 z-50 bg-[#1e1e1e]/80 backdrop-blur-md border border-[#78dc77]/40 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#78dc77] inline-block animate-ping"></span>
          <span className="font-semibold text-xs tracking-wide font-mono">{toastMessage}</span>
        </div>
      )}

      <div className="w-full max-w-md bg-[#131313] md:rounded-[40px] md:shadow-[0_24px_60px_rgba(0,0,0,0.85)] border-x border-[#2a2a2a]/60 md:border-t h-screen md:h-[880px] flex flex-col justify-between relative overflow-hidden">
        <div className="hidden md:flex justify-center items-center w-full h-8 bg-[#0e0e0e] rounded-t-[40px] shrink-0">
          <div className="w-32 h-4 bg-[#131313] rounded-full"></div>
        </div>

        <header className="px-6 pt-6 pb-2 flex items-center justify-between shrink-0 bg-[#131313] z-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#78dc77] font-sans">Expense Tracker</h1>
            <p className="text-sm text-[#becab9] mt-0.5">Let's manage your wealth</p>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => triggerToast('Ready for new transactions')} className="p-2 rounded-full hover:bg-white/5 transition-all relative active:scale-95 border border-white/5">
              <Icons.Bell />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#78dc77] rounded-full animate-ping"></span>
            </button>
            <div className="w-10 h-10 rounded-full border border-[#78dc77] flex items-center justify-center bg-white/5 text-sm font-bold text-[#78dc77] uppercase">ME</div>
          </div>
        </header>

        <main className="flex-1 px-6 overflow-y-auto pb-28 no-scrollbar scroll-smooth">
          {currentTab === 'dashboard' && (
            <div className="space-y-4 animate-fadeIn">
              {startingBalance === 0 && transactions.length === 0 && (
                <div className="bg-[#78dc77]/10 border border-[#78dc77]/20 p-5 rounded-3xl space-y-3 animate-pulse">
                  <h3 className="text-sm font-bold text-[#78dc77]">✨ Initialize Your Wallet</h3>
                  <p className="text-xs text-[#becab9] leading-relaxed">
                    Set up your actual starting account balance so you can monitor your net worth and cash flows accurately.
                  </p>
                  <button onClick={() => { setNewBalanceInput(''); setShowBalanceModal(true); }} className="bg-[#78dc77] text-black px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-opacity-95 transition-all">
                    Set Starting Balance
                  </button>
                </div>
              )}

              <div className={`${glassClass} p-6 rounded-3xl relative overflow-hidden`}>
                <div className="absolute right-4 bottom-4 opacity-10">
                  <Icons.Wallet />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-semibold tracking-wider text-[#becab9] uppercase">Current Balance</p>
                  <button onClick={() => { setNewBalanceInput(metrics.balance.toString()); setShowBalanceModal(true); }} title="Set Custom Balance" className="p-1 rounded-full bg-white/5 hover:bg-white/10 text-[#78dc77] transition-all active:scale-90 border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-baseline space-x-2 mt-2">
                  <span className="text-4xl font-extrabold tracking-tight font-mono text-[#78dc77]">{fmt(metrics.balance)}</span>
                  <span className="text-xs font-semibold text-[#becab9] font-mono">INR</span>
                </div>
                <div className="inline-flex items-center space-x-1 bg-black/40 px-3 py-1 rounded-full text-[10px] text-[#becab9] mt-4 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#78dc77] animate-pulse"></span>
                  <span className="font-mono">Editable Wallet Balance</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`${glassClass} p-4 rounded-2xl`}>
                  <p className="text-xs text-[#becab9] font-medium">Today's Expense</p>
                  <p className="text-xl font-bold font-mono text-white mt-1">{fmt(metrics.todaySpending)}</p>
                </div>
                <div className={`${glassClass} p-4 rounded-2xl border-l-2 border-l-[#78dc77]`}>
                  <p className="text-xs text-[#becab9] font-medium">This Month</p>
                  <p className="text-xl font-bold font-mono text-white mt-1">{fmt(metrics.expenseSum)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`${glassClass} p-4 rounded-2xl border-l-2 border-l-[#78dc77]`}>
                  <p className="text-xs text-[#becab9] font-medium">Income Streams</p>
                  <p className="text-xl font-bold font-mono text-[#78dc77] mt-1">{fmt(metrics.incomeSum)}</p>
                </div>
                <div className={`${glassClass} p-4 rounded-2xl border-l-2 border-l-[#ff6b67]`}>
                  <p className="text-xs text-[#becab9] font-medium">Total Outflows</p>
                  <p className="text-xl font-bold font-mono text-[#ff6b67] mt-1">{fmt(metrics.expenseSum)}</p>
                </div>
              </div>

              <div className={`${glassClass} p-5 rounded-2xl`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-white">Budget Allocation</span>
                  <span className="text-sm font-bold text-[#78dc77] font-mono">
                    {budgetLimit > 0 ? Math.round((metrics.expenseSum / budgetLimit) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${metrics.expenseSum > budgetLimit ? 'bg-red-500' : 'bg-[#78dc77]'}`} style={{ width: `${Math.min(100, budgetLimit > 0 ? (metrics.expenseSum / budgetLimit) * 100 : 0)}%` }}></div>
                </div>
                <div className="flex justify-between items-center mt-3 text-xs text-[#becab9]">
                  <span className="font-mono">Spent: {fmt(metrics.expenseSum)}</span>
                  <span className="font-mono">Cap: {fmt(budgetLimit)}</span>
                </div>
              </div>

              <div className={`${glassClass} p-4 rounded-2xl flex items-center justify-between`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl">📊</div>
                  <div>
                    <p className="text-xs text-[#becab9]">Highest Spend Category</p>
                    <p className="text-base font-bold text-white mt-0.5">
                      {Object.keys(metrics.categoryTotals).length > 0
                        ? Object.keys(metrics.categoryTotals).reduce((a, b) => (metrics.categoryTotals[a] > metrics.categoryTotals[b] ? a : b))
                        : 'No Data yet'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-base font-bold text-[#ff6b67] font-mono">
                    {Object.keys(metrics.categoryTotals).length > 0 ? fmt(Math.max(...Object.values(metrics.categoryTotals))) : fmt(0)}
                  </span>
                  <Icons.ChevronRight />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <h3 className="text-base font-semibold text-white">Recent Activity</h3>
                  {transactions.length > 0 && (
                    <button onClick={() => setCurrentTab('transactions')} className="text-xs font-semibold text-[#78dc77] hover:underline">
                      View All
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {transactions.length > 0 ? (
                    transactions.slice(0, 3).map((tx) => (
                      <div
                        key={tx.id}
                        onClick={() => {
                          setSelectedTx(tx);
                          setShowDetailModal(true);
                        }}
                        className={`${glassClass} p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">{categoryEmojis[tx.category] || '🏷️'}</div>
                          <div>
                            <p className="text-sm font-semibold text-white">{tx.title}</p>
                            <p className="text-xs text-[#becab9]">{tx.date} • {tx.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-bold font-mono ${tx.type === 'income' ? 'text-[#78dc77]' : 'text-[#ff6b67]'}`}>
                            {tx.type === 'income' ? '+' : '-'}{fmt(tx.amount).slice(1)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-[#becab9] bg-white/5 border border-dashed border-white/5 rounded-2xl">
                      No transactions recorded. Click "+" to start adding.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentTab === 'transactions' && (
            <div className="space-y-4 animate-fadeIn no-scrollbar">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${glassClass} w-full rounded-2xl py-3 px-11 text-sm text-white focus:outline-none focus:border-[#78dc77] transition-all font-sans`}
                />
                <div className="absolute left-4 top-3.5">
                  <Icons.Search />
                </div>
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-3 text-xs bg-white/10 text-[#becab9] rounded-lg px-2 py-1">
                    Clear
                  </button>
                )}
              </div>

              <div className="flex overflow-x-auto space-x-2 pb-2 no-scrollbar">
                {['All', ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                      selectedCategoryFilter === cat
                        ? 'bg-[#78dc77] text-[#131313] border-[#78dc77]'
                        : 'bg-[#1e1e1e]/60 backdrop-blur-lg text-[#becab9] border-white/5 hover:bg-white/10 shadow-md'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="space-y-4 no-scrollbar">
                {transactions.length > 0 ? (
                  txGroups.map(({ name, type }) => {
                    const filtered = transactions.filter((tx) => {
                      const query = searchQuery.toLowerCase();
                      return (
                        (tx.title.toLowerCase().includes(query) || tx.category.toLowerCase().includes(query)) &&
                        (selectedCategoryFilter === 'All' || tx.category === selectedCategoryFilter) &&
                        tx.type === type
                      );
                    });
                    if (!filtered.length) return null;
                    const totalSum = filtered.reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
                    return (
                      <div key={name} className="space-y-2 no-scrollbar">
                        <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-[#becab9] uppercase px-1">
                          <span>{name}</span>
                          <span className={type === 'expense' ? 'text-[#ff6b67]' : 'text-[#78dc77]'}>{fmt(totalSum)}</span>
                        </div>
                        <div className="space-y-2 no-scrollbar">
                          {filtered.map((tx) => (
                            <div
                              key={tx.id}
                              onClick={() => {
                                setSelectedTx(tx);
                                setShowDetailModal(true);
                              }}
                              className={`${glassClass} p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all`}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-xl">{categoryEmojis[tx.category] || '🏷️'}</div>
                                <div>
                                  <p className="text-sm font-semibold text-white">{tx.title}</p>
                                  <p className="text-xs text-[#becab9] mt-0.5">{tx.category} • {tx.date}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className={`text-sm font-bold font-mono ${tx.type === 'income' ? 'text-[#78dc77]' : 'text-[#ff6b67]'}`}>
                                  {tx.type === 'income' ? '+' : '-'}{fmt(tx.amount).slice(1)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-16 text-[#becab9]">
                    <div className="text-4xl mb-3">📋</div>
                    <p className="text-base font-semibold">No Transactions Logged</p>
                    <p className="text-xs mt-1 text-white/50 max-w-xs mx-auto">All your expenses and incomes will dynamically appear here when you create them.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentTab === 'analytics' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-2 gap-3">
                <div className={`${glassClass} p-4 rounded-2xl`}>
                  <p className="text-xs text-[#becab9] font-medium">Avg. Daily Outflow</p>
                  <p className="text-2xl font-bold font-mono text-[#78dc77] mt-1">{transactions.filter((t) => t.type === 'expense').length > 0 ? Math.round(metrics.expenseSum / 30) : 0}</p>
                  <div className="w-full bg-[#131313] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#78dc77] w-1/3 h-full rounded-full"></div>
                  </div>
                </div>
                <div className={`${glassClass} p-4 rounded-2xl`}>
                  <p className="text-xs text-[#becab9] font-medium">Largest Record</p>
                  <p className="text-2xl font-bold font-mono text-[#78dc77] mt-1">{transactions.length > 0 ? fmt(Math.max(...transactions.map((t) => Number(t.amount) || 0))) : fmt(0)}</p>
                  <p className="text-[10px] text-[#becab9] mt-2 font-mono truncate">{transactions.length > 0 ? transactions.reduce((max, t) => (Number(t.amount || 0) > Number(max.amount || 0) ? t : max), transactions[0]).title : 'No items'}</p>
                </div>
              </div>

              <div className={`${glassClass} p-4 rounded-2xl flex justify-between items-center`}>
                <div>
                  <p className="text-xs text-[#becab9]">Highest Spending Day of Month</p>
                  <p className="text-lg font-bold text-white mt-1">{fmt(Math.max(...juneDailyExpenses))}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#78dc77] font-semibold">{Math.max(...juneDailyExpenses) > 0 ? `June ${juneDailyExpenses.indexOf(Math.max(...juneDailyExpenses)) + 1}` : 'No Data'}</p>
                  <p className="text-[10px] text-[#becab9] mt-0.5">Calculated peak</p>
                </div>
              </div>

              <div className={`${glassClass} p-5 rounded-3xl space-y-3`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Daily Spending (June 1-30)</h3>
                    <p className="text-[9px] text-[#becab9] mt-0.5">Select a bar to view stats</p>
                  </div>
                  <div className="bg-black/40 border border-[#78dc77]/40 px-2.5 py-1 rounded-xl text-right">
                    <p className="text-[8px] uppercase font-bold text-[#becab9] tracking-wider">June {selectedDayIndex + 1}</p>
                    <p className="text-xs font-bold text-[#78dc77] font-mono">{fmt(juneDailyExpenses[selectedDayIndex] || 0)}</p>
                  </div>
                </div>

                <div className="w-full pt-2">
                  <svg viewBox="0 0 400 130" className="w-full h-auto overflow-visible">
                    <line x1="0" y1="10" x2="400" y2="10" stroke="#222" strokeWidth="1" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#222" strokeWidth="1" />
                    <line x1="0" y1="90" x2="400" y2="90" stroke="#222" strokeWidth="1" />
                    <line x1="0" y1="105" x2="400" y2="105" stroke="#444" strokeWidth="1.5" />
                    {juneDailyExpenses.map((val, idx) => {
                      const barWidth = 8;
                      const gap = (400 - 30 * barWidth) / 29;
                      const x = idx * (barWidth + gap);
                      const maxVal = Math.max(...juneDailyExpenses, 100);
                      const barHeight = (val / maxVal) * 90;
                      const y = 105 - barHeight;
                      const isSelected = selectedDayIndex === idx;
                      return (
                        <g key={idx} className="cursor-pointer group" onClick={() => setSelectedDayIndex(idx)} onTouchStart={() => setSelectedDayIndex(idx)}>
                          <rect x={x - 2} y={10} width={barWidth + 4} height={100} fill="transparent" />
                          <rect x={x} y={y} width={barWidth} height={barHeight} rx={2} fill={val > 0 ? (isSelected ? '#78dc77' : 'rgba(120, 220, 119, 0.4)') : (isSelected ? '#78dc77' : 'rgba(255,255,255,0.05)')} className="transition-all duration-150 group-hover:fill-[#78dc77]" />
                          {isSelected && <circle cx={x + barWidth / 2} cy={y - 5} r="2.5" fill="#78dc77" />}
                        </g>
                      );
                    })}
                    <text x="5" y="122" fill="#becab9" fontSize="8" fontFamily="monospace">D1</text>
                    <text x="65" y="122" fill="#becab9" fontSize="8" fontFamily="monospace">D5</text>
                    <text x="135" y="122" fill="#becab9" fontSize="8" fontFamily="monospace">D10</text>
                    <text x="202" y="122" fill="#becab9" fontSize="8" fontFamily="monospace">D15</text>
                    <text x="270" y="122" fill="#becab9" fontSize="8" fontFamily="monospace">D20</text>
                    <text x="338" y="122" fill="#becab9" fontSize="8" fontFamily="monospace">D25</text>
                    <text x="382" y="122" fill="#78dc77" fontSize="8" fontWeight="bold" fontFamily="monospace">D30</text>
                  </svg>
                </div>
              </div>

              <div className={`${glassClass} p-6 rounded-3xl space-y-4`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-white">Expense Distribution</h3>
                  <span className="text-[10px] text-[#78dc77] font-semibold">Touch legends or sections</span>
                </div>
                {Object.keys(metrics.categoryTotals).length > 0 ? (
                  <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
                    <div className="relative w-36 h-36 flex-shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.2" />
                        {Object.entries(metrics.categoryTotals).map(([cat, amount], idx) => {
                          const percent = Math.round((amount / metrics.totalExpenseAggregate) * 100);
                          const offset = Object.entries(metrics.categoryTotals)
                            .slice(0, idx)
                            .reduce((acc, [, value]) => acc + Math.round((value / metrics.totalExpenseAggregate) * 100), 0);
                          return (
                            <circle
                              key={cat}
                              cx="18"
                              cy="18"
                              r="15.915"
                              fill="none"
                              stroke={chartColors[idx % chartColors.length]}
                              strokeWidth={selectedDonutCategory === cat ? '4.5' : '2.8'}
                              strokeDasharray={`${percent} 100`}
                              strokeDashoffset={-offset}
                              className="cursor-pointer transition-all duration-300"
                              onClick={() => setSelectedDonutCategory(cat)}
                            />
                          );
                        })}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-1 text-center">
                        <span className="text-[9px] font-bold tracking-widest text-[#becab9] uppercase truncate max-w-[80px]">{selectedDonutCategory || 'Expense'}</span>
                        <span className="text-xs font-extrabold text-white font-mono mt-0.5">{fmt(metrics.categoryTotals[selectedDonutCategory] || 0)}</span>
                        <span className="text-[10px] font-semibold text-[#78dc77] font-mono">{metrics.totalExpenseAggregate > 0 ? `${Math.round(((metrics.categoryTotals[selectedDonutCategory] || 0) / metrics.totalExpenseAggregate) * 100)}%` : '0%'}</span>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-xs w-full sm:w-auto">
                      {Object.entries(metrics.categoryTotals).map(([cat, amount], idx) => {
                        const percent = Math.round((amount / metrics.totalExpenseAggregate) * 100);
                        return (
                          <button key={cat} onClick={() => setSelectedDonutCategory(cat)} className={`flex items-center justify-between w-full sm:w-36 px-2.5 py-1.5 rounded-xl transition-all border ${selectedDonutCategory === cat ? 'bg-white/5 border-white/15' : 'border-transparent'}`}>
                            <div className="flex items-center space-x-2">
                              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: chartColors[idx % chartColors.length] }}></span>
                              <span className={`${selectedDonutCategory === cat ? 'text-white font-bold' : 'text-[#becab9]'}`}>{cat}</span>
                            </div>
                            <span className="font-mono text-[10px] font-bold text-white">{percent}%</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10 bg-black/20 border border-white/5 border-dashed rounded-3xl">
                    <p className="text-xs text-[#becab9]">Add expenses to view dynamic percentage chart</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentTab === 'goals' && (
            <div className="space-y-4 animate-fadeIn">
              <div className={`${glassClass} p-6 rounded-3xl`}>
                <p className="text-xs font-bold tracking-widest text-[#becab9] uppercase">Aggregated Savings</p>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-4xl font-extrabold text-white font-mono">{fmt(goals.reduce((sum, g) => sum + Number(g.current || 0), 0))}</span>
                  <span className="text-sm font-semibold text-[#78dc77] font-mono">of {fmt(goals.reduce((sum, g) => sum + Number(g.target || 0), 0))} Target</span>
                </div>
                <div className="w-full bg-black/40 h-2.5 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-[#78dc77] rounded-full transition-all duration-500" style={{ width: `${Math.min(100, goals.reduce((sum, g) => sum + Number(g.target || 0), 0) > 0 ? (goals.reduce((sum, g) => sum + Number(g.current || 0), 0) / goals.reduce((sum, g) => sum + Number(g.target || 0), 0)) * 100 : 0)}%` }}></div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-white">Active Milestone Targets</h3>
                {goals.length > 0 ? goals.map((goal) => {
                  const percentage = goal.target > 0 ? Math.round((goal.current / goal.target) * 100) : 0;
                  const isFinished = goal.current >= goal.target;
                  return (
                    <div key={goal.id} className={`${glassClass} p-5 rounded-2xl space-y-4`}>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-xl">🎯</div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{goal.name}</h4>
                            <p className="text-xs text-[#becab9]">{goal.category}</p>
                          </div>
                        </div>
                        <span className="text-sm font-extrabold text-[#78dc77] font-mono">{percentage}%</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono text-[#becab9]"><span>Saved: {fmt(goal.current)}</span><span>Target: {fmt(goal.target)}</span></div>
                      <div className="w-full bg-black/40 h-2.5 rounded-full overflow-hidden"><div className="h-full bg-[#78dc77] rounded-full transition-all duration-500" style={{ width: `${Math.min(100, percentage)}%` }}></div></div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-xs font-semibold text-[#becab9] font-mono">{isFinished ? '🎉 Goal Achieved!' : `₹${Math.max(0, goal.target - goal.current)} remaining`}</span>
                        {!isFinished && (
                          <div className="flex items-center space-x-2">
                            {fundingGoalId === goal.id ? (
                              <div className="flex items-center space-x-1 animate-fadeIn">
                                <input type="number" placeholder="Amt" value={fundingAmount} onChange={(e) => setFundingAmount(e.target.value)} className="w-16 bg-white/5 border border-[#78dc77]/40 rounded-xl px-2 py-1 text-xs text-white font-mono focus:outline-none" />
                                <button onClick={() => handleAddFunds(goal.id)} className="bg-[#78dc77] text-black px-2.5 py-1 rounded-lg text-[10px] font-bold">Add</button>
                                <button onClick={() => setFundingGoalId(null)} className="bg-white/10 text-white px-2 py-1 rounded-lg text-[10px] font-bold">X</button>
                              </div>
                            ) : (
                              <button onClick={() => { setFundingGoalId(goal.id); setFundingAmount(''); }} className="bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border border-white/5">Add Funds</button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }) : (
                  <div className="text-center py-12 text-[#becab9] bg-white/5 border border-dashed border-white/5 rounded-3xl">
                    <p className="text-base font-semibold">No Goals Set Up</p>
                    <p className="text-xs text-white/50 mt-1 max-w-xs mx-auto">Define milestones like gadgets, setup plans, or holidays to stay organized.</p>
                  </div>
                )}
              </div>
              <button onClick={() => setShowGoalModal(true)} className="w-full bg-[#78dc77] hover:bg-opacity-90 text-[#131313] py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-2"><span>➕</span><span>Create Savings Goal</span></button>
            </div>
          )}

          {currentTab === 'settings' && (
            <div className="space-y-4 animate-fadeIn">
              <div className={`${glassClass} p-5 rounded-2xl flex items-center space-x-4`}>
                <div className="w-14 h-14 rounded-full border border-[#78dc77] bg-white/5 text-[#78dc77] font-bold text-lg flex items-center justify-center uppercase">ME</div>
                <div>
                  <h4 className="text-base font-bold text-white">Your Account</h4>
                  <p className="text-xs text-[#becab9]">Local Client Data Store</p>
                </div>
              </div>
              <div className={`${glassClass} p-5 rounded-2xl space-y-3`}>
                <h3 className="text-xs font-bold text-[#becab9] uppercase tracking-wider">Appearance</h3>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-white">Theme Mode</span>
                  <div className="flex space-x-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                    <button className="bg-white/10 text-[#78dc77] px-3 py-1.5 rounded-lg text-xs font-semibold">Dark</button>
                    <button onClick={() => triggerToast('Light theme requires cloud upgrade')} className="text-[#becab9] px-3 py-1.5 rounded-lg text-xs font-semibold">Light</button>
                  </div>
                </div>
              </div>
              <div className={`${glassClass} p-5 rounded-2xl space-y-4`}>
                <h3 className="text-xs font-bold text-[#becab9] uppercase tracking-wider">Monthly Spend Target Cap</h3>
                <div className="space-y-2">
                  <label className="block text-xs text-[#becab9]">Modify Spend Limit (INR)</label>
                  <div className="flex space-x-2">
                    <input type="number" value={budgetLimit} onChange={(e) => setBudgetLimit(Number(e.target.value))} className="bg-black/20 border border-white/5 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#78dc77] flex-1 font-mono" />
                    <button onClick={() => triggerToast('Cap limit updated')} className="bg-[#78dc77] text-[#131313] px-4 py-2 rounded-xl text-xs font-bold">Apply</button>
                  </div>
                </div>
              </div>
              <div className={`${glassClass} p-5 rounded-2xl space-y-4`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-[#becab9] uppercase tracking-wider">Transaction Categories</h3>
                  <span className="text-[10px] text-[#78dc77] font-semibold">{categories.length} active</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span key={cat} className="bg-white/5 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 border border-white/5 shadow-sm"><span>{categoryEmojis[cat] || '🏷️'}</span><span>{cat}</span></span>
                  ))}
                  <button onClick={() => {
                    const newCat = window.prompt('Enter custom category name:');
                    if (newCat && !categories.includes(newCat)) {
                      setCategories((prev) => [...prev, newCat]);
                      triggerToast(`Added category: ${newCat}`);
                    }
                  }} className="bg-black/20 border-dashed border border-[#78dc77] text-[#78dc77] px-3 py-1.5 rounded-full text-xs font-bold hover:bg-white/5">+ Add Category</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => triggerToast('CSV generated successfully')} className="bg-white/5 text-white p-3 rounded-xl border border-white/5 text-xs font-bold transition-all hover:bg-white/10 shadow-lg">📤 Export CSV</button>
                <button onClick={() => {
                  const confirmClear = window.confirm('Are you sure you want to completely clear database for a fresh start?');
                  if (confirmClear) {
                    setTransactions([]);
                    setGoals([]);
                    setStartingBalance(0);
                    triggerToast('Database Cleared');
                  }
                }} className="bg-red-950/40 border border-red-500/20 text-red-200 p-3 rounded-xl text-xs font-bold transition-all hover:bg-red-950/60">🧹 Clear Data</button>
              </div>
            </div>
          )}
        </main>

        <div className="absolute bottom-24 right-6 z-20">
          <button onClick={() => { resetTxForm(); setAddModalType('expense'); setShowAddModal(true); }} className="w-14 h-14 bg-[#78dc77] hover:bg-opacity-95 rounded-2xl shadow-[0_8px_32px_rgba(120,220,119,0.4)] flex items-center justify-center transition-all duration-300 transform active:scale-90"><Icons.Plus /></button>
        </div>

        <nav className="h-20 bg-[#1e1e1e]/70 backdrop-blur-lg border-t border-white/5 flex items-center justify-around px-2 rounded-b-[40px] shrink-0 z-10 shadow-[0_-8px_32px_0_rgba(0,0,0,0.5)]">
          {tabItems.map(({ id, Icon, label }) => (
            <button key={id} onClick={() => setCurrentTab(id)} className={`flex flex-col items-center justify-center w-[74px] h-14 rounded-2xl transition-all ${currentTab === id ? 'text-[#78dc77] bg-white/5' : 'text-[#becab9] hover:text-white'}`}>
              <Icon />
              <span className="text-[9px] font-semibold mt-1 truncate">{label}</span>
            </button>
          ))}
        </nav>

        {showBalanceModal && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-end justify-center z-40 transition-all duration-300">
            <div className="bg-[#1c1b1b] w-full rounded-t-[30px] border-t border-white/10 p-6 space-y-4 max-h-[90%] overflow-y-auto animate-slideUp">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <h3 className="text-base font-bold text-white">Initialize/Set Starting Balance</h3>
                <button onClick={() => setShowBalanceModal(false)} className="p-1 text-white bg-white/5 rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold">✕</button>
              </div>
              <form onSubmit={handleUpdateBalance} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Set Balance (₹)</label>
                  <input type="number" placeholder="e.g. 5000" value={newBalanceInput} onChange={(e) => setNewBalanceInput(e.target.value)} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-lg font-mono focus:outline-none focus:border-[#78dc77]" required />
                  <p className="text-[11px] text-[#becab9] mt-2 leading-relaxed">Set your starting cash balance. Any transactions you create subsequently will flow against this amount dynamically.</p>
                </div>
                <div className="pt-2 flex space-x-2">
                  <button type="button" onClick={() => setShowBalanceModal(false)} className="w-1/3 bg-white/5 text-white py-3 rounded-xl font-bold text-sm">Cancel</button>
                  <button type="submit" className="w-2/3 bg-[#78dc77] text-black py-3 rounded-xl font-bold text-sm shadow-md">Update Balance</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showAddModal && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-end justify-center z-40 transition-all duration-300">
            <div className="bg-[#1c1b1b] w-full rounded-t-[30px] border-t border-white/10 p-6 space-y-4 max-h-[90%] overflow-y-auto animate-slideUp">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <h3 className="text-base font-bold text-white">{txForm.id ? 'Edit Transaction' : `Add ${addModalType === 'expense' ? 'Expense' : 'Income'}`}</h3>
                {!txForm.id && (
                  <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                    <button onClick={() => { setAddModalType('expense'); setTxForm((p) => ({ ...p, type: 'expense' })); }} className={`px-3 py-1 rounded-lg text-xs font-semibold ${addModalType === 'expense' ? 'bg-[#ff6b67] text-white' : 'text-[#becab9]'}`}>Expense</button>
                    <button onClick={() => { setAddModalType('income'); setTxForm((p) => ({ ...p, type: 'income', category: 'Salary' })); }} className={`px-3 py-1 rounded-lg text-xs font-semibold ${addModalType === 'income' ? 'bg-[#78dc77] text-black' : 'text-[#becab9]'}`}>Income</button>
                  </div>
                )}
                <button onClick={() => setShowAddModal(false)} className="p-1 text-white bg-white/5 rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold">✕</button>
              </div>
              <form onSubmit={handleSaveTransaction} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Amount (₹)</label>
                  <input type="number" placeholder="₹ 0.00" value={txForm.amount} onChange={(e) => setTxForm((p) => ({ ...p, amount: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-lg font-mono focus:outline-none focus:border-[#78dc77]" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Merchant Name / Label</label>
                  <input type="text" placeholder="e.g. Swiggy checkout, Freelance pay" value={txForm.title} onChange={(e) => setTxForm((p) => ({ ...p, title: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#78dc77]" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Category</label>
                  <select value={txForm.category} onChange={(e) => setTxForm((p) => ({ ...p, category: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#78dc77]">
                    {addModalType === 'expense' ? categories.map((c) => <option key={c} value={c}>{c}</option>) : (
                      <>
                        <option value="Salary">💼 Salary</option>
                        <option value="Freelance">💵 Freelance</option>
                        <option value="Investment">📈 Investment</option>
                        <option value="Other">🏷️ Other</option>
                      </>
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Transaction Date</label>
                  <input type="date" value={txForm.date} onChange={(e) => setTxForm((p) => ({ ...p, date: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#78dc77] font-mono" />
                </div>
                <div className="pt-4 flex space-x-2">
                  <button type="button" onClick={() => setShowAddModal(false)} className="w-1/3 bg-white/5 text-white py-3.5 rounded-xl font-bold text-sm">Cancel</button>
                  <button type="submit" className="w-2/3 bg-[#78dc77] text-black py-3.5 rounded-xl font-bold text-sm shadow-md">Save Transaction</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDetailModal && selectedTx && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-end justify-center z-40 transition-all">
            <div className="bg-[#1c1b1b] w-full rounded-t-[30px] border-t border-white/10 p-6 space-y-6 animate-slideUp">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <h3 className="text-base font-bold text-white">Transaction Details</h3>
                <button onClick={() => setShowDetailModal(false)} className="p-1 text-white bg-white/5 rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold">✕</button>
              </div>
              <div className="text-center py-4 space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-3xl">{categoryEmojis[selectedTx.category] || '🏷️'}</div>
                <h4 className="text-lg font-bold text-white mt-2">{selectedTx.title}</h4>
                <p className="text-xs text-[#becab9]">{selectedTx.category} category</p>
                <p className={`text-3xl font-extrabold font-mono mt-4 ${selectedTx.type === 'income' ? 'text-[#78dc77]' : 'text-[#ff6b67]'}`}>{selectedTx.type === 'income' ? '+' : '-'}{fmt(selectedTx.amount).slice(1)}</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-xs space-y-2 font-mono">
                <div className="flex justify-between"><span className="text-[#becab9]">Date:</span><span className="text-white font-semibold">{selectedTx.date}</span></div>
                <div className="flex justify-between"><span className="text-[#becab9]">Time Stamp:</span><span className="text-white font-semibold">{selectedTx.time}</span></div>
                <div className="flex justify-between"><span className="text-[#becab9]">Flow Direction:</span><span className={`font-semibold capitalize ${selectedTx.type === 'income' ? 'text-[#78dc77]' : 'text-[#ff6b67]'}`}>{selectedTx.type}</span></div>
              </div>
              <div className="flex space-x-2 pt-2">
                <button onClick={() => handleEditTransaction(selectedTx)} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-1.5 text-xs transition-all"><Icons.Edit /><span>Edit</span></button>
                <button onClick={() => handleDeleteTransaction(selectedTx.id)} className="flex-1 bg-red-950/40 hover:bg-red-900/40 border border-red-500/30 text-red-200 py-3 rounded-xl font-bold flex items-center justify-center space-x-1.5 text-xs transition-all"><Icons.Trash /><span>Delete</span></button>
              </div>
            </div>
          </div>
        )}

        {showGoalModal && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-end justify-center z-40 transition-all duration-300">
            <div className="bg-[#1c1b1b] w-full rounded-t-[30px] border-t border-white/10 p-6 space-y-4 max-h-[90%] overflow-y-auto animate-slideUp">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <h3 className="text-base font-bold text-white">Create Savings Target</h3>
                <button onClick={() => setShowGoalModal(false)} className="p-1 text-white bg-white/5 rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold">✕</button>
              </div>
              <form onSubmit={handleSaveGoal} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Goal Name</label>
                  <input type="text" placeholder="e.g. Mechanical Keyboard" value={goalForm.name} onChange={(e) => setGoalForm((p) => ({ ...p, name: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#78dc77]" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Category Group</label>
                  <input type="text" placeholder="e.g. Setup Upgrade, Tech" value={goalForm.category} onChange={(e) => setGoalForm((p) => ({ ...p, category: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#78dc77]" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Target Amount</label>
                    <input type="number" placeholder="e.g. 2000" value={goalForm.target} onChange={(e) => setGoalForm((p) => ({ ...p, target: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-sm font-mono focus:outline-none focus:border-[#78dc77]" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#becab9] uppercase tracking-wider mb-2">Already Saved</label>
                    <input type="number" placeholder="e.g. 300" value={goalForm.current} onChange={(e) => setGoalForm((p) => ({ ...p, current: e.target.value }))} className="w-full bg-[#2c2c2c] border border-white/10 rounded-xl py-3 px-4 text-white text-sm font-mono focus:outline-none focus:border-[#78dc77]" />
                  </div>
                </div>
                <div className="pt-4 flex space-x-2">
                  <button type="button" onClick={() => setShowGoalModal(false)} className="w-1/3 bg-white/5 text-white py-3.5 rounded-xl font-bold text-sm">Cancel</button>
                  <button type="submit" className="w-2/3 bg-[#78dc77] text-black py-3.5 rounded-xl font-bold text-sm shadow-md">Create Goal</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
