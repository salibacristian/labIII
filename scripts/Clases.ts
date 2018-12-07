
    class Personaje {
        
    protected id: number;
    nombre: string;
    apellido: string;
    edad: number;

    constructor(id: number, nombre: string, apellido: string, edad: number) 
    { 
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
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
        
                constructor(id: number, nombre: string, apellido: string, edad: number, alias: string, editorial: string)
                { 
                    super(id, nombre, apellido,edad);
                    this.alias = alias;
                    this.editorial = editorial;
                }

              
        
                
        
            }

            class Villano extends Personaje {    
                
                        alias: string;
                        readonly lado: number = 2;
                        editorial: string;
                
                        constructor(id: number, nombre: string, apellido: string, edad: number, alias: string, editorial: string)
                        { 
                            super(id, nombre, apellido,edad);
                            this.alias = alias;
                            this.editorial = editorial;
                        }
        
                      
                
                        
                
                    }
