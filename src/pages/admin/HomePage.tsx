// AdminDashboard.tsx
import {
  Users,
  Shield,
  IndianRupee,
  Activity,
  Plus,
  UserPlus,
  FileText,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Info,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* ===== Top Row: Title + Filters ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Admin Dashboard
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Overview of users, balances, and transactions
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <select className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
            <button className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              Export
            </button>
          </div>
        </div>

        {/* ===== Stat Cards ===== */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Users */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600 dark:text-slate-400">Total Users</div>
              <Users className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </div>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold">12,480</p>
              <span className="inline-flex items-center text-xs px-2 py-1 rounded-lg bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +2.1%
              </span>
            </div>
          </div>

          {/* Admins */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600 dark:text-slate-400">Active Admins</div>
              <Shield className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </div>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold">8</p>
              <span className="inline-flex items-center text-xs px-2 py-1 rounded-lg bg-gray-200 text-slate-700 dark:bg-gray-700 dark:text-slate-200">
                Stable
              </span>
            </div>
          </div>

          {/* Total Balance */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600 dark:text-slate-400">Total User Balance</div>
              <IndianRupee className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </div>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold">₹ 18,42,60,000</p>
              <span className="inline-flex items-center text-xs px-2 py-1 rounded-lg bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +0.8%
              </span>
            </div>
          </div>

          {/* Today’s Transactions */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600 dark:text-slate-400">Transactions Today</div>
              <Activity className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </div>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold">1,209</p>
              <span className="inline-flex items-center text-xs px-2 py-1 rounded-lg bg-red-100 text-red-700 dark:bg-red-700/30 dark:text-red-300">
                <ArrowDownRight className="w-3 h-3 mr-1" /> -0.4%
              </span>
            </div>
          </div>
        </section>

        {/* ===== Quick Actions ===== */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-between hover:shadow">
            <span className="text-sm font-medium">Add User</span>
            <UserPlus className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
          <button className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-between hover:shadow">
            <span className="text-sm font-medium">Create Admin</span>
            <Plus className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
          <button className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-between hover:shadow">
            <span className="text-sm font-medium">Reports</span>
            <FileText className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
          <button className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-between hover:shadow">
            <span className="text-sm font-medium">Settings</span>
            <Settings className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </section>

        {/* ===== Middle: Overview & Placeholder Chart ===== */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Recent Transactions */}
          <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow">
            <div className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <a href="/admin/transactions" className="text-sm underline hover:opacity-80">
                View all
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr className="text-slate-700 dark:text-slate-300">
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600">
                      Date
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600">
                      From → To
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600">
                      Type
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600 text-right">
                      Amount
                    </th>
                    <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { d: "28 Aug 2025", p: "U001 → U014", t: "Credit", a: 12500 },
                    { d: "28 Aug 2025", p: "U020 → U043", t: "Debit", a: -2300 },
                    { d: "27 Aug 2025", p: "U088 → U001", t: "Credit", a: 980 },
                    { d: "27 Aug 2025", p: "U004 → U019", t: "Debit", a: -12000 },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
                    >
                      <td className="px-6 py-3">{row.d}</td>
                      <td className="px-6 py-3">{row.p}</td>
                      <td className="px-6 py-3">
                        {row.t === "Credit" ? (
                          <span className="px-2 py-1 text-xs rounded-lg bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300">
                            Credit
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs rounded-lg bg-red-100 text-red-700 dark:bg-red-700/30 dark:text-red-300">
                            Debit
                          </span>
                        )}
                      </td>
                      <td
                        className={`px-6 py-3 text-right font-semibold ${
                          row.a < 0
                            ? "text-red-600 dark:text-red-400"
                            : "text-green-600 dark:text-green-400"
                        }`}
                      >
                        ₹{Math.abs(row.a).toLocaleString("en-IN")}
                      </td>
                      <td className="px-6 py-3">
                        <button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-200 text-xs">
                          <Info className="w-3.5 h-3.5" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Placeholder Chart / Insights */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow p-5">
            <h3 className="text-lg font-semibold mb-4">Volume Overview</h3>
            {/* Chart Placeholder (replace with real chart later) */}
            <div className="h-48 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {/* self-closing tag for chart mount point in React */}
                {/* <ChartMountPoint /> */}
                Chart goes here
              </span>
            </div>

            {/* Mini KPIs */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl border border-gray-300 dark:border-gray-700 p-3 bg-white dark:bg-gray-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">Credits</div>
                <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                  ₹ 9.8L
                </div>
              </div>
              <div className="rounded-xl border border-gray-300 dark:border-gray-700 p-3 bg-white dark:bg-gray-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">Debits</div>
                <div className="text-lg font-semibold text-red-600 dark:text-red-400">
                  ₹ 8.9L
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Bottom: Top Users ===== */}
        <section className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow">
          <div className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Top Users by Balance</h2>
            <button className="text-sm underline hover:opacity-80">See users</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr className="text-slate-700 dark:text-slate-300">
                  <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600">User</th>
                  <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600">Account</th>
                  <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-600 text-right">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { u: "Aarav Shah", a: "ACC102938", b: 5200000 },
                  { u: "Neha Verma", a: "ACC556677", b: 3100000 },
                  { u: "Rohan Iyer", a: "ACC889900", b: 2755000 },
                ].map((x, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="px-6 py-3">{x.u}</td>
                    <td className="px-6 py-3 font-mono">{x.a}</td>
                    <td className="px-6 py-3 text-right font-semibold">₹{x.b.toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
