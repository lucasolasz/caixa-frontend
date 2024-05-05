import React from 'react'
import FotoLogin from '../FotoLogin/FotoLogin'

const Singin = () => {
    return (
       
        <section class="relative py-20 2xl:py-10 overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap -mx-4">
        <FotoLogin/>
        <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div class="max-w-lg lg:pt-8 2xl:pt-16 lg:pb-8 mx-auto 2xl:mr-0">
            <h3 class="font-heading text-5xl sm:text-6xl text-gray-900 font-bold mb-4">Bem vindo!</h3>
            <form action="">
              <div class="mb-6">
                <label class="block mb-1.5 text-gray-900" for="">Email</label>
                <input class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded" type="email" placeholder="Seu email"/>
              </div>
              <div class="mb-6">
                <label class="block mb-1.5 text-gray-900" for="">Senha</label>
                <div class="relative">
                  <input class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded" type="password" placeholder="Sua senha"/>
                  <button class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"/>
                </div>
              </div>
              <div class="flex mb-6 text-right">
                <a class="inline-block ml-auto text-gray-900 select-text hover:underline" href="#">Esqueci minha senha</a>
              </div>
              <button class="relative group block w-full mb-20 py-3 px-5 text-center text-sm font-semibold text-white bg-orange-600 rounded overflow-hidden hover:bg-orange-700" type="submit">
                <span class="relative">Entrar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    )
}

export default Singin