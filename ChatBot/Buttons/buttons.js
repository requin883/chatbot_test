function boton(msg,bot){
    let keyboard = bot.inlineKeyboard;
    switch(msg){
        case '/start':
        case '/back':
            return keyboard([
                [
                    // Boton Primera Fila
                    bot.inlineButton('📦 Mostrar productos', {callback: '/show'}),
                    bot.inlineButton('Métodos de pago 💳', {callback: "/pago"})
                ],
        
                [
                    // Boton segunda Fila
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
            ]);
        case '/show':
            return keyboard([
                [
                    // Boton Primera Fila
                    bot.inlineButton('🔍 Buscar Productos', {callback: '/search'}),
                    bot.inlineButton('Agregar al carrito 🛒', {callback: "/add"})
                ],
        
                [
                    // Boton segunda Fila
                    bot.inlineButton('🛒 Consultar carrito', {callback: '/view'}),
                    bot.inlineButton('Métodos de pago 💸', {callback: '/pago'})
                ],

                [
                    bot.inlineButton('Volver al menú principal', {callback: '/back'})
                ]
            ]);
        case '/zona':
            return keyboard([
                [
                    bot.inlineButton('Ciudad Chinita', {callback : '/map1'}),
                    bot.inlineButton('Galerías Mall', {callback : '/map2'}),
                    bot.inlineButton('Metro Sol', {callback : '/map3'})
                ],
                [
                    bot.inlineButton('Volver al menú principal', {callback: '/back'})
                ]
            ]);

        case '/pago':
            return keyboard([
                [
                    // Boton Primera Fila
                    bot.inlineButton('💵 Efectivo', {callback: '/efectivo'}),
                    bot.inlineButton('Transferencias 💸', {callback: "/transfe"})
                ],
        
                [
                    // Boton segunda Fila
                    bot.inlineButton('💰 Cryptos ( BTC | ETH | USDT )', {callback: '/criptos'})
                ],

                [
                    bot.inlineButton('Volver al menú principal', {callback: '/back'})
                ]
            ]);
        case '/fact':
            return keyboard([
                [
                    bot.inlineButton('Generar factura', {pay: true})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/view':
            return keyboard([
                [
                    bot.inlineButton('🧾 Generar factura', {callback: '/fact'}),
                    bot.inlineButton('Añadir al carrito 🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/add':
            return keyboard([
                [
                    bot.inlineButton('🧾 Generar factura', {callback: '/fact'}),
                    bot.inlineButton('Añadir otro producto 🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/search':
            return keyboard([
                [
                    bot.inlineButton('🔍 Buscar otro producto', {callback: '/search'}),
                    bot.inlineButton('Añadir al carrito 🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/map1':
            return keyboard([
                [
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/map2':
            return keyboard([
                [
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case '/map3':
            return keyboard([
                [
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ])
        case "/fact":
            return keyboard([
                [
                    bot.inlineButton('Generar factura', {pay: true})
                ]
            ])
        case "/empty":
            return keyboard([                
            [
                // Boton Primera Fila
                bot.inlineButton('📦 Mostrar productos', {callback: '/show'}),
                bot.inlineButton('🔍 Buscar Productos', {callback: '/search'})
            ],
            [
                bot.inlineButton('Volver al ménu principal', {callback: '/back'})
            ]   
            ])
    }
};

module.exports=boton;