"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  PieChart,
  Clock,
  User,
  ChevronLeft,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Briefcase,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Plus,
  CreditCard,
} from "lucide-react"

const portfolioData = {
  totalValue: "$124,568.92",
  change: "+$1,245.30 (1.2%)",
  assets: [
    {
      id: 1,
      name: "Apple Inc.",
      symbol: "AAPL",
      shares: 25,
      price: "$182.63",
      change: "+1.4%",
      value: "$4,565.75",
      trend: "up",
    },
    {
      id: 2,
      name: "Microsoft Corp.",
      symbol: "MSFT",
      shares: 15,
      price: "$415.32",
      change: "+0.8%",
      value: "$6,229.80",
      trend: "up",
    },
    {
      id: 3,
      name: "Tesla Inc.",
      symbol: "TSLA",
      shares: 10,
      price: "$175.21",
      change: "-2.3%",
      value: "$1,752.10",
      trend: "down",
    },
  ],
}

const assetDetails = {
  name: "Apple Inc.",
  symbol: "AAPL",
  description:
    "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, Mac, iPad, and wearables, home, and accessories.",
  metrics: [
    { name: "Market Cap", value: "$2.87T" },
    { name: "P/E Ratio", value: "30.25" },
    { name: "Dividend", value: "0.58%" },
    { name: "52W High", value: "$198.23" },
    { name: "52W Low", value: "$124.17" },
  ],
  holdings: {
    shares: 25,
    avgCost: "$142.35",
    totalCost: "$3,558.75",
    marketValue: "$4,565.75",
    gain: "$1,007.00 (28.3%)",
  },
}

