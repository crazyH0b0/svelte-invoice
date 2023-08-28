<script>
  import Search from '$lib/components/Icon/Search.svelte';
</script>

<div class=" relative flex w-full items-baseline">
  <div class=" mr-2 text-pastelPurple mt-auto">
    <Search />
  </div>
  <input
    type="text"
    class=" w-full md:w-[14rem] border-b-2 border-dashed border-b-pastelPurple bg-transparent
     font-sansSerif text-base lg:text-xl text-black outline-none focus:border-solid focus:border-b-lavenderIndigo"
    placeholder="Search by keyword"
  />
  <button class=" font-sansSerif text-lg font-black text-pastelPurple lg:text-xl">Search</button>
</div>
