import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./Client";

@Entity("telefone")
export class Telefone {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    numero_telefone: string;

    @Column({ name: 'client_id', type: 'varchar' })
    clientId: string;
    
    @ManyToOne(type => Client, client => client.telefone)
    @JoinColumn({ name: 'client_id' })
    client: Client;


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}