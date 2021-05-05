
const ejemploMuro =

function construir () {}

function aplanar () {}

function pintar () {}
const ejepmloMuro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  const tiempoDeEspera = 1000
  function construir (muro, cb) {
    setTimeout(() => {
      muro.construido = true
      cb(false, muro)
    }, 1000)
  }
  function aplanar (muro, cb) {
      setTimeout(() => {
        muro.aplanado = true
        cb(false, muro)
      }, tiempoDeEspera)
    
    return muro
  }
  function pintar (muro,cb) {
    setTimeOut(() => {
        muro.pintado = true
        cb(false, muro)
    }, tiempoDeEspera)
   return muro
  }

  construir(ejepmloMuro, (error, muroConstruido) => {
    console.log('muroConstruido: ', muroConstruido)
  })
//Primero definimos la funcion y luego la pasamos
  function alConstruir (error, muroConstruido) {
    console.log('muroConstruido:', muroConstruido)
  }
 
construir(ejepmloMuro, alConstruir)

//Definimos la funcion directamente donde la necesitamos
construir(ejepmloMuro, (error, muroConstruido) => {
    if (error) {
        console.error('No se pudo construir')
        return  // salida temprana
    }
    console.log('muro construido:', muroConstruido)

aplanar(muroConstruido, (error, muroAplanado) =>{
    if(error ) {
        console.error('No se pudo aplanar')
        return
    }
})
})


