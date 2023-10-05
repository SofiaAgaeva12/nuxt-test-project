<template>
  <div class="product-catalog bg">
    <div class="product-container mt-8 md:mt-0 md:col-span-2 bg-black">
      <form action="#" method="POST" class="mt-5">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <label
                for="about"
                class="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <div class="mt-1">
                <textarea
                  name="about"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    mt-1
                    block
                    w-full
                    sm:text-sm
                    border border-gray-300
                    rounded-md
                  "
                />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company_website"
                  class="block text-sm font-medium text-gray-700"
                >
                  Link to Product Image
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="company_website"
                    class="
                      focus:ring-indigo-500 focus:border-indigo-500
                      flex-1
                      block
                      w-full
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                for="price"
                class="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    flex
                    items-center
                    pointer-events-none
                  "
                >
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="price"
                  class="
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    pl-7
                    pr-12
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  placeholder="0.00"
                />
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                class="
                  cursor
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-fuchsia-600
                  hover:bg-fuchsia-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-fuchsia-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import '@/css/tailwind.css'
export default {
  name: 'IndexPage'
}
</script>
