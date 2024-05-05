import React from 'react'
import './Lancamentos.css';

const Lancamentos = () => {
    return (

        <section class="py-3">
            <div class="container px-4 mx-auto">
                <div class="p-8 rounded-xl">
                    <div class="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div class="w-full sm:w-auto px-4 mb-8 sm:mb-0">
                            <h4 class="text-2xl font-bold tracking-wide mb-1">Novo Lançamento</h4>
                            <p class="text-sm text-black-300">Realize um novo lançamento no caixa</p>
                        </div>
                        <div class="w-full sm:w-auto px-4">
                            <div>
                                <a class="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-200 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200" href="#">Cancelar</a>
                                <a class="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-orange-50 bg-orange-500 hover:bg-orange-600 rounded-lg transition duration-200" href="#">Lançar</a></div>
                        </div>
                    </div>
                    <form action="">
                        <div class="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
                            <div class="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                                <span class="text-sm font-medium">Descrição Lançamento</span>
                            </div>
                            <div class="w-full sm:w-2/3 px-4">
                                <div class="max-w-xl">
                                    <input class="block py-4 px-3 w-full text-sm text-gray-500 placeholder-gray-600 font-medium outline-none bg-transparent border border-gray-400 focus-within:border-orange-600 rounded-lg" id="formInput1-3" type="text" placeholder="Adicione uma descrição" />
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
                            <div class="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                                <span class="text-sm font-medium">Tipo Lançamento</span>
                            </div>
                            <div class="w-full sm:w-2/3 px-4">
                                <div class="max-w-xl relative block px-3 w-full font-medium border border-gray-400 focus-within:border-orange-600 rounded-lg">
                                    <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-600 px-1 bg-app">Tipo Lançamento</span>
                                    <span class="absolute top-1/2 right-0 mr-5 transform -translate-y-1/2">
                                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z" fill="#3D485B"></path>
                                        </svg>
                                    </span>
                                    <select class="w-full py-4 text-gray-500 font-semibold appearance-none bg-transparent outline-none" id="formInput2-9" name="">
                                        <option class="" value="2">Dízimo</option>
                                        <option class="" value="3">Oferta</option>
                                        <option class="" value="4">Cantina domingo à noite</option>
                                        <option class="" value="5">Cantina domingo de manhã</option>
                                        <option class="" value="6">Cantina quarta feira</option>
                                        <option class="" value="7">Almoço</option>
                                        <option class="" value="8">Ação social</option>
                                        <option class="" value="9">Sociedade de mulheres</option>
                                        <option class="" value="10">Sociedade de jovens</option>
                                        <option class="" value="11">Sociedade de juvenis</option>
                                        <option class="" value="12">Sociedade de homens</option>
                                        <option class="" value="13">Complemento administrativo</option>
                                        <option class="" value="14">Internet</option>
                                        <option class="" value="15">Aluguel</option>
                                        <option class="" value="16">Luz</option>
                                        <option class="" value="17">Subsídio pastora</option>
                                        <option class="" value="18">Serviço faxina</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
                            <div class="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                                <span class="text-sm font-medium">Entrada/Saída</span>
                            </div>
                            <div class="w-full sm:w-2/3 px-4">
                                <div class="max-w-xl relative block px-3 w-full font-medium border border-gray-400 focus-within:border-orange-600 rounded-lg">
                                    <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-600 px-1 bg-app">Entrada/Saída</span>
                                    <span class="absolute top-1/2 right-0 mr-5 transform -translate-y-1/2">
                                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z" fill="#3D485B"></path>
                                        </svg>
                                    </span>
                                    <select class="w-full py-4 text-gray-500 font-semibold appearance-none bg-transparent outline-none" id="formInput2-9" name="">
                                        <option class="" value="1">Entrada</option>
                                        <option class="" value="2">Saída</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap items-center -mx-4 pb-8 mb-8">
                            <div class="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                                <span class="text-sm font-medium">Valor R$</span>
                            </div>
                            <div class="w-full sm:w-2/3 px-4">
                                <div class="max-w-sm">
                                    <input class="block py-4 px-3 w-full text-sm text-gray-500 placeholder-gray-600 font-medium outline-none bg-transparent border border-gray-400 focus-within:border-orange-600 rounded-lg" id="formInput1-3" type="text" placeholder="R$ 0.00" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>




    )
}

export default Lancamentos