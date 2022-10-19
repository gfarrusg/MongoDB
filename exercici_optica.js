db.createCollection("proveidor"), {
   
    _id: " ",
    nom: " ",
    adreça: { 
            carrer: " ",
            numero: " ",
            pis: " ",
            porta: " ",
            ciutat: " ",
            cp: " ",
            pais: " "
     },
    telefon: " ",
    fax: " ",
    clients_id: {
         nom: " ",
         adreça_proveidor: " ",
         telefon: " ",
         email: " ",
         data_registre: " ",
         empleat_id: " "
     },
    ulleres_id: " "
     
 }
 
 db.createCollection("ulleres"), {
 
    _id: " ",
    proveidor_id: " ",
    marca: {
         graduacio: {
                 ull_esquerra: " ",
                 ull_dret: " "
             },
         tipus_montura:{
                 flotant: " ",
                 pasta: " ",
                 metalic: " "
             },
         color_montura: " ",
         color_vidre: " ",
     },
    preu: " ",
    client_id: " "
 }
 