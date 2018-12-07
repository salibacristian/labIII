
    class Personaje {
        
    protected id: number;
    nombre: string;
    apellido: string;
    edad: number;
    foto: string;

    constructor(id: number, nombre: string, apellido: string, edad: number, foto: string) 
    { 
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.foto = foto;
    }

    public getId() {
        return this.id;
    }

    public setId(value){
        this.id = value;
    }

    }

    class Heroe extends Personaje {    
        
                alias: string;
                readonly lado: number = 1;
                editorial: string;
        
                constructor(id: number, nombre: string, apellido: string, edad: number, foto: string, alias: string, editorial: string)
                { 
                    super(id, nombre, apellido,edad,foto);
                    this.alias = alias;
                    this.editorial = editorial;
                }

              
        
                
        
            }

            class Villano extends Personaje {    
                
                        alias: string;
                        readonly lado: number = 2;
                        editorial: string;
                
                        constructor(id: number, nombre: string, apellido: string, edad: number, foto: string, alias: string, editorial: string)
                        { 
                            super(id, nombre, apellido,edad,foto);
                            this.alias = alias;
                            this.editorial = editorial;
                        }
        
                      
                
                        
                
                    }
