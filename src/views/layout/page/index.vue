<template>
    <div class="index">
        <card />
        <line-chart />
    </div>
</template>

<script>
import Card from '@/components/card.vue';
import LineChart from '@/components/lineChart.vue';

export default {
  components: {
    Card,
    LineChart,
  },
};
</script>
