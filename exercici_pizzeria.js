db.createCollection("client"), {
    _id: "",
    nom: "",
    primer_cognom: "",
    segon_cognom: "",
    adreça: "",
    localitat: "",
    provincia: "",
    telefon: "",
    comanda_id: {
        data_hora: "",
        repartir_domicili: "",
        recolli_botiga: "",
        quantitat_productes: {

            hamburgueses:{
                _id: "",
                nom: "",
                descripcio: "",
                imatge: "",
                preu: ""
            },

            begudes:{
                _id: "",
                nom: "",
                descripcio: "",
                imatge: "",
                preu: ""
            },

            pizzes:{
                _id:{
                    categories:"",
                    nom:""                
                },
                nom:"",
                descripcio: "",
                imatge: "",
                preu: ""
            },
        },
    }
}  

db.createCollection("cbotiga"), {
    comanda_id: "",
    _id: "",
    adreça: "",
    codi_postal: "",
    localitat: "",
    provincia: "",
    empleat_id:{
        nom: "",
        cognoms: "",
        nif: "",
        telefon: "",
        posicio:{
            cuiner: "",
            repartidor: {
                data_hora:""
            },
        },


    }
}