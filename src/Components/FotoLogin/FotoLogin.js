import React from 'react'

const FotoLogin = () => {
    return (
        <div class="w-full lg:w-1/2 px-4 order-last lg:order-first">
            <div class="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full">
                <img class="block w-full h-142 sm:h-full object-cover rounded" src="https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2414.jpg?t=st=1714868960~exp=1714869560~hmac=8b0c5f57ba350c133014e2db49cb6068b17cf6d6224406a50ed854cfb69e9513" alt="" />
                <div class="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10">
                    <div class="max-w-md mx-auto">
                        <h4 class="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-8">Entre em sua conta</h4>
                        <div class="md:flex mb-20">
                            <div>
                                <p class="text-lg font-semibold text-gray-200">A plataforma que te ajuda a organizar suas finanças</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FotoLogin