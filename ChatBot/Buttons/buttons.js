let replyMarkup;
function boton(msg, bot){
    switch(msg){
        case '/start':
        case '/back':
            return replyMarkup=[
                [
                    // Boton Primera Fila
                    bot.inlineButton('📦 Mostrar productos', {callback: '/show'}),
                    bot.inlineButton('Métodos de pago 💳', {callback: "/pago"})
                ],
        
                [
                    // Boton segunda Fila
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
            ];
        case '/show':
            return replyMarkup=[
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
            ];
        case '/zona':
            return replyMarkup = [
                [
                    bot.inlineButton('Ciudad Chinita', {callback : '/map1'}),
                    bot.inlineButton('Galerías Mall', {callback : '/map2'}),
                    bot.inlineButton('Metro Sol', {callback : '/map3'})
                ],
                [
                    bot.inlineButton('Volver al menú principal', {callback: '/back'})
                ]
            ];

        case '/pago':
            return replyMarkup=[
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
            ];
        case '/fact':
            return replyMarkup=[
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ]
        case '/view':
            return replyMarkup=[
                [
                    bot.inlineButton('🧾 Generar factura', {callback: '/fact'}),
                    bot.inlineButton('Añadir al carrito 🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ]
        case '/add':
            return replyMarkup=[
                [
                    bot.inlineButton('🧾 Generar factura', {callback: '/fact'}),
                    bot.inlineButton('Añadir otro producto 🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ]
        case '/search':
            return replyMarkup=[
                [
                    bot.inlineButton('🔍 Buscar otro producto', {callback: '/search'}),
                    bot.inlineButton('Añadir al carrito 🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ]
        case '/map1':
            return replyMarkup=[
                [
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ]
        case '/map2':
            return replyMarkup=[
                [
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ]
        case '/map3':
            return replyMarkup=[
                [
                    bot.inlineButton('⏰ Horario de trabajo | Zonas de delivery 🛵', {callback: '/zona'})
                ],
                [
                    bot.inlineButton('Volver al ménu principal', {callback: '/back'})
                ]
            ]
    }
};

module.exports=boton;