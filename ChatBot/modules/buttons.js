function boton(msg,bot){
    let keyboard = bot.inlineKeyboard;
    let button = bot.inlineButton;
    switch(msg){
        case '/start':
        case '/back':
            return keyboard([
                [
                    // Boton Primera Fila
                    button('📦 Mostrar productos', {callback: '/show'}),
                    button('Métodos de pago 💳', {callback: "/pago"})
                ],
        
                [
                    // Boton segunda Fila
                    button('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
            ]);
        case '/show':
            return keyboard([
                [
                    // Boton Primera Fila
                    button('🔍 Buscar Productos', {callback: '/search'}),
                    button('Agregar al carrito 🛒', {callback: "/add"})
                ],
        
                [
                    // Boton segunda Fila
                    button('🛒 Consultar carrito', {callback: '/view'}),
                    button('Vaciar Carrito' , {callback: '/empty'})
                ],

                [
                    button('Volver al menú principal', {callback: '/back'})
                ]
            ]);
        case '/zona':
            return keyboard([
                [
                    button('Ciudad Chinita', {callback : '/map1'}),
                    button('Galerías Mall', {callback : '/map2'}),
                    button('Metro Sol', {callback : '/map3'})
                ],
                [
                    button('Volver al menú principal', {callback: '/back'})
                ]
            ]);

        case '/pago':
            return keyboard([
                [
                    // Boton Primera Fila
                    button('💵 Efectivo', {callback: '/efectivo'}),
                    button('Transferencias 💸', {callback: "/transfe"})
                ],
        
                [
                    // Boton segunda Fila
                    button('💰 Cryptos ( BTC | ETH | USDT )', {callback: '/criptos'})
                ],

                [
                    button('Volver al menú principal', {callback: '/back'})
                ]
            ]);
        case '/fact':
            return keyboard([
                [
                    button('Generar factura', {pay: true})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/view':
            return keyboard([
                [
                    button('🧾 Generar factura', {callback: '/fact'}),
                    button('Añadir al carrito 🛒', {callback: '/add'}),
                    button('Vaciar Carrito' , {callback: '/empty'})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/add':
            return keyboard([
                [
                    button('🧾 Generar factura', {callback: '/fact'}),
                    button('Añadir otro producto 🛒', {callback: '/search'})
                ],
                [
                    button('🛒Consultar carrito', {callback:'/view'}),
                    button('Vaciar Carrito' , {callback: '/empty'})
                ]
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/search':
            return keyboard([
                [
                    button('🔍 Buscar otro producto', {callback: '/search'}),
                    button('Añadir al carrito 🛒', {callback: '/add'})
                ],
                [
                    button('Vaciar Carrito' , {callback: '/empty'})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/map1':
            return keyboard([
                [
                    button('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/map2':
            return keyboard([
                [
                    button('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/map3':
            return keyboard([
                [
                    button('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case "/fact":
            return keyboard([
                [
                    button('Generar factura', {pay: true})
                ]
            ])
        case "/empty":
            return keyboard([                
            [
                // Boton Primera Fila
                button('📦 Mostrar productos', {callback: '/show'}),
                button('🔍 Buscar Productos', {callback: '/search'})
            ],
            [
                button('Volver al ménu principal', {callback: '/back'})
            ]   
            ])
        case '/transfe':
        case '/criptos':
            return keyboard([
                [
                    button('Volver a Metodos de Pago', {callback: '/pago'})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        
        case '/efectivo':
            return keyboard([
                [
                    button('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'}),
                    button('Volver a Metodos de Pago', {callback: '/pago'})
                ],
                [
                    button('Volver al ménu principal', {callback: '/back'})
                ]
            ])

    }
};

module.exports=boton;