import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Truck, ShieldCheck } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: "SuperTech Store",
    image: "https://picsum.photos/seed/vendor1/120/120",
    rating: 4.8,
    sales: "10.5k",
    followers: "23.4k",
    topSeller: true,
    fastShipping: true,
    verified: true,
    topProducts: [
      { id: 101, image: "https://picsum.photos/seed/product101/70/70", price: "$19.99" },
      { id: 102, image: "https://picsum.photos/seed/product102/70/70", price: "$24.50" },
      { id: 103, image: "https://picsum.photos/seed/product103/70/70", price: "$15.75" }
    ]
  },
  {
    id: 2,
    name: "EcoFriendly Goods",
    image: "https://picsum.photos/seed/vendor2/120/120",
    rating: 4.9,
    sales: "8.7k",
    followers: "19.2k",
    topSeller: true,
    fastShipping: false,
    verified: true,
    topProducts: [
      { id: 201, image: "https://picsum.photos/seed/product201/70/70", price: "$12.99" },
      { id: 202, image: "https://picsum.photos/seed/product202/70/70", price: "$31.50" },
      { id: 203, image: "https://picsum.photos/seed/product203/70/70", price: "$22.25" }
    ]
  },
  {
    id: 3,
    name: "Fashion Forward",
    image: "https://picsum.photos/seed/vendor3/120/120",
    rating: 4.7,
    sales: "15.3k",
    followers: "32.1k",
    topSeller: true,
    fastShipping: true,
    verified: true,
    topProducts: [
      { id: 301, image: "https://picsum.photos/seed/product301/70/70", price: "$35.99" },
      { id: 302, image: "https://picsum.photos/seed/product302/70/70", price: "$18.50" },
      { id: 303, image: "https://picsum.photos/seed/product303/70/70", price: "$27.75" }
    ]
  },
  {
    id: 4,
    name: "Home Essentials",
    image: "https://picsum.photos/seed/vendor4/120/120",
    rating: 4.6,
    sales: "7.2k",
    followers: "12.5k",
    topSeller: false,
    fastShipping: true,
    verified: true,
    topProducts: [
      { id: 401, image: "https://picsum.photos/seed/product401/70/70", price: "$42.99" },
      { id: 402, image: "https://picsum.photos/seed/product402/70/70", price: "$15.75" },
      { id: 403, image: "https://picsum.photos/seed/product403/70/70", price: "$29.50" }
    ]
  },
  {
    id: 5,
    name: "Gadget World",
    image: "https://picsum.photos/seed/vendor5/120/120",
    rating: 4.9,
    sales: "20.1k",
    followers: "45.7k",
    topSeller: true,
    fastShipping: true,
    verified: true,
    topProducts: [
      { id: 501, image: "https://picsum.photos/seed/product501/70/70", price: "$89.99" },
      { id: 502, image: "https://picsum.photos/seed/product502/70/70", price: "$64.50" },
      { id: 503, image: "https://picsum.photos/seed/product503/70/70", price: "$112.75" }
    ]
  },
  {
    id: 6,
    name: "Beauty Express",
    image: "https://picsum.photos/seed/vendor6/120/120",
    rating: 4.7,
    sales: "12.3k",
    followers: "28.9k",
    topSeller: true,
    fastShipping: false,
    verified: true,
    topProducts: [
      { id: 601, image: "https://picsum.photos/seed/product601/70/70", price: "$21.99" },
      { id: 602, image: "https://picsum.photos/seed/product602/70/70", price: "$18.50" },
      { id: 603, image: "https://picsum.photos/seed/product603/70/70", price: "$34.75" }
    ]
  },
  {
    id: 7,
    name: "Sports Direct",
    image: "https://picsum.photos/seed/vendor7/120/120",
    rating: 4.5,
    sales: "5.8k",
    followers: "14.2k",
    topSeller: false,
    fastShipping: true,
    verified: false,
    topProducts: [
      { id: 701, image: "https://picsum.photos/seed/product701/70/70", price: "$45.99" },
      { id: 702, image: "https://picsum.photos/seed/product702/70/70", price: "$29.50" },
      { id: 703, image: "https://picsum.photos/seed/product703/70/70", price: "$52.75" }
    ]
  },
  {
    id: 8,
    name: "Electronic Hub",
    image: "https://picsum.photos/seed/vendor8/120/120",
    rating: 4.8,
    sales: "18.7k",
    followers: "37.3k",
    topSeller: true,
    fastShipping: true,
    verified: true,
    topProducts: [
      { id: 801, image: "https://picsum.photos/seed/product801/70/70", price: "$129.99" },
      { id: 802, image: "https://picsum.photos/seed/product802/70/70", price: "$75.50" },
      { id: 803, image: "https://picsum.photos/seed/product803/70/70", price: "$210.75" }
    ]
  }
];

