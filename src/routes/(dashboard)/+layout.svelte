<div class=" grid grid-cols-12 gap-x-16 bg-whisper min-h-screen">
  <header class=" col-span-3 bg-daisyBush text-center">
    <div>
      <a href="/invoices">
        <img src="/images/logo.svg" alt="The Dollar Holler " class=" mx-auto" />
      </a>
      <nav>
        <ul class=" list-none text-2xl font-bold">
          <li><a href="/invoices">Invoices</a></li>
          <li><a href="/clients">Clients</a></li>
          <li><a href="#">Setting</a></li>
          <li><a href="#">logout</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <slot />
  </main>
</div>

<style lang="postcss">
  nav ul li {
    @apply mb-6;
  }
  nav ul li a {
    @apply text-white hover:text-goldenFizz;
  }
</style>
