import React from 'react';
import { Download, FileSpreadsheet, Table } from 'lucide-react';
import { HISTORICAL_RESULTS } from '../constants';

export default function DataExport() {
  const downloadCSV = () => {
    // Define CSV headers
    const headers = ['Year', 'Voter Turnout', 'Winner', 'Electoral Votes', 'Total Votes'];
    
    // Process data into rows
    const rows = HISTORICAL_RESULTS.map(item => [
      item.year,
      item.turnout,
      item.winner.replace(/,/g, ''), // Ensure no commas in the field values
      item.electoralVotes,
      item.totalVotes
    ]);

    // Construct CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    // Create a blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `us_historical_election_results_${new Date().getFullYear()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <FileSpreadsheet size={120} />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Download size={20} />
          </div>
          <h3 className="text-xl font-bold">Election Data Archive</h3>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
          Download comprehensive historical election datasets, including turnout statistics, electoral college splits, and popular vote totals for research and analysis.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Table size={16} className="text-blue-400" />
              <span className="text-sm font-medium">Historical Results (2000-2020)</span>
            </div>
            <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-slate-300">CSV</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-white/10">
            <div className="flex items-center gap-3 opacity-50">
              <Table size={16} className="text-slate-400" />
              <span className="text-sm font-medium">Voter Demographics (Coming Soon)</span>
            </div>
            <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-500">JSON</span>
          </div>
        </div>

        <button 
          onClick={downloadCSV}
          className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-blue-500/20"
        >
          <Download size={18} />
          Export Dataset as CSV
        </button>
      </div>
    </div>
  );
}
