<script>
  import { page } from '$app/stores';
</script>

<header class=" col-span-3 bg-daisyBush text-center">
  <div>
    <a href="/invoices">
      <img src="/images/logo.svg" alt="The Dollar Holler " class=" mx-auto" />
    </a>
    <nav>
      <ul class=" list-none text-2xl font-bold">
        <li><a href="/invoices" class:active={$page.url.pathname === '/invoices'}>Invoices</a></li>
        <li><a href="/clients" class:active={$page.url.pathname === '/clients'}>Clients</a></li>
        <li><a href="#">Setting</a></li>
        <li><a href="#">logout</a></li>
      </ul>
    </nav>
  </div>
</header>

<style lang="postcss">
  nav ul li {
    @apply mb-6;
  }
  nav ul li a {
    @apply text-white hover:text-goldenFizz px-8;
  }

  nav ul li a.active {
    @apply text-robinEggBlue transition-[padding];
    background: url('/images/active-nav--left.svg') no-repeat left top,
      url('/images/active-nav--right.svg') no-repeat right top;
  }
  nav ul li a.active:hover {
    @apply px-9;
  }
</style>
