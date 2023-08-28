<script>
  import { page } from '$app/stores';
  import Close from './Icon/Close.svelte';
  import Hamburger from './Icon/Hamburger.svelte';

  let isNavShowing = false;
</script>

<svelte:head>
  {#if isNavShowing}
    <style lang="postcss">
      body {
        @apply overflow-hidden md:overflow-auto;
      }
    </style>
  {/if}
</svelte:head>
<button
  class="fixed top-6 z-navBarToggle right-6 md:hidden"
  on:click={() => (isNavShowing = !isNavShowing)}
  class:text-goldenFizz={isNavShowing}
  class:text-daisyBush={!isNavShowing}
>
  {#if isNavShowing}
    <Close width={32} height={32} />
  {:else}
    <Hamburger width={32} height={32} />
  {/if}
</button>
<header
  class=" fixed z-navBar transition-transform md:col-span-3 bg-daisyBush -translate-x-full md:translate-x-0 text-center md:relative w-full md:h-full h-screen"
  class:translate-x-0={isNavShowing}
>
  <div class=" mt-10 mb-10">
    <a href="/invoices">
      <img src="/images/logo.svg" alt="The Dollar Holler " class=" mx-auto" />
    </a>
  </div>
  <nav>
    <ul class=" list-none text-2xl font-bold">
      <li><a href="/invoices" class:active={$page.url.pathname === '/invoices'}>Invoices</a></li>
      <li><a href="/clients" class:active={$page.url.pathname === '/clients'}>Clients</a></li>
      <li><a href="#">Setting</a></li>
      <li><a href="#">logout</a></li>
    </ul>
  </nav>
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
