import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";

@Entity("telefone")
export class Telefone {
    @PrimaryColumn()
    id: string;

    @Column()
    numero_telefone: string;

    @Column()
    cpf: string;

    @Column()
    client_id: string;
    
    @ManyToOne(()=>Client)
    @JoinColumn({name: "client_id"})
    client: Client;


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}