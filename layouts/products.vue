<template>
  <div>
    <header>
      <NuxtLink to="/">Skogsbrynets Verkstad</NuxtLink>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Prdoucts</NuxtLink></li>
          <li><NuxtLink to="/blogs">Blog</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>
          <li><NuxtLink to="/about">Om</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>

  </div>
</template>
<style scoped>
.router-link-exact-active {
  color:#afc0b4
}

</style>