const transactions = [
  {
    id: 1,
    type: "buy",
    asset: "Apple Inc.",
    symbol: "AAPL",
    amount: "5 shares",
    price: "$178.92",
    total: "$894.60",
    date: "May 15, 2023",
  },
  {
    id: 2,
    type: "sell",
    asset: "Netflix Inc.",
    symbol: "NFLX",
    amount: "2 shares",
    price: "$412.43",
    total: "$824.86",
    date: "Apr 28, 2023",
  },
  {
    id: 3,
    type: "buy",
    asset: "Microsoft Corp.",
    symbol: "MSFT",
    amount: "3 shares",
    price: "$378.65",
    total: "$1,135.95",
    date: "Apr 12, 2023",
  },
  {
    id: 4,
    type: "dividend",
    asset: "Johnson & Johnson",
    symbol: "JNJ",
    amount: "Dividend",
    price: "-",
    total: "$32.50",
    date: "Mar 25, 2023",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
}

type Screen = "portfolio" | "details" | "transactions"

export default function AssetManagementApp() {
  const [activeScreen, setActiveScreen] = useState<Screen>("portfolio")
  const [activeTab, setActiveTab] = useState("home")

  const handleAssetClick = () => {
    setActiveScreen("details")
  }

  const handleBackClick = () => {
    setActiveScreen("portfolio")
  }

  const handleTabClick = (tab: string) => {
    if (tab === "home") setActiveScreen("portfolio")
    if (tab === "history") setActiveScreen("transactions")
    setActiveTab(tab)
  }
  console.log(activeTab)


  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
        {/* First Screen */}
        <div
          className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "portfolio" ? "hidden md:block" : ""}`}
        >
          {/* Status Bar */}
          <div className="bg-black text-white h-5 flex justify-between items-center px-2 text-[8px]">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white px-2 py-1.5 flex justify-between items-center border-b border-gray-200">
            <h1 className="font-semibold text-xs">Portfolio</h1>
            <Briefcase size={12} />
          </div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="h-[calc(100%-75px)] overflow-y-auto pb-10"
          >
            {/* Portfolio Summary */}
            <div className="p-2 bg-indigo-50 m-2 rounded-lg">
              <h3 className="text-[10px] font-semibold mb-1 text-indigo-800">Total Portfolio Value</h3>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-indigo-900">{portfolioData.totalValue}</span>
                <div className="flex items-center text-[8px] text-green-600">
                  <TrendingUp size={8} className="mr-0.5" />
                  <span>{portfolioData.change}</span>
                </div>
              </div>
              <div className="mt-1 h-1 bg-indigo-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: "68%" }}></div>
              </div>
              <div className="flex justify-between text-[8px] mt-0.5">
                <span className="text-indigo-800">YTD Return</span>
                <span className="text-indigo-800">+12.4%</span>
              </div>
            </div>

            {/* Assets List */}
            <div className="p-2">
              <div className="flex justify-between items-center mb-1 px-1">
                <h3 className="text-[10px] font-semibold">Your Assets</h3>
                <Search size={8} className="text-gray-500" />
              </div>
              {portfolioData.assets.map((asset) => (
                <motion.div
                  key={asset.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg mb-2 p-2 shadow-sm"
                  onClick={handleAssetClick}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-[8px] font-medium">
                        {asset.symbol}
                      </div>
                      <div>
                        <h3 className="font-medium text-[10px]">{asset.name}</h3>
                        <p className="text-gray-500 text-[8px]">{asset.shares} shares</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[10px]">{asset.value}</p>
                      <div
                        className={`flex items-center justify-end text-[8px] ${asset.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {asset.trend === "up" ? (
                          <ArrowUpRight size={8} className="mr-0.5" />
                        ) : (
                          <ArrowDownRight size={8} className="mr-0.5" />
                        )}
                        <span>{asset.change}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <button className="w-full flex items-center justify-center gap-1 bg-indigo-100 text-indigo-700 text-[10px] font-medium py-1.5 rounded-lg mt-1">
                <Plus size={10} />
                <span>Add New Asset</span>
              </button>
            </div>
          </motion.div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-200 flex justify-around items-center px-1">
            <div className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
              <Home size={12} className="text-indigo-600" />
              <span className="text-[8px] text-indigo-600">Home</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("chart")}>
              <PieChart size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">Analytics</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("history")}>
              <Clock size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">History</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
              <User size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">Profile</span>
            </div>
          </div>
        </div>

        {/* Dimensions Note */}
        <div className="bg-gray-50 p-4 h-fit rounded-lg border border-gray-200 md:w-[200px] md:self-stretch md:flex md:flex-col md:justify-center order-last md:order-none">
          <h2 className="text-lg font-medium mb-2">Mobile Screens</h2>
          <p className="text-gray-700 text-sm">
            Each screen is sized at <span className="font-mono bg-gray-100 px-1">188px × 400px</span> with a 9:19 aspect
            ratio, representing a typical smartphone display. This allows all three screens to fit side-by-side without
            wrapping.
          </p>
        </div>

        {/* Second Screen */}
        <div
          className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "details" ? "hidden md:block" : ""}`}
        >
          {/* Status Bar */}
          <div className="bg-black text-white h-5 flex justify-between items-center px-2 text-[8px]">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white px-2 py-1.5 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center gap-1">
              <ChevronLeft size={12} onClick={handleBackClick} className="cursor-pointer" />
              <h1 className="font-semibold text-xs">Asset Details</h1>
            </div>
            <MoreVertical size={12} />
          </div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="h-[calc(100%-75px)] overflow-y-auto pb-10"
          >
            {/* Asset Header */}
            <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
              <div className="flex items-center gap-2 mb-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center"
                >
                  <span className="text-white font-medium text-[8px]">{assetDetails.symbol}</span>
                </motion.div>
                <div>
                  <h2 className="text-[10px] font-semibold text-gray-900">{assetDetails.name}</h2>
                  <p className="text-gray-500 text-[8px]">US Stock</p>
                </div>
              </div>

              <p className="text-gray-600 text-[8px] leading-relaxed mb-1">{assetDetails.description}</p>
            </motion.div>

            {/* Price Chart */}
            <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-[10px] font-semibold">Price Chart</h3>
                <div className="flex gap-1">
                  <span className="text-[8px] bg-indigo-100 text-indigo-700 px-1 rounded">1D</span>
                  <span className="text-[8px] text-gray-500">1W</span>
                  <span className="text-[8px] text-gray-500">1M</span>
                  <span className="text-[8px] text-gray-500">1Y</span>
                </div>
              </div>
              <div className="h-16 bg-gray-50 rounded-lg flex items-end p-1">
                <div className="w-full h-12 flex items-end">
                  {/* Simplified chart representation */}
                  <div className="w-1 h-4 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-5 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-6 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-8 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-7 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-9 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-10 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-8 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-7 bg-indigo-200 mx-[1px]"></div>
                  <div className="w-1 h-9 bg-indigo-300 mx-[1px]"></div>
                  <div className="w-1 h-11 bg-indigo-300 mx-[1px]"></div>
                  <div className="w-1 h-10 bg-indigo-300 mx-[1px]"></div>
                  <div className="w-1 h-12 bg-indigo-400 mx-[1px]"></div>
                  <div className="w-1 h-11 bg-indigo-400 mx-[1px]"></div>
                  <div className="w-1 h-10 bg-indigo-400 mx-[1px]"></div>
                  <div className="w-1 h-9 bg-indigo-400 mx-[1px]"></div>
                  <div className="w-1 h-10 bg-indigo-500 mx-[1px]"></div>
                  <div className="w-1 h-11 bg-indigo-500 mx-[1px]"></div>
                  <div className="w-1 h-10 bg-indigo-500 mx-[1px]"></div>
                  <div className="w-1 h-9 bg-indigo-500 mx-[1px]"></div>
                  <div className="w-1 h-10 bg-indigo-600 mx-[1px]"></div>
                  <div className="w-1 h-11 bg-indigo-600 mx-[1px]"></div>
                  <div className="w-1 h-12 bg-indigo-600 mx-[1px]"></div>
                </div>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
              <h3 className="text-[10px] font-semibold mb-1">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-1">
                {assetDetails.metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 p-1 rounded">
                    <p className="text-gray-500 text-[6px]">{metric.name}</p>
                    <p className="text-gray-900 text-[8px] font-medium">{metric.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Your Holdings */}
            <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
              <h3 className="text-[10px] font-semibold mb-1">Your Holdings</h3>
              <div className="bg-indigo-50 p-1.5 rounded-lg">
                <div className="flex justify-between mb-1">
                  <div>
                    <p className="text-gray-700 text-[8px]">Shares</p>
                    <p className="text-indigo-900 text-[10px] font-medium">{assetDetails.holdings.shares}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-[8px]">Avg. Cost</p>
                    <p className="text-indigo-900 text-[10px] font-medium">{assetDetails.holdings.avgCost}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-700 text-[8px]">Market Value</p>
                    <p className="text-indigo-900 text-[10px] font-medium">{assetDetails.holdings.marketValue}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-[8px]">Total Gain</p>
                    <p className="text-green-600 text-[10px] font-medium">{assetDetails.holdings.gain}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="p-2 flex gap-2">
              <button className="flex-1 bg-indigo-600 text-white text-[10px] font-medium py-1.5 rounded-lg">Buy</button>
              <button className="flex-1 bg-white border border-indigo-600 text-indigo-600 text-[10px] font-medium py-1.5 rounded-lg">
                Sell
              </button>
            </motion.div>
          </motion.div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-200 flex justify-around items-center px-1">
            <div className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
              <Home size={12} className="text-indigo-600" />
              <span className="text-[8px] text-indigo-600">Home</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("chart")}>
              <PieChart size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">Analytics</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("history")}>
              <Clock size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">History</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
              <User size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">Profile</span>
            </div>
          </div>
        </div>

        {/* Third Screen */}
        <div
          className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "transactions" ? "hidden md:block" : ""}`}
        >
          {/* Status Bar */}
          <div className="bg-black text-white h-5 flex justify-between items-center px-2 text-[8px]">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white px-2 py-1.5 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center gap-1">
              <h1 className="font-semibold text-xs">Transaction History</h1>
            </div>
            <CreditCard size={12} />
          </div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="h-[calc(100%-75px)] overflow-y-auto pb-10"
          >
            {/* Filter */}
            <motion.div variants={itemVariants} className="p-2">
              <div className="flex gap-1 mb-2">
                <span className="text-[8px] bg-indigo-600 text-white px-2 py-0.5 rounded-full">All</span>
                <span className="text-[8px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">Buy</span>
                <span className="text-[8px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">Sell</span>
                <span className="text-[8px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">Dividend</span>
              </div>
            </motion.div>

            {/* Transactions List */}
            <motion.div variants={itemVariants} className="p-2">
              <h3 className="text-[10px] font-semibold mb-1">Recent Transactions</h3>
              <div className="space-y-2">
                {transactions.map((transaction) => (
                  <motion.div
                    key={transaction.id}
                    className="bg-white p-2 rounded-lg"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            transaction.type === "buy"
                              ? "bg-green-100 text-green-600"
                              : transaction.type === "sell"
                                ? "bg-red-100 text-red-600"
                                : "bg-blue-100 text-[#296880]"
                          }`}
                        >
                          {transaction.type === "buy" && <TrendingUp size={10} />}
                          {transaction.type === "sell" && <TrendingDown size={10} />}
                          {transaction.type === "dividend" && <DollarSign size={10} />}
                        </div>
                        <div>
                          <p className="text-gray-900 text-[8px] font-medium">{transaction.asset}</p>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500 text-[6px]">{transaction.symbol}</span>
                            <span className="text-gray-300 text-[6px]">•</span>
                            <span className="text-gray-500 text-[6px]">{transaction.amount}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-[8px] font-medium ${
                            transaction.type === "buy"
                              ? "text-red-600"
                              : transaction.type === "sell"
                                ? "text-green-600"
                                : "text-[#296880]"
                          }`}
                        >
                          {transaction.type === "buy" ? "-" : "+"}
                          {transaction.total}
                        </p>
                        <p className="text-gray-500 text-[6px]">{transaction.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Monthly Summary */}
            <motion.div variants={itemVariants} className="p-2">
              <h3 className="text-[10px] font-semibold mb-1">Monthly Summary</h3>
              <div className="bg-indigo-50 p-2 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-[8px] text-gray-700">May 2023</span>
                  <span className="text-[8px] text-indigo-700">View Report</span>
                </div>
                <div className="flex justify-between text-[8px] mb-1">
                  <div>
                    <p className="text-gray-500">Purchases</p>
                    <p className="text-red-600 font-medium">-$2,845.32</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Sales</p>
                    <p className="text-green-600 font-medium">+$1,256.75</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Dividends</p>
                    <p className="text-[#296880] font-medium">+$124.50</p>
                  </div>
                </div>
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: "35%" }}></div>
                </div>
                <div className="flex justify-between text-[8px] mt-0.5">
                  <span className="text-gray-500">Net: -$1,464.07</span>
                  <span className="text-indigo-700">35% of budget</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-200 flex justify-around items-center px-1">
            <div className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
              <Home size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">Home</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("chart")}>
              <PieChart size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">Analytics</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("history")}>
              <Clock size={12} className="text-indigo-600" />
              <span className="text-[8px] text-indigo-600">History</span>
            </div>
            <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
              <User size={12} className="text-gray-500" />
              <span className="text-[8px] text-gray-500">Profile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Labels */}
      <div className="flex justify-center gap-6 mt-4 flex-wrap md:flex-nowrap">
        <div className="w-[188px] text-center">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Portfolio</span>
        </div>
        <div className="w-[188px] text-center order-last md:order-none">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Asset Details</span>
        </div>
        <div className="w-[188px] text-center">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Transaction History</span>
        </div>
      </div>
    </div>
  )
}

