<template>
  <div class="flex flex-col p-5">
    <h1 class="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-semibold mb-4">User Growth Over Time</h2>
      <canvas id="userGrowthChart" width="400" height="200"></canvas>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="bg-blue-500 text-white p-4 rounded shadow flex flex-col">
        <h2 class="text-xl font-semibold">Total Users</h2>
        <p class="text-2xl">1,245</p>
        <p class="mt-2 text-sm">+10% from last month</p>
      </div>
      <div class="bg-green-500 text-white p-4 rounded shadow flex flex-col">
        <h2 class="text-xl font-semibold">Active Users</h2>
        <p class="text-2xl">950</p>
        <p class="mt-2 text-sm">+5% from last week</p>
      </div>
      <div class="bg-yellow-500 text-white p-4 rounded shadow flex flex-col">
        <h2 class="text-xl font-semibold">New Signups</h2>
        <p class="text-2xl">150</p>
        <p class="mt-2 text-sm">+25% from yesterday</p>
      </div>
    </div>

    <div class="bg-purple-500 text-white p-4 rounded shadow mt-6">
      <h2 class="text-xl font-semibold">Recent Activity</h2>
      <ul class="mt-2">
        <li class="border-b border-purple-300 py-2">User John Doe signed up at 10:05 AM</li>
        <li class="border-b border-purple-300 py-2">User Jane Smith updated their profile at 11:15 AM</li>
        <li class="border-b border-purple-300 py-2">User Mike Johnson made a purchase of $59.99 at 12:00 PM</li>
        <li class="border-b border-purple-300 py-2">User Emily Davis logged in at 1:45 PM</li>
      </ul>
    </div>


  </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'Dashboard',
  setup() {
    onMounted(() => {
      const ctx = document.getElementById('userGrowthChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'New Users',
            data: [50, 100, 150, 200, 250, 300, 350],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });

    return {};
  },
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
