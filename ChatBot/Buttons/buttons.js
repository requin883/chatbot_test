let replyMarkup;
function boton(msg, bot){
    switch(msg){
        case '/start':
        case '/back':
            return replyMarkup=[
                [
                    // Boton Primera Fila
                    bot.inlineButton('📋Mostrar Productos📋', {callback: '/show'}),
                    bot.inlineButton('Horario\nDelivery⏰🛵', {callback: "/zona"})
                ],
        
                [
                    // Boton segunda Fila
                    bot.inlineButton('💸Metodos de Pago💸', {callback: '/pago'})
                ],
            ];
        case '/show':
            return replyMarkup=[
                [
                    // Boton Primera Fila
                    bot.inlineButton('🔍Buscar Productos🔍', {callback: '/search'}),
                    bot.inlineButton('🛒Agregar Al carrito🛒', {callback: "/add"})
                ],
        
                [
                    // Boton segunda Fila
                    bot.inlineButton('🛒Consultar carrito🛒', {callback: '/view'}),
                    bot.inlineButton('💸Metodos de Pago💸', {callback: '/pago'})
                ],

                [
                    bot.inlineButton('🔙Volver al Menu Principal🔙', {callback: '/back'})
                ]
            ];
        case '/zona':
        case '/pago':
            return replyMarkup=[
                [
                    // Boton Primera Fila
                    bot.inlineButton('🔍Buscar Productos🔍', {callback: '/search'}),
                    bot.inlineButton('🧾Generar Factura🧾', {callback: "/fact"})
                ],
        
                [
                    // Boton segunda Fila
                    bot.inlineButton('🛒Consultar carrito🛒', {callback: '/pago'})
                ],

                [
                    bot.inlineButton('🔙Volver al Menu Principal🔙', {callback: '/back'})
                ]
            ];
        case '/fact':
            return replyMarkup=[
                [
                    bot.inlineButton('🔙Volver al menu Principal🔙', {callback: '/back'})
                ]
            ]
        case '/view':
            return replyMarkup=[
                [
                    bot.inlineButton('🧾Generar factura🧾', {callback: '/fact'}),
                    bot.inlineButton('🛒Añadir al Carrito🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('🔙Volver al menu Principal🔙', {callback: '/back'})
                ]
            ]
        case '/add':
            return replyMarkup=[
                [
                    bot.inlineButton('🧾Generar factura🧾', {callback: '/fact'}),
                    bot.inlineButton('🛒Añadir otro producto🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('🔙Volver al menu Principal🔙', {callback: '/back'})
                ]
            ]
        case '/search':
            return replyMarkup=[
                [
                    bot.inlineButton('🔍Buscar otro Producto🔍', {callback: '/search'}),
                    bot.inlineButton('🛒Añadir al carrito🛒', {callback: '/add'})
                ],
                [
                    bot.inlineButton('🔙Volver al menu Principal🔙', {callback: '/back'})
                ]
            ]
    }
};

module.exports={
    boton
};