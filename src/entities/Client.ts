import { Telefone } from './Telefone';
import { Endereco } from './Endereco';
import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("client")
export class Client {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @OneToMany(type => Endereco, endereco => endereco.client, {
        cascade: true
    })
    endereco: Array<Endereco>;

    @OneToMany(type => Telefone, telefone => telefone.client, {
        cascade: true
    })
    telefone: Array<Telefone>;


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}