const CompactVendorCard = ({ vendor }: { vendor: any }) => (
  <div className="flex-shrink-0 w-44 bg-white rounded-lg overflow-hidden border transition-all duration-300">
    <div className="relative">
      <img src={vendor.image} alt={vendor.name} className="w-full h-24 object-cover" />
      <div className="absolute top-1 left-1 flex gap-1">
        {vendor.topSeller && <div className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-sm flex items-center"><Award size={10} className="mr-0.5" />Top</div>}
        {vendor.fastShipping && <div className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-sm flex items-center"><Truck size={10} className="mr-0.5" />Fast</div>}
      </div>
      <div className="absolute top-1 right-1">
        <div className="bg-yellow-100 text-yellow-800 text-xs px-1.5 py-0.5 rounded-sm flex items-center">
          <Star size={10} className="mr-0.5 text-yellow-500 fill-yellow-500" />
          {vendor.rating}
        </div>
      </div>
      {vendor.verified && <div className="absolute bottom-1 right-1 bg-blue-500 text-white rounded-full p-0.5"><ShieldCheck size={10} /></div>}
    </div>
    <div className="p-2">
      <h3 className="font-bold text-xs truncate">{vendor.name}</h3>
      <div className="text-xs text-gray-500">{vendor.sales} sales</div>
    </div>
    <div className="px-2 pb-2">
      <div className="flex gap-1">
        {vendor.topProducts.map(product => (
          <div key={product.id} className="relative w-1/3 aspect-square group">
            <img src={product.image} className="w-full h-full object-cover rounded-sm border" />
            <div className="absolute inset-0 group-hover:bg-black/20 rounded-sm transition-all" />
            <span className="absolute bottom-0 left-0 right-0 text-xs text-white bg-black/50 px-1 opacity-0 group-hover:opacity-100">
              {product.price}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="px-2 pb-2">
      <button className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-1 px-2 rounded-sm">
        Visit Store
      </button>
    </div>
  </div>
);

const TopVendorsCompact = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    const node = scrollRef.current;
    if (!node) return;
    const { scrollLeft, scrollWidth, clientWidth } = node;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    node.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => node.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <div className="w-full sm:p-3 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <h2 className="text-sm sm:text-base font-bold text-gray-800">Top Vendors</h2>
          <span className="ml-2 px-1.5 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-sm">HOT</span>
        </div>
        <button className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center">
          View All <ChevronRight size={14} />
        </button>
      </div>

      <div className="relative">
        {showLeft && (
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow rounded-full p-1 -ml-1.5">
            <ChevronLeft size={16} />
          </button>
        )}
        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth" style={{ scrollPaddingLeft: '0.5rem' }}>
          <div className="flex pl-2 gap-2">
            {vendors.map(v => <CompactVendorCard key={v.id} vendor={v} />)}
            <div className="flex-none w-2" /> {/* Fake right padding */}
          </div>
        </div>
        {showRight && (
          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow rounded-full p-1 -mr-1.5">
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopVendorsCompact;