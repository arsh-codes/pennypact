import * as Chart from 'chart.js';

import { PieChart, TrendingUp } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const DashboardPreview = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Initialize Chart.js when component mounts
    if (chartRef.current && !chartInstance.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // Register all necessary Chart.js components
      Chart.Chart.register(
        Chart.CategoryScale,
        Chart.LinearScale,
        Chart.BarElement,
        Chart.BarController,
        Chart.Title,
        Chart.Tooltip,
        Chart.Legend
      );

      chartInstance.current = new Chart.Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Expenses',
            data: [1200, 1900, 800, 1600, 2000, 1400],
            backgroundColor: 'rgba(16, 185, 129, 0.8)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 1,
            borderRadius: 8,
          }, {
            label: 'Income',
            data: [2400, 2600, 2200, 2800, 3200, 2900],
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1,
            borderRadius: 8,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#a1a1aa'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#a1a1aa'
              },
              grid: {
                color: 'rgba(161, 161, 170, 0.1)'
              }
            },
            y: {
              ticks: {
                color: '#a1a1aa'
              },
              grid: {
                color: 'rgba(161, 161, 170, 0.1)'
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-blue-900/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Beautiful Dashboard
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Experience financial clarity with our intuitive and visually stunning interface.
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-700/50 shadow-2xl">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">Monthly Overview</h3>
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">+12.5%</span>
                  </div>
                </div>
                
                <div className="h-64 bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-4">
                  <canvas ref={chartRef} style={{width: '100%', height: '100%'}}></canvas>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zinc-400">Total Balance</span>
                    <PieChart className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">$12,485.50</div>
                </div>

                <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50">
                  <h4 className="font-semibold mb-4">Recent Transactions</h4>
                  <div className="space-y-3">
                    {['Coffee Shop', 'Grocery Store', 'Gas Station'].map((item, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-zinc-400">{item}</span>
                        <span className="font-medium">-${(15 + i * 10)}.00</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;