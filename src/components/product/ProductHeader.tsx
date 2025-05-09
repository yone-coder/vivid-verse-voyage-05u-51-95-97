
import React, { useState } from "react";
import { Heart, Share, ShoppingCart, Search, Home, MessageSquare, Grid, Image, Settings, Star, Package, Star as StarIcon } from "lucide-react";
import { useScrollProgress } from "./header/useScrollProgress";
import LiveBadge from "./header/LiveBadge";
import SearchBar from "./header/SearchBar";
import BackButton from "./header/BackButton";
import HeaderActionButton from "./header/HeaderActionButton";
import CartButton from "./header/CartButton";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const ProductHeader = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { progress } = useScrollProgress();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("details");

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const tabs: Tab[] = [
    { id: "overview", label: "Overview", icon: <Home className="h-3.5 w-3.5" /> },
    { id: "specifications", label: "Specifications", icon: <Settings className="h-3.5 w-3.5" /> },
    { id: "description", label: "Description", icon: <MessageSquare className="h-3.5 w-3.5" /> },
    { id: "reviews", label: "Reviews (248)", icon: <Star className="h-3.5 w-3.5" /> },
    { id: "qna", label: "Q&A (56)", icon: <MessageSquare className="h-3.5 w-3.5" /> },
    { id: "shipping", label: "Shipping", icon: <Package className="h-3.5 w-3.5" /> },
    { id: "returns", label: "Returns", icon: <StarIcon className="h-3.5 w-3.5" /> },
    { id: "related", label: "Related", icon: <Grid className="h-3.5 w-3.5" /> }
  ];
  
  return (
    <div 
      className="fixed top-0 left-0 right-0 z-30 flex flex-col transition-all duration-700"
      style={{
        boxShadow: `0 ${progress * 4}px ${progress * 8}px rgba(0, 0, 0, ${progress * 0.08})`
      }}
    >
      {/* Main Header */}
      <div 
        className="py-2 px-3 w-full transition-all duration-700"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${progress * 0.95})`,
          backdropFilter: `blur(${progress * 8}px)`,
        }}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-2 flex-1">
            <BackButton progress={progress} />
            {progress < 0.5 ? (
              <LiveBadge progress={progress} />
            ) : (
              <SearchBar 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                progress={progress} 
              />
            )}
          </div>

          <div className="flex gap-2">
            <HeaderActionButton 
              Icon={Heart} 
              active={isFavorite} 
              onClick={toggleFavorite} 
              progress={progress} 
              activeColor="#f43f5e" // Changed to more vibrant red
            />

            <HeaderActionButton 
              Icon={Share} 
              progress={progress} 
            />

            <CartButton progress={progress} />
          </div>
        </div>
      </div>

      {/* AliExpress-style Tabs Navigation */}
      <div
        className="w-full transition-all duration-700 overflow-hidden"
        style={{
          maxHeight: progress > 0.3 ? "40px" : "0px",
          opacity: progress,
          backgroundColor: `rgba(255, 255, 255, ${progress * 0.98})`,
          backdropFilter: `blur(${progress * 8}px)`,
        }}
      >
        <div className="w-full px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 relative px-2 py-2 text-xs font-medium whitespace-nowrap text-center transition-all duration-200 flex flex-col items-center ${
                  activeTab === tab.id
                    ? "text-red-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={{
                  flexBasis: "25%",
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="mt-0.5">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
