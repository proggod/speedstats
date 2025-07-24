import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowUpDown, GraduationCap, Calculator, Award, BarChart3, TrendingUp, Users, BookOpen, Building } from 'lucide-react';
import './App.css';

// Main Dashboard Component
const MainDashboard = ({ onNavigate }) => {
  const handleButtonClick = (buttonName) => {
    if (buttonName === "2025 School Rankings") {
      onNavigate('school-rankings');
    } else {
      alert(`${buttonName} coming soon! For now, only School Rankings is available.`);
    }
  };

  const statisticsCards = [
    {
      title: "2025 School Rankings",
      description: "Compare PreK-12 education rankings with per-student funding across all 50 states",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      available: true
    },
    {
      title: "College Statistics", 
      description: "University rankings, tuition costs, graduation rates, and admission data",
      icon: <Building className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      available: false
    },
    {
      title: "Teacher Salaries",
      description: "Comprehensive analysis of teacher compensation across states and districts",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600", 
      hoverColor: "hover:from-green-600 hover:to-green-700",
      available: false
    },
    {
      title: "Student Performance",
      description: "Test scores, graduation rates, and academic achievement metrics",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700", 
      available: false
    },
    {
      title: "Education Trends",
      description: "Historical data and trending patterns in American education",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
      available: false
    },
    {
      title: "Budget Analysis",
      description: "Education spending breakdowns, budget allocations, and financial trends",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
      available: false
    },
    {
      title: "State Comparisons",
      description: "Side-by-side analysis of education systems across different states",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      hoverColor: "hover:from-pink-600 hover:to-pink-700",
      available: false
    },
    {
      title: "Research & Reports",
      description: "Educational research findings, policy analysis, and comprehensive reports",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      hoverColor: "hover:from-teal-600 hover:to-teal-700",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Education Statistics Hub</h1>
              <p className="text-gray-600 mt-1">Comprehensive data and analysis for American education</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  2025 Data
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Education Data & Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into comprehensive education statistics, rankings, and trends across the United States. 
            Compare states, analyze funding, and discover insights that matter.
          </p>
        </div>

        {/* Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {statisticsCards.map((card, index) => (
            <div key={index} className="group relative">
              <button
                onClick={() => handleButtonClick(card.title)}
                className={`
                  w-full p-6 rounded-xl shadow-lg transform transition-all duration-200 
                  ${card.available ? 'cursor-pointer hover:scale-105 hover:shadow-xl' : 'cursor-not-allowed opacity-75'}
                  bg-gradient-to-r ${card.color} ${card.available ? card.hoverColor : ''}
                  text-white relative overflow-hidden
                `}
                disabled={!card.available}
              >
                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {card.title}
                  </h3>
                  <p className="text-white text-opacity-90 text-sm text-center leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-4 flex justify-center">
                    {card.available ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white">
                        Available Now
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
                {card.available && (
                  <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Statistics Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
              <div className="text-gray-600">States Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$24K</div>
              <div className="text-gray-600">Highest Funding/Student</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$7.6K</div>
              <div className="text-gray-600">Lowest Funding/Student</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
              <div className="text-gray-600">Latest Data Year</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Data sourced from US News & World Report, NEA, and Education Data Initiative</p>
          <p className="mt-2">© 2025 Education Statistics Hub. Built for educational analysis and research.</p>
        </div>
      </div>
    </div>
  );
};

// School Rankings Component
const SchoolRankings = ({ onNavigate }) => {
  const [sortField, setSortField] = useState('preK12Rank');
  const [sortDirection, setSortDirection] = useState('asc');

  const stateData = [
    { state: 'Massachusetts', fundingPerStudent: 17058, preK12Rank: 1, region: 'Northeast' },
    { state: 'Connecticut', fundingPerStudent: 20635, preK12Rank: 2, region: 'Northeast' },
    { state: 'New Jersey', fundingPerStudent: 20021, preK12Rank: 3, region: 'Northeast' },
    { state: 'Vermont', fundingPerStudent: 19400, preK12Rank: 4, region: 'Northeast' },
    { state: 'New Hampshire', fundingPerStudent: 16893, preK12Rank: 5, region: 'Northeast' },
    { state: 'Virginia', fundingPerStudent: 12000, preK12Rank: 6, region: 'South' },
    { state: 'Minnesota', fundingPerStudent: 14000, preK12Rank: 7, region: 'Midwest' },
    { state: 'Wisconsin', fundingPerStudent: 13500, preK12Rank: 8, region: 'Midwest' },
    { state: 'Delaware', fundingPerStudent: 16000, preK12Rank: 9, region: 'South' },
    { state: 'Utah', fundingPerStudent: 7628, preK12Rank: 10, region: 'West' },
    { state: 'Pennsylvania', fundingPerStudent: 16395, preK12Rank: 11, region: 'Northeast' },
    { state: 'Washington', fundingPerStudent: 15000, preK12Rank: 12, region: 'West' },
    { state: 'Colorado', fundingPerStudent: 12000, preK12Rank: 13, region: 'West' },
    { state: 'New York', fundingPerStudent: 24040, preK12Rank: 14, region: 'Northeast' },
    { state: 'Maine', fundingPerStudent: 15500, preK12Rank: 15, region: 'Northeast' },
    { state: 'Illinois', fundingPerStudent: 15000, preK12Rank: 16, region: 'Midwest' },
    { state: 'Ohio', fundingPerStudent: 13000, preK12Rank: 17, region: 'Midwest' },
    { state: 'Iowa', fundingPerStudent: 12500, preK12Rank: 18, region: 'Midwest' },
    { state: 'North Dakota', fundingPerStudent: 14000, preK12Rank: 19, region: 'Midwest' },
    { state: 'Wyoming', fundingPerStudent: 16224, preK12Rank: 20, region: 'West' },
    { state: 'Maryland', fundingPerStudent: 15300, preK12Rank: 21, region: 'South' },
    { state: 'Nebraska', fundingPerStudent: 13500, preK12Rank: 22, region: 'Midwest' },
    { state: 'Rhode Island', fundingPerStudent: 17500, preK12Rank: 23, region: 'Northeast' },
    { state: 'Kansas', fundingPerStudent: 12800, preK12Rank: 24, region: 'Midwest' },
    { state: 'South Dakota', fundingPerStudent: 10000, preK12Rank: 25, region: 'Midwest' },
    { state: 'Oregon', fundingPerStudent: 12000, preK12Rank: 26, region: 'West' },
    { state: 'Indiana', fundingPerStudent: 11500, preK12Rank: 27, region: 'Midwest' },
    { state: 'Florida', fundingPerStudent: 11000, preK12Rank: 28, region: 'South' },
    { state: 'Montana', fundingPerStudent: 12000, preK12Rank: 29, region: 'West' },
    { state: 'Michigan', fundingPerStudent: 12500, preK12Rank: 30, region: 'Midwest' },
    { state: 'Missouri', fundingPerStudent: 11000, preK12Rank: 31, region: 'Midwest' },
    { state: 'Alaska', fundingPerStudent: 17726, preK12Rank: 32, region: 'West' },
    { state: 'North Carolina', fundingPerStudent: 9500, preK12Rank: 33, region: 'South' },
    { state: 'Tennessee', fundingPerStudent: 10800, preK12Rank: 34, region: 'South' },
    { state: 'Texas', fundingPerStudent: 10500, preK12Rank: 35, region: 'South' },
    { state: 'Hawaii', fundingPerStudent: 15000, preK12Rank: 36, region: 'West' },
    { state: 'Idaho', fundingPerStudent: 9364, preK12Rank: 37, region: 'West' },
    { state: 'Georgia', fundingPerStudent: 10500, preK12Rank: 38, region: 'South' },
    { state: 'Kentucky', fundingPerStudent: 11500, preK12Rank: 39, region: 'South' },
    { state: 'California', fundingPerStudent: 13000, preK12Rank: 40, region: 'West' },
    { state: 'Arkansas', fundingPerStudent: 13258, preK12Rank: 41, region: 'South' },
    { state: 'South Carolina', fundingPerStudent: 11000, preK12Rank: 42, region: 'South' },
    { state: 'West Virginia', fundingPerStudent: 12500, preK12Rank: 43, region: 'South' },
    { state: 'Oklahoma', fundingPerStudent: 11311, preK12Rank: 44, region: 'South' },
    { state: 'Arizona', fundingPerStudent: 10090, preK12Rank: 45, region: 'West' },
    { state: 'Mississippi', fundingPerStudent: 9500, preK12Rank: 46, region: 'South' },
    { state: 'Alabama', fundingPerStudent: 13461, preK12Rank: 47, region: 'South' },
    { state: 'Nevada', fundingPerStudent: 10000, preK12Rank: 48, region: 'West' },
    { state: 'Louisiana', fundingPerStudent: 12500, preK12Rank: 49, region: 'South' },
    { state: 'New Mexico', fundingPerStudent: 11500, preK12Rank: 50, region: 'West' }
  ];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...stateData].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (sortField === 'state') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
  });

  const getSortIcon = (field) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4" />;
    return sortDirection === 'asc' 
      ? <ChevronUp className="w-4 h-4" />
      : <ChevronDown className="w-4 h-4" />;
  };

  const getRegionColor = (region) => {
    const colors = {
      'Northeast': 'bg-blue-100 text-blue-800',
      'South': 'bg-orange-100 text-orange-800', 
      'Midwest': 'bg-green-100 text-green-800',
      'West': 'bg-red-100 text-red-800'
    };
    return colors[region] || 'bg-gray-100 text-gray-800';
  };

  const getRankBadge = (rank) => {
    if (rank <= 10) return 'bg-green-100 text-green-800';
    if (rank <= 25) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getEfficiencyBadge = (rank, funding) => {
    const efficiency = (51 - rank) / (funding / 1000);
    if (efficiency > 3.5) return 'bg-green-100 text-green-800 border border-green-300';
    if (efficiency > 2.5) return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
    return 'bg-red-100 text-red-800 border border-red-300';
  };

  const calculateStats = () => {
    const avgFunding = stateData.reduce((sum, s) => sum + s.fundingPerStudent, 0) / stateData.length;
    const maxFunding = Math.max(...stateData.map(s => s.fundingPerStudent));
    const minFunding = Math.min(...stateData.map(s => s.fundingPerStudent));
    
    return { avgFunding, maxFunding, minFunding };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                ← Back to Dashboard
              </button>
              <div className="h-6 border-l border-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">Education Statistics Hub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                School Rankings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                2025 US News PreK-12 Education Rankings vs School Funding by State
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Official US News & World Report 2025 PreK-12 education rankings compared with per-student funding. Click column headers to sort data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-50">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">${Math.round(stats.avgFunding).toLocaleString()}</div>
                <div className="text-gray-600 font-medium">Average Funding per Student</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">${stats.maxFunding.toLocaleString()}</div>
                <div className="text-gray-600 font-medium">Highest Funding (New York)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">${stats.minFunding.toLocaleString()}</div>
                <div className="text-gray-600 font-medium">Lowest Funding (Utah)</div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-white">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th 
                    className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-blue-50 transition-colors duration-150"
                    onClick={() => handleSort('preK12Rank')}
                  >
                    <div className="flex items-center space-x-2">
                      <span>PreK-12 Rank</span>
                      <div className="text-blue-500">
                        {getSortIcon('preK12Rank')}
                      </div>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-blue-50 transition-colors duration-150"
                    onClick={() => handleSort('state')}
                  >
                    <div className="flex items-center space-x-2">
                      <span>State</span>
                      <div className="text-blue-500">
                        {getSortIcon('state')}
                      </div>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-blue-50 transition-colors duration-150"
                    onClick={() => handleSort('fundingPerStudent')}
                  >
                    <div className="flex items-center space-x-2">
                      <span>Funding per Student</span>
                      <div className="text-blue-500">
                        {getSortIcon('fundingPerStudent')}
                      </div>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center space-x-1">
                      <Calculator className="w-4 h-4" />
                      <span>Efficiency</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>Region</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {sortedData.map((state, index) => (
                  <tr key={state.state} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-150`}>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-sm ${getRankBadge(state.preK12Rank)}`}>
                        #{state.preK12Rank}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-bold text-gray-900">{state.state}</div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-bold text-gray-900">
                        ${state.fundingPerStudent.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {state.fundingPerStudent > stats.avgFunding ? '↗ Above average' : '↘ Below average'}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-bold shadow-sm ${getEfficiencyBadge(state.preK12Rank, state.fundingPerStudent)}`}>
                        {((51 - state.preK12Rank) / (state.fundingPerStudent / 1000)).toFixed(1)}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-sm ${getRegionColor(state.region)}`}>
                        {state.region}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                  <span className="text-2xl mr-3">🏆</span>
                  Top 10 PreK-12 Performers
                </h4>
                <div className="space-y-3 text-sm">
                  {stateData.slice(0, 10).map((state, i) => (
                    <div key={state.state} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-gray-900">{i + 1}. {state.state}</span>
                      <span className="text-gray-600 font-bold">${state.fundingPerStudent.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                  <span className="text-2xl mr-3">💡</span>
                  Efficiency Champions
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
                    <span className="font-bold text-gray-900">Utah:</span>
                    <div className="text-gray-600">#10 rank with lowest funding ($7,628)</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
                    <span className="font-bold text-gray-900">Virginia:</span>
                    <div className="text-gray-600">#6 rank with moderate funding ($12,000)</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-400">
                    <span className="font-bold text-gray-900">Wisconsin:</span>
                    <div className="text-gray-600">#8 rank with below-average funding ($13,500)</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-400">
                    <span className="font-bold text-gray-900">Minnesota:</span>
                    <div className="text-gray-600">#7 rank with moderate funding ($14,000)</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                  <span className="text-2xl mr-3">📊</span>
                  Key Insights
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start p-3 bg-green-50 rounded-lg">
                    <span className="text-green-500 mr-3 text-lg">•</span>
                    <span className="text-gray-700 font-medium">Massachusetts leads PreK-12 rankings</span>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-500 mr-3 text-lg">•</span>
                    <span className="text-gray-700 font-medium">Northeast dominates top 5 positions</span>
                  </div>
                  <div className="flex items-start p-3 bg-red-50 rounded-lg">
                    <span className="text-red-500 mr-3 text-lg">•</span>
                    <span className="text-gray-700 font-medium">New York: Highest funding but ranks #14</span>
                  </div>
                  <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                    <span className="text-purple-500 mr-3 text-lg">•</span>
                    <span className="text-gray-700 font-medium">Utah achieves top 10 with 68% less funding than NY</span>
                  </div>
                  <div className="flex items-start p-3 bg-orange-50 rounded-lg">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span className="text-gray-700 font-medium">Maryland ranks #21 with average funding</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-300 text-center">
              <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
                <strong className="text-gray-900">Sources:</strong> US News & World Report 2025 Best States PreK-12 Education Rankings, NEA Rankings and Estimates 2025, Education Data Initiative 2025. 
                Efficiency calculated as (51-rank)/(funding/1000). Higher scores indicate better educational outcomes per dollar spent.
                <br />
                <span className="font-semibold text-gray-800 mt-2 inline-block">Note:</span> Maryland ranks #21 in PreK-12 education specifically, not overall education category.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'dashboard' && <MainDashboard onNavigate={handleNavigate} />}
      {currentPage === 'school-rankings' && <SchoolRankings onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;

