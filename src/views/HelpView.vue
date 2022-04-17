<script setup>
import Box from "@/components/Box.vue";
import BitcoinIcon from "@/components/icons/IconBitcoin.vue";
import DonateIcon from "@/components/icons/IconDonate.vue";
</script>

<template>
  <main>
    <Box>
      <template #icon>
        <BitcoinIcon />
      </template>
      <template #heading>Bitcoin</template>
      Faça uma doação em bitcoin
    </Box>
    <Box>
      <template #icon>
        <DonateIcon />
      </template>
      <template #heading>Pix</template>
      Faça uma doação em pix
    </Box>
  </main>
</template>
