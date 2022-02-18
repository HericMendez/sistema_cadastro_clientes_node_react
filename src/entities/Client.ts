import { Telefone } from './Telefone';
import { Endereco } from './Endereco';
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("client")
export class Client {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;
    
    endereco: Endereco;
    telefone: Telefone;

    @CreateDateColumn()
    data_criacao: Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}