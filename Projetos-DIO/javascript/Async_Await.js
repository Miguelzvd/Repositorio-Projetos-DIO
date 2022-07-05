// Assíncrono: Aquilo que não ocorre ou não se efetiva ao mesmo tempo. o java script por padrão trabalha resolvendo um requeste de cada, o que o async faz é possibilitar o ja script trabalhar com varios request.

// Promise: inicialmente seu valor é desconhecido. Ele pode, então ser resolvido ou rejeitado.

// Exemplo de uma promise: 

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => setTimeout(()=>{
        resolve(console.log('Resolvida'))
    }, 2000));

    const resolved = await myPromise
                .then((result)=> result = 'Passando pelo then')
                .then((result)=> console.log(result + ' e agora acabou'))
                .catch((err)=> console.log(err.message));

    return resolved;
}

// A função awai basicametne espera a promise terminar

resolvePromise();