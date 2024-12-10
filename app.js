import { useState } from 'react';

const Navigation = ({ currentPage, setCurrentPage, connected, setConnected }) => (
  <nav className="fixed w-full bg-black/95 border-b border-white/10 z-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-12">
          <span className="text-xl font-mono font-bold tracking-wider">FoilAI</span>
          <div className="flex gap-8">
            {['trade', 'stake', 'analytics'].map((page) => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`font-mono uppercase transition-all border-b-2 ${
                  currentPage === page 
                    ? 'text-white border-white' 
                    : 'text-white/60 border-transparent hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-white/90 transition-all"
          >
            Purchase
          </a>
          <button 
            onClick={() => setConnected(!connected)}
            className="px-4 py-2 bg-white/10 text-white font-medium rounded border border-white/20 hover:bg-white/20 transition-all"
          >
            {connected ? 'Connected' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const StatCard = ({ label, value }) => (
  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
    <div className="text-white/60 text-sm">{label}</div>
    <div className="text-xl mt-1">{value}</div>
  </div>
);

// Trading Page Component
const TradePage = ({ connected }) => (
  <div className="container mx-auto px-4 pt-20">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Price" value="$0.00" />
          <StatCard label="24h Change" value="+0.00%" />
          <StatCard label="24h Volume" value="$0.00" />
          <StatCard label="Market Cap" value="$0.00" />
        </div>
        
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h2 className="text-xl mb-6">Swap Tokens</h2>
          <div className="space-y-4">
            <div className="bg-black/50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-white/60">From</span>
                <span className="text-white/60">Balance: 0.00</span>
              </div>
              <input 
                type="text" 
                placeholder="0.0" 
                className="bg-transparent text-2xl outline-none w-full"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">↓</button>
            </div>
            <div className="bg-black/50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-white/60">To</span>
                <span className="text-white/60">Balance: 0.00</span>
              </div>
              <input 
                type="text" 
                placeholder="0.0" 
                className="bg-transparent text-2xl outline-none w-full"
                readOnly
              />
            </div>
            <button className="w-full py-3 bg-white text-black rounded-lg hover:bg-white/90">
              {connected ? 'Swap' : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-lg mb-4">Market Info</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-white/60">Price Impact</span>
              <span>0.00%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Liquidity</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Staking Page Component
const StakePage = ({ connected }) => (
  <div className="container mx-auto px-4 pt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white/5 p-6 rounded-lg border border-white/10">
        <h2 className="text-xl mb-6">Stake FoilAI</h2>
        <div className="space-y-4">
          <div className="bg-black/50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-white/60">Amount</span>
              <span className="text-white/60">Balance: 0.00</span>
            </div>
            <input 
              type="text" 
              placeholder="0.0" 
              className="bg-transparent text-2xl outline-none w-full"
            />
          </div>
          <button className="w-full py-3 bg-white text-black rounded-lg hover:bg-white/90">
            {connected ? 'Stake' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Analytics Page Component
const AnalyticsPage = () => (
  <div className="container mx-auto px-4 pt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard label="Total Value Locked" value="$0.00" />
      <StatCard label="24h Volume" value="$0.00" />
      <StatCard label="Transactions" value="0" />
      <StatCard label="Holders" value="0" />
    </div>
    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
      <h2 className="text-xl mb-6">Network Analytics</h2>
      <div className="h-64 flex items-center justify-center text-white/60">
        Analytics Chart Area
      </div>
    </div>
  </div>
);

export default function FoilAIDApp() {
  const [currentPage, setCurrentPage] = useState('trade');
  const [connected, setConnected] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'trade':
        return <TradePage connected={connected} />;
      case 'stake':
        return <StakePage connected={connected} />;
      case 'analytics':
        return <AnalyticsPage />;
      default:
        return <TradePage connected={connected} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        connected={connected}
        setConnected={setConnected}
      />
      {renderPage()}
    </div>
  );
